import { nexusUpdate } from "nexus-state";

let timeoutId: NodeJS.Timeout | null = null;

function handlePopupFunc(type: "open" | "close", data?: any) {
  switch (type) {
    case "open": {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }

      nexusUpdate({
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

      nexusUpdate({
        popupState: (prev: any) => ({
          ...prev,
          dialogEmersion: "show dialog-emersion-exit",
        }),
      });

      timeoutId = setTimeout(() => {
        nexusUpdate({
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

const handlePopup = {
  fData: ({
    type,
    data,
  }: {
    type: Parameters<typeof handlePopupFunc>[0];
    data?: Partial<StatesT["popupState"]>;
  }) => {
    handlePopupFunc(type, data);
  },
};

export default handlePopup;
