import FraimedTitle from "../UIComponents/FraimedTitle";

export default function OfferCardBox({
  className,
  addBg,
  title,
  rewardCard,
  btnWrap,
  children,
}) {
  return (
    <div className={`offer-card-box${className ? ` ${className}` : ""}`}>
      <div className="card-content">
        {addBg && (
          <div
            className="imgBg"
            style={{
              background: `url(${addBg})`,
            }}
          ></div>
        )}

        {title && <FraimedTitle className="cornersTop" text={title} />}

        <div className="reward-card-box">{rewardCard}</div>
        <div className="reward-boxWrap">
          <div className="reward-box curlFrame">{children}</div>
        </div>
        <div className="btnWrap">{btnWrap}</div>
      </div>
    </div>
  );
}
