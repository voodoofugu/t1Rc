import React, { useEffect } from "react";
import { useStylesLoaded } from "../components/StylesLoadedProvider";

import HelmetForCss from "../components/HelmetForCss.jsx";
const cssFiles = ["screen-reg"];

export default function MainScreen00RegComponent({ pageName = "" }) {
  const currentPath = window.location.pathname.split("/").pop().split(".")[0];
  const { stylesLoaded } = useStylesLoaded();

  useEffect(() => {
    if (pageName === currentPath && stylesLoaded) {
      const projectComponent = document.querySelector(".projectComponent");
      projectComponent.style.position = "absolute";
      projectComponent.style.left = "50%";
      projectComponent.style.top = "50%";
      projectComponent.style.transform = "translate(-50%, -50%)";
      console.log(projectComponent);
    }
  }, [pageName, stylesLoaded]);

  return (
    <HelmetForCss cssFiles={cssFiles}>
      <div
        className="wrapStyles"
        style={{ width: "1200px", height: "640px", background: "#9f8978" }}
      >
        <div className="main">
          <div className="pers">
            <img
              className="img"
              src="http://az.faptitans.com/static/rc/tutor-hero3@1.png"
              loading="lazy"
            />
          </div>
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
      </div>
    </HelmetForCss>
  );
}
