import React from "react";

interface IntersectionTrackingProps {
  children: React.ReactNode;
  root?: Element | null;
  threshold?: number;
  rootMargin?: number[] | number;
  wrapSyle?: React.CSSProperties;
}

const IntersectionTracking: React.FC<IntersectionTrackingProps> = ({
  children,
  root,
  threshold,
  rootMargin,
  wrapSyle,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const observableElement = React.useRef<HTMLDivElement | null>(null);

  const marginString = rootMargin
    ? typeof rootMargin === "number"
      ? `${rootMargin}px ${rootMargin}px ${rootMargin}px ${rootMargin}px`
      : rootMargin.length === 2
      ? `${rootMargin[0]}px ${rootMargin[1]}px ${rootMargin[0]}px ${rootMargin[1]}px`
      : `${rootMargin[0]}px ${rootMargin[1]}px ${rootMargin[2]}px ${rootMargin[3]}px`
    : "";

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      setIsVisible(entry.isIntersecting);
    });
  };

  const options = {
    root,
    threshold,
    rootMargin: marginString,
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    if (observableElement.current) {
      observer.observe(observableElement.current);
    }

    return () => {
      if (observableElement.current) {
        observer.unobserve(observableElement.current);
      }
    };
  }, [root, threshold, rootMargin]);

  return (
    <div ref={observableElement} style={wrapSyle}>
      {isVisible && children}
    </div>
  );
};
export default IntersectionTracking;
