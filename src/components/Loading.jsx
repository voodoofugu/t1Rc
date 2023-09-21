import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const LoadCss = css`
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
        filter: drop-shadow(0 0 2px rgba(255, 255, 255, 1))
            drop-shadow(0 0 6px rgba(0, 0, 0, 0.4));
        &:before,
        &:after {
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 16px;
            height: 16px;
            border-radius: 100%;
            background: #fff;
        }
        &:before {
            animation: ripple 2s linear infinite;
        }
        &:after {
            opacity: 0;
            animation: ripple 2s linear infinite 1s;
        }
        .inner {
            position: absolute;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            &:before {
                content: "";
                position: absolute;
                box-sizing: border-box;
                width: 4px;
                height: 6px;
                border-radius: 50%;
                background: #fff;
            }
            &.one {
                left: 0%;
                top: 0%;
                animation: rotate-one 1s linear infinite;
                border-bottom: 3px solid #efeffa;
                &:before {
                    top: 32px;
                    left: 0;
                    animation: rotateBefore-one 1s linear infinite;
                }
            }

            &.two {
                right: 0%;
                top: 0%;
                animation: rotate-two 1s linear infinite;
                border-right: 3px solid #efeffa;
                &:before {
                    top: 64px;
                    right: 32px;
                    animation: rotateBefore-two 1s linear infinite;
                }
            }

            &.three {
                right: 0%;
                bottom: 0%;
                animation: rotate-three 1s linear infinite;
                border-top: 3px solid #efeffa;
                &:before {
                    bottom: 32px;
                    left: 64px;
                    animation: rotateBefore-three 1s linear infinite;
                }
            }
        }
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

    @keyframes ripple {
        0% {
            transform: translate(-50%, -50%) scale(0.2);
            opacity: 0.8;
        }
        50% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
        }
        100% {
            transform: translate(-50%, -50%) scale(0.2);
            opacity: 0.8;
        }
    }
`;

// const LoadDiv = styled.div`
//     ${LoadCss}
// `;

const Loading = () => {
    return (
        // <LoadDiv>
        <>
            <div className="blurBg"></div>
            <div className="loader">
                <div className="inner one"></div>
                <div className="inner two"></div>
                <div className="inner three"></div>
            </div>
        </>
        // </LoadDiv>
    );
};

export default Loading;
