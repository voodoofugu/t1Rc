import React, { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";

const fileContexts = [require.context("/src/pages", true, /\.html$/)];

const ProjectBox = () => {
    // Состояние для хранения информации о проектных блоках
    const [projectBoxes, setProjectBoxes] = useState([]);
    const projectBoxesRef = useRef(projectBoxes);

    // Функция для захвата скриншота элемента
    const captureScreenshot = async (element) => {
        try {
            const screenshot = await html2canvas(element, {
                useCORS: true,
                logging: false,
                allowTaint: true,
                scale: 0.5,
            });
            return screenshot.toDataURL("image/png");
        } catch (error) {
            console.error("Failed to capture screenshot", error);
            return null;
        }
    };

    // Функция для обновления информации о проектном блоке
    const iframeExists = (id) => {
        const iframe = document.getElementById(id);
        return iframe !== null;
    };

    const updateProjectBox = async (projectBox) => {
        const iframe = document.getElementById(`${projectBox.title}`);

        if (iframe && iframe.contentDocument && iframe.contentDocument.body) {
            projectBox.screenshot = null;

            iframe.style.display = "block";
            await new Promise((resolve) => setTimeout(resolve, 1000));

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
    };

    // Обработчик события загрузки iframe
    const handleIframeLoad = (event, projectBox) => {
        updateProjectBox(projectBox).then((updatedProjectBox) => {
            setProjectBoxes((prevProjectBoxes) =>
                prevProjectBoxes.map((box) =>
                    box.title === updatedProjectBox.title
                        ? updatedProjectBox
                        : box
                )
            );
        });
    };

    // Эффект для инициализации данных проектных блоков при загрузке компонента
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

    // Эффект для установки обработчиков события загрузки iframe-ов
    useEffect(() => {
        projectBoxesRef.current = projectBoxes;

        projectBoxesRef.current.forEach((projectBox) => {
            const iframe = document.getElementById(projectBox.title);
            if (iframe) {
                iframe.onload = (e) => handleIframeLoad(e, projectBox);
            }
        });
    }, [projectBoxes]);

    // Эффект для обработки модуля горячей перезагрузки
    useEffect(() => {
        if (module.hot) {
            module.hot.addStatusHandler((status) => {
                if (status === "apply") {
                    projectBoxesRef.current.forEach((projectBox) => {
                        updateProjectBox(projectBox).then(
                            (updatedProjectBox) => {
                                setProjectBoxes((prevProjectBoxes) =>
                                    prevProjectBoxes.map((box) =>
                                        box.title === updatedProjectBox.title
                                            ? updatedProjectBox
                                            : box
                                    )
                                );
                            }
                        );
                    });
                }
            });
        }
    }, []);

    return (
        <div className="templatePage template-container">
            {projectBoxes.map((projectBox, index) => (
                <div
                    key={projectBox.file}
                    id={`project-box-${index + 1}`}
                    className="project-box">
                    <div className="fileInfoIc">
                        <div
                            className="fileInfo"
                            dangerouslySetInnerHTML={{
                                __html: projectBox.fileInfo,
                            }}></div>
                    </div>
                    <a href={projectBox.file}>{projectBox.title}</a>
                    <iframe
                        id={`${projectBox.title}`}
                        src={projectBox.file}
                        width="1200"
                        height="640"
                        onLoad={(e) =>
                            handleIframeLoad(e, projectBox)
                        }></iframe>
                    <div className="screenshot-container">
                        {projectBox.screenshot && (
                            <img src={projectBox.screenshot} alt="Screenshot" />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectBox;
