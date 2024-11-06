import { useDispatch } from "../../templateComponents/GlobalStateStor";

export const cssFiles = ["screen-fortuna-round-main_16x", "daiting-gifts-pop"];

export default function MainScreen16FortunaRoundMainpop({
  pageName,
  children,
}) {
  const dispatch = useDispatch();

  return (
    <div className="main world1">
      <div className="main-bg"></div>
      <div className="quest-box-all">
        <div
          className="quest-box-scroll"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="quest-box">
            <div
              className="quest quest-fortune"
              onClick={() => {
                dispatch({
                  type: "POPUP_OPEN",
                  payload: {
                    mpopClass: "m-popup fortuna-main-round",
                    popTit: "wheel of fortune - spin your discount!",
                    popCont: ["FortunaMainRound16"],
                  },
                });
              }}
            >
              <img className="icon" src="img/ic-fortuna.png" loading="lazy" />
              <div className="timerbox">
                <div className="timer">16</div>
              </div>
            </div>
            <div
              className="quest quest-fortune"
              onClick={() => {
                dispatch({
                  type: "POPUP_OPEN",
                  payload: {
                    mpopClass: "m-popup fortuna-main-round contentOnly",
                    popCont: ["FortunaMainRound16Big"],
                  },
                });
              }}
            >
              <img className="icon" src="img/ic-fortuna.png" loading="lazy" />
              <div className="timerbox">
                <div className="timer">16Big</div>
              </div>
            </div>
            <div
              className="quest quest-fortune"
              onClick={() => {
                dispatch({
                  type: "POPUP_OPEN",
                  payload: {
                    mpopClass: "m-popup fortuna-main-round",
                    popStyle: {
                      width: "960px",
                      height: "620px",
                      left: "120px",
                    },
                    popTit: "wheel of fortune - spin your discount!",
                    popCont: ["FortunaMainRound25"],
                  },
                });
              }}
            >
              <img className="icon" src="img/ic-fortuna.png" loading="lazy" />
              <div className="timerbox">
                <div className="timer">25</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
