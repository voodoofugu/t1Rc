import { memo, useState } from "react";
import { useDispatch } from "../../templateComponents/GlobalStateStor";

function Quest({ img, timerbox, payload }) {
  const dispatch = useDispatch();

  const renderImages = () => {
    if (Array.isArray(img)) {
      return img.map((i, index) => (
        <img key={index} className="icon" src={`img/${i}.png`} loading="lazy" />
      ));
    } else if (typeof img === "string") {
      return <img className="icon" src={`img/${img}.png`} loading="lazy" />;
    } else {
      return null;
    }
  };

  return (
    <div
      className={`quest`}
      onClick={() => {
        payload
          ? dispatch({
              type: "POPUP_OPEN",
              payload: payload,
            })
          : "";
      }}
    >
      {renderImages()}

      {timerbox ? (
        <div className="timerbox">
          <div className="timer">{timerbox}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
const MemoQuest = memo(Quest);

function QuestBox({ closed, tit, quest }) {
  const [closedState, setClosedState] = useState(closed);
  return (
    <div className={`quest-box wrap${closedState ? " closed" : ""}`}>
      <div
        className="quest-title-btn"
        onClick={() => setClosedState(!closedState)}
      >
        {tit}
      </div>
      <div className="quest-wrap">
        {quest.map((q, index) => (
          <MemoQuest key={index} img={q[0]} timerbox={q[1]} payload={q[2]} />
        ))}
      </div>
    </div>
  );
}
const MemoQuestBox = memo(QuestBox);

export default memo(function QuestBoxAll({
  questBox,
  questBoxWrap,
  questBox2,
}) {
  return (
    <div className="quest-box-all">
      <div className="quest-box-scroll">
        {questBox.map((q, index) => (
          <MemoQuest key={index} img={q[0]} timerbox={q[1]} payload={q[2]} />
        ))}
        {questBoxWrap.map((q, index) => (
          <MemoQuestBox
            key={index}
            closed={q[0]}
            tit={q[1]}
            quest={q[2]}
            payload={q[2]}
          />
        ))}
        {questBox2.map((q, index) => (
          <MemoQuest key={index} img={q[0]} timerbox={q[1]} payload={q[2]} />
        ))}
      </div>
      <div className="opt-panel-box">
        <div className="color-bg"></div>
        <div className="btn feedback"></div>
        <div className="btn statistic"></div>
        <div className="btn settings"></div>
        <div className="btn ru"></div>
      </div>
      <div className="btn-discord"></div>
    </div>
  );
});
