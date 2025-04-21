import React from "react";

import ItemBox from "../UIComponents/ItemBox";
import Button from "../UIComponents/Button";
import Tooltip from "../UIComponents/Tooltip";

export default function DualPack({ event }) {
  return (
    <>
      <div className="sv-sale-pack-box buy">
        <div className="lhero-box">
          <div className="lhero-pic">
            <img
              src="img/images/superhero/suphero-762/x2/762sh-1.jpg"
              loading="lazy"
            />
          </div>

          <Tooltip
            className="lheroPic"
            targetContent={
              <div className="achiev-hint">
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
          <div className="store-button">
            <div className="but-price old">$80</div>
            <div className="but-price">$19.99</div>
          </div>
        </div>
        <div className="sv-reward-box-all">
          <ItemBox
            itemPic="img/images/superhero/suphero-762/x2/avatar/762sh-ava-1.jpg"
            count={700}
            rare="u"
          />
          <ItemBox itemPic="img/pse-uncommons.png" count={20} />
          <ItemBox itemPic="img/evPopArts/potion_green.png" count={1000} />
          <ItemBox
            itemClass="piecesHero"
            itemPic="img/images/hero-all/tithero-00/x2/ava/tithero-ava-1.jpg"
            count={100}
          />
        </div>
      </div>
      <div className="sv-sale-pack-box next">
        <div className="lhero-box">
          <div className="lhero-pic">
            <img
              src="img/images/hero-all/tithero-5002/x1/tithero-5002-1.jpg"
              loading="lazy"
            />
          </div>

          <Tooltip
            className="lheroPic"
            targetContent={
              <div className="achiev-hint">
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
          <div className="store-button">
            <div className="but-price old">
              200
              <div className="price-nutaku"></div>
            </div>
            <div className="but-price">
              49.99
              <div className="price-nutaku"></div>
            </div>
          </div>
        </div>
        <div className="sv-reward-box-all">
          <ItemBox
            itemPic="img/images/superhero/suphero-761/x2/avatar/761sh-ava-1.jpg"
            count={700}
            rare="c"
          />
          <ItemBox itemPic="img/pse-rares.png" count={10} />
          <ItemBox itemPic="img/diamond6-shop.png" count={150} />
          <ItemBox itemPic="img/evPopArts/potion_blue.png" count={1000} />
        </div>
      </div>
      {event === "uni-sale" ? (
        <div className="sv-sale-uni-box-all">
          <div className="sv-uni-all"></div>
          <div className="sv-chain1"></div>
          <div className="sv-chain2"></div>
          <div className="sv-text">rewards for purchasing both packs</div>
          <ItemBox
            itemClass="wh94"
            itemPic="img/fapop-token4.png"
            count={100}
          />
          <ItemBox
            itemClass="wh94"
            itemPic="img/ic-tickets-bf-1.png"
            count={150}
            unique={["unique"]}
          />
        </div>
      ) : event === "sv-sale" ? (
        <div className="sv-sale-heart-box-all">
          <div className="sv-heart-left"></div>
          <div className="sv-heart-right"></div>
          <div className="sv-chain1"></div>
          <div className="sv-chain2"></div>
          <div className="sv-reward-box">
            <div className="sv-reward-pic">
              <img src="img/sh-icon-chest-128.png" loading="lazy" />
            </div>
            <div className="sv-reward-count">100</div>
            <div>
              <div className="sv-reward-block"></div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="wpck-timer-box">
        <div className="time-left">осталось</div>
        <div className="time-sec">00:00:00</div>
      </div>
    </>
  );
}
