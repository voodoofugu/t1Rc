import { memo, lazy, useEffect, Suspense } from "react";
import { nexusDispatch, useNexus } from "nexus-state";

import a_popupList from "../popupsContetnt/a_popupList";
import FraimedTitle from "../UIComponents/FraimedTitle";

const componentsMap = a_popupList.reduce((map, name) => {
  map[name] = lazy(() => import(`../popupsContetnt/${name}`));
  return map;
}, {});

export default memo(function Popup({ pageName }) {
  const activePage = useNexus("activePage");
  const popupState = useNexus("popupState");

  const ComponentToRender = popupState?.popCont?.[0]
    ? componentsMap[popupState.popCont[0]]
    : null;

  const componentProps = popupState?.popCont?.[1] || {};
  const props = popupState.props;

  return (
    <>
      {activePage === pageName && popupState.popupVisible && (
        <div
          id="popupWrapper"
          className={`popup-layer ${popupState.dialogEmersion}`}
        >
          <div
            className="screen-blend-55"
            onClick={() => popupState.popClose(nexusDispatch)}
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
              <Suspense>
                {ComponentToRender && (
                  <ComponentToRender {...componentProps} {...props} />
                )}
              </Suspense>
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
});
