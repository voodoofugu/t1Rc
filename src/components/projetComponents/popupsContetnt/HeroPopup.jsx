import React, { memo, useState } from "react";

import HeroMenuBox from "../UIComponents/HeroMenuBox";

function HeroRightSideCont1() {
  return (
    <>
      <div className="prm-allbonus-box">
        <div className="prm-bonus-box">
          <div className="prm-text">бонус повышения сейчас</div>
          <div className="prm-bonus">
            <div className="prm-price">+1000% DPS</div>
          </div>
        </div>
        <div className="prm-bonus-box next">
          <div className="prm-text">следующий бонус повышения</div>
          <div className="prm-bonus">
            <div className="prm-price">+1050% DPS</div>
          </div>
        </div>
        <div className="btn-simple-gold">
          <div className="color-btn-text">
            повысить
            <span className="f-diamond">30</span>
          </div>
        </div>
        <div className="btn-simple-silver demote">
          <div className="color-btn-text">
            demote
            <span className="f-diamond">10</span>
          </div>
        </div>
      </div>
      <div className="prgbarall-box">
        <div className="prgball-box">
          <div className="prgall-prom">
            <div
              className="prg-all-bar"
              style={{
                width: "85%",
              }}
            ></div>
          </div>
          <div className="prg-all-text">повышение 20</div>
        </div>
        <div className="herostar-box-promotion">
          <div className="herostar lvl03"></div>
        </div>
        <div className="herostar-box-promotion next">
          <div className="herostar lvl03"></div>
        </div>
      </div>
      <div className="girllvlall-box">
        <div className="girllvl-box">
          <div className="girllvl-name">формы героя</div>
          <div className="girl-box-scroll-box">
            <div className="girl-box-scroll">
              <div className="girl-box">
                <img
                  src="img/images/hero-all/tithero-5005/x1/tithero-5005-1.jpg"
                  loading="lazy"
                />
                <div className="herostar-box-promotion">
                  <div className="herostar lvl01"></div>
                </div>
                <div className="girl-box-disable">
                  <div className="block-icon"></div>
                  <div className="block-text">повысьте 0 раз(а)</div>
                </div>
              </div>
              <div className="girl-box">
                <img
                  src="img/images/hero-all/tithero-5005/x1/tithero-5005-2.jpg"
                  loading="lazy"
                />
                <div className="herostar-box-promotion">
                  <div className="herostar lvl02"></div>
                </div>
                <div className="girl-box-disable">
                  <div className="block-icon"></div>
                  <div className="block-text">повысьте 1 раз(а)</div>
                </div>
              </div>
              <div className="girl-box">
                <img
                  src="img/images/hero-all/tithero-5005/x1/tithero-5005-3.jpg"
                  loading="lazy"
                />
                <div className="herostar-box-promotion">
                  <div className="herostar lvl03"></div>
                </div>
                <div className="girl-box-disable">
                  <div className="block-icon"></div>
                  <div className="block-text">повысьте 3 раз(а)</div>
                </div>
              </div>
              <div className="girl-box active">
                <img
                  src="img/images/hero-all/tithero-5005/x1/tithero-5005-4.jpg"
                  loading="lazy"
                />
                <div className="herostar-box-promotion">
                  <div className="herostar lvl04"></div>
                </div>
                <div className="girl-box-disable">
                  <div className="block-icon"></div>
                  <div className="block-text">повысьте 7 раз(а)</div>
                </div>
              </div>
              <div className="girl-box disable">
                <img
                  src="img/images/hero-all/tithero-5005/x1/tithero-5005-5.jpg"
                  loading="lazy"
                />
                <div className="herostar-box-promotion">
                  <div className="herostar lvl05"></div>
                </div>
                <div className="girl-box-disable">
                  <div className="block-icon"></div>
                  <div className="block-text">повысьте 11 раз(а)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function HeroRightSideCont2() {
  return (
    <>
      <ul className="hero-abils">
        <li className="abil">
          <img
            className="icon"
            src="img/icons/ic-abil-5005.jpg"
            loading="lazy"
          />
          <div className="name">Meteor Strike I</div>
          <div className="text">
            +50% DPS for self and +1 to hero's tribute to Squad DPS
          </div>
        </li>
        <li className="abil">
          <img
            className="icon"
            src="img/icons/ic-abil-5005.jpg"
            loading="lazy"
          />
          <div className="name">Meteor Strike II</div>
          <div className="text">
            +50% DPS for self and +1 to hero's tribute to Squad DPS
          </div>
        </li>
        <li className="abil">
          <img
            className="icon"
            src="img/icons/ic-abil-5005.jpg"
            loading="lazy"
          />
          <div className="name">Meteor Strike III</div>
          <div className="text">
            +75% DPS for self and +1 to hero's tribute to Squad DPS
          </div>
        </li>
        <li className="abil">
          <img
            className="icon"
            src="img/icons/ic-abil-5005.jpg"
            loading="lazy"
          />
          <div className="name">Meteor Strike IV</div>
          <div className="text">
            +7.5% DPS of all heroes and +1 to hero's tribute to Squad DPS
          </div>
        </li>
        <li className="abil locked">
          <img
            className="icon"
            src="img/icons/ic-abil-5005.jpg"
            loading="lazy"
          />
          <div className="name">Meteor Strike V</div>
          <div className="text">
            +75% DPS for self and +1 to hero's tribute to Squad DPS
          </div>
          <div className="btn-buy">
            <div className="price gold">35.1M</div>
            <div className="txt">Открыть</div>
          </div>
        </li>
        <li className="abil locked">
          <img
            className="icon"
            src="img/icons/ic-abil-5005.jpg"
            loading="lazy"
          />
          <div className="name">Meteor Strike VI</div>
          <div className="text">
            +7.5% DPS of all heroes and +1 to hero's tribute to Squad DPS
          </div>
          <div className="btn-buy">
            <div className="price gold">1.81T</div>
            <div className="txt">Открыть</div>
          </div>
        </li>
        <li className="abil locked">
          <img
            className="icon"
            src="img/icons/ic-abil-5005.jpg"
            loading="lazy"
          />
          <div className="name">Meteor Strike VII</div>
          <div className="text">
            +100% DPS for self and +1 to hero's tribute to Squad DPS
          </div>
          <div className="btn-buy disabled">
            <div className="price">500 Уровень</div>
          </div>
        </li>
        <li className="abil locked">
          <img
            className="icon"
            src="img/icons/ic-abil-5005.jpg"
            loading="lazy"
          />
          <div className="name">Meteor Strike VIII</div>
          <div className="text">
            Increases your DPC by 0.5% of your total DPS. and +1 to hero's
            tribute to Squad DPS
          </div>
          <div className="btn-buy disabled">
            <div className="price">750 Уровень</div>
          </div>
        </li>
      </ul>
      <div className="color-btn gold disabled">
        <div className="color-btn-text">
          <div className="gold">
            <span className="f-gold">0</span>
          </div>
          <div className="color-btn-text1">Buy All</div>
        </div>
      </div>
    </>
  );
}

export default memo(function HeroPopup() {
  const [activeMenu, setActiveMenu] = useState("abils-btn");

  return (
    <>
      <div className="color-box"></div>
      <div className="hero-left-side">
        <div className="hero-grade-pic lvl2">
          <div className="viplvl">II</div>
        </div>
        <div className="hero-pieces-ram">100/200</div>
        <div className="hero-image">
          <img
            className="hero"
            src="img/images/hero-all/tithero-5005/x1/tithero-5005-5.jpg"
            loading="lazy"
          />
          <img
            className="hero ascend"
            src="img/images/hero-all/tithero-5005/x1/tithero-5005-5.jpg"
            loading="lazy"
          />
        </div>
        <div className="hero-info-box-all">
          <div className="hero-name">Moe Kasa</div>
          <div className="hero-info-box">
            <div className="hero-info">
              Tamaki is a master of the old school, her skills were passed on in
              her family circle, over time, the ringing began to produce
              thunderclaps, which helped the girl curb this power and become
              even stronger!
            </div>
          </div>
        </div>
        <div className="sh2-icon-forgirl right">
          <img src="img/cur2-cleric.png" loading="lazy" />
        </div>
      </div>
      <HeroMenuBox
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        tab1={["abils-btn", "Abilities", <HeroRightSideCont1 />]}
        tab2={["promotion-btn", "Promotion", <HeroRightSideCont2 />]}
        contentWrapClass={`hero-right-side${
          activeMenu === "abils-btn" ? " promotion" : ""
        }`}
      />
      <div className="hero-params">
        <div className="lvl-box">
          <div className="lvl">
            <div className="text">LEVEL</div>
            <div className="num">23551</div>
          </div>
          <div className="color-btn green">
            <div className="color-btn-text">
              <div className="gold">
                <span className="f-gold">238DD18</span>
              </div>
              <div className="color-btn-text1">up</div>
            </div>
          </div>
        </div>
        <div className="power-box">
          <div className="lvl">
            <div className="text">POWER</div>
            <div className="num">223</div>
          </div>
          <div className="color-btn green disabled">
            <div className="color-btn-text">
              <div className="pieces">
                <span className="f-pieces">2/10</span>
              </div>
              <div className="color-btn-text1">up</div>
            </div>
          </div>
        </div>
        <div className="dps-dpc-panel-box dps-x2 hero">
          <div className="dps">
            <div className="value">261ND14</div>
            <div className="mlt-prm">
              <span>+761M%</span>
            </div>
            <div className="dps-title">
              <div className="x2-dps">x20</div>
              DPS
              <div className="icon-dps"></div>
            </div>
          </div>
          <div>
            <div className="dps-dpc-panel-d1"></div>
            <div className="dps-dpc-panel-d2"></div>
          </div>
        </div>
        <div className="asc-lvl">20</div>
      </div>
      <div className="hero-nav">
        <div className="prev">
          <div className="arrow"></div>
          <div className="text">Пред. герой</div>
        </div>
        <div className="next disabled">
          <div className="arrow"></div>
          <div className="text">След. герой</div>
        </div>
      </div>
    </>
  );
});
