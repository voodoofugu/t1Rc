import React from "react";

interface LazyRenderProps {
  refObject?: React.RefObject<HTMLDivElement>;
  width?: number;
  height?: number;
  threshold?: number;
  rootMargin?: string;
  children: React.ReactNode;
}

const LazyRender: React.FC<LazyRenderProps> = React.memo(
  ({
    refObject = { current: null },
    children,
    threshold = 0,
    rootMargin = "0px",
    width,
    height,
  }) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const wrapperRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsVisible(entry.isIntersecting);
          });
        },
        {
          root: refObject.current,
          threshold,
          rootMargin,
        }
      );

      if (wrapperRef.current) {
        observer.observe(wrapperRef.current);
      }

      return () => {
        if (wrapperRef.current) {
          observer.unobserve(wrapperRef.current);
        }
      };
    }, [threshold, rootMargin]);

    return (
      <div
        ref={wrapperRef}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        {isVisible && children}
      </div>
    );
  }
);

export default LazyRender;
