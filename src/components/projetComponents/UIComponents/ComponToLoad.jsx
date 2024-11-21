import Popup from "./Popup.jsx";
import Notification from "./Notification";

export default function ComponToLoad({ pageName }) {
  return (
    <>
      <Popup pageName={pageName} />
      <Notification />
    </>
  );
}
