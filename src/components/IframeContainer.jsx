import React from "react";

const IframeContainer = ({ components }) => {
  return (
    <div className="iframe-container">
      {components.map((component, index) => (
        <iframe
          key={index}
          src={component.component}
          title={component.componentName}
          width="1200"
          height="640"
          scrolling="no"
        ></iframe>
      ))}
    </div>
  );
};

export default IframeContainer;
