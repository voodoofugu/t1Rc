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
            <div
              className="journal-comics-ballon-box"
              style={{
                top: "26px",
                left: "166px",
                width: "170px",
                opacity: "1",
              }}
            >
              <div className="ballonArrow"></div>
              <div className="journal-comics-ballon-text">
                Damn it... we're out of gold again.
              </div>
            </div>
            <div
              className="journal-comics-ballon-box end right"
              style={{
                top: "20px",
                right: "146px",
                width: "230px",
                opacity: "1",
              }}
            >
              <div className="ballonArrow"></div>
              <div className="journal-comics-ballon-text">
                The best monster orders are taken by the Guilders
              </div>
            </div>
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
