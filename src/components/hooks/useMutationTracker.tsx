import { useEffect, useState } from "react";

type MutationTrackerT = {
  target: HTMLElement | null;
  selector?: [string, "one" | "all"] | null;
  elementsOrGetter?: Element | Element[] | (() => Element[]) | null;
  options?: MutationObserverInit;
};

export default function useMutationTracker({
  target,
  selector = null,
  elementsOrGetter,
  options = { childList: true, subtree: true },
}: MutationTrackerT): Element[] {
  const [elements, setElements] = useState<Element[]>([]);

  useEffect(() => {
    if (!target) return;

    const updateElements = () => {
      if (typeof elementsOrGetter === "function") {
        setElements(elementsOrGetter());
      } else if (Array.isArray(elementsOrGetter)) {
        setElements(elementsOrGetter);
      } else if (elementsOrGetter) {
        setElements([elementsOrGetter]);
      } else if (selector) {
        const [query, mode] = selector;
        const foundElements =
          mode === "all"
            ? Array.from(target.querySelectorAll(query)) // Несколько элементов
            : target.querySelector(query) // Один элемент
            ? [target.querySelector(query)!]
            : [];

        setElements(foundElements);
      } else {
        setElements([]); // Если ничего нет, сбрасываем в пустой массив
      }
    };

    updateElements();

    const observer = new MutationObserver(() => {
      updateElements();
    });

    observer.observe(target, options);

    return () => observer.disconnect();
  }, [
    target,
    selector?.[0],
    selector?.[1],
    elementsOrGetter,
    JSON.stringify(options),
  ]);

  return elements;
}
