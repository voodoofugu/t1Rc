import { createActs } from "nexus-state";
import type { MyState } from "../nexusConfig";

let timeoutId: NodeJS.Timeout | null = null;

const handlePopup = createActs<MyState>((_, set) => {
  function handlePopupFunc(
    type: "open" | "close",
    data?: Partial<MyState["popupState"]>,
  ) {
    switch (type) {
      case "open": {
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = null;
        }

        set({
          popupState: {
            popupVisible: true,
            dialogEmersion: "show dialog-emersion-enter",
            ...data,
          },
        });

        return;
      }

      case "close": {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        set((prev) => ({
          popupState: {
            ...prev.popupState,
            dialogEmersion: "show dialog-emersion-exit",
          },
        }));

        timeoutId = setTimeout(() => {
          set({
            popupState: null,
          });
          timeoutId = null;
        }, 200);

        return;
      }

      default:
        return;
    }
  }

  return {
    handlePopup: ({
      type,
      data,
    }: {
      type: "open" | "close";
      data?: Partial<MyState["popupState"]>;
    }) => {
      handlePopupFunc(type, data);
    },
  };
});

export default handlePopup;
