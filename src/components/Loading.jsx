import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Loading = ({ text, className }) => {
    const css = `
    .blurBg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(10px);
    }
    .loader {
        position: absolute;
        top: calc(50% - 32px);
        left: calc(50% - 32px);
        width: 64px;
        height: 64px;
        border-radius: 50%;
        perspective: 800px;
        filter: drop-shadow(0 0 2px rgba(255, 255, 255, 1)) drop-shadow(0 0 6px rgba(0, 0, 0, 0.4));
      }
      
      .inner {
        position: absolute;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border-radius: 50%;  
      }

      .inner.two:before {
        content: '';
        position: absolute;
        box-sizing: border-box;
        width: 6px;
        height: 10px;
        border-radius: 50%;
        background: #FFF;
      }
      
      .inner.one {
        left: 0%;
        top: 0%;
        animation: rotate-one 1s linear infinite;
        border-bottom: 3px solid #EFEFFA;
      }
      .inner.one:before {
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
        animation: rotateBefore-one 1s linear infinite;
      }
      
      .inner.two {
        right: 0%;
        top: 0%;
        animation: rotate-two 1s linear infinite;
        border-right: 3px solid #EFEFFA;
      }
      .inner.two:before {
        top: 50%;
        left: -5px;
        transform: translateY(-50%) ;
        animation: rotateBefore-two 1s linear infinite;
      }
      
      .inner.three {
        right: 0%;
        bottom: 0%;
        animation: rotate-three 1s linear infinite;
        border-top: 3px solid #EFEFFA;
      }
      .inner.three:before {
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        animation: rotateBefore-three 1s linear infinite;
      }
      

      @keyframes rotate-one {
        0% {
          transform: rotateX(45deg) rotateY(-45deg) rotateZ(0deg);
        }
        100% {
          transform: rotateX(45deg) rotateY(-45deg) rotateZ(360deg);
        }
      }
      @keyframes rotate-two {
        0% {
          transform: rotateX(45deg) rotateY(0deg) rotateZ(0deg);
        }
        100% {
          transform: rotateX(45deg) rotateY(0deg) rotateZ(360deg);
        }
      }
      @keyframes rotate-three {
        0% {
          transform: rotateX(45deg) rotateY(45deg) rotateZ(0deg);
        }
        100% {
          transform: rotateX(45deg) rotateY(45deg) rotateZ(360deg);
        }
      }


      @keyframes rotateBefore-one {
        0% {
          transform: translateX(-50%) rotateZ(0deg);
        }
        50% {
          transform: translateX(-50%) rotateZ(-180deg);
        }
        100% {
          transform: translateX(-50%) rotateZ(-360deg);
        }
      }
      @keyframes rotateBefore-two {
        0% {
          transform: translateY(-50%) rotateZ(0deg);
        }
        50% {
          transform: translateY(-50%) rotateZ(-180deg);
        }
        100% {
          transform: translateY(-50%) rotateZ(-360deg);
        }
      }
      @keyframes rotateBefore-three {
        0% {
          transform: translateX(-50%) rotateZ(0deg);
        }
        50% {
          transform: translateX(-50%) rotateZ(-180deg);
        }
        100% {
          transform: translateX(-50%) rotateZ(-360deg);
        }
      }
    `;

    return (
        <HelmetProvider>
            <Helmet>
                <style>{css}</style>
            </Helmet>
            <div className="blurBg"></div>
            <div className="loader">
                <div className="inner one"></div>
                <div className="inner two"></div>
                <div className="inner three"></div>
                {/* <div className="text">loading...</div> */}
            </div>
        </HelmetProvider>
    );
};

export default Loading;
