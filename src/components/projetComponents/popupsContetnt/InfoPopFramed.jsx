import {
  selectors,
  useDispatch,
} from "../../templateComponents/GlobalStateStor";
import Scroll from "../UIComponents/Scroll";
import ScrollThumb from "../UIComponents/ScrollThumb";

export default function InfoPopFramed({ text }) {
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
          {/* <div className="text">{text}</div> */}
          <div className="text">
            <li>
              Ascend the heights of the tantalizing Dark Tower, scaling ever
              higher to conquer the Top spot in the rankings.
            </li>
            <li>
              Complete all missions from the sizzling "Quest Chain" tab to earn
              yourself a sultry Hot Lady, along with other titillating rewards.
            </li>
            <li>
              Indulge in the Magic Box event by visiting the Magic tab and
              unwrapping Stage using Magic balls.
            </li>
            <li>
              Tempt fate by tossing coins into the steamy Fountain and watch as
              enticing prizes emerge.
            </li>
            <li>
              Amplify your lustrous presence in the event by raunchy relics.
              Exchange these relic cards for rewards.
            </li>
            <li>
              Every five floors climbed, indulge in 1 satisfying free relic
              card, accompanied by tempting Magic Boxes.
            </li>
            <li>
              Yield to the allure of Magic Boxes to uncover premium adult
              surprises.
            </li>
          </div>
        </Scroll>

        <div
          className="btn-close-x"
          onClick={() => popupState.popClose(dispatch)}
        />
      </div>
      <div className="girlImg">
        <img src="img/breakGirls/break-girl915.png" />
      </div>
    </>
  );
}
