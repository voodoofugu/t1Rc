import { useState } from "react";

import { nexusDispatch } from "nexus-state";

import WorldBtnBox from "../UIComponents/WorldBtnBox";
import StateChangeBtn from "../UIComponents/StateChangeBtn";

import AllTowerBox from "../UIComponents/AllTowerBox";
import TowerRelicsBoxScroll from "../UIComponents/TowerRelicsBoxScroll";
import TowerTrophyBoxScroll from "../UIComponents/TowerTrophyBoxScroll";
import RaidbossAnimationBox from "../UIComponents/RaidbossAnimationBox";

import TrophyResBoxAll from "../UIComponents/TrophyResBoxAll";
import DpsDpcPanelBox from "../UIComponents/DpsDpcPanelBox";
import X2BtnAllBox from "../UIComponents/X2BtnAllBox";
import TabPanelTowerQuest from "../UIComponents/TabPanelTowerQuest";
import SkillsAllBox from "../UIComponents/SkillsAllBox";
import Monster from "../UIComponents/Monster";
import MonsterPrgBoxAll from "../UIComponents/MonsterPrgBoxAll";
import BossbtnBox from "../UIComponents/BossbtnBox";

import HeroMenuBox from "../UIComponents/HeroMenuBox";
import SwitchTab from "../UIComponents/SwitchTab";
import RatingPedBox from "../UIComponents/RatingPedBox";
import AllHeroesBoxScroll from "../UIComponents/AllHeroesBoxScroll";
import ResCount from "../UIComponents/ResCount";

export const cssFiles = [
  "v2-screen-tower",
  "v2-screen-tower-boss",
  "v2-screen-tower-top",
  "v2-screen-tower-relics",
  "v2-screen-tower-quest",
  "v2-screen-tower-trophy",
  "v2-screen-tower-relics-pop",
  "v2-screen-tower-trophy-pop",
  "screen-superhero",
  "screen-unipop-subscription",
  "v2-screen-main-relics-pop",

  "v2-screen-nsale-main",
  "v2-screen-nsale-shop",
  "v2-screen-nsale-fountain",
  "v2-screen-nsale-stupen",
  "v2-screen-nsale-stupen-pop",
  "screen-info-pop",
];

