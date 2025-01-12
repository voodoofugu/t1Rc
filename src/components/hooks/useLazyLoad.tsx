import { lazy, Suspense, ReactNode, ReactElement } from "react";

/**
 * Hook для ленивой загрузки компонента.
 * @param {string[]} componentInfo - Массив, где первый элемент — имя компонента, второй — дополнительные пропсы.
 * @param {string} componentPath - Путь к папке, где хранится компонент.
 * @param {ReactNode} [fallback] - Элемент, который отображается, пока компонент загружается.
 * @returns {ReactElement} - Загруженный компонент, обернутый в Suspense.
 */

export default function useLazyLoad(
  componentInfo: string[],
  componentPath: string,
  fallback?: ReactNode
): ReactElement<any, any> {
  if (componentInfo.length < 1) {
    throw new Error("Component name must be provided.");
  }

  const component = componentInfo[0];
  const additionalProps =
    componentInfo.length > 1 ? JSON.parse(componentInfo[1]) : {};

  const LazyComponent = lazy(() => import(`${componentPath}/${component}.jsx`));

  return (
    <Suspense fallback={fallback ?? null}>
      {LazyComponent ? <LazyComponent {...additionalProps} /> : null}
    </Suspense>
  );
}
