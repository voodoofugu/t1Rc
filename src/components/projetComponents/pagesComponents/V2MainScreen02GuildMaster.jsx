import { useState } from "react";

import { nexusEffect } from "nexus-state";

import HeroMenuBox from "../UIComponents/HeroMenuBox";

import StatsBoxAll from "../UIComponents/StatsBoxAll";
import AbilsBoxAll from "../UIComponents/AbilsBoxAll";
import SkinBoxAll from "../UIComponents/SkinBoxAll";

export const cssFiles = [
  "clan-trophies",
  "notifications",
  "screen-master-house",
  "screen-info-pop",
];

export default function V2MainScreen02GuildMaster({ pageName, children }) {
  const [activeMenu, setActiveMenu] = useState("stats");
  const [nameEdit, setNameEdit] = useState(false);

  return (
    <div className="main lang-ru world1">
      <div
        className="main-bg"
        style={{
          backgroundImage:
            "url('../img/images/back/new/12-Undersea-world.jpg')",
        }}
      ></div>
      <div className="header">
        <div className="resource-panel">
          <div className="avatar-box-all">
            <div className="avatar-box-pic">
              <img src="img/v2-master-pic1.png" loading="lazy" />
            </div>
            <div className="avatar-box-name">Rank 27</div>
          </div>
          <div className="resource-gold">
            <div className="value">6.57BD22</div>
            <div className="value-bonus">
              <span>+29.9M%</span>
            </div>
            <div className="resource-btn-add"></div>
            <div className="resource-pic">
              <img src="img/v2-res-gold.png" loading="lazy" />
            </div>
            <div className="anim-in-p gold"></div>
          </div>
          <div className="resource-vip lvl0">
            <div className="value-vip-diamond">21</div>
            <div className="value-vip-ticket">2</div>
            <div className="resource-btn-add"></div>
            <div className="resource-pic-vip">
              <div className="viplvl">VIP</div>
            </div>
          </div>
          <div className="might-box-all">
            <div>
              <div className="might-box-pic">
                <img className="bg" src="img/v2-cw-bg34.png" loading="lazy" />
                <img className="fg" src="img/v2-cw-p03.png" loading="lazy" />
              </div>
              <div className="might-box-name">Valhalla</div>
            </div>
          </div>
        </div>
        <div className="shop-chest-box-all">
          <div className="res-shop-btn">
            <div className="res-shop-btn-text">shop</div>
          </div>
          <div>
            <div className="res-chest-btn">
              <div className="res-chest-btn-text">Chests</div>

              <div className="v2-bosschest-notif notif"></div>
            </div>
          </div>
        </div>
        <div className="btn signinout-btn out">
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
            <li className="quest open" style={{ animationDelay: "150ms" }}>
              <img
                className="icon"
                src="img/ic-abil-reborn.png"
                loading="lazy"
              />
            </li>
            <li
              className="quest angel-pop open"
              style={{ animationDelay: "300ms" }}
            >
              <img
                className="icon"
                src="img/picmeh-ic-angel-pop.png"
                loading="lazy"
              />
            </li>
            <li className="quest-fortune">
              <img className="icon" src="img/ic-fortuna.png" loading="lazy" />
              <div className="timerbox">
                <div className="timer">SPIN!</div>
              </div>
            </li>
            <li
              className="quest startpack open"
              style={{ animationDelay: "450ms" }}
            >
              <img
                className="icon"
                src="img/rating-sign-gold@1x.png"
                loading="lazy"
              />
              <div className="timerbox">
                <div className="timer">19:31:07</div>
              </div>
            </li>
            <li className="quest startpack wide">
              <img className="icon" src="img/v2-ns-chest.png" loading="lazy" />
              <div className="timerbox">
                <div className="timer">19:31:07</div>
              </div>
            </li>
            <li
              className="quest startpack open"
              style={{ animationDelay: "600ms" }}
            >
              <img className="icon" src="img/v2-ns-ball.png" loading="lazy" />
              <div className="timerbox">
                <div className="timer">19:31:07</div>
              </div>
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
              style={{ animationDelay: "750ms" }}
            >
              <img className="icon" src="img/m-ico-gold.png" loading="lazy" />
              <div className="timerbox">
                <div className="timer">06:16:16</div>
              </div>
            </li>
            <li className="quest-fortune picmeh-info info">
              <img
                className="icon"
                src="img/picmeh-ic-diamond.png"
                loading="lazy"
              />
            </li>
            <li className="quest open" style={{ animationDelay: "900ms" }}>
              <img className="icon" src="img/m-ico-quest.png" loading="lazy" />
            </li>
            <li className="quest open" style={{ animationDelay: "1050ms" }}>
              <img
                className="icon"
                src="img/m-ico-quest-gift.png"
                loading="lazy"
              />
            </li>
            <li className="quest open" style={{ animationDelay: "1200ms" }}>
              <img
                className="icon"
                src="img/m-ico-quest-gift.png"
                loading="lazy"
              />
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
        <div className="left-panel wide false false">
          <div className="container">
            <div style={{ visibility: "visible" }}>
              <div className="tab-panel-box master">
                <div className="tab-panel-box-title">master house</div>
                <div className="btn-close-x"></div>
                <div
                  className="color-btn-info"
                  onClick={() => {
                    nexusEffect({
                      type: "handlePopup",
                      payload: {
                        type: "open",
                        data: {
                          mpopClass: "m-popup info-pop",
                          popTit: "Info",
                          popCont: [
                            "InfoPop",
                            {
                              text: "Here you can raise your character's stats, upgrade your abilities, and get an interesting look from events.",
                              btnText1: "I understand",
                            },
                          ],
                        },
                      },
                    });
                  }}
                ></div>
                <div>
                  <div className="leftside-box-all">
                    <div>
                      <div className="master-box">
                        <img
                          src="img/p-master-a1.jpg"
                          className="master-hero"
                          loading="lazy"
                        />
                      </div>
                      <div className="master-name-box-all">
                        <div
                          className={`master-name-box ${
                            nameEdit ? "edit" : ""
                          }`}
                        >
                          {nameEdit ? (
                            <input
                              className="master-name-edit"
                              id="bob"
                              type="text"
                              name="name"
                              maxLength="20"
                              style={{ display: "block" }}
                            />
                          ) : (
                            <div className="master-name">adad</div>
                          )}
                          <div
                            className={
                              nameEdit ? "btn-enter-small" : "btn-edit-small"
                            }
                            onClick={() => setNameEdit(!nameEdit)}
                          ></div>
                        </div>
                        <div className="master-bonus-box-all">
                          <div className="master-bonus-text">bonus</div>
                          <div className="master-bonus-num">+100% gold</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rightside-box-all">
                    <HeroMenuBox
                      activeMenu={activeMenu}
                      setActiveMenu={setActiveMenu}
                      tab1={["stats", "Stats", <StatsBoxAll />]}
                      tab2={["abil", "Abils", <AbilsBoxAll />]}
                      tab3={["skin", "Skins", <SkinBoxAll />]}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-loading-wrapper border"></div>
          </div>
        </div>
        <div className="tabs-all-box">
          <a className="tabs-all heroes">
            <div style={{ width: "100%", height: "100%" }}>
              <div className="tabs-name">Heroes</div>
              <div className="tabs-pic">
                <img src="img/tab-01.png" loading="lazy" />
              </div>
            </div>
          </a>
          <a className="tabs-all guild selected">
            <div style={{ width: "100%", height: "100%" }}>
              <div className="tabs-name">Guild base</div>
              <div className="tabs-pic">
                <img src="img/tab-08.png" loading="lazy" />
              </div>
            </div>
          </a>
          <a className="tabs-all album">
            <div style={{ width: "100%", height: "100%" }}>
              <div className="tabs-name">Gallery</div>
              <div className="tabs-pic">
                <img src="img/tab-05.png" loading="lazy" />
              </div>
            </div>
          </a>
          <a className="tabs-all rating">
            <div style={{ width: "100%", height: "100%" }}>
              <div className="tabs-name">Rating Tab</div>
              <div className="tabs-pic">
                <img src="img/tab-02.png" loading="lazy" />
              </div>
            </div>
          </a>
          <a className="tabs-all squests">
            <div style={{ width: "100%", height: "100%" }}>
              <div className="tabs-name">Quests</div>
              <div className="tabs-pic">
                <img src="img/tab-10.png" loading="lazy" />
              </div>
            </div>
          </a>
        </div>
      </div>
      {children}
    </div>
  );
}
