import React, { useEffect, useState, Suspense, lazy } from "react";
import LazyLoad from "react-lazy-load";
import Loading from "../components/Loading.jsx";

const ProjectBoxTwo = () => {
    const [pageList, setPageList] = useState([]);

    useEffect(() => {
        const importPageComponents = async () => {
            try {
                const context = require.context(
                    "../pagesComponents/",
                    false,
                    /\.jsx$/
                );
                const components = context
                    .keys()
                    .filter((key) => !["./TemplateComponent.jsx"].includes(key))
                    .map((key) => key.replace("./", "").replace(".jsx", ""));
                setPageList(components);
            } catch (error) {
                console.error("Error importing page components:", error);
            }
        };

        importPageComponents();
    }, []);

    return (
        <>
            {pageList.map((pageName) => {
                const PageComponent = lazy(() =>
                    import(
                        /* webpackPrefetch: true */ `../pagesComponents/${pageName}.jsx`
                    )
                );

                return (
                    <div className="project-box" key={pageName}>
                        <LazyLoad
                            height={"inherit"}
                            width={"inherit"}
                            offset={100}>
                            <Suspense key={pageName} fallback={<Loading />}>
                                <a href={pageName}>{pageName}</a>
                                <div
                                    id={`root-${pageName}`}
                                    className="projectComponent noScripts">
                                    <PageComponent />
                                </div>
                            </Suspense>
                        </LazyLoad>
                    </div>
                );
            })}
        </>
    );
};

export default ProjectBoxTwo;
