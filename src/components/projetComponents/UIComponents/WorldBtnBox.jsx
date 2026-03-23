import { useState } from "react";

const inlineStyles = {
  position: "absolute",
  top: "660px",
  left: "50%",
  transform: "translateX(-50%)",
  fontFamily: "Roboto, sans-serif",
  width: "140px",
};

export default function WorldBtnBox({ pageName }) {
  const [isDarkWorld, setIsDarkWorld] = useState(false);

  const btnClickHandler = () => {
    const currentPath = window.location.hash.substring(3).split("/")[0];

    if (pageName === currentPath) {
      const main = document.querySelector(".main");
      if (!main) return;

      main.classList.toggle("world1", isDarkWorld);
      main.classList.toggle("world3", !isDarkWorld);
    }

    setIsDarkWorld((prevIsDarkWorld) => !prevIsDarkWorld);
  };

  return (
    <div style={inlineStyles}>
      <div className="color-btn green world-btn" onClick={btnClickHandler}>
        <div className="color-btn-text">
          {isDarkWorld ? "To Light" : "To Dark"}
        </div>
      </div>
    </div>
  );
}
