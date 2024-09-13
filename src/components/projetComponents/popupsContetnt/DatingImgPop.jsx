import {
  selectors,
  useDispatch,
} from "../../templateComponents/GlobalStateStor";

export default function DatingImgPop({ img }) {
  const popupState = selectors.usePopupState();
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="closeBG"
        onClick={() => popupState.popClose(dispatch)}
      ></div>
      <div className="content">
        <img className="pic" src={img} loading="lazy" />
        <div
          className="btn-close-x"
          onClick={() => popupState.popClose(dispatch)}
        />
      </div>
    </>
  );
}
