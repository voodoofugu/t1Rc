import {
  selectors,
  useDispatch,
} from "../../templateComponents/GlobalStateStor";
import Scroll from "../UIComponents/Scroll";
import ScrollThumb from "../UIComponents/ScrollThumb";

export default function InfoPopFramed({ inner, girlImg }) {
  const popupState = selectors.usePopupState();
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="closeBG"
        onClick={() => popupState.popClose(dispatch)}
      ></div>
      <div className="content">
        <div className="popupFrame">
          <div className="frame top"></div>
          <div className="frame bottom"></div>
        </div>
        <Scroll
          className="scrollW8"
          scrollXY={[700, 342]}
          padding={[0, 20]}
          scrollTrigger="←→/←O→"
          thumbElement={<ScrollThumb />}
          wrapAlignCenter
        >
          <div className="inner">{inner}</div>
        </Scroll>

        <div
          className="btn-close-x"
          onClick={() => popupState.popClose(dispatch)}
        />
      </div>
      <div className="girlImg">
        <img src={girlImg} />
      </div>
    </>
  );
}
