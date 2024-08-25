export default function OfferCardBox({
  className,
  title,
  rewardCard,
  children,
  btnWrap,
}) {
  return (
    <div className={`offer-card-box${className ? ` ${className}` : ""}`}>
      <div className="card-content">
        {title && <div className="card-title">{title}</div>}
        <div className="reward-card-box">{rewardCard}</div>
        <div className="reward-box">{children}</div>
        <div className="btnWrap">{btnWrap}</div>
      </div>
    </div>
  );
}
