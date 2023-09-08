import React, { useEffect, useState, Suspense } from "react";
import AaPagesComponentMap from "../pagesComponents/AaPagesComponentMap";
import AaComponMap from "../components/AaComponMap.jsx";

const ProjectBoxTwo = () => {
    const [pageList, setPageList] = useState([]);

    useEffect(() => {
        const pages = Object.keys(AaPagesComponentMap);
        setPageList(pages);
    }, []);

    return (
        <>
            {pageList.map((pageName, index) => {
                // Показывать только первые восемь страниц
                if (index < 8) {
                    const PageComponent =
                        AaPagesComponentMap[pageName] ||
                        AaPagesComponentMap.Page404Component;

                    return (
                        <div className="project-box" key={pageName}>
                            <a href={pageName}>{pageName}</a>
                            <div
                                id={`root-${pageName}`}
                                className="projectComponent noScripts">
                                <Suspense fallback={<AaComponMap.Loading />}>
                                    <PageComponent />
                                </Suspense>
                            </div>
                        </div>
                    );
                }
                return null; // Скрываем остальные страницы
            })}
        </>
    );
};

export default ProjectBoxTwo;

// import React, { useEffect, useState, Suspense } from "react";
// import AaPagesComponentMap from "../pagesComponents/AaPagesComponentMap";
// import AaComponMap from "../components/AaComponMap.jsx";

// const ProjectBoxTwo = () => {
//     const [pageList, setPageList] = useState([]);

//     useEffect(() => {
//         const pages = Object.keys(AaPagesComponentMap);
//         setPageList(pages);
//     }, []);

//     return (
//         <>
//             {pageList.map((pageName) => {
//                 const PageComponent =
//                     AaPagesComponentMap[pageName] ||
//                     AaPagesComponentMap.Page404Component;

//                 return (
//                     <div className="project-box" key={pageName}>
//                         <a href={pageName}>{pageName}</a>
//                         <div id={`root-${pageName}`} className="noScripts">
//                             <Suspense fallback={<AaComponMap.Loading />}>
//                                 <PageComponent />
//                             </Suspense>
//                         </div>
//                     </div>
//                 );
//             })}
//         </>
//     );
// };

// export default ProjectBoxTwo;
