import Button from "../UIComponents/Button";

function ClanWarBox({ className, img, btnText, onClick, children }) {
  return (
    <div className={`fw-main-bl ${className}`}>
      <div className="fw-main-bl-pic">
        <img src={img} loading="lazy" />
      </div>
      <Button
        className="clanWarBtn max"
        text={btnText}
        onClick={() => onClick}
      />
      {children}
    </div>
  );
}

export default ClanWarBox;
