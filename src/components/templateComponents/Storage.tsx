import React from "react";
import { useNexus } from "nexus-state";

export interface watchType {
  watch?: boolean;
}

export default function Storage({
  watch,
}: watchType): React.ReactElement | null {
  const states = useNexus();
  const isEmpty = (obj: Record<string, unknown>): boolean => {
    return Object.keys(obj).length === 0;
  };

  const { statesForWatch, localStates, sessionStates } = React.useMemo(() => {
    if (!states) {
      return { statesForWatch: {}, localStates: {}, sessionStates: {} };
    }
    const localStates = Object.fromEntries(
      Object.entries(states).filter(([key]) => key.endsWith("_l"))
    );
    const sessionStates = Object.fromEntries(
      Object.entries(states).filter(([key]) => key.endsWith("_s"))
    );
    const statesForWatch = Object.fromEntries(
      Object.entries(states).filter(
        ([key]) => !key.endsWith("_s") && !key.endsWith("_l")
      )
    );
    return { statesForWatch, localStates, sessionStates };
  }, [states]);

  React.useEffect(() => {
    if (!isEmpty(localStates)) {
      localStorage.setItem("📌", JSON.stringify(localStates));
    }

    if (!isEmpty(sessionStates)) {
      sessionStorage.setItem("📌", JSON.stringify(sessionStates));
    }

    if (watch) {
      sessionStorage.setItem("👁", JSON.stringify(statesForWatch));
    }
  }, [localStates, sessionStates, statesForWatch, watch]);

  return null;
}
