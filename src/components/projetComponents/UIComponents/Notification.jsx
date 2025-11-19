import React, { useEffect, useRef } from "react";
import { useNexus, nexusUpdate } from "nexus-state";

import ItemBox from "./ItemBox";

export default function Notification({
  view,
  className,
  img,
  text,
  //   onClick,
}) {
  const notifRef = useRef(null);
  const timer1 = useRef(null);
  const timer2 = useRef(null);
  const randomKey = Math.random().toString(36).slice(2, 6);

  const notifState = useNexus("notif");

  const localView = view || notifState?.view;
  const localClassName = className || notifState?.className;
  const localImg = img || notifState?.img;
  const localText = text || notifState?.text;
  //   const localOnClick = onClick || notifState.onClick;

  const clearTimeouts = () => {
    if (timer1.current) clearTimeout(timer1.current);
    if (timer2.current) clearTimeout(timer2.current);
  };

  const handleAnim = (t1, t2) => {
    clearTimeouts();
    if (!localView) return;

    timer1.current = setTimeout(() => {
      notifRef.current?.classList.add("fadeOut");
    }, t1);

    timer2.current = setTimeout(() => {
      clearTimeouts();
      nexusUpdate({
        notif: {},
      });
    }, t2);
  };

  useEffect(() => {
    handleAnim(2500, 3000);

    return () => {
      clearTimeouts();
    };
  }, [randomKey]);

  return (
    <>
      {localView && (
        <div
          key={randomKey}
          ref={notifRef}
          className={`notifWrap${localClassName ? ` ${localClassName}` : ""}`}
          onClick={() => handleAnim(0, 200)}
        >
          {localImg && <ItemBox className="wh44" itemPic={localImg} />}
          <div className="notifText">{localText}</div>
          <div className="closeIcn"></div>
        </div>
      )}
    </>
  );
}
