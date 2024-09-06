export default function FraimedTitle({ className, text }) {
  return (
    <div className={`fraimedTitleWrap${className ? ` ${className}` : ""}`}>
      <div className="text">{text}</div>
    </div>
  );
}
