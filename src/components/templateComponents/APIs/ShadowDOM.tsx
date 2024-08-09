import React from "react";
import { createRoot, Root } from "react-dom/client";

type ShadowDOMProps = {
  children: React.ReactNode;
  mode?: "open" | "closed";
  id: string;
  style?: string;
};

const ShadowDOM: React.FC<ShadowDOMProps> = React.memo(({ children, mode = "closed", id, style }) => {
  const shadowHostRef = React.useRef<HTMLDivElement>(null);
  const shadowRootRef = React.useRef<ShadowRoot | null>(null);
  const containerRef = React.useRef<HTMLElement | null>(null);
  const rootRef = React.useRef<Root | null>(null);
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (!shadowHostRef.current) return;
    const shadowHost = shadowHostRef.current;

    if (!shadowRootRef.current) {
      shadowRootRef.current = shadowHost.attachShadow({ mode });
    }

    const shadowRoot = shadowRootRef.current;
    shadowRoot.innerHTML = `${style || ""}`;

    if (!containerRef.current) {
      containerRef.current = document.createElement('div');
      containerRef.current.id = id;
      shadowRoot.appendChild(containerRef.current);
    }

    if (!rootRef.current) {
      rootRef.current = createRoot(containerRef.current);
    }

    isMounted.current = true;
    rootRef.current.render(<>{children}</>);

    return () => {
        if (isMounted.current) {
          if (rootRef.current) {
            rootRef.current.unmount();
            rootRef.current = null;
          }

          if (shadowRoot && containerRef.current && shadowRoot.contains(containerRef.current)) {
            shadowRoot.removeChild(containerRef.current);
          }

          containerRef.current = null;
          isMounted.current = false;
        }
    };
  }, [children, mode, id]);

  return <div ref={shadowHostRef}></div>;
});

export default ShadowDOM;
