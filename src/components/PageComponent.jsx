import React, { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading.jsx";

export default function PageComponent() {
  const [DynamicComponent, setDynamicComponent] = useState(null);
  const { pageName } = useParams();

  useEffect(() => {
    async function importPageComponent() {
      if (!pageName) {
        console.error("pageName is not defined.");
        return;
      }
      const pageNameToLoad = `${pageName}.jsx`;
      try {
        const module = await import(`../pagesComponents/${pageNameToLoad}`);
        if (module.default) {
          setDynamicComponent(module.default);
        } else {
          console.error("Dynamic component is not defined in", pageNameToLoad);
        }
      } catch (error) {
        console.error("Error importing page component:", error);
      }
    }
    importPageComponent();
  }, [pageName]);

  if (DynamicComponent) {
    return (
      <div className="pageBox" key={pageName}>
        <div id={`${pageName}`} className="projectComponent">
          <DynamicComponent pageName={pageName} />
        </div>
      </div>
    );
  }

  return null;
}
