import { useState, useMemo, useCallback } from "react";
import nexus from "nexus";

import ItemBox from "../UIComponents/ItemBox";
import ResCount from "../UIComponents/ResCount";
import ProgressBar from "../UIComponents/ProgressBar";
import Button from "../UIComponents/Button";

import data_angels from "../../../scripts/FapTitansScripts/data_angels";

export const cssFiles = [
  "guardian-chests-window",
  "screen-superhero",
  "screen-unipop-subscription",
];

function GuardianChestsWindow({ pageName, children }) {
  return (
    <div className="main world1">
      <div className="main-bg"></div>
      <div className="guardian-window">
        <div className="guardian-window-bg"></div>
        <div className="guardian-tit-wrap"></div>
        <div className="guardian-tit">Guardians Chests</div>

        <Button className="back" text />

        <Button
          className="info"
          text="i"
          onClick={() => {
            nexus.acts.handlePopup({
              type: "open",
              data: {
                mpopClass: "m-popup contentOnly framedPop",
                popCont: "InfoPopFramed",
                props: {
                  inner:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ",
                  girlImg: "img/break-girls/break-girl915.png",
                },
              },
            });
          }}
        />

        <ResCount
          className="spirit-count"
          img="img/evPopArts/angel_spirit_1.png"
          value="234"
          plus
          onClick={() => {
            nexus.acts.handlePopup({
              type: "open",
              data: {
                mpopClass: "m-popup  contentOnly framedPop essence-buy",
                popCont: "BuyShop",
                props: {
                  img1: "evPopArts/angel_spirit_1",
                  img2: "evPopArts/angel_spirit_2",
                  img3: "evPopArts/angel_spirit_3",
                  img4: "evPopArts/angel_spirit_4",
                },
              },
            });
          }}
        />
      </div>
      {children}
    </div>
  );
}

export default GuardianChestsWindow;
