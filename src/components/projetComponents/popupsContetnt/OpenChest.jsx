import { memo, useState } from "react";
import { nexusTrigger, useNexus } from "nexus-state";

import MorphScroll from "../../../../morphing-scroll/src/components/MorphScroll";
import ScrollThumb from "../UIComponents/ScrollThumb";
import PopResValue from "../UIComponents/PopResValue";
import ItemBox from "../UIComponents/ItemBox";
import Button from "../UIComponents/Button";

export default memo(function OpenChest() {
  const popupState = useNexus("popupState");

  return (
    <>
      <Button className="back" text />
      <Button
        className="exit"
        text="✖"
        onClick={() =>
          nexusTrigger({
            type: "handlePopup",
            payload: { type: "close" },
          })
        }
      />

      <PopResValue resClass="chest" resValue="1000" />
      <div className="openchest-left-box">
        <div className="openchest-timer-box">
          <div>
            <div className="openchest-timer">00:04:26</div>
            time to choose the chest
          </div>
        </div>
        <div className="openchest-bonus-box-all">
          <div className="openchest-bonus-box payments chest">
            <div className="openchest-bonus null chest">
              <div className="openchest-bonus-pic">
                <div className="openchest-pic-chest"></div>
              </div>
            </div>
            <div className="openchest-bonus-btn-none"></div>
            <div className="openchest-bonus-btn diamond">
              <div className="btn-text">4</div>
              <div className="ic-diamond"></div>
            </div>
            <div className="openchest-bonus-btn ticket">
              <div className="btn-text">4</div>
              <div className="ic-ticket"></div>
            </div>
          </div>
          <div className="openchest-bonus-box btnnone">
            <div className="openchest-bonus res">
              <div>
                <div className="openchest-bonus-pic">
                  <img src="img/ic-abil-gold@2x.png" loading="lazy" />
                </div>
                <div className="openchest-bonus-count">19.7dD22</div>
              </div>
            </div>
            <div className="openchest-bonus-btn-none"></div>
          </div>
        </div>
        <div className="openchest-close-box">
          <Button className="btnGold nextBtn" text="next" />
        </div>
      </div>
      <div className={`openchest-right-box`}>
        <div className="openchest-name-box">
          <div className="openchest-name">Info:</div>
        </div>
        <MorphScroll
          className="openchest-info-scroll"
          size={[210, 150]}
          objectsSize={[180, "none"]}
          progressTrigger={{
            wheel: true,
            progressElement: <ScrollThumb />,
          }}
          edgeGradient={{ color: "#6f5d50" }}
          wrapperAlign="center"
        >
          <div className="openchest-info">
            1. You can open one first chest for free - choose any.
            <br />
            2. After you receive the reward from the first chest, you can open
            the next for tickets or diamonds. <br />
            3. The third - only for diamonds. On the right side, the list shows
            the possible rewards that you can get by opening the chest. <br />
            4. When you open several chests at once, the Next button will allow
            you to open the next chest.
          </div>
        </MorphScroll>

        <div className="openchest-name-box second">
          <div className="openchest-name">Rewards:</div>
        </div>
        <div className="openchest-in-all-box">
          {[
            "img/ic-abil-gold@2x.png",
            "img/change-ic-essence.png",
            "img/change-ic-gem-master.png",
          ].map((item, index) => (
            <ItemBox itemClass="wh68" itemPic={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
});
