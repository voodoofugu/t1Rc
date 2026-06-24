import { useEffect } from "react";
import nexus from "nexus";

import Popup from "../projetComponents/UIComponents/Popup.jsx";
import Notification from "../projetComponents/UIComponents/Notification.jsx";

export default function ComponToLoad({ pageName }) {
  useEffect(() => {
    nexus.set({ activePage: pageName });

    return () => {
      if (nexus.get("activePage") === pageName) {
        nexus.set({ activePage: "" });
      }
    };
  }, [pageName]);

  return (
    <>
      <Popup pageName={pageName} />
      <Notification />
    </>
  );
}
