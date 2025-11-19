import { memo } from "react";
import { nexusTrigger } from "nexus-state";

import ItemBox from "../UIComponents/ItemBox";
import ComicsBallon from "../UIComponents/ComicsBallon";
import ProgressBar from "../UIComponents/ProgressBar";
import Button from "../UIComponents/Button";
import ImageBg from "../UIComponents/ImageBg";
import FraimedTitle from "../UIComponents/FraimedTitle";

export default memo(function RelicsPop2({ event }) {
  return (
    <>
      <ImageBg className="bG framedBg" img="img/bGs/tavernBg.jpg" />

      <FraimedTitle className="cornersTop" text="Buy Relics" />

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

      <div className="main-relics-girl-box">
        <div className="main-relics-girl-pic">
          <img
            src="img/images/superhero/suphero-973/x1/sh-1.jpg"
            loading="lazy"
          />
        </div>

        {/* <Button className="infoOnly" text="i" /> */}

        <div className="main-relics-timer-box">
          <div className="main-relics-timer-text">осталось</div>
          <div className="main-relics-timer">3D 23:46:59</div>
        </div>

        <ComicsBallon
          text="Open more packs to get me!"
          style={{
            top: "344px",
            left: "50px",
            width: "200px",
          }}
          changeDirectionArrow
        />

        {/* <div className="pse-count-res-box">
          <div className="pse-count-res-text">
            <span className="ic-pse-keygirl"></span>
            0/6
          </div>
        </div> */}
      </div>

      <div className="main-relics-right-box-all">
        <div className="main-relics-set-box">
          <div className="main-relics-set">
            <FraimedTitle
              className="byeCardsTit corners"
              text="1 set of Relics"
            />
            <ItemBox
              className="byeCardsItem wh94"
              itemPic="img/card-ic-koloda@2x.png"
            />
            <Button
              className="byeCards lightBlue max"
              text="buy 7"
              textIcn="img/ic-diamond.png"
            />
          </div>
          <div className="main-relics-set">
            <FraimedTitle
              className="byeCardsTit corners"
              text="5 set of Relics"
            />
            <ItemBox
              className="byeCardsItem wh94"
              itemPic="img/card-ic-koloda2@2x.png"
            />
            <Button
              className="byeCards lightBlue max"
              text="buy 20"
              textIcn="img/ic-diamond.png"
            />
          </div>
          <div className="main-relics-set r1 r3">
            <FraimedTitle
              className="byeCardsTit corners"
              text="20 set of Relics"
            />
            <ItemBox
              className="byeCardsItem wh94"
              itemPic="img/card-ic-koloda3@2x.png"
            />
            <Button
              className="byeCards lightBlue max"
              text="buy 45"
              textIcn="img/ic-diamond.png"
            />
          </div>
          <div className="main-relics-set r1 r4">
            <FraimedTitle
              className="byeCardsTit corners"
              text="50 set of Relics"
            />
            <ItemBox
              className="byeCardsItem wh94"
              itemPic="img/card-ic-koloda4@2x.png"
            />
            <Button
              className="byeCards lightBlue max"
              text="buy 80"
              textIcn="img/ic-diamond.png"
            />
          </div>
        </div>

        <div className="main-relics-bonus-box">
          <ProgressBar
            className="progressBarOfSympathy"
            progressSize={[560, 28]}
            currentProgress={2}
            maxProgress={4}
            serifsPerProgress
            itemsBoxFirst={[
              <ItemBox
                className="check"
                itemPic="img/card-ic-koloda@2x.png"
                countOut="50"
                arrow="bottom"
                key={1}
              />,
              <ItemBox
                itemPic="img/top-arrow@2x.png"
                count="6K"
                countOut="125"
                arrow="bottom"
                key={2}
                get="get "
              />,
              <ItemBox
                itemPic="img/ic-abil-dps-plus@2x.png"
                countOut="250"
                arrow="bottom"
                key={3}
              />,
              <ItemBox
                itemPic="img/images/superhero/suphero-973/x1/avatar/sh-ava-1.jpg"
                countOut="400"
                arrow="bottom"
                key={4}
              />,
            ]}
          >
            <ItemBox
              className="wh100"
              itemPic="img/card-ic-koloda@2x.png"
              count="0/400"
            />
          </ProgressBar>
        </div>
      </div>
    </>
  );
});
