import React from "react";

interface IntersectionTrackingProps {
  width?: number;
  height?: number;
  threshold?: number; // 0
  root?: Element | null; // window
  rootMargin?: string; // 0px 0px 0px 0px
  // lazyLoad?: boolean;
  children: React.ReactNode;
}

const IntersectionTracking: React.FC<IntersectionTrackingProps> = ({
  root,
  children,
  threshold,
  rootMargin,
  width,
  height,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const observableElement = React.useRef<HTMLDivElement | null>(null);

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      setIsVisible(entry.isIntersecting);
    });
  };

  const options = {
    root: root,
    threshold,
    rootMargin,
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
    <div
      ref={observableElement}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {isVisible && children}
    </div>
  );
};
export default IntersectionTracking;
