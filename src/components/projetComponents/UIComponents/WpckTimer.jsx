export default function WpckTimer({ text, timer, updateBtn, onClick }) {
  return (
    <div className="wpck-timer-box">
      {updateBtn && (
        <div className="update_btn_wrap">
          <div className="color-btn" onClick={onClick}>
            <div className="color-btn-text">
              <img src="img/evPopArts/update.png" />
            </div>
          </div>
          <div className="update_value">1/3</div>
        </div>
      )}
      {text && <div className="time-left">{text}</div>}
      <div className="time-sec">{timer}</div>
    </div>
  );
}
