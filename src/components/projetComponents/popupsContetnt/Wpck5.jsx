import { memo } from "react";

import ItemBox from "../UIComponents/ItemBox";
import Button from "../UIComponents/Button";
import ImageBg from "../UIComponents/ImageBg";

export default memo(function Wpck5() {
  return (
    <>
      {/* <div className="title">Blackhole sale</div> */}
      <div className="color-box"></div>
      <div className="content-all">
        <div className="prize-one-box">
          <div className="lhero-box">
            <div className="lhero-pic">
              <img
                src="img/images/hero-all/tithero-430/x1/tithero-1.jpg"
                loading="lazy"
              />
            </div>
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
                    src="img/images/hero-all/tithero-430/x1/ava/tithero-ava-1.jpg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="sv-sale-bonus-box-all">
              <div className="ashero-bonus-box">
                <div className="acbonus-box">
                  <div className="lvlbox-name">DPS</div>
                  <div className="bonus-lvl-box-bonus-box">
                    <div className="bonus-lvl-box-bonus">
                      +45%
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
                      +2.15%
                      <div className="ff-sh2-icon">
                        <img src="img/ms-hand.png" loading="lazy" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="girl-box">
            <img
              className="girl-prize"
              src="img/images/hero-all/tithero-430/x1/tithero-430-1.jpg"
              loading="lazy"
            />
          </div> */}
          {/* <div className="prize-name-box">Toyama Mai</div> */}
          {/* <div className="dps-extra">
            <div className="value">2.32B</div>
            <div className="dps-title">
              DPS
              <div className="icon-dps"></div>
            </div>
          </div> */}
          {/* <div className="pow-extra">
            <div className="value">51</div>
            <div className="pow-title">
              POW
              <div className="icon-pow"></div>
            </div>
          </div> */}
          {/* <div className="prize-promote-box">
            <div className="prize-promote-text"></div>
          </div> */}
          {/* <div className="prize-name-box small">rare hero</div> */}
          <div className="unique-skill-box-all">
            <div className="prize-name-box small">with unique skills</div>
            <div className="unique-skill-box">
              <div className="unique-skill">
                {/* <div className="skill-pic-box">
                  <img
                    className="skill-pic"
                    src="img/images/hero-all/tithero-430/icons/ic-abil.jpg"
                    loading="lazy"
                  />
                </div> */}
                <ItemBox
                  itemClass="wh60"
                  itemPic="img/images/hero-all/tithero-430/icons/ic-abil.jpg"
                />
                <div className="skill-text-box">
                  <div className="skill-text">Boss gold drop + 500%</div>
                </div>
              </div>
              <div className="unique-skill">
                {/* <div className="skill-pic-box">
                  <img
                    className="skill-pic"
                    src="img/images/hero-all/tithero-430/icons/ic-abil.jpg"
                    loading="lazy"
                  />
                </div> */}
                <ItemBox
                  itemClass="wh60"
                  itemPic="img/images/hero-all/tithero-430/icons/ic-abil.jpg"
                />
                <div className="skill-text-box">
                  <div className="skill-text">Boss gold drop + 1000%</div>
                </div>
              </div>
              <div className="unique-skill">
                {/* <div className="skill-pic-box">
                  <img
                    className="skill-pic"
                    src="img/images/hero-all/tithero-430/icons/ic-abil.jpg"
                    loading="lazy"
                  />
                </div> */}
                <ItemBox
                  itemClass="wh60"
                  itemPic="img/images/hero-all/tithero-430/icons/ic-abil.jpg"
                />
                <div className="skill-text-box">
                  <div className="skill-text">Boss gold drop + 1500%</div>
                </div>
              </div>
              <div className="unique-skill">
                {/* <div className="skill-pic-box">
                  <img
                    className="skill-pic"
                    src="img/images/hero-all/tithero-430/icons/ic-abil.jpg"
                    loading="lazy"
                  />
                </div> */}
                <ItemBox
                  itemClass="wh60"
                  itemPic="img/images/hero-all/tithero-430/icons/ic-abil.jpg"
                />
                <div className="skill-text-box">
                  <div className="skill-text">Boss gold drop + 2500%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="prize-two-box"></div>
        <div className="prize-three-box">
          <div className="box1">
            <div className="prize-name-box small">повышение</div>
            {/* <div className="girl-avatar-box">
              <img
                className="girl-avatar"
                src="img/images/hero-all/tithero-430/x1/ava/tithero-ava-1.jpg"
                loading="lazy"
              />
              <div className="prize-promote-box">
                <div className="prize-promote-text">3</div>
              </div>
            </div> */}
            <ItemBox
              itemClass="cardAva"
              itemPic="img/images/hero-all/tithero-00/x1/ava/tithero-ava-1.jpg"
            >
              <div className="prize-promote-box">
                <div className="prize-promote-text">3</div>
              </div>
            </ItemBox>
          </div>
          <div className="box2">
            <div className="prize-name-box small">Diamonds</div>
            {/* <div className="prize-box single">
              <div className="prize-item">
                <img
                  className="prize-pic"
                  src="img/diamond5.png"
                  loading="lazy"
                />
              </div>
              <div className="prize-text">1000</div>
            </div> */}
            <ItemBox itemPic="img/diamond5.png" count="1000" />
          </div>
        </div>
        <div className="buy-pack-all-box">
          <div className="new-old-price-box">
            <div className="old-price">
              regular price 250$
              <div className="price-nutaku"></div>
            </div>
            <div className="new-price">
              now just for 49$
              <div className="price-nutaku"></div>
            </div>
          </div>
          {/* <div className="buy-pack-btn">buy pack</div> */}
          <Button className="max green" text="buy pack" />
          <div className="value-box">
            <div className="value-num">500%</div>
            <div className="value-text">value!</div>
          </div>
        </div>
        <div className="wpck-plus"></div>
        <div className="wpck-plus-text">and</div>

        <ImageBg
          className="girlImg wpck5Girl"
          img={`img/images/hero-all/tithero-430/icons/break-girl.png`}
        />
      </div>
      <div className="wpck-timer-box">
        <div className="time-left">осталось</div>
        <div className="time-sec">309:17:07</div>
      </div>
    </>
  );
});
