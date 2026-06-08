import { useEffect } from "react";
import nexus from "nexus";

import Popup from "./Popup.jsx";
import Notification from "./Notification";

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
