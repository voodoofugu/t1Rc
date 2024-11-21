import { nexusDispatch, useNexus } from "nexus-state";

export default function DatingImgPop({ img }) {
  const popupState = useNexus("popupState");

  return (
    <>
      <div className="closeBG" onClick={() => popupState.popClose()}></div>
      <div className="content">
        <img className="pic" src={img} loading="lazy" />
        <div className="btn-close-x" onClick={() => popupState.popClose()} />
      </div>
    </>
  );
}
