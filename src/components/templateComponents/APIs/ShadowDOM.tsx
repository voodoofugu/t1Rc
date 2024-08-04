import React from "react";

type ShadowDOMProps = {
  children: React.ReactNode;
  mode?: "open" | "closed";
};

const ShadowDOM: React.FC<ShadowDOMProps> = ({ children, mode = "closed" }) => {
  const shadowHostRef = React.useRef(null);

  React.useEffect(() => {
    const shadowHost = shadowHostRef.current;
    if (!shadowHost) return;

    const shadowRoot = shadowHost.attachShadow({ mode: mode });

    shadowRoot.innerHTML = `<div id="shadowContent"></div>`;
    const shadowContent = shadowRoot.getElementById("shadowContent");

    shadowContent.appendChild(children);

    return () => {
      shadowRoot.innerHTML = "";
    };
  }, [children]);

  return <div ref={shadowHostRef}></div>;
};

export default ShadowDOM;
