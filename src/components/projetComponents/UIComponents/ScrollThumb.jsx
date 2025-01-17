export default function ScrollThumb({ className = "" }) {
  return (
    <div className={`thumbT1${className ? ` ${className}` : ""}`}>
      <div className="thumbArrow top">
        <div className="thumbArrowInner"></div>
      </div>
      <div className="thumbArrow bottom">
        <div className="thumbArrowInner"></div>
      </div>
    </div>
  );
}
