import React from "react";

import ItemBox from "../UIComponents/ItemBox";
import Button from "../UIComponents/Button";
import Tooltip from "../UIComponents/Tooltip";
import FraimedTitle from "../UIComponents/FraimedTitle";

export default function DualPack({ event }) {
  return (
    <>
      <div className="sv-sale-pack-box buy">
        <div className="lhero-box" data-label="legendary">
          <div className="lhero-pic">
            <img
              src="img/images/hero-all/tithero-702/x1/tithero-1.jpg"
              loading="lazy"
            />
          </div>

          <Tooltip
            className="lheroPic"
            targetContent={
              <div className="achiev-hint default">
                <div className="tooltip">
                  Demon that penetrates into the peoples dreams.
                </div>
              </div>
            }
          >
            <Button className="infoOnly" text="i" />
          </Tooltip>

          <div className="topname-box">
            <div className="lrare-box uncommon"></div>
            <div className="sh2-icon left">
              <img src="img/cur-u.png" loading="lazy" />
            </div>
            <div className="sh2-icon-forgirl right">
              <img src="img/cur2-ranger.png" loading="lazy" />
            </div>
            <div className="lhero-name-box">
              <div className="lhero-name">Tanigawa Kayo</div>
            </div>
          </div>
          <div className="bottom-star-box-girl-count-box">
            <div className="sh2-prgbar-all undefined">
              <div
                className="sh2-prgbar"
                style={{
                  width: "0%",
                }}
              ></div>
              <div className="sh2-prgbar-text">0/10</div>
              <div className="bonus">+700</div>
            </div>
            <div className="girl-bonus-box">
              <div className="girl-bonus-pic">
                <img
                  src="img/images/superhero/suphero-762/x2/avatar/762sh-ava-1.jpg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="sv-sale-bonus-box-all">
            <div className="ashero-bonus-box">
              <div className="acbonus-box">
                <div className="lvlbox-name">Virtuoso melody</div>
                <div className="bonus-lvl-box-bonus-box">
                  <div className="bonus-lvl-box-bonus">
                    +45%
                    <div className="ff-sh2-icon gold"></div>
                  </div>
                </div>
              </div>
              <div className="acbonus-box second">
                <div className="lvlbox-name">A chord of pain</div>
                <div className="bonus-lvl-box-bonus-box">
                  <div className="bonus-lvl-box-bonus">
                    +2.15% dps to
                    <div className="ff-sh2-icon">
                      <img src="img/cur2-ranger.png" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sv-sale-btn-box">
          <Button className="green check buy-btn" text="sold" />
        </div>
        <div className="sv-reward-box-all">
          <FraimedTitle
            className="corners reward-box-tit"
            text="Tanigawa Bonus"
          />
          <ItemBox
            className="wh68"
            itemPic="img/pse-uncommons.png"
            count={20}
          />
          <ItemBox
            className="wh68"
            itemPic="img/evPopArts/potion_green.png"
            count={1000}
          />
          <ItemBox
            className="piecesHero wh68"
            itemPic="img/images/hero-all/tithero-00/x2/ava/tithero-ava-1.jpg"
            count={100}
          />
        </div>
      </div>
      <div className="sv-sale-pack-box next">
        <div className="lhero-box" data-label="legendary">
          <div className="lhero-pic">
            <img
              src="img/images/hero-all/tithero-703/x1/tithero-1.jpg"
              loading="lazy"
            />
          </div>

          <Tooltip
            className="lheroPic"
            targetContent={
              <div className="achiev-hint default">
                <div className="tooltip">
                  Demon that penetrates into the peoples dreams.
                </div>
              </div>
            }
          >
            <Button className="infoOnly" text="i" />
          </Tooltip>

          <div className="topname-box">
            <div className="asc-lvl">10</div>
            <div className="sh2-icon-forgirl right">
              <img src="img/cur2-cleric.png" loading="lazy" />
            </div>
            <div className="lhero-name-box">
              <div className="lhero-name">Eiko Nousagi</div>
            </div>
          </div>
          <div className="bottom-star-box-girl-count-box">
            <div className="addInfo">Hero!</div>
          </div>
          <div className="sv-sale-bonus-box-all">
            <div className="ashero-bonus-box">
              <div className="acbonus-box">
                <div className="lvlbox-name">DPS</div>
                <div className="bonus-lvl-box-bonus-box">
                  <div className="bonus-lvl-box-bonus">
                    277MD31
                    <div className="ff-sh2-icon">
                      <img src="img/ico-sword.png" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="acbonus-box second">
                <div className="lvlbox-name">Power</div>
                <div className="bonus-lvl-box-bonus-box">
                  <div className="bonus-lvl-box-bonus">
                    4
                    <div className="ff-sh2-icon">
                      <img src="img/ms-hand.png" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sv-sale-btn-box">
          <Button
            className="max btnGold buy-btn"
            textIcn="img/ico-nutaku2.png"
            text="49.99"
            crossedOutText="99.99"
          />
          <div className="sale-banner">-50%</div>
        </div>
        <div className="sv-reward-box-all">
          <FraimedTitle className="corners reward-box-tit" text="Eiko Bonus" />
          <ItemBox className="wh68" itemPic="img/pse-rares.png" count={10} />
          <ItemBox
            className="wh68"
            itemPic="img/diamond6-shop.png"
            count={150}
          />
          <ItemBox
            className="wh68"
            itemPic="img/evPopArts/potion_blue.png"
            count={1000}
          />
        </div>
      </div>
      <div className="sv-sale-uni-box-all">
        <FraimedTitle className="cornersTop frameTit" text="Buy both Offers" />
        <div className="bonus-tit">Claim all Bonus Rewards</div>
        <div className="rewards-box">
          <ItemBox
            className="wh94"
            itemPic="img/fapop-token4.png"
            count={100}
          />
          <ItemBox
            className="wh94"
            itemPic="img/ic-tickets-bf-1.png"
            count={150}
            unique={["unique"]}
          />
        </div>

        <Button
          className="max btnGold disabled bonus-btn"
          text="get shared bonus"
        />
      </div>
      <div className="wpck-timer-box">
        <div className="time-left">осталось</div>
        <div className="time-sec">00:00:00</div>
      </div>
    </>
  );
}
