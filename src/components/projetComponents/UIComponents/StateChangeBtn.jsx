// for boolean states
export default function StateChangeBtn({
  state,
  setState,
  textFrom,
  textTo,
  style,
}) {
  return (
    <div
      className="color-btn green"
      onClick={() => setState((prevCheck) => !prevCheck)}
      style={style}
    >
      <div className="color-btn-text">{state === true ? textTo : textFrom}</div>
    </div>
  );
}
