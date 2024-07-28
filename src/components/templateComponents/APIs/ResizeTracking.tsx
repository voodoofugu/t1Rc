import React from "react";

type ResizeTrackingProps = {
  children: (width: number, height: number) => React.ReactNode;
  onResize: (width: number, height: number) => void;
};

const ResizeTracking: React.FC<ResizeTrackingProps> = ({
  children,
  onResize,
}) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        const height = entry.contentRect.height;

        setDimensions({ width, height });
        onResize(width, height);
      }
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.unobserve(element);
      resizeObserver.disconnect();
    };
  }, [onResize]);

  return (
    <div
      ref={containerRef}
      style={{ width: "max-content", height: "max-content" }}
    >
      {children(dimensions.width, dimensions.height)}
    </div>
  );
};

export default ResizeTracking;
