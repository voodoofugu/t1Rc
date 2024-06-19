import React from "react";
import { useDispatch } from "../../templateComponents/GlobalStateStor";
import ItemBox from "../UIComponents/ItemBox";

export const cssFiles = ["dating"];

export default function Dating({ pageName, children }) {
  const dispatch = useDispatch();

  return (
    <div className="main world1">
      <div className="main-bg dating"></div>
      <div className="dating_content">
        <div className="dating_title">Your date</div>
        <div className="color-btn exit">
          <div className="color-btn-text"></div>
        </div>
        <div className="btnI" />
      </div>
      {children}
    </div>
  );
}
