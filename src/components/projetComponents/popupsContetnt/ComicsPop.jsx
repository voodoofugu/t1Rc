import ComicsBallon from "../UIComponents/ComicsBallon";

export default function ComicsPop() {
  return (
    <div className="content">
      <div className="journal-comics-view c10">
        <div className="journal-comics">
          <img
            className="pic"
            src="img/quests/comics/step_1_01.jpg"
            loading="lazy"
          />
          <div className="ballonsWrap">
            <ComicsBallon
              text="Damn it... we're out of gold again."
              style={{
                top: "26px",
                left: "166px",
                width: "170px",
                opacity: "1",
              }}
            />
            <ComicsBallon
              text="The best monster orders are taken by the Guilders"
              style={{
                top: "20px",
                right: "146px",
                width: "153px",
                opacity: "1",
              }}
              // changeDirectionArrow
              arrowdirection="xDirection"
              align="center"
              // arrowPosition="last"
            />
          </div>
          <div className="ballonsVisibility hidden"></div>
        </div>
      </div>
      <div className="uki-story-nav-box btn2">
        <div className="color-btn">
          <div className="color-btn-text">ок</div>
        </div>
        <div className="color-btn green">
          <div className="color-btn-text">next</div>
        </div>
      </div>
    </div>
  );
}
