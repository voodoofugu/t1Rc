import { useState } from "react";
import nexus from "nexus";

import MorphScroll from "../../../../morphing-scroll/src/components/MorphScroll";
import ScrollThumb from "../UIComponents/ScrollThumb";
import Button from "../UIComponents/Button";

function QuestBtn({ img, timerbox, payload }) {
  return (
    <Button
      className="imgOnly quest"
      img={
        Array.isArray(img) ? img.map((i) => `img/${i}.png`) : `img/${img}.png`
      }
      onClick={() => {
        payload &&
          nexus.acts.handlePopup({
            type: "open",
            data: {
              ...payload,
            },
          });
      }}
    >
      {timerbox && (
        <div className="timerbox">
          <div className="timer">{timerbox}</div>
        </div>
      )}
    </Button>
  );
}

function QuestBox({ closed, tit, quest }) {
  const [closedState, setClosedState] = useState(closed);
  return (
    <div className={`quest-box wrap${closedState ? " closed" : ""}`}>
      <Button
        className="quest-title-btn"
        text={tit}
        onClick={() => setClosedState(!closedState)}
      />
      <div className="quest-wrap">
        {quest.map((q, index) => (
          <QuestBtn key={index} img={q[0]} timerbox={q[1]} payload={q[2]} />
        ))}
      </div>
    </div>
  );
}

export default function QuestBoxAll({ questBox, questBoxWrap, questBox2 }) {
  return (
    <div className="quest-box-all">
      <MorphScroll
        className="quest-box-scroll"
        size={[78, 550]}
        gap={8}
        progressTrigger={{ wheel: true, progressElement: <ScrollThumb /> }}
        edgeGradient={{ color: "#4A3F3D" }}
        wrapperAlign="center"
        scrollBarOnHover
      >
        {questBox.map((q, i) => (
          <QuestBtn key={`q1-${i}`} img={q[0]} timerbox={q[1]} payload={q[2]} />
        ))}
        {questBoxWrap.map((q, i) => (
          <QuestBox
            key={`q-${i}`}
            closed={q[0]}
            tit={q[1]}
            quest={q[2]}
            payload={q[2]}
          />
        ))}
        {questBox2.map((q, i) => (
          <QuestBtn key={`q2-${i}`} img={q[0]} timerbox={q[1]} payload={q[2]} />
        ))}
      </MorphScroll>
      {/* <div className="opt-panel-box">
        <div className="color-bg"></div>
        <div className="btn feedback"></div>
        <div className="btn statistic"></div>
        <div className="btn settings"></div>
        <div className="btn ru"></div>
      </div>
      <div className="btn-discord"></div> */}

      <Button
        className="btn-panel settings"
        textIcn="img/svg-icons/settings.svg"
      >
        <div className="panel">
          <Button textIcn="img/svg-icons/statistics.svg" />
          <Button className="language ru" textIcn />
          <Button className="bigger" textIcn="img/svg-icons/setup.svg" />
        </div>
      </Button>

      <Button
        className="btn-panel contacts"
        textIcn="img/svg-icons/feedback.svg"
      >
        <div className="panel">
          <Button textIcn="img/svg-icons/chat.svg" />
          <Button textIcn="img/svg-icons/discord.svg" />
          <Button textIcn="img/svg-icons/telegram.svg" />
          <Button textIcn="img/svg-icons/twitter.svg" />
        </div>
      </Button>
    </div>
  );
}
