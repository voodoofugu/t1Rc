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
              text="Welcome to the team! Now we're ready to conquer the world..."
              style={{
                top: "14px",
                left: "714px",
                width: "175px",
              }}
              // changeDirectionArrow
              arrowDirection="xDirection"
              arrowPosition="last"
              align="center"
            />

            {/* <ComicsBallon
              text="I told you we'd make a deal."
              style={{
                top: "124px",
                left: "324px",
                width: "200px",
              }}
              // changeDirectionArrow
              arrowDirection="xDirection"
              arrowPosition="last"
              align="center"
            /> */}

            {/* <ComicsBallon
              text="Top monster orders always fall into the Guild."
              style={{
                top: "52px",
                right: "62px",
                width: "240px",
              }}
              // changeDirectionArrow
              // arrowDirection="xDirection"
              arrowPosition="last"
              // align="center"
            /> */}
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
