import React from "react";

function DistortionFilter() {
  //   React.useEffect(() => {
  //     document
  //       .getElementById(elId)
  //       ?.setAttribute("style", `filter: url(#distortion${scale})`);

  //     return () => {
  //       document.getElementById(elId)?.removeAttribute("style");
  //     };
  //   }, []);

  return (
    <>
      {/* filter: url(#distortion); */}
      <filter id="distortion">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.001 0.001"
          numOctaves="1"
          result="turbulence"
        >
          <animate
            attributeName="baseFrequency"
            dur="10s"
            values="0.01 0.01;0.02 0.02;0.01 0.01"
            repeatCount="indefinite"
          />
        </feTurbulence>
        <feDisplacementMap
          in2="turbulence"
          in="SourceGraphic"
          scale={20}
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>

      {/* filter: url(#dissolve); */}
      <filter id="dissolve">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="1"
          result="noise"
        >
          {/* <animate
            attributeName="baseFrequency"
            dur="010s"
            values="0;1;0"
            repeatCount="indefinite"
          /> */}
        </feTurbulence>

        <feComponentTransfer in="noise" result="mask">
          <feFuncA type="table" tableValues="0 0 0 0 1 1 1 1" />
        </feComponentTransfer>

        <feComposite in="SourceGraphic" in2="mask" operator="in" />
      </filter>
    </>
  );
}

export default DistortionFilter;
