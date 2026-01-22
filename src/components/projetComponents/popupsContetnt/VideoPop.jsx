import nexus from "nexus";

import Button from "../UIComponents/Button";

export default function VideoPop({ content }) {
  const popupState = nexus.use("popupState");

  return (
    <>
      <div
        className="closeBG"
        onClick={() => nexus.acts.handlePopup({ type: "close" })}
      ></div>

      <div className="content">
        <div className="popupFrame">
          <div className="frame top"></div>
          <div className="frame bottom"></div>
        </div>
        {content}

        <Button
          className="exit"
          text="✖"
          onClick={() => nexus.acts.handlePopup({ type: "close" })}
        />
      </div>
    </>
  );
}
