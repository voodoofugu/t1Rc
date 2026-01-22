import nexus from "nexus";

export default function DatingImgPop({ img }) {
  const popupState = nexus.use("popupState");

  return (
    <>
      <div
        className="closeBG"
        onClick={() => nexus.acts.handlePopup({ type: "close" })}
      ></div>
      <div className="content">
        <img className="pic" src={img} loading="lazy" />
        <div
          className="btn-close-x"
          onClick={() => nexus.acts.handlePopup({ type: "close" })}
        />
      </div>
    </>
  );
}
