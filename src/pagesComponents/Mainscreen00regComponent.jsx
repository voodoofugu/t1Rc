import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AaComponMap from "../components/AaComponMap.jsx";

const MainScreen00RegComponent = () => {
    const css = `
    @import url(https://fonts.googleapis.com/css?family=Roboto&subset=latin,latin-ext,cyrillic);
    body,
    html {
        width: 100%;
        height: 100%;
        margin: 0;
    }
    body {
        background-color: #9f8978;
    }
    div.main {
        width: 550px;
        height: 350px;
        text-align: center;
        margin: auto;
        font-family: "Roboto", sans-serif;
        font-size: 15px;
        color: #555;
        position: relative;
        top: calc(50% - 175px);
        font-family: "Roboto", sans-serif;
        -webkit-border-radius: 15px;
        -moz-border-radius: 15px;
        -ms-border-radius: 15px;
        -o-border-radius: 15px;
        border-radius: 15px;
        background: url(img/orange-circle-bg.png),
            url(img/orange-circle-bg.png), url(img/orange-circle-bg.png),
            url(img/orange-circle-bg.png), url(img/tabs-menu-bg.png),
            linear-gradient(
                320deg,
                rgba(255, 255, 255, 0.05) 0%,
                rgba(255, 255, 255, 0) 25%,
                rgba(255, 255, 255, 0.05) 26%,
                rgba(255, 255, 255, 0.05) 47%,
                rgba(255, 255, 255, 0) 48%,
                rgba(255, 255, 255, 0) 60%,
                rgba(255, 255, 255, 0.05) 61%,
                rgba(255, 255, 255, 0.05) 70%,
                rgba(255, 255, 255, 0) 71%,
                rgba(255, 255, 255, 0.05) 100%
            ),
            linear-gradient(#866f68, #6f5c56);
        background-position: -14px -14px, 537px -14px, -14px 336px,
            537px 336px, 0px 280px, center, center;
        background-repeat: no-repeat;
        background-size: 28px, 28px, 28px, 28px, 100% 20%, 100%, 100%;
        box-shadow: 0 0 0 3px #dd9542, 0 2px 6px 4px rgba(0, 0, 0, 0.3),
            inset 0 0 4px 1px rgba(0, 0, 0, 0.2),
            0 0 0 4px rgba(0, 0, 0, 0.2);
        animation: appearance 0.2s
            cubic-bezier(0.455, 0.03, 0.515, 0.955) both 0.28s;
    }
    div.main:before,
    div.main:after {
        content: "";
        width: 90%;
        height: 5px;
        background: radial-gradient(
            #ffa 0%,
            #ffa 10%,
            rgba(255, 255, 170, 0) 70%
        );
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    div.main:before {
        top: -4px;
    }
    div.main:after {
        bottom: -4px;
    }
    /* div.pers {
display: inline-block;
width: 230px;
position: absolute;
left: -22px;
top: 41px;
background: url(img/tab-menu-icn-abil.png);
background-position: 188px 58px;
background-size: 40px 40px;
background-repeat: no-repeat;
}
.pers img.img {
width: 100%;
position: relative;
} */
    div.info {
        display: inline-block;
        width: 320px;
        height: fit-content;
        position: absolute;
        right: 25px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 22px;
        font-weight: bold;
        color: #ffa;
        line-height: 30px;
        text-shadow: 0 2px 1px rgba(0, 0, 0, 0.6),
            0 0 10px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 0, 0, 0.6);
    }
    form.login-form {
        margin-top: 10px;
    }
    form.login-form input {
        height: 16px;
        position: relative;
        top: -3px;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
    }
    .info .cong {
        font-size: 30px;
        line-height: 40px;
    }
    .info .btn-ok {
        display: inline-block;
        min-width: 150px;
        height: 42px;
        -webkit-border-radius: 9px;
        -moz-border-radius: 9px;
        -ms-border-radius: 9px;
        -o-border-radius: 9px;
        border-radius: 9px;
        position: relative;
        line-height: 38px;
        border: none;
        box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
            inset 0 -3px 0px #c87725, 0 0 7px rgba(0, 0, 0, 0.4),
            inset 0 0 3px rgba(0, 0, 0, 0.2),
            0 0 1px 1px rgba(0, 0, 0, 0.2);
        background: linear-gradient(
            45deg,
            #e8c34e,
            #f1da7c,
            #cfa831,
            #fbf1d8
        );
        cursor: pointer;
        text-align: center;
        text-transform: uppercase;
        font-size: 20px;
        font-weight: bold;
        color: rgb(94, 57, 25);
        text-shadow: 0 1px 2px #fff;
        margin-top: 20px;
    }
    .info .btn-ok:hover {
        filter: brightness(1.1);
        box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
            inset 0 -3px 0px #c87725, 0 0 7px #c87725,
            inset 0 0 3px rgba(0, 0, 0, 0.2),
            0 0 1px 1px rgba(0, 0, 0, 0.5);
    }
    .info .btn-ok:active {
        line-height: 44px;
        box-shadow: inset 0 -18px 5px rgba(200, 119, 37, 0.59),
            inset 0 -1px 0px #c87725, 0 0 7px #c87725,
            inset 0 0 3px rgba(0, 0, 0, 0.2),
            0 0 1px 1px rgba(0, 0, 0, 0.5);
        filter: brightness(1.2);
    }
    .info .btn-ok:before,
    .info .btn-ok:after {
        content: "";
        position: absolute;
        top: 0px;
        width: 54px;
        height: 46px;
        background-image: url(img/darkworld-angel-pop-btn-bg.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        pointer-events: none;
        filter: brightness(0.1)
            drop-shadow(0 1px 1px rgba(255, 255, 255, 0.2))
            grayscale(0.6) opacity(0.3);
    }
    .info .btn-ok:before {
        left: -68px;
    }
    .info .btn-ok:after {
        transform: scaleX(-1);
        right: -68px;
    }
    @keyframes appearance {
        0% {
            opacity: 0;
            transform: scale(0.8) translateY(-80px);
        }
        100% {
            opacity: 1;
            transform: scale(1) translateY(0px);
        }
    }

    div#app {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 0;
        width: 1200px;
        height: 640px;
        pointer-events: none;
    }
    div#app > canvas {
        width: 1200px;
        height: 640px;
    }
    div#screen > div#clickBox {
        position: absolute;
        top: 50%;
        left: calc(50% - 190px);
        transform: translate(-50%, -50%);
        width: 232px;
        height: 586px;
    }
    `;
    return (
        <HelmetProvider>
            <Helmet>
                <style>{css}</style>
            </Helmet>
            <div className="main">
                {/* <div className="pers">
                    <img
                        className="img"
                        src="http://az.faptitans.com/static/rc/tutor-hero3@1.png"
                    />
                </div> */}
                <div className="info">
                    <p className="billing-text">
                        You are now logged out.
                        <br />
                        Use Sign In button to log in again.
                        <br />
                        Thanks for playing with us!
                    </p>
                    <form className="login-form" method="POST" action="/login/">
                        <input
                            type="hidden"
                            name="csrfmiddlewaretoken"
                            value="X0fX169q4DxodCywajQduWlFWMjMoy49Z9kQfg6CyxjlhLjXvSSU3DcBndee4J3r"
                        />
                        <div>
                            <label className="login-label">Username: </label>
                            <input type="text" name="username" size="15" />
                        </div>
                        <div>
                            <label className="login-label">Password: </label>
                            <input type="password" name="password" size="15" />
                        </div>
                        <button className="btn-ok">Sign in</button>
                    </form>
                    <p></p>
                </div>
            </div>

            <div id="screen">
                <div id="app"></div>
                <div id="clickBox"></div>
            </div>
            <AaComponMap.Loading />
        </HelmetProvider>
    );
};

export default React.memo(MainScreen00RegComponent);
