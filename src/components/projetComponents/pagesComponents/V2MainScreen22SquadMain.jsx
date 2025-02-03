import HeroBox from "../UIComponents/HeroBox";

import MorphScroll from "../../../../morphing-scroll/src/MorphScroll";
import ScrollThumb from "../UIComponents/ScrollThumb";

export const cssFiles = ["v2-screen-portal-squad"];

export default function V2MainScreen22SquadMain() {
  return (
    <div className="main lang-ru world2">
      <div
        className="main-bg"
        style={{
          backgroundImage: "url('../img/images/back/new/09-River.jpg')",
        }}
      ></div>
      <div className="header">
        <div className="resource-panel">
          <div className="avatar-box-all">
            <div className="avatar-box-pic">
              <img src="img/v2-master-pic1.png" loading="lazy" />
            </div>
            <div className="avatar-box-name">Rank 1</div>
          </div>
          <div className="resource-gold">
            <div className="value">100Q</div>
            <div className="value-bonus">
              <span>+30%</span>
            </div>
            <div className="resource-btn-add"></div>
            <div className="resource-pic">
              <img src="img/v2-res-gold.png" loading="lazy" />
            </div>
            <div className="anim-in-p gold"></div>
          </div>
          <div className="resource-vip lvl0">
            <div className="value-vip-diamond">1003003000000</div>
            <div className="value-vip-ticket">0</div>
            <div className="resource-btn-add"></div>
            <div className="resource-pic-vip">
              <div className="viplvl">VIP</div>
            </div>
          </div>
          <div className="might-box-all">
            <div>
              <div className="might-box-pic">
                <img className="bg" src="img/v2-cw-bg01.png" loading="lazy" />
                <img className="fg" src="img/v2-cw-p01.png" loading="lazy" />
              </div>
              <div className="might-box-name">Clan</div>
            </div>
          </div>
        </div>
        <div className="shop-chest-box-all">
          <div className="res-shop-btn">
            <div className="res-shop-btn-text">shop</div>
          </div>
          <div>
            <div className="res-chest-btn">
              <div className="res-chest-btn-text">Купить</div>
            </div>
            <div className="picmeh-ex-box">
              <div className="color-btn green">
                <div className="color-btn-text">exclusive offer</div>
                <div className="color-btn-timer">21:34:55</div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn signinout-btn in">
          <div className="icon-reg"></div>
          <div className="icon-reg2"></div>
        </div>
      </div>
      <div className="quest-box-all quests">
        <div className="quest-box-scroll">
          <div className="quest-box">
            <li className="quest quest-box">
              <img className="icon" src="img/ic-quests.png" loading="lazy" />
              <div className="quest-notif notif notif10"></div>
            </li>
            <li className="quest open" style={{ animationDelay: "0ms" }}>
              <img className="icon" src="img/change-sun3.png" loading="lazy" />
            </li>
            <li
              className="quest angel-pop open"
              style={{ animationDelay: "150ms" }}
            >
              <img
                className="icon"
                src="img/picmeh-ic-angel-pop.png"
                loading="lazy"
              />
            </li>
            <li className="quest-fortune open">
              <img
                className="icon"
                src="img/fapop-right-icon.png"
                loading="lazy"
              />
              <div className="timerbox">
                <div className="timer">00:00:00</div>
              </div>
            </li>
            <li className="quest-fortune">
              <img className="icon" src="img/ic-fortuna.png" loading="lazy" />
              <div className="timerbox">
                <div className="timer">SPIN!</div>
              </div>
            </li>
            <li
              className="quest startpack open"
              style={{ animationDelay: "300ms" }}
            >
              <img
                className="icon"
                src="img/rating-sign-gold@1x.png"
                loading="lazy"
              />
              <div className="timerbox">
                <div className="timer">146:36:30</div>
              </div>
            </li>
            <li className="quest startpack wide">
              <img className="icon" src="img/v2-ns-chest.png" loading="lazy" />
              <div className="timerbox">
                <div className="timer">6D 02:36</div>
              </div>
            </li>
            <li className="quest startpack wide">
              <img
                className="icon"
                src="img/v2-mn-pr-100-in.png"
                loading="lazy"
              />
              0
            </li>
            <li
              className="quest startpack open"
              style={{ animationDelay: "450ms" }}
            >
              <img
                className="icon"
                src="img/icn-dual-ball.png"
                loading="lazy"
              />
              <div className="timerbox">
                <div className="timer">00:00:00</div>
              </div>
            </li>
            <li
              className="quest startpack open"
              style={{ animationDelay: "600ms" }}
            >
              <img
                className="icon"
                src="img/ic-blackfriday.png"
                loading="lazy"
              />
              <div className="timerbox" style={{ top: "46px" }}>
                <div className="timer">17D 23:36:30</div>
              </div>
            </li>
            <li
              className="quest startpack open"
              style={{ animationDelay: "750ms" }}
            >
              <img
                className="icon"
                src="img/v2-xmas-chest-red.png"
                loading="lazy"
              />
              0
            </li>
            <li className="quest startpack wide">
              <img
                className="icon"
                src="img/evPopArts/angel_spirit_1.png"
                loading="lazy"
              />
            </li>
            <li
              className="quest startpack open"
              style={{ animationDelay: "900ms" }}
            >
              <img className="icon" src="img/m-ico-gold.png" loading="lazy" />
              <div className="timerbox">
                <div className="timer">21:33:40</div>
              </div>
            </li>
            <li className="quest-fortune picmeh-info info">
              <img
                className="icon"
                src="img/picmeh-ic-diamond.png"
                loading="lazy"
              />
            </li>
            <li
              className="quest startpack open"
              style={{ animationDelay: "1050ms" }}
            >
              <img
                className="icon"
                src="img/v2-fw-icon-fr0.png"
                loading="lazy"
              />
              <div className="timerbox">
                <div className="timer">75:36:30</div>
              </div>
            </li>
            <li
              className="quest startpack open"
              style={{ animationDelay: "1200ms" }}
            >
              <img className="icon" src="img/ic-bf.png" loading="lazy" />
              <div className="timerbox">
                <div className="timer">482:36:30</div>
              </div>
            </li>
            <li
              className="quest startpack open"
              style={{ animationDelay: "1350ms" }}
            >
              <img
                className="icon"
                src="img/zetta-icon-70.png"
                loading="lazy"
              />
              <div className="timerbox">
                <div className="timer">69:34:55</div>
              </div>
            </li>
            <li
              className="quest startpack open"
              style={{ animationDelay: "1500ms" }}
            >
              <img className="icon" src="img/sunduk-60.png" loading="lazy" />
              <div className="timerbox">
                <div className="timer">21:34:52</div>
              </div>
            </li>
            <li className="quest open" style={{ animationDelay: "1650ms" }}>
              <img className="icon" src="img/m-ico-quest.png" loading="lazy" />
            </li>
            <li className="quest open" style={{ animationDelay: "1800ms" }}>
              <img className="icon" src="img/m-ico-quest.png" loading="lazy" />
            </li>
          </div>
        </div>
        <div className="opt-panel-box">
          <div className="color-bg"></div>
          <div className="btn feedback"></div>
          <div className="btn statistic"></div>
          <div className="btn settings"></div>
          <div className="btn ru"></div>
        </div>
        <a
          className="btn-discord"
          href="https://discord.gg/7pjeXF3emj"
          target="_blank"
          rel="noreferrer"
        ></a>
      </div>
      <div className="left-side false false">
        <div className="left-panel false false">
          <div className="container undefined">
            <div className="container">
              <div
                className="heroes-list-all-box"
                style={{ visibility: "visible" }}
              >
                <div className="dps-dpc-panel-box dps-x2">
                  <div className="dpc">
                    <div className="value">1.41K</div>
                    <div className="mlt-prm"></div>
                    <div className="title">
                      DPC
                      <div className="icon-dpc"></div>
                    </div>
                  </div>
                  <div className="dps">
                    <div className="value">35.5K</div>
                    <div className="mlt-prm">
                      <span>
                        +5%<span> idle</span>
                      </span>
                    </div>
                    <div className="title">
                      DPS
                      <div className="icon-dps"></div>
                    </div>
                  </div>
                  <div>
                    <div className="dps-dpc-panel-d1"></div>
                    <div className="dps-dpc-panel-d2"></div>
                  </div>
                </div>
                <div className="all-heroes-box">
                  <MorphScroll
                    className="heroBoxsScroll"
                    size={[504, 346]}
                    objectsSize={[470, 132]}
                    gap={12}
                    padding={[0, 5]}
                    progressTrigger={{
                      wheel: true,
                      progressElement: <ScrollThumb />,
                    }}
                    progressElement={<ScrollThumb />}
                    edgeGradient={{ color: "#584a49" }}
                    render={{ type: "virtual" }}
                    progressVisibility="hover"
                    contentAlign={["center", "center"]}
                    emptyElements={{ mode: "clear" }}
                  >
                    <HeroBox
                      key={1}
                      className="squad"
                      name="Squad #1"
                      lvl="6969"
                      dps="777"
                      power="123"
                      itemClass="selectable cardAva block"
                      imgId={446}
                      heroClass="gun"
                    />
                    <div className="hero-card-wrap bronze-color-bg">
                      <div className="hero-card">
                        <div className="squad-info-buttons">
                          <div className="suphero-buttons-info">Squad #1</div>
                          <div className="suphero-buttons-dpc">
                            <div className="dpc-info">200</div>
                          </div>
                          <div className="suphero-buttons-dps">
                            <div className="dps-info">6.33K</div>
                          </div>
                        </div>
                        <div className="hero-level-box">
                          Rank
                          <div className="hero-level">bronze</div>
                        </div>
                        <div className="specialization-icon">
                          <div className="cls">
                            <img src="img/cur2-wizard.png" loading="lazy" />
                          </div>
                          <div className="elem">
                            <img src="img/elements/Water.png" loading="lazy" />
                          </div>
                        </div>
                        <div className="squad-card-heroes">
                          <div className="squad-card-hero-wrap lvl0">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-5001/x1/ava/tithero-5001-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="squad-card-hero-wrap lvl1">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-5002/x1/ava/tithero-5002-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="squad-card-hero-wrap lvl1">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-5003/x1/ava/tithero-5003-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="squad-card-hero-wrap lvl2">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-5004/x1/ava/tithero-5004-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="squad-card-hero-wrap lvl2">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-5005/x1/ava/tithero-5005-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="squad-card-hero-wrap lvl2">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-5006/x1/ava/tithero-5006-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hero-card-wrap silver-color-bg">
                      <div className="hero-card">
                        <div className="squad-info-buttons">
                          <div className="suphero-buttons-info">Squad #2</div>
                          <div className="suphero-buttons-dpc">
                            <div className="dpc-info">100</div>
                          </div>
                          <div className="suphero-buttons-dps">
                            <div className="dps-info">1.78K</div>
                          </div>
                        </div>
                        <div className="hero-level-box">
                          Rank
                          <div className="hero-level">silver</div>
                        </div>
                        <div className="specialization-icon">
                          <div className="cls">
                            <img src="img/cur2-druid.png" loading="lazy" />
                          </div>
                          <div className="elem">
                            <img src="img/elements/Fire.png" loading="lazy" />
                          </div>
                        </div>
                        <div className="squad-card-heroes">
                          <div className="squad-card-hero-wrap lvl3">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-5007/x1/ava/tithero-5007-4-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="squad-card-hero-wrap lvl3">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-5008/x1/ava/tithero-5008-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="squad-card-hero-wrap lvl3">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-5009/x1/ava/tithero-5009-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="squad-card-hero-wrap lvl4">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-5010/x1/ava/tithero-5010-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="squad-card-hero-wrap lvl4">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-11/x1/ava/tithero-11-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="squad-card-hero-wrap lvl4">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-13/x1/ava/tithero-13-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hero-card-wrap gold-color-bg">
                      <div className="hero-card">
                        <div className="squad-info-buttons">
                          <div className="suphero-buttons-info">Squad #3</div>
                          <div className="suphero-buttons-dpc">
                            <div className="dpc-info">100</div>
                          </div>
                          <div className="suphero-buttons-dps">
                            <div className="dps-info">1.89K</div>
                          </div>
                        </div>
                        <div className="hero-level-box">
                          Rank
                          <div className="hero-level">gold</div>
                        </div>
                        <div className="specialization-icon">
                          <div className="hero-level"></div>
                          <div className="cls">
                            <img src="img/cur2-cleric.png" loading="lazy" />
                          </div>
                          <div className="elem">
                            <img src="img/elements/Earth.png" loading="lazy" />
                          </div>
                        </div>
                        <div className="squad-card-heroes">
                          <div className="squad-card-hero-wrap lvl5">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-14/x1/ava/tithero-14-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="squad-card-hero-wrap lvl5">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-15/x1/ava/tithero-15-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="squad-card-hero-wrap lvl5">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-16/x1/ava/tithero-16-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="squad-card-hero-wrap lvl6">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-17/x1/ava/tithero-17-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="squad-card-hero-wrap lvl6">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-18/x1/ava/tithero-18-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="squad-card-hero-wrap lvl6">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-19/x1/ava/tithero-19-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hero-card-wrap platinum-color-bg">
                      <div className="hero-card">
                        <div className="squad-info-buttons">
                          <div className="suphero-buttons-info">Squad #4</div>
                          <div className="suphero-buttons-dpc">
                            <div className="dpc-info">100</div>
                          </div>
                          <div className="suphero-buttons-dps">
                            <div className="dps-info">2K</div>
                          </div>
                        </div>
                        <div className="hero-level-box">
                          Rank
                          <div className="hero-level">platinum</div>
                        </div>
                        <div className="specialization-icon">
                          <div className="hero-level"></div>
                          <div className="cls">
                            <img src="img/cur2-barbarian.png" loading="lazy" />
                          </div>
                          <div className="elem">
                            <img src="img/elements/Air.png" loading="lazy" />
                          </div>
                        </div>
                        <div className="squad-card-heroes">
                          <div className="squad-card-hero-wrap lvl7">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-20/x1/ava/tithero-20-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="squad-card-hero-wrap lvl7">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-21/x1/ava/tithero-21-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="squad-card-hero-wrap lvl7">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-22/x1/ava/tithero-22-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="squad-card-hero-wrap lvl8">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-23/x1/ava/tithero-23-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="squad-card-hero-wrap lvl8">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-24/x1/ava/tithero-24-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="squad-card-hero-wrap lvl8">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-25/x1/ava/tithero-25-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hero-card-wrap diamond-color-bg">
                      <div className="hero-card">
                        <div className="squad-info-buttons">
                          <div className="suphero-buttons-info">Squad #5</div>
                          <div className="suphero-buttons-dpc">
                            <div className="dpc-info">200</div>
                          </div>
                          <div className="suphero-buttons-dps">
                            <div className="dps-info">9.67K</div>
                          </div>
                        </div>
                        <div className="hero-level-box">
                          Rank
                          <div className="hero-level">diamond</div>
                        </div>
                        <div className="specialization-icon">
                          <div className="hero-level"></div>
                          <div className="cls">
                            <img src="img/cur2-gun.png" loading="lazy" />
                          </div>
                          <div className="elem">
                            <img src="img/elements/Death.png" loading="lazy" />
                          </div>
                        </div>
                        <div className="squad-card-heroes">
                          <div className="squad-card-hero-wrap lvl9">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-26/x1/ava/tithero-26-4-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="squad-card-hero-wrap lvl9">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-27/x1/ava/tithero-27-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="squad-card-hero-wrap lvl9">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-28/x1/ava/tithero-28-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="squad-card-hero-wrap lvl10">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-29/x1/ava/tithero-29-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="squad-card-hero-wrap lvl10">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-30/x1/ava/tithero-30-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="squad-card-hero-wrap lvl10">
                            <div className="squad-card-hero">
                              <img
                                className="squad-card-hero-img"
                                src="img/images/hero-all/tithero-31/x1/ava/tithero-31-5-ava.jpg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </MorphScroll>
                </div>
                <div className="x2-btn-all-box">
                  <div className="x2-btn wide">
                    <div className="x2-btn-text">ALL SQUADS</div>
                  </div>
                  <div className="x2-btn wide">
                    <div className="x2-btn-text">PROMOTE SQUADS</div>
                  </div>
                  <div className="x2-btn wide">
                    <div className="x2-btn-text">WORLD QUESTS</div>
                  </div>
                </div>
              </div>
              <div className="tab-loading-wrapper border"></div>
            </div>
            <div className="skills-all-box">
              <div className="skills-all">
                <div className="skills-pic">
                  <img
                    className="icon"
                    src="img/skill-icons/skill-icon01.png"
                    loading="lazy"
                  />
                  <div className="skills-pic-disabled"></div>
                </div>
                <div className="skills-pic">
                  <img
                    className="icon"
                    src="img/skill-icons/skill-icon02.png"
                    loading="lazy"
                  />
                  <div className="skills-pic-disabled"></div>
                </div>
                <div className="skills-pic">
                  <img
                    className="icon"
                    src="img/skill-icons/skill-icon03.png"
                    loading="lazy"
                  />
                  <div className="skills-pic-disabled"></div>
                </div>
                <div className="skills-pic">
                  <img
                    className="icon"
                    src="img/skill-icons/skill-icon04.png"
                    loading="lazy"
                  />
                  <div className="skills-pic-disabled"></div>
                </div>
                <div className="skills-pic">
                  <img
                    className="icon"
                    src="img/skill-icons/skill-icon05.png"
                    loading="lazy"
                  />
                  <div className="skills-pic-disabled"></div>
                </div>
                <div className="skills-pic">
                  <img
                    className="icon"
                    src="img/skill-icons/skill-icon06.png"
                    loading="lazy"
                  />
                  <div className="skills-pic-disabled"></div>
                </div>
                <div className="skills-pic">
                  <img
                    className="icon"
                    src="img/skill-icons/skill-icon07.png"
                    loading="lazy"
                  />
                  <div className="skills-pic-disabled"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tabs-all-box">
          <a className="tabs-all heroes selected" href="#/" aria-current="page">
            <div style={{ width: "100%", height: "100%" }}>
              <div className="tabs-name">Heroes</div>
              <div className="tabs-pic">
                <img src="img/tab-01.png" loading="lazy" />
              </div>
            </div>
          </a>
          <a className="tabs-all guild" href="#/guild">
            <div style={{ width: "100%", height: "100%" }}>
              <div className="tabs-name">Guild base</div>
              <div className="tabs-pic">
                <img src="img/tab-08.png" loading="lazy" />
              </div>
            </div>
            <div className="v2-tab-notif notif notif20"></div>
          </a>
          <a className="tabs-all album" href="#/galery/pictures">
            <div style={{ width: "100%", height: "100%" }}>
              <div className="tabs-name">Gallery</div>
              <div className="tabs-pic">
                <img src="img/tab-05.png" loading="lazy" />
              </div>
            </div>
          </a>
          <a className="tabs-all rating" href="#/rating/jewerly">
            <div style={{ width: "100%", height: "100%" }}>
              <div className="tabs-name">Rating Tab</div>
              <div className="tabs-pic">
                <img src="img/tab-02.png" loading="lazy" />
              </div>
            </div>
          </a>
          <a className="tabs-all squests" href="#/quests/daily">
            <div style={{ width: "100%", height: "100%" }}>
              <div className="tabs-name">Quests</div>
              <div className="tabs-pic">
                <img src="img/tab-10.png" loading="lazy" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
