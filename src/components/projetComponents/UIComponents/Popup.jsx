import { useNexus, nexusDispatch } from "nexus-state";

import useDynamicImport from "../../hooks/useDynamicImport";

import FraimedTitle from "./FraimedTitle";
import Loading from "../../templateComponents/Loading";

export default function Popup({ pageName }) {
  const activePage = useNexus("activePage");
  const popupState = useNexus("popupState");

  const module = useDynamicImport(
    `${popupState?.popCont || ""}`,
    "popupsContetnt"
  );
  const DynamicComponent = module?.default;

  return (
    <>
      {activePage === pageName && popupState.popupVisible && (
        <div
          id="popupWrapper"
          className={`popup-layer ${popupState.dialogEmersion}`}
        >
          <div
            className="screen-blend-55"
            onClick={() => {
              nexusDispatch({ type: "POPUP_FOR_CLOSE" });
              setTimeout(() => nexusDispatch({ type: "POPUP_CLOSE" }), 200);
            }}
          ></div>
          <div id="popupContainer">
            <div className={popupState.mpopClass} style={popupState.popStyle}>
              {popupState.popTit &&
                (popupState.popTit.endsWith("<FRAMED>") ? (
                  <FraimedTitle
                    className="corners"
                    text={popupState.popTit.replace(/<FRAMED>$/, "")}
                  />
                ) : (
                  <div className="title rounded-3xl">{popupState.popTit}</div>
                ))}
              {popupState.count && (
                <div className="res-value">
                  {popupState.count.value}
                  <img className="res-value-icon" src={popupState.count.icon} />
                  {popupState.count.add && (
                    <div className="res-value-btn-add">+</div>
                  )}
                </div>
              )}

              {DynamicComponent ? (
                <DynamicComponent
                  {...(popupState.popCont ? popupState.popCont[1] : {})}
                  {...(popupState.props || {})}
                />
              ) : (
                <Loading noBG />
              )}

              {popupState.timer && (
                <div className="wpck-timer-box">
                  <div className="time-left">time left</div>
                  <div className="time-sec">23:54:55</div>
                </div>
              )}
              {popupState.infBtn && <div className="btn-inf"></div>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
