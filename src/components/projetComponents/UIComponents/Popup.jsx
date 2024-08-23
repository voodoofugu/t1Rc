import { memo, lazy, useEffect, Suspense } from "react";
import {
  selectors,
  useDispatch,
} from "../../templateComponents/GlobalStateStor";
import a_popupList from "../popupsContetnt/a_popupList";

const componentsMap = a_popupList.reduce((map, name) => {
  map[name] = lazy(() => import(`../popupsContetnt/${name}`));
  return map;
}, {});

export default memo(function Popup({ pageName }) {
  const activePage = selectors.useActivePage();
  const popupState = selectors.usePopupState();
  const dispatch = useDispatch();

  const ComponentToRender = componentsMap[popupState.popCont[0]];
  const componentProps = popupState.popCont[1];
  const props = popupState.props;

  const storageInitialData = JSON.parse(
    sessionStorage.getItem("initialStates")
  );

  useEffect(() => {
    if (storageInitialData.popupState.popupVisible) {
      dispatch({
        type: "POPUP_OPEN",
        payload: {
          ...storageInitialData.popupState,
        },
      });
    }
  }, []);

  return (
    <>
      {activePage === pageName && popupState.popupVisible && (
        <div
          id="popupWrapper"
          className={`popup-layer ${popupState.dialogEmersion}`}
        >
          <div
            className="screen-blend-55"
            onClick={() => popupState.popClose(dispatch)}
          ></div>
          <div id="popupContainer">
            <div className={popupState.mpopClass} style={popupState.popStyle}>
              {popupState.popTit && (
                <div className="title rounded-3xl">{popupState.popTit}</div>
              )}
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
              <div
                className={popupState.btnXClass}
                onClick={() => popupState.popClose(dispatch)}
              ></div>
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
