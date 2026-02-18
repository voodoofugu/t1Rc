import nexus from "nexus";

import Button from "../UIComponents/Button";
import ItemBox from "../UIComponents/ItemBox";

export default function StarsPop({ img, stars, cardType }) {
  // сокращение что бы не писать длинные пути
  const pathSwitch = (img) => {
    switch (cardType) {
      case "h":
        return `img/images/hero-all/tithero-${img}.jpg`;
      case "s":
        return `img/images/superhero/suphero-${img}.jpg`;
      case "g":
        return `img/images/goddess/goddess-${img}.jpg`;

      default:
        return "";
    }
  };
  const path = [pathSwitch(img[0]), pathSwitch(img[1])];

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

        <ItemBox className={`cardFool`} itemPic={path} cardType={cardType}>
          <div className="highlightBg"></div>
          <div className={`stars-box${stars ? ` stars-${stars}` : ""}`}>
            {[...Array(stars)].map((_, i) => (
              <div key={i} className="star"></div>
            ))}
          </div>
        </ItemBox>

        <Button
          className="exit"
          text="✖"
          onClick={() => nexus.acts.handlePopup({ type: "close" })}
        />
      </div>
    </>
  );
}
