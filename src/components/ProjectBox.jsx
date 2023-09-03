import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  Suspense,
} from "react";
import html2canvas from "html2canvas";
import LazyLoad from "react-lazy-load";
import _ from "lodash"; // Импортируем lodash для мемоизации функций
import AaComponMap from "../components/AaComponMap.jsx";

const fileContexts = [require.context("/src/pages", true, /\.html$/)];
const canvasInstances = [];
const poolSize = 4;

for (let i = 0; i < poolSize; i++) {
  canvasInstances.push(html2canvas);
}

const ProjectBox = () => {
  const [projectBoxes, setProjectBoxes] = useState([]);
  const projectBoxesRef = useRef(projectBoxes);

  // Добавляем состояние для отслеживания полной загрузки iframe для каждого проектного блока
  const [iframeLoadedMap, setIframeLoadedMap] = useState({});
  // Мемоизируем функцию для улучшения производительности
  const handleIframeLoad = useCallback((event, projectBox) => {
    // Обновляем состояние для отметки, что iframe загружен
    setIframeLoadedMap((prevIframeLoadedMap) => ({
      ...prevIframeLoadedMap,
      [projectBox.title]: true,
    }));

    updateProjectBox(projectBox).then((updatedProjectBox) => {
      setProjectBoxes((prevProjectBoxes) =>
        prevProjectBoxes.map((box) =>
          box.title === updatedProjectBox.title ? updatedProjectBox : box
        )
      );
    });
  }, []);

  const getCanvasInstance = useCallback(() => {
    return canvasInstances.pop() || html2canvas;
  }, []);

  const releaseCanvasInstance = useCallback((instance) => {
    canvasInstances.push(instance);
  }, []);

  const captureScreenshot = useCallback(
    async (element) => {
      const canvasInstance = getCanvasInstance();

      try {
        if (element && element.offsetWidth > 0 && element.offsetHeight > 0) {
          const screenshot = await canvasInstance(element, {
            useCORS: true,
            logging: false,
            allowTaint: true,
            scale: 0.5,
          });

          releaseCanvasInstance(canvasInstance);

          return screenshot.toDataURL("image/png");
        } else {
          console.warn("Element has no content or size.");
          releaseCanvasInstance(canvasInstance);
          return null;
        }
      } catch (error) {
        console.error("Failed to capture screenshot", error);
        releaseCanvasInstance(canvasInstance);
        return null;
      }
    },
    [getCanvasInstance, releaseCanvasInstance]
  );

  const iframeExists = useCallback((id) => {
    const iframe = document.getElementById(id);
    return iframe !== null;
  }, []);

  const updateProjectBox = useCallback(
    async (projectBox) => {
      const iframe = document.getElementById(`${projectBox.title}`);

      if (iframe && iframe.contentDocument && iframe.contentDocument.body) {
        projectBox.screenshot = null;

        iframe.style.display = "block";
        await new Promise((resolve) => setTimeout(resolve, 100));

        if (iframeExists(projectBox.title)) {
          const screenshot = await captureScreenshot(
            iframe.contentDocument.body
          );
          iframe.style.display = "none";

          return {
            ...projectBox,
            screenshot,
          };
        } else {
          iframe.style.display = "none";
          return projectBox;
        }
      }

      return projectBox;
    },
    [iframeExists, captureScreenshot]
  );

  const batchSize = 5;
  const batchedProjectBoxes = _.chunk(projectBoxes, batchSize); // Используем lodash для группировки проектных блоков

  // const handleBatchUpdate = async (batch) => {
  //     const updatedBatch = await Promise.all(
  //         batch.map(async (projectBox) => await updateProjectBox(projectBox))
  //     );
  //     setProjectBoxes((prevProjectBoxes) =>
  //         prevProjectBoxes.map(
  //             (box) =>
  //                 updatedBatch.find(
  //                     (updatedBox) => updatedBox.title === box.title
  //                 ) || box
  //         )
  //     );
  // };

  useEffect(() => {
    const generatePages = async () => {
      const filePaths = fileContexts.reduce((acc, fileContext) => {
        const paths = fileContext.keys();
        return [...acc, ...paths];
      }, []);

      const updatedProjectBoxes = await Promise.all(
        filePaths.map(async (filePath) => {
          const file = filePath.substring(2);
          const fileName = file.split("/").pop();
          const title = fileName.replace(".html", "");

          if (title === "template") {
            return null;
          }

          return {
            file,
            title,
            fileInfo: `Path: src/pages/${fileName}`,
            screenshot: null,
          };
        })
      );

      setProjectBoxes(updatedProjectBoxes.filter(Boolean));
    };

    generatePages();
  }, []);

  useEffect(() => {
    projectBoxesRef.current = projectBoxes;

    projectBoxesRef.current.forEach((projectBox) => {
      const iframe = document.getElementById(projectBox.title);
      if (iframe) {
        iframe.onload = (e) => handleIframeLoad(e, projectBox);
      }
    });
  }, [projectBoxes, handleIframeLoad]);

  // useEffect(() => {
  //     if (module.hot) {
  //         module.hot.addStatusHandler((status) => {
  //             if (status === "apply") {
  //                 projectBoxesRef.current.forEach((projectBox) => {
  //                     updateProjectBox(projectBox).then(
  //                         (updatedProjectBox) => {
  //                             setProjectBoxes((prevProjectBoxes) =>
  //                                 prevProjectBoxes.map((box) =>
  //                                     box.title === updatedProjectBox.title
  //                                         ? updatedProjectBox
  //                                         : box
  //                                 )
  //                             );
  //                         }
  //                     );
  //                 });
  //             }
  //         });
  //     }
  // }, []);

  return (
    <>
      {batchedProjectBoxes.map((batch, batchIndex) => (
        <React.Fragment key={batchIndex}>
          {batch.map((projectBox, index) => (
            <div
              key={projectBox.file}
              id={`project-box-${index + 1}`}
              className="project-box"
            >
              <div className="fileInfoIc">
                <div
                  className="fileInfo"
                  dangerouslySetInnerHTML={{
                    __html: projectBox.fileInfo,
                  }}
                ></div>
              </div>
              <a href={projectBox.file}>{projectBox.title}</a>

              {/* Использование LazyLoad и Iframe */}
              <Suspense fallback={"Iframe Loading..."}>
                <LazyLoad height={200} offset={100}>
                  <>
                    <iframe
                      id={`${projectBox.title}`}
                      src={projectBox.file}
                      width="1200"
                      height="640"
                      scrolling="no"
                      onLoad={(e) => {
                        setTimeout(() => {
                          handleIframeLoad(e, projectBox);
                        }, 10000);
                      }}
                    ></iframe>
                    <div className="screenshot-container">
                      {projectBox.screenshot ? (
                        <img src={projectBox.screenshot} alt="Screenshot" />
                      ) : (
                        <AaComponMap.Loading />
                      )}
                    </div>
                  </>
                </LazyLoad>
              </Suspense>
            </div>
          ))}
        </React.Fragment>
      ))}
    </>
  );
};

export default ProjectBox;
