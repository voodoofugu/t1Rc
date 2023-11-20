export async function importPageComponents() {
  const pagesComponentsPath = "../../pagesComponents/";
  try {
    const context = require.context(pagesComponentsPath, false, /\.jsx$/);
    const componentsData = context
      .keys()
      .filter((key) => !["./Template.jsx"].includes(key))
      .map((key) => {
        const pageName = key.replace("./", "").replace(".jsx", "");
        const PageComponent = lazy(() =>
          import(`${pagesComponentsPath}${pageName}.jsx`)
        );
        return { pageName, PageComponent };
      });
    return componentsData;
  } catch (error) {
    console.error("Error importing page components:", error);
    return [];
  }
}
