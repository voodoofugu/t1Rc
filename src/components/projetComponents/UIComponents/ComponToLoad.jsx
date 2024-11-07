import Popup from "./Popup";
import Notification from "./Notification";

export default function ComponToLoad({ pageName }) {
  return (
    <>
      <Popup pageName={pageName} />
      <Notification />
    </>
  );
}