export default function V2MainScreen02GuildTower({ pageName, children }) {
  const [hole, sethole] = useState(false);
  const [leftPanel, setLeftPanel] = useState(true);
  const [fight, setFight] = useState(false);
  const [activeMenu, setActiveMenu] = useState("towerBtn");
  const [activeTab, setActiveTab] = useState(false);
  const [topContent, setTopContent] = useState(false);
  const [toHard, setToHard] = useState(false);

  return (
    <div className="main world1">
      <div
        className="main-bg"
        style={{
          backgroundImage: "url('../img/images/back/new/02-Forest-2.jpg')",
        }}
      ></div>
      <div className="header">
        <div className="resource-panel">
          <div className="avatar-box-all">
            <div className="avatar-box-pic">
              <img src="img/hero0093-ava.jpg" loading="lazy" />
            </div>
            <div className="avatar-box-name">Dormidont</div>
          </div>
          <div className="resource-gold">
            <div className="value">6969K</div>
            <div className="value-bonus">+6969K%</div>
            <div className="resource-btn-add"></div>
            <div className="resource-pic">
              <img src="img/v2-res-gold.png" loading="lazy" />
            </div>
          </div>
          <div className="resource-vip lvl5">
            <div className="value-vip-diamond">6969K</div>
            <div className="value-vip-ticket">6969K</div>
            <div className="resource-btn-add"></div>
            <div className="resource-pic-vip">
              <div className="viplvl">VIP</div>
            </div>
          </div>
        </div>
        <div className="shop-chest-box-all">
          <div className="res-shop-btn">
            <div className="res-shop-btn-text">магазин</div>
          </div>
          <div className="res-chest-btn">
            <div className="res-chest-btn-text">Chests</div>
          </div>
        </div>
        <div className="singinout-btn out">
          <div className="singinout-btn-text">sign out</div>
        </div>
      </div>
      <div className="quest-box-all">
        <div className="quest-box-scroll">
          <div className="quest-box">
            <div
              className="quest"
              onClick={() => {
                setFight(false);
              }}
            >
              <img
                className="icon"
                src={
                  hole ? "img/hole/holeIcn.png" : "img/rating-sign-gold@1x.png"
                }
                loading="lazy"
              />
            </div>
            <div className="quest" style={{ transform: "translateY(-12px)" }}>
              <div className="timerbox">
                <div className="timer">Popups</div>
              </div>
            </div>
            <div
              className="quest trophy-pop"
              onClick={() => {
                nexusDispatch({
                  type: "handlePopup",
                  payload: {
                    type: "open",
                    data: {
                      mpopClass: "m-popup tower-relics-pop",
                      popTit: "choose a relic",
                      popCont: "TowerRelics",
                      props: { hole: `${hole}` },
                    },
                  },
                });
              }}
            >
              <img
                className="icon"
                src="img/v2-relics-stone.png"
                loading="lazy"
              />
              <div className="timerbox">
                <div className="timer">Trophy</div>
              </div>
            </div>
            <div
              className="quest tower-trophy-pop"
              onClick={() => {
                nexusDispatch({
                  type: "handlePopup",
                  payload: {
                    type: "open",
                    data: {
                      mpopClass: "m-popup tower-trophy-pop",
                      popTit: "Pillar of DPC",
                      popCont: "TowerTrophy",
                    },
                  },
                });
              }}
            >
              <img
                className="icon"
                src="img/trophy/v2-trophy-dragon-head-c.png"
                loading="lazy"
              />
              <div className="timerbox">
                <div className="timer">Relics</div>
              </div>
            </div>
            <div
              className="quest tower-mag-box"
              onClick={() => {
                nexusDispatch({
                  type: "handlePopup",
                  payload: {
                    type: "open",
                    data: {
                      popCont: "MnPopupNsaleMain",
                      props: { hole: `${hole}` },
                      btnXClass: "mn-pop-btn-close-x",
                    },
                  },
                });
              }}
            >
              <img
                className="icon"
                src={
                  hole === true
                    ? "img/hole/holeChest.png"
                    : "img/v2-ns-chest.png"
                }
                loading="lazy"
              />
            </div>
            <div
              className="quest InfoPop"
              onClick={() => {
                nexusDispatch({
                  type: "handlePopup",
                  payload: {
                    type: "open",
                    data: {
                      mpopClass: `m-popup info-pop ${
                        hole === true ? "hole" : ""
                      }`,
                      popTit: "Info",
                      popCont: "InfoPop",
                      props: {
                        colorBox: true,
                        text: "HTML_TEXT2",
                        textExtra:
                          "Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum",
                        btnText1: "Current Level",
                        btnText2: "Increase Difficulty",
                        btnClass1: "bleuPurple",
                        btnClass2: "bleuRed",
                      },
                    },
                  },
                });
              }}
            >
              <img className="icon" src="img/2vip-s5@2x.png" loading="lazy" />
              <div className="timerbox">
                <div className="timer">Info</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="left-side false false">
        <div
          className={`left-panel wide ${fight === true ? "fight" : ""} ${
            activeMenu === "towerBtn"
              ? "tower"
              : activeMenu === "relicsBtn"
              ? "relics"
              : activeMenu === "trophiesBtn"
              ? "trophy"
              : activeMenu === "topBtn"
              ? "top"
              : ""
          } ${activeTab === true ? "top" : ""}`}
        >
          {leftPanel === true && (
            <div>
              <div className="container">
                <div className="heroes-list-all-box">
                  <DpsDpcPanelBox />
                  <div className="all-heroes-box">
                    {activeTab === false ? (
                      <AllHeroesBoxScroll />
                    ) : (
                      <RatingPedBox />
                    )}
                  </div>
                  <SwitchTab
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    tab1={["Heroes"]}
                    tab2={["Top"]}
                  />
                  {activeTab === false && <X2BtnAllBox />}
                </div>
                <div className="tab-loading-wrapper border"></div>
              </div>
              <div className="tower-rightside-box-all">
                {fight === true && (
                  <div className="right-side">
                    <div className="skills-wrap">
                      <SkillsAllBox />
                    </div>
                    <Monster />
                    <MonsterPrgBoxAll />
                    <BossbtnBox hole={hole} />
                  </div>
                )}
                {fight === false && (
                  <>
                    <div className="tower-right-wrap">
                      <div className="btn-close-x"></div>
                      <div className="tab-panel-box-title">
                        {hole === true ? "dark hole" : "dark tower"}
                      </div>
                      <div className="color-btn-info"></div>
                      <div
                        className="color-btn gblue rb-koi"
                        onClick={() => {
                          nexusDispatch({
                            type: "handlePopup",
                            payload: {
                              type: "open",
                              data: {
                                popCont: "MnPopupNsaleMain",
                                props: { hole: `${hole}` },
                                btnXClass: "mn-pop-btn-close-x",
                              },
                            },
                          });
                        }}
                      >
                        <img
                          className="domik"
                          src={
                            hole
                              ? "img/hole/holeChest.png"
                              : "img/v2-ns-chest.png"
                          }
                          loading="lazy"
                        />
                        <div className="color-btn-text">
                          {hole ? "Chests 256" : "Boxes 256"}
                        </div>
                      </div>
                      <div
                        className="color-btn questBtn"
                        onClick={() => setLeftPanel(false)}
                      >
                        <img
                          className="icn"
                          src="img/questChainIcn.png"
                          loading="lazy"
                        />
                        <div className="color-btn-text">Quest Chain</div>
                      </div>
                      <HeroMenuBox
                        activeMenu={activeMenu}
                        setActiveMenu={setActiveMenu}
                        tab1={[
                          "towerBtn",
                          "Tower",
                          <>
                            <AllTowerBox setFight={setFight} hole={hole} />
                            {hole ? (
                              <>
                                <div className="color-btn towerBtn">
                                  <img
                                    className="domik"
                                    src="img/hole/holeIcn.png"
                                    loading="lazy"
                                  />
                                  <div
                                    className="color-btn-text"
                                    onClick={() => {
                                      nexusDispatch({
                                        type: "handlePopup",
                                        payload: {
                                          type: "open",
                                          data: {
                                            mpopClass: "m-popup info-pop hole",
                                            popTit: "Info",
                                            popCont: "InfoPop",
                                            props: {
                                              colorBox: true,
                                              text: "HTML_TEXT3",
                                              btnText1: "Return to сurrent lvl",
                                              btnText2: "Reset the difficulty",
                                              btnClass1: "bleuPurple",
                                              btnClass2: "bleuRed",
                                            },
                                          },
                                        },
                                      });
                                    }}
                                  >
                                    {toHard ? "◄ Back" : "EASY MODE"}
                                  </div>
                                </div>
                                <ResCount
                                  img="img/hole/holeEnergy.png"
                                  value="234"
                                  plus
                                  onClick={() => {
                                    nexusDispatch({
                                      type: "handlePopup",
                                      payload: {
                                        type: "open",
                                        data: {
                                          mpopClass: "m-popup essence-buy",
                                          popTit: "Buy Dices",
                                          popCont: "BuyShop",
                                          props: {
                                            img1: "hole/holeEnergy_1",
                                            img2: "hole/holeEnergy_2",
                                            img3: "hole/holeEnergy_3",
                                            img4: "hole/holeEnergy_4",
                                          },
                                        },
                                      },
                                    });
                                  }}
                                  className="energy"
                                />
                                <ResCount
                                  img="img/hole/holeKay.png"
                                  className="key"
                                />
                              </>
                            ) : (
                              ""
                            )}
                          </>,
                        ]}
                        tab2={[
                          "relicsBtn",
                          "Relics",
                          <TowerRelicsBoxScroll
                            children={
                              <div
                                className="towerAddRelics"
                                onClick={() => {
                                  nexusDispatch({
                                    type: "handlePopup",
                                    payload: {
                                      type: "open",
                                      data: {
                                        mpopClass:
                                          "m-popup main-relics-pop tower",
                                        popTit: "Buy Relics",
                                        popCont: "MainRelics",
                                        props: { hole: `${hole}` },
                                      },
                                    },
                                  });
                                }}
                              ></div>
                            }
                          />,
                        ]}
                        tab3={[
                          "trophiesBtn",
                          "Trophie",
                          <TowerTrophyBoxScroll
                            onClick={() => {
                              nexusDispatch({
                                type: "handlePopup",
                                payload: {
                                  type: "open",
                                  data: {
                                    mpopClass: "m-popup tower-trophy-pop",
                                    popTit: "Pillar of DPC",
                                    popCont: "TowerTrophy",
                                  },
                                },
                              });
                            }}
                          />,
                        ]}
                        tab4={[
                          "topBtn",
                          "Top",
                          <>
                            {topContent ? (
                              <RaidbossAnimationBox />
                            ) : (
                              <RatingPedBox />
                            )}
                            <div
                              className="color-btn towerBtn"
                              onClick={() => {
                                topContent
                                  ? setTopContent(false)
                                  : setTopContent(true);
                              }}
                            >
                              <img
                                className="domik"
                                src="img/ic-hero-331.png"
                                loading="lazy"
                              />
                              <div className="color-btn-text">
                                {topContent ? "◄ Back" : "Raiting Rewars"}
                              </div>
                            </div>
                          </>,
                        ]}
                        contentWrapClass={`tower-box-all ${
                          hole ? "hole" : "tower"
                        } ${toHard ? "toHard" : ""}`}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
          {leftPanel === false && (
            <TabPanelTowerQuest hole={hole} setLeftPanel={setLeftPanel} />
          )}
          <TrophyResBoxAll
            class1={hole === true ? "relicsCards" : "relicset"}
            class2={hole === true ? "holeGem" : "cards"}
            onClick1={() => {
              nexusDispatch({
                type: "handlePopup",
                payload: {
                  type: "open",
                  data: {
                    mpopClass: "m-popup main-relics-pop tower",
                    popTit: "Buy Relics",
                    popCont: "MainRelics",
                    props: { hole: `${hole}` },
                  },
                },
              });
            }}
            onClick2={() => {
              nexusDispatch({
                type: "handlePopup",
                payload: {
                  type: "open",
                  data: {
                    mpopClass: "m-popup essence-buy",
                    popTit: "Buy Hole Gems",
                    popCont: "BuyShop",
                    props: hole
                      ? {
                          img1: "hole/holeGem-1",
                          img2: "hole/holeGem-2",
                          img3: "hole/holeGem-3",
                          img4: "hole/holeGem-4",
                          diamond: true,
                        }
                      : {
                          img1: "v2-gold-ticket2",
                          img2: "v2-gold-ticket2",
                          img3: "v2-gold-ticket2",
                          img4: "v2-gold-ticket2",
                          diamond: true,
                        },
                  },
                },
              });
            }}
          />
        </div>
        <div className="tabs-all-box">
          <a className="tabs-all heroes" href="#/">
            <div style={{ width: "100%", height: "100%" }}>
              <div className="tabs-name">Heroes</div>
              <div className="tabs-pic">
                <img src="img/tab-01.png" loading="lazy" />
              </div>
            </div>
          </a>
          <a className="tabs-all guild selected" href="#/guild">
            <div style={{ width: "100%", height: "100%" }}>
              <div className="tabs-name">Guild base</div>
              <div className="tabs-pic">
                <img src="img/tab-08.png" loading="lazy" />
              </div>
            </div>
          </a>
          <a className="tabs-all album disable" href="#/galery/pictures">
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

      <WorldBtnBox className={pageName} />
      <StateChangeBtn
        state={hole}
        setState={sethole}
        textFrom="to Hole"
        textTo="to Tower"
        style={{
          position: "absolute",
          right: "0",
          marginTop: "20px",
        }}
      />
      {children}
    </div>
  );
}
