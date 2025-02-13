import { useState } from "react";
import WorldBtnBox from "../UIComponents/WorldBtnBox";

import { nexusTrigger } from "nexus-state";

import QuestBoxAll from "../UIComponents/QuestBoxAll";
import Notification from "../UIComponents/Notification";

export const cssFiles = [
  "screen-fapopoly-rules",
  "screen-unipop-subscription",
  "v2-screen-tower",
  "v2-screen-tower-relics",
  "v2-screen-events-btlpass",
  "screen-superhero",
  "popup-loseboss",
  "screen-event_main-sale",
  "screen-change-openchest",
  "screen-change-all",
  "screen-change-givepic",
  "screen-change-collpop",
  "v2-screen-offer-boss-chest-pop",
  "v2-screen-error",
  "screen-rating",
  "screen-rating-popstart",
  "screen-fortuna-dual-pack",
  "quests-ui",
  "screen-fortuna-winpop",
  "pop-wpck-end",
  "pop-wpck-all",
  "pop-wpck1",
  "pop-wpck2",
  "pop-wpck3",
  "pop-wpck4",
  "pop-wpck5",
  "screen-fortuna-round-main_16x",
  "screen-base",
  "screen-change-addchest",
  "shop-diamondbuy",
  "screen-rating-reward",
  "screen-rating-rankchange",
  "v2-screen-hero",
  "v2-screen-hero-promotion",
  "v2-screen-xmas-pop1",
  "v2-screen-xmas-pop2",
  "v2-screen-xmas-pop3",
  "sh2-openchest",
  "v2-screen-offer",
  "v2-screen-main-relics-pop",
  "screen-chests-shop",
  "screen-info-pop",
  // "pop-dark-btlpas",
  "screen-bank",
  "screen-rating-fullcoll",
  "screen-bank-5st",
  "fap_market",
  "store-items",
];

const childClickStopPropagation = (e) => {
  e.stopPropagation();
};

export default function MainScreen01AllPopups({ pageName, children }) {
  const [xmasPop, setXmasPop] = useState("xmas-pop1");

  return (
    <div className="main world1">
      <div
        className="main-bg"
        style={{
          backgroundImage: "url('../img/images/back/new/09-River.jpg')",
        }}
      ></div>

      {/* <Notification
        img="img/ms-stone-orange.png"
        text="you get"
        count="11.6K"
      /> */}

      <div className="header">
        <div className="resource-panel">
          <div
            className="avatar-box-all"
            onClick={() => {
              nexusTrigger({
                type: "handlePopup",
                payload: {
                  type: "open",
                  data: {
                    popCont: "SignInUP",
                    mpopClass: "m-popup red sign-up",
                  },
                },
              });
            }}
          >
            <div className="avatar-box-pic">
              <img src="img/v2-master-pic1.png" />
            </div>
            <div className="avatar-box-name">Rank 31</div>
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
          <div className="res-tavern-btn">
            <div className="res-shop-btn-text">tavern</div>
          </div>
          <div className="res-shop-btn">
            <div className="res-shop-btn-text">shop</div>
          </div>
          <div
            className="res-chest-btn"
            onClick={() => {
              nexusTrigger({
                type: "handlePopup",
                payload: {
                  type: "open",
                  data: {
                    mpopClass: "m-popup chests-shop",
                    popTit: "Chest Shop",
                    popCont: "ChestsShop",
                  },
                },
              });
            }}
          >
            <div className="res-chest-btn-text">chests</div>
          </div>
        </div>
        <div className="btn signinout-btn out">
          <div className="icon-reg"></div>
          <div className="icon-reg2"></div>
        </div>
      </div>

      <QuestBoxAll
        questBox={[
          [
            "ic-abil-reborn",
            "",
            {
              mpopClass: "reborn-popup",
              popTit: "Reborn!",
              popCont: "RebornPopup",
            },
          ],
          [
            "ic-abil-reborn-blue",
            "DARK",
            {
              mpopClass: "m-popup reborn-dark-popup",
              popTit: "Reborn!",
              popCont: "RebornDarkPopup",
            },
          ],
        ]}
        questBoxWrap={[
          [
            true,
            "offers",
            [
              [
                "ic-superhero-60",
                "1",
                {
                  mpopClass: "m-popup sh2-openchest1",
                  popTit: "Buy Chests",
                  popCont: "Sh2Openchest",
                },
              ],
              [
                "ic-superhero-60",
                "3",
                {
                  mpopClass: "m-popup sh2-openchest3",
                  popTit: "open chests",
                  popCont: "Sh2Openchest",
                  props: { shClass: "sh3" },
                },
              ],
              [
                "picmeh-ic-angel-pop",
                "",
                {
                  mpopClass: "m-popup angel-pop",
                  popCont: "AngelPop",
                },
              ],
              [
                ["picmeh-ic-angel-pop", "ic-hero-327"],
                "",
                {
                  mpopClass: "m-popup hero-pop",
                  popCont: "DarkHeroPack",
                },
              ],
              [
                "picmeh-ic-angel-pop-x3",
                "00:00:00",
                {
                  mpopClass: "m-popup angel-pop-x3",
                  popTit: "Triple Strike Pack!",
                  popCont: "AngelPopX3",
                  timer: true,
                },
              ],
              [
                "picmeh-ic-diamond",
                "",
                {
                  mpopClass: "m-popup cw-offers-pop",
                  popTit: "boss chest offer",
                  popCont: "CwOffersPop",
                },
              ],
              [
                "images/hero-all/tithero-335/icons/ic-hero-335",
                "309:14:11",
                {
                  mpopClass: "m-popup wpck5",
                  popTit: "Blackhole sale",
                  popCont: "Wpck5",
                },
              ],
              [
                "v2-ns-ball",
                "00:00:00",
                {
                  mpopClass: "m-popup fortuna-main uni-sale",
                  popTit: "Dual pack",
                  popCont: "DualPack",
                  props: { event: "uni-sale" },
                },
              ],
              [
                "ic-dark-btlpas",
                "00:00:00",
                {
                  mpopClass: "m-popup dark-btlpas",
                  popTit: "Dark World Battle Pass",
                  popCont: "DarkBtlPass",
                  timer: true,
                },
              ],
            ],
          ],
          [
            true,
            "Квесты",
            [
              [
                "m-ico-quest",
                "",
                {
                  mpopClass: "quest-popup stage-1",
                  popCont: "QuestPopup",
                },
              ],
              [
                "m-ico-quest-gift",
                "",
                {
                  mpopClass: "quest-popup stage-1",
                  popCont: "QuestPopup",
                  props: { done: true },
                },
              ],
              ["sunduk-60", "21:36:22"],
            ],
          ],
          [
            true,
            "Хелуин",
            [
              [
                "evPopArts/halloweenIcn",
                "287:21:43",
                {
                  mpopClass: "m-popup main-relics-pop hw contentOnly",
                  popCont: "RelicsPop",
                  props: { event: "hw" },
                },
              ],
              [
                "evPopArts/halloweenBP",
                "287:21:43",
                {
                  mpopClass: "m-popup events-btlpass-pop hw contentOnly",
                  popCont: "BtlPass",
                  props: { event: "hw" },
                },
              ],
              [
                "evPopArts/halloweenBP_DW",
                "00:00:00",
                {
                  mpopClass: "m-popup dark-btlpas contentOnly",
                  popCont: "DarkBtlPass",
                  timer: true,
                  props: { event: "dark-btlpas" },
                },
              ],
            ],
          ],
          [
            true,
            "Blak FR",
            [
              [
                "ic-bf",
                "287:21:43",
                {
                  mpopClass: "m-popup events-btlpass-pop bf contentOnly",
                  popCont: "BtlPass",
                  props: { event: "bf" },
                },
              ],
              [
                "ic-blackfriday",
                "9D 00:44:09",
                {
                  mpopClass: "m-popup sale-event-pop bf-event",
                  popTit: "black friday sale",
                  popCont: "SaleEventPop",
                  timer: true,
                  props: { event: "bf" },
                },
              ],
            ],
          ],
          [
            true,
            "XMas",
            [
              [
                "ic-xmas",
                "00:44:09",
                {
                  mpopClass: "m-popup events-btlpass-pop xmas contentOnly",
                  popCont: "BtlPass",
                  props: { event: "xmas" },
                },
              ],
              [
                "v2-xmas-chest-red",
                "287:21:43",
                {
                  popTit: "XXXMAS Celebration Pass",
                  popCont: "XmasPop",
                  props: { xmasPop: xmasPop },
                },
              ],
              [
                "ic-ny-sneg",
                "00:00:09",
                {
                  mpopClass: "m-popup main-relics-pop xmas contentOnly",
                  popCont: "RelicsPop",
                  props: { event: "xmas" },
                },
              ],
            ],
          ],
          [
            true,
            "Vallent",
            [
              [
                "ic-vl",
                "287:21:43",
                {
                  mpopClass: "m-popup events-btlpass-pop vl contentOnly",
                  popCont: "BtlPass",
                  props: { event: "vl" },
                },
              ],
              [
                "ic-vl-pass",
                "00:44:09",
                {
                  mpopClass: "m-popup sale-event-pop vl-event",
                  popTit: "Valentine's Day",
                  popCont: "SaleEventPop",
                  timer: true,
                  props: { event: "vl" },
                },
              ],
              [
                "ic-vl-orgy",
                "00:00:09",
                {
                  mpopClass: "m-popup main-relics-pop vl contentOnly",
                  popCont: "RelicsPop",
                  props: { event: "vl" },
                },
              ],
              [
                "v2-vl-ball",
                "00:00:00",
                {
                  mpopClass: "m-popup fortuna-main sv-sale",
                  popTit: "Dual pack",
                  popCont: "DualPack",
                  timer: true,
                  props: { event: "sv-sale" },
                },
              ],
            ],
          ],
          [
            true,
            "Март",
            [
              [
                "ic-march-flower",
                "287:21:43",
                {
                  mpopClass: "m-popup main-relics-pop march",
                  popTit: "March's Day Orgy",
                  popCont: "RelicsPop",
                  timer: true,
                  props: { event: "march" },
                },
              ],
              [
                "evPopArts/strawberry_icn",
                "287:21:43",
                {
                  mpopClass: "m-popup main-relics-pop march",
                  popTit: "March's Day Orgy",
                  popCont: "RelicsPop",
                  timer: true,
                  props: { event: "march2" },
                },
              ],
            ],
          ],
          [
            true,
            "Весна",
            [
              [
                "ic-march-flower-pink",
                "287:21:43",
                {
                  mpopClass: "m-popup events-btlpass-pop spring",
                  popTit: "Valentine's Day Event Pass",
                  popCont: "BtlPass",
                  props: { event: "spring" },
                },
              ],
              [
                "evPopArts/flowerChest",
                "287:21:43",
                {
                  mpopClass: `m-popup ${xmasPop} spring`,
                  popTit: "Spring Celebration Pass",
                  popCont: "XmasPop",
                  props: { event: "spring" },
                },
              ],
            ],
          ],
          [
            true,
            "Лето",
            [
              [
                "evPopArts/butterflyIcn",
                "287:21:43",
                {
                  mpopClass: "m-popup events-btlpass-pop summer",
                  popTit: "Summer Event Pass",
                  popCont: "BtlPass",
                  props: { event: "summer" },
                },
              ],
            ],
          ],
          [
            true,
            "easter",
            [
              [
                "evPopArts/eggs_basket",
                "287:21:43",
                {
                  mpopClass: "m-popup main-relics-pop easter",
                  popTit: "Easter's Day Orgy",
                  popCont: "RelicsPop",
                  timer: true,
                  props: { event: "easter" },
                },
              ],
            ],
          ],
          [
            true,
            "Осень",
            [
              [
                "ic-autumn-leaf-120",
                "287:21:43",
                {
                  mpopClass: "m-popup events-btlpass-pop autumn contentOnly",
                  popCont: "BtlPass",
                  props: { event: "autumn" },
                },
              ],
            ],
          ],
          [
            true,
            "Доп Поп",
            [
              [
                "back-girl",
                "LOSE BOSS",
                {
                  mpopClass: "m-popup lose-boss",
                  popTit: "проигрыш боссу",
                  popCont: "LoseBoss",
                },
              ],
              [
                "error-window-picture",
                "",
                {
                  mpopClass: "m-popup error-popup",
                  popTit: "Error",
                  popCont: "ErrorPopup",
                },
              ],
              [
                "images/hero-all/tithero-367/icons/ic-hero-367",
                "",
                {
                  mpopClass: "ratingpop-box",
                  popCont: "RatingpopBox",
                },
              ],
              [
                "80-featured",
                "",
                {
                  mpopClass: "m-popup red ts_confirm",
                  popTit: "Поздравляем!",
                  popCont: "TsConfirm",
                },
              ],
              ["ic-hero-220", ""],
              ["change-sun1", "Lover Pack"],
              ["icon-sunduk-200-2", "Reward"],
              ["arrow-green", "Top"],
              ["ic-abil-gold@2x", "CONRGRA"],
            ],
          ],
        ]}
        questBox2={[["v2-sexped-ic", ""]]}
      />

      <div className="right-side"></div>
      <div className="left-side">
        <div className="left-panel">
          <div className="heroes-list-all-box" style={{ display: "block" }}>
            <div className="dps-dpc-panel-box">
              <div className="dpc">
                <div className="value">20349</div>
                <div className="mlt-prm">x3212</div>
                <div className="title">
                  DPC
                  <div className="icon-dpc"></div>
                </div>
              </div>
              <div className="dps">
                <div className="value">234234T</div>
                <div className="mlt-prm">x3212</div>
                <div className="title">
                  DPS
                  <div className="icon-dps"></div>
                </div>
              </div>
            </div>
            <div className="all-heroes-box">
              <div className="all-heroes-box-scroll">
                <div className="hero-card-box-all">
                  <div className="hero-card starterpack">
                    <div
                      className="btn-close-x"
                      style={{
                        zoom: "0.75",
                        top: "0px",
                        right: "0px",
                      }}
                    ></div>
                    <div className="hero-avatar-box">
                      <img
                        className="hero-avatar"
                        src="img/images/hero-all/tithero-328/x2/ava/tithero-328-1-ava.jpg"
                        loading="lazy"
                      />
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-gun.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="hero-level-box">Осталось</div>
                    <div className="hero-dps-box">
                      <div className="st-time">15:01:37</div>
                    </div>
                    <div className="hero-name-box">
                      <div className="hero-name">Tokuda Arisu</div>
                    </div>
                    <div className="btn-buy starterpack">
                      <div className="txt">Купить</div>
                    </div>
                  </div>
                  <div
                    className="hero-card highlight"
                    onClick={() => {
                      nexusTrigger({
                        type: "handlePopup",
                        payload: {
                          type: "open",
                          data: {
                            mpopClass: "m-popup hero-popup",
                            popTit: "Moe Kasa",
                            popCont: "HeroPopup",
                          },
                        },
                      });
                    }}
                  >
                    <div className="hero-avatar-box">
                      <img
                        className="hero-avatar"
                        src="img/images/hero-all/tithero-11/x2/ava/tithero-11-1-ava.jpg"
                        loading="lazy"
                      />
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="hero-level-box">
                      level
                      <div className="hero-level">6969</div>
                    </div>
                    <div className="hero-dps-box">
                      dps
                      <div className="hero-dps">6969K</div>
                    </div>
                    <div className="hero-power-box">
                      power
                      <div className="hero-power">223</div>
                    </div>
                    <div className="hero-name-box">
                      <div className="hero-name">Murayama Naora Blowjob</div>
                    </div>
                    <div
                      className="color-btn green"
                      onClick={(e) => childClickStopPropagation(e)}
                    >
                      <div className="color-btn-text">
                        <div className="gold">
                          <span className="f-gold">6969K</span>
                        </div>
                        <div className="color-btn-text">up</div>
                      </div>
                    </div>
                    <div
                      className="hero-pieces-icon"
                      onClick={(e) => childClickStopPropagation(e)}
                    ></div>
                  </div>
                  <div className="hero-card">
                    <div className="hero-avatar-box">
                      <img
                        className="hero-avatar"
                        src="img/images/hero-all/tithero-11/x2/ava/tithero-11-1-ava.jpg"
                        loading="lazy"
                      />
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="hero-level-box">
                      level
                      <div className="hero-level">6969</div>
                    </div>
                    <div className="hero-dps-box">
                      dps
                      <div className="hero-dps">6969K</div>
                    </div>
                    <div className="hero-power-box">
                      power
                      <div className="hero-power">223</div>
                    </div>
                    <div className="hero-name-box">
                      <div className="hero-name">Murayama Naora</div>
                    </div>
                    <div className="color-btn green">
                      <div className="color-btn-text">
                        <div className="gold">
                          <span className="f-gold">6969K</span>
                        </div>
                        <div className="color-btn-text">buy</div>
                      </div>
                    </div>
                    <div className="hero-abil-icon">
                      <img src="img/icons/ic-abil-78.jpg" loading="lazy" />
                    </div>
                  </div>
                  <div className="hero-card">
                    <div className="hero-avatar-box">
                      <img
                        className="hero-avatar"
                        src="img/images/hero-all/tithero-11/x2/ava/tithero-11-1-ava.jpg"
                        loading="lazy"
                      />
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="hero-level-box">
                      level
                      <div className="hero-level">6969</div>
                    </div>
                    <div className="hero-dps-box">
                      dps
                      <div className="hero-dps">6969K</div>
                    </div>
                    <div className="hero-power-box">
                      power
                      <div className="hero-power">223</div>
                    </div>
                    <div className="hero-name-box">
                      <div className="hero-name">Murayama Naora Blowjob</div>
                    </div>
                    <div className="color-btn green">
                      <div className="color-btn-text">
                        <div className="gold">
                          <span className="f-gold">6969K</span>
                        </div>
                        <div className="color-btn-text">up</div>
                      </div>
                    </div>
                    <div className="hero-abil-icon">
                      <img src="img/icons/ic-abil-78.jpg" loading="lazy" />
                    </div>
                  </div>
                  <div className="hero-card">
                    <div className="hero-avatar-box">
                      <img
                        className="hero-avatar"
                        src="img/images/hero-all/tithero-11/x2/ava/tithero-11-1-ava.jpg"
                        loading="lazy"
                      />
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="hero-level-box">
                      level
                      <div className="hero-level">6969</div>
                    </div>
                    <div className="hero-dps-box">
                      dps
                      <div className="hero-dps">6969K</div>
                    </div>
                    <div className="hero-power-box">
                      power
                      <div className="hero-power">223</div>
                    </div>
                    <div className="hero-name-box">
                      <div className="hero-name">Murayama Naora Blowjob</div>
                    </div>
                    <div className="color-btn green">
                      <div className="color-btn-text">
                        <div className="gold">
                          <span className="f-gold">6969K</span>
                        </div>
                        <div className="color-btn-text">up</div>
                      </div>
                    </div>
                    <div className="hero-abil-icon">
                      <img src="img/icons/ic-abil-78.jpg" loading="lazy" />
                    </div>
                  </div>
                  <div className="hero-card">
                    <div className="hero-avatar-box">
                      <img
                        className="hero-avatar"
                        src="img/images/hero-all/tithero-11/x2/ava/tithero-11-1-ava.jpg"
                        loading="lazy"
                      />
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="hero-level-box">
                      level
                      <div className="hero-level">6969</div>
                    </div>
                    <div className="hero-dps-box">
                      dps
                      <div className="hero-dps">6969K</div>
                    </div>
                    <div className="hero-power-box">
                      power
                      <div className="hero-power">223</div>
                    </div>
                    <div className="hero-name-box">
                      <div className="hero-name">Murayama Naora Blowjob</div>
                    </div>
                    <div className="color-btn green">
                      <div className="color-btn-text">
                        <div className="gold">
                          <span className="f-gold">6969K</span>
                        </div>
                        <div className="color-btn-text">up</div>
                      </div>
                    </div>
                    <div className="hero-abil-icon">
                      <img src="img/icons/ic-abil-78.jpg" loading="lazy" />
                    </div>
                  </div>
                  <div className="hero-card">
                    <div className="hero-avatar-box">
                      <img
                        className="hero-avatar"
                        src="img/images/hero-all/tithero-11/x2/ava/tithero-11-1-ava.jpg"
                        loading="lazy"
                      />
                      <div className="sh2-icon-forgirl">
                        <img src="img/cur2-barbarian.png" loading="lazy" />
                      </div>
                    </div>
                    <div className="hero-level-box">
                      level
                      <div className="hero-level">6969</div>
                    </div>
                    <div className="hero-dps-box">
                      dps
                      <div className="hero-dps">6969K</div>
                    </div>
                    <div className="hero-power-box">
                      power
                      <div className="hero-power">223</div>
                    </div>
                    <div className="hero-name-box">
                      <div className="hero-name">Murayama Naora Blowjob</div>
                    </div>
                    <div className="color-btn green">
                      <div className="color-btn-text">
                        <div className="gold">
                          <span className="f-gold">6969K</span>
                        </div>
                        <div className="color-btn-text">up</div>
                      </div>
                    </div>
                    <div className="hero-abil-icon">
                      <img src="img/icons/ic-abil-78.jpg" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="x2-btn-all-box">
              <div className="x2-btn selected">
                <div className="x2-btn-text">x1</div>
              </div>
              <div className="x2-btn">
                <div className="x2-btn-text">x10</div>
              </div>
              <div className="x2-btn">
                <div className="x2-btn-text">x25</div>
              </div>
              <div className="x2-btn">
                <div className="x2-btn-text">x100</div>
              </div>
              <div className="x2-btn">
                <div className="x2-btn-text">x200</div>
              </div>
              <div className="x2-btn">
                <div className="x2-btn-text">x500</div>
              </div>
              <div className="x2-btn">
                <div className="x2-btn-text">x1000</div>
              </div>
            </div>
          </div>
          <div className="womens-btns-screen" style={{ display: "none" }}>
            <div className="womens-btns-content">
              <div className="women-btn-wrap heros">
                <div className="title">HEROS</div>
                <div className="women-btn-box">
                  <div className="img-wrap">
                    <img
                      src="img/images/hero-all/tithero-5001/x2/tithero-5001-1.jpg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="women-btn-wrap supheros">
                <div className="title">SUPERHEROS</div>
                <div className="women-btn-box">
                  <div className="img-wrap">
                    <img
                      src="img/images/superhero/suphero-127/x2/127sh-1.jpg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="women-btn-wrap angels">
                <div className="title">ANGELS</div>
                <div className="women-btn-box">
                  <div className="img-wrap">
                    <img
                      src="img/images/goddess/goddess-1/x2/goddess-1.jpg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="angels-all-box" style={{ display: "none" }}>
            <div className="angels-cards-content">
              <div className="content-header">
                <div className="title">ANGELS</div>
                <div className="color-btn chest">
                  <div className="btn-img"></div>
                </div>
                <div className="color-btn info">i</div>
              </div>
              <div className="angels-scroll-box">
                <div className="angel-card-box">
                  <div className="img-wrap">
                    <img
                      src="img/images/goddess/goddess-1/x2/goddess-1.jpg"
                      loading="lazy"
                    />
                  </div>
                  <div className="angel-name-box">
                    <div className="angel-name">Amaterasu</div>
                  </div>
                  <div className="info-box">
                    <div className="stars-box">
                      <div className="star active"></div>
                      <div className="star active"></div>
                      <div className="star active"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                    </div>
                    <div className="buff-level-info">
                      Max Buff Level:
                      <div className="level-value">250</div>
                    </div>
                    <div className="buff-bonus-info">
                      Buff Bonus:
                      <div className="buff-value">x3</div>
                    </div>
                    <div className="dps-box">
                      <div className="dps-title">DPS</div>
                      <div className="dps-value">1.43T</div>
                    </div>
                  </div>
                  <div className="angel-card-progress-bar-wrap">
                    <div className="progress">
                      <div
                        className="fulfilled"
                        style={{
                          width: "40%",
                        }}
                      ></div>
                    </div>
                    <div className="value">
                      You collect
                      <div className="from">40</div>
                      <div className="to">100</div>
                    </div>
                  </div>
                </div>
                <div className="angel-card-box">
                  <div className="img-wrap">
                    <img
                      src="img/images/goddess/goddess-2/x2/goddess-1.jpg"
                      loading="lazy"
                    />
                  </div>
                  <div className="angel-name-box">
                    <div className="angel-name">Amaterasu</div>
                  </div>
                  <div className="info-box">
                    <div className="stars-box">
                      <div className="star active"></div>
                      <div className="star active"></div>
                      <div className="star active"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                    </div>
                    <div className="buff-level-info">
                      Max Buff Level:
                      <div className="level-value">250</div>
                    </div>
                    <div className="buff-bonus-info">
                      Buff Bonus:
                      <div className="buff-value">x3</div>
                    </div>
                    <div className="dps-box">
                      <div className="dps-title">DPS</div>
                      <div className="dps-value">1.43T</div>
                    </div>
                  </div>
                  <div className="angel-card-progress-bar-wrap">
                    <div className="progress">
                      <div
                        className="fulfilled"
                        style={{
                          width: "40%",
                        }}
                      ></div>
                    </div>
                    <div className="value">
                      You collect
                      <div className="from">40</div>
                      <div className="to">100</div>
                    </div>
                  </div>
                </div>
                <div className="angel-card-box lock">
                  <div className="img-wrap">
                    <img
                      src="img/images/goddess/goddess-3/x2/goddess-1.jpg"
                      loading="lazy"
                    />
                  </div>
                  <div className="angel-name-box">
                    <div className="angel-name">Amaterasu</div>
                  </div>
                  <div className="info-box">
                    <div className="stars-box">
                      <div className="star active"></div>
                      <div className="star active"></div>
                      <div className="star active"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                    </div>
                    <div className="buff-level-info">
                      Max Buff Level:
                      <div className="level-value">250</div>
                    </div>
                    <div className="buff-bonus-info">
                      Buff Bonus:
                      <div className="buff-value">x3</div>
                    </div>
                    <div className="dps-box">
                      <div className="dps-title">DPS</div>
                      <div className="dps-value">1.43T</div>
                    </div>
                  </div>
                  <div className="angel-card-progress-bar-wrap">
                    <div className="progress">
                      <div
                        className="fulfilled"
                        style={{
                          width: "40%",
                        }}
                      ></div>
                    </div>
                    <div className="value">
                      You collect
                      <div className="from">40</div>
                      <div className="to">100</div>
                    </div>
                  </div>
                </div>
                <div className="angel-card-box lock">
                  <div className="img-wrap">
                    <img
                      src="img/images/goddess/goddess-4/x2/goddess-1.jpg"
                      loading="lazy"
                    />
                  </div>
                  <div className="angel-name-box">
                    <div className="angel-name">Amaterasu</div>
                  </div>
                  <div className="info-box">
                    <div className="stars-box">
                      <div className="star active"></div>
                      <div className="star active"></div>
                      <div className="star active"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                    </div>
                    <div className="buff-level-info">
                      Max Buff Level:
                      <div className="level-value">250</div>
                    </div>
                    <div className="buff-bonus-info">
                      Buff Bonus:
                      <div className="buff-value">x3</div>
                    </div>
                    <div className="dps-box">
                      <div className="dps-title">DPS</div>
                      <div className="dps-value">1.43T</div>
                    </div>
                  </div>
                  <div className="angel-card-progress-bar-wrap">
                    <div className="progress">
                      <div
                        className="fulfilled"
                        style={{
                          width: "40%",
                        }}
                      ></div>
                    </div>
                    <div className="value">
                      You collect
                      <div className="from">40</div>
                      <div className="to">100</div>
                    </div>
                  </div>
                </div>
                <div className="angel-card-box lock">
                  <div className="img-wrap">
                    <img
                      src="img/images/goddess/goddess-5/x2/goddess-1.jpg"
                      loading="lazy"
                    />
                  </div>
                  <div className="angel-name-box">
                    <div className="angel-name">Amaterasu</div>
                  </div>
                  <div className="info-box">
                    <div className="stars-box">
                      <div className="star active"></div>
                      <div className="star active"></div>
                      <div className="star active"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                    </div>
                    <div className="buff-level-info">
                      Max Buff Level:
                      <div className="level-value">250</div>
                    </div>
                    <div className="buff-bonus-info">
                      Buff Bonus:
                      <div className="buff-value">x3</div>
                    </div>
                    <div className="dps-box">
                      <div className="dps-title">DPS</div>
                      <div className="dps-value">1.43T</div>
                    </div>
                  </div>
                  <div className="angel-card-progress-bar-wrap">
                    <div className="progress">
                      <div
                        className="fulfilled"
                        style={{
                          width: "40%",
                        }}
                      ></div>
                    </div>
                    <div className="value">
                      You collect
                      <div className="from">40</div>
                      <div className="to">100</div>
                    </div>
                  </div>
                </div>
                <div className="angel-card-box lock">
                  <div className="img-wrap">
                    <img
                      src="img/images/goddess/goddess-6/x2/goddess-1.jpg"
                      loading="lazy"
                    />
                  </div>
                  <div className="angel-name-box">
                    <div className="angel-name">Amaterasu</div>
                  </div>
                  <div className="info-box">
                    <div className="stars-box">
                      <div className="star active"></div>
                      <div className="star active"></div>
                      <div className="star active"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                    </div>
                    <div className="buff-level-info">
                      Max Buff Level:
                      <div className="level-value">250</div>
                    </div>
                    <div className="buff-bonus-info">
                      Buff Bonus:
                      <div className="buff-value">x3</div>
                    </div>
                    <div className="dps-box">
                      <div className="dps-title">DPS</div>
                      <div className="dps-value">1.43T</div>
                    </div>
                  </div>
                  <div className="angel-card-progress-bar-wrap">
                    <div className="progress">
                      <div
                        className="fulfilled"
                        style={{
                          width: "40%",
                        }}
                      ></div>
                    </div>
                    <div className="value">
                      You collect
                      <div className="from">40</div>
                      <div className="to">100</div>
                    </div>
                  </div>
                </div>
                <div className="angel-card-box lock">
                  <div className="img-wrap">
                    <img
                      src="img/images/goddess/goddess-2/x2/goddess-1.jpg"
                      loading="lazy"
                    />
                  </div>
                  <div className="angel-name-box">
                    <div className="angel-name">Amaterasu</div>
                  </div>
                  <div className="info-box">
                    <div className="stars-box">
                      <div className="star active"></div>
                      <div className="star active"></div>
                      <div className="star active"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                    </div>
                    <div className="buff-level-info">
                      Max Buff Level:
                      <div className="level-value">250</div>
                    </div>
                    <div className="buff-bonus-info">
                      Buff Bonus:
                      <div className="buff-value">x3</div>
                    </div>
                    <div className="dps-box">
                      <div className="dps-title">DPS</div>
                      <div className="dps-value">1.43T</div>
                    </div>
                  </div>
                  <div className="angel-card-progress-bar-wrap">
                    <div className="progress">
                      <div
                        className="fulfilled"
                        style={{
                          width: "40%",
                        }}
                      ></div>
                    </div>
                    <div className="value">
                      You collect
                      <div className="from">40</div>
                      <div className="to">100</div>
                    </div>
                  </div>
                </div>
                <div className="angel-card-box lock">
                  <div className="img-wrap">
                    <img
                      src="img/images/goddess/goddess-2/x2/goddess-1.jpg"
                      loading="lazy"
                    />
                  </div>
                  <div className="angel-name-box">
                    <div className="angel-name">Amaterasu</div>
                  </div>
                  <div className="info-box">
                    <div className="stars-box">
                      <div className="star active"></div>
                      <div className="star active"></div>
                      <div className="star active"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                    </div>
                    <div className="buff-level-info">
                      Max Buff Level:
                      <div className="level-value">250</div>
                    </div>
                    <div className="buff-bonus-info">
                      Buff Bonus:
                      <div className="buff-value">x3</div>
                    </div>
                    <div className="dps-box">
                      <div className="dps-title">DPS</div>
                      <div className="dps-value">1.43T</div>
                    </div>
                  </div>
                  <div className="angel-card-progress-bar-wrap">
                    <div className="progress">
                      <div
                        className="fulfilled"
                        style={{
                          width: "40%",
                        }}
                      ></div>
                    </div>
                    <div className="value">
                      You collect
                      <div className="from">40</div>
                      <div className="to">100</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-info-content" style={{ display: "none" }}>
              <div className="trophy-res-box-all">
                <div className="trophy-res-box spirit">
                  <div className="trophy-value">1000</div>
                  <div className="trophy-value-btn-add angels"></div>
                </div>
                <div className="trophy-res-box spirit2">
                  <div className="trophy-value">1000</div>
                  <div className="trophy-value-btn-add"></div>
                </div>
              </div>
              <div className="content-header">
                <div className="btn-close-x"></div>
                <div className="color-btn info">i</div>
                <div className="title">
                  Ангел
                  <div className="angel-name">Amaterasu</div>
                </div>
                <div className="dps">
                  <div className="value">2.32B</div>
                  <div className="dps-title">
                    DPS
                    <div className="icon-dps"></div>
                  </div>
                </div>
                <div className="angels-heros-title">Героини Ангела</div>
              </div>
              <div className="angels-icons-box-all">
                <div className="angels-icons-scroll-box">
                  <div className="angel-avatar-box">
                    <div className="angel-avatar-wrap">
                      <img
                        className="angel-avatar"
                        src="img/images/goddess/goddess-1/x2/ava/goddess-ava-1.jpg "
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="angel-avatar-box selected">
                    <div className="angel-avatar-wrap">
                      <img
                        className="angel-avatar"
                        src="img/images/goddess/goddess-2/x2/ava/goddess-ava-1.jpg "
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="angel-avatar-box lock">
                    <div className="angel-avatar-wrap">
                      <img
                        className="angel-avatar"
                        src="img/images/goddess/goddess-3/x2/ava/goddess-ava-1.jpg "
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="angel-avatar-box lock">
                    <div className="angel-avatar-wrap">
                      <img
                        className="angel-avatar"
                        src="img/images/goddess/goddess-4/x2/ava/goddess-ava-1.jpg "
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="angel-avatar-box lock">
                    <div className="angel-avatar-wrap">
                      <img
                        className="angel-avatar"
                        src="img/images/goddess/goddess-5/x2/ava/goddess-ava-1.jpg "
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="angel-avatar-box lock">
                    <div className="angel-avatar-wrap">
                      <img
                        className="angel-avatar"
                        src="img/images/goddess/goddess-6/x2/ava/goddess-ava-1.jpg "
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="angel-avatar-box lock">
                    <div className="angel-avatar-wrap">
                      <img
                        className="angel-avatar"
                        src="img/images/goddess/goddess-6/x2/ava/goddess-ava-1.jpg "
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="angel-avatar-box lock">
                    <div className="angel-avatar-wrap">
                      <img
                        className="angel-avatar"
                        src="img/images/goddess/goddess-6/x2/ava/goddess-ava-1.jpg "
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="color-btn chest">
                  <div className="btn-img"></div>
                </div>
              </div>
              <div className="selected-angel-box">
                <div className="angel-card-box">
                  <div className="img-wrap">
                    <img
                      src="img/images/goddess/goddess-2/x2/goddess-1.jpg"
                      loading="lazy"
                    />
                    <div className="b-fs"></div>
                  </div>
                  <div className="info-box">
                    <div className="stars-box">
                      <div className="star active"></div>
                      <div className="star active"></div>
                      <div className="star active"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                    </div>
                    <div className="text-box">
                      <div className="text1">
                        Current Star
                        <div className="buff-level-info">
                          Max Buff Level:
                          <div className="level-value">250</div>
                        </div>
                        <div className="buff-bonus-info">
                          Buff Bonus:
                          <div className="buff-value">x3</div>
                        </div>
                      </div>
                      <div className="text2">
                        Current Star
                        <div className="buff-level-info">
                          Max Buff Level:
                          <div className="level-value">250</div>
                        </div>
                        <div className="buff-bonus-info">
                          Buff Bonus:
                          <div className="buff-value">x3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="angel-card-progress-bar-wrap">
                    <div className="progress">
                      <div
                        className="fulfilled"
                        style={{
                          width: "50%",
                        }}
                      ></div>
                    </div>
                    <div className="value">
                      <div className="from">500</div>
                      <div className="to">1000</div>
                    </div>
                  </div>
                  <div className="arrow-box-all">
                    <div className="btn-scroll-card left"></div>
                    <div className="btn-scroll-card right"></div>
                  </div>
                  <div className="color-btn green get-angel">
                    <div className="color-btn-text">Get Angel</div>
                  </div>
                </div>
                <div className="progress-box">
                  <div className="selected-angel-icons-box">
                    <div className="angel-avatar-box">
                      <div className="angel-avatar-wrap">
                        <img
                          className="angel-avatar"
                          src="img/images/goddess/goddess-2/comics/ava/goddess-com-ava-1.jpg "
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="angel-avatar-box">
                      <div className="angel-avatar-wrap">
                        <img
                          className="angel-avatar"
                          src="img/images/goddess/goddess-2/comics/ava/goddess-com-ava-2.jpg "
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="angel-avatar-box lock">
                      <div className="angel-avatar-wrap">
                        <img
                          className="angel-avatar"
                          src="img/images/goddess/goddess-2/comics/ava/goddess-com-ava-3.jpg "
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="angel-avatar-box lock">
                      <div className="angel-avatar-wrap">
                        <img
                          className="angel-avatar"
                          src="img/images/goddess/goddess-2/comics/ava/goddess-com-ava-4.jpg "
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="selected-angel-progress-bar-wrap">
                    <div className="progress">
                      <div
                        className="fulfilled"
                        style={{
                          width: "60%",
                        }}
                      ></div>
                    </div>
                    <div className="progress-level-wrap">
                      <div className="progress-level l1">
                        <div className="progress-level-txt">200</div>
                      </div>
                      <div className="progress-level l2">
                        <div className="progress-level-txt">500</div>
                      </div>
                      <div className="progress-level l3">
                        <div className="progress-level-txt">1000</div>
                      </div>
                      <div className="progress-level l4">
                        <div className="progress-level-txt">2000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="angels-heros-box-wrap">
                <div className="angels-heros-box">
                  <div className="hero-page-wrapper">
                    <div className="hero-btn-card-add">
                      <div className="color-btn add">
                        <div className="color-btn-text">
                          <div className="color-btn-text">+</div>
                        </div>
                      </div>
                    </div>
                    <div className="hero-card">
                      <div className="hero-avatar-box">
                        <div className="hero-avatar-wrap">
                          <img
                            className="hero-avatar"
                            src="img/images/hero-all/tithero-5004/x1/ava/tithero-5004-1-ava.jpg"
                            loading="lazy"
                          />
                        </div>
                        <div className="sh2-icon-forgirl">
                          <img src="img/cur2-barbarian.png" loading="lazy" />
                        </div>
                        <div className="hero-level-box">
                          lvl
                          <div className="hero-level">20</div>
                        </div>
                        <div className="hero-dps-box">
                          dps
                          <div className="hero-dps">1.5M</div>
                        </div>
                      </div>
                      <div className="color-btn green">
                        <div className="color-btn-text">
                          <div className="gold">
                            <span className="f-gold">6969K</span>
                          </div>
                          <div className="color-btn-text">buff up</div>
                        </div>
                      </div>
                    </div>
                    <div className="hero-card">
                      <div className="hero-avatar-box">
                        <div className="hero-avatar-wrap">
                          <img
                            className="hero-avatar"
                            src="img/images/hero-all/tithero-5004/x1/ava/tithero-5004-1-ava.jpg"
                            loading="lazy"
                          />
                        </div>
                        <div className="sh2-icon-forgirl">
                          <img src="img/cur2-barbarian.png" loading="lazy" />
                        </div>
                        <div className="hero-level-box">
                          lvl
                          <div className="hero-level">20</div>
                        </div>
                        <div className="hero-dps-box">
                          dps
                          <div className="hero-dps">1.5M</div>
                        </div>
                      </div>
                      <div className="color-btn green">
                        <div className="color-btn-text">
                          <div className="gold">
                            <span className="f-gold">6969K</span>
                          </div>
                          <div className="color-btn-text">buff up</div>
                        </div>
                      </div>
                    </div>
                    <div className="hero-card">
                      <div className="hero-avatar-box">
                        <div className="hero-avatar-wrap">
                          <img
                            className="hero-avatar"
                            src="img/images/hero-all/tithero-5004/x1/ava/tithero-5004-1-ava.jpg"
                            loading="lazy"
                          />
                        </div>
                        <div className="sh2-icon-forgirl">
                          <img src="img/cur2-barbarian.png" loading="lazy" />
                        </div>
                        <div className="hero-level-box">
                          lvl
                          <div className="hero-level">20</div>
                        </div>
                        <div className="hero-dps-box">
                          dps
                          <div className="hero-dps">1.5M</div>
                        </div>
                      </div>
                      <div className="color-btn green">
                        <div className="color-btn-text">
                          <div className="gold">
                            <span className="f-gold">6969K</span>
                          </div>
                          <div className="color-btn-text">buff up</div>
                        </div>
                      </div>
                    </div>
                    <div className="hero-card">
                      <div className="hero-avatar-box">
                        <div className="hero-avatar-wrap">
                          <img
                            className="hero-avatar"
                            src="img/images/hero-all/tithero-5004/x1/ava/tithero-5004-1-ava.jpg"
                            loading="lazy"
                          />
                        </div>
                        <div className="sh2-icon-forgirl">
                          <img src="img/cur2-barbarian.png" loading="lazy" />
                        </div>
                        <div className="hero-level-box">
                          lvl
                          <div className="hero-level">20</div>
                        </div>
                        <div className="hero-dps-box">
                          dps
                          <div className="hero-dps">1.5M</div>
                        </div>
                      </div>
                      <div className="color-btn green">
                        <div className="color-btn-text">
                          <div className="gold">
                            <span className="f-gold">6969K</span>
                          </div>
                          <div className="color-btn-text">buff up</div>
                        </div>
                      </div>
                    </div>
                    <div className="hero-card">
                      <div className="hero-avatar-box">
                        <div className="hero-avatar-wrap">
                          <img
                            className="hero-avatar"
                            src="img/images/hero-all/tithero-5004/x1/ava/tithero-5004-1-ava.jpg"
                            loading="lazy"
                          />
                        </div>
                        <div className="sh2-icon-forgirl">
                          <img src="img/cur2-barbarian.png" loading="lazy" />
                        </div>
                        <div className="hero-level-box">
                          lvl
                          <div className="hero-level">20</div>
                        </div>
                        <div className="hero-dps-box">
                          dps
                          <div className="hero-dps">1.5M</div>
                        </div>
                      </div>
                      <div className="color-btn green">
                        <div className="color-btn-text">
                          <div className="gold">
                            <span className="f-gold">6969K</span>
                          </div>
                          <div className="color-btn-text">buff up</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-scroll-dark left slick-disabled"></div>
                <div className="btn-scroll-dark right"></div>
                <div className="x2-btn">
                  <div className="x2-btn-text">x10</div>
                </div>
              </div>
              <div className="supheros-bottom-content">
                <div className="supheros-bonus-wrap">
                  SuperHeroes Bonus:
                  <div className="supheros-bonus-value">0</div>
                </div>
                <div className="color-btn supheros">
                  <div className="color-btn-text">SuperHeroes</div>
                </div>
              </div>
            </div>
          </div>
          <div className="skills-all-box" style={{ display: "block" }}>
            <div className="skills-all">
              <div className="skills-pic in-progress">
                <img src="img/skill-icons/skill-icon01.png" loading="lazy" />
                <div className="timer">00:00:20</div>
                <div className="skills-pic-disabled"></div>
              </div>
              <div className="skills-pic idle">
                <img
                  className="icon"
                  src="img/skill-icons/skill-icon02.png"
                  loading="lazy"
                />
                <div className="timer">00:01:11</div>
                <div className="skills-pic-disabled"></div>
              </div>
              <div className="skills-pic">
                <img src="img/skill-icons/skill-icon03.png" loading="lazy" />
                <div className="skills-pic-disabled"></div>
              </div>
              <div className="skills-pic">
                <img src="img/skill-icons/skill-icon04.png" loading="lazy" />
                <div className="skills-pic-disabled"></div>
              </div>
              <div className="skills-pic disabled">
                <img src="img/skill-icons/skill-icon05.png" loading="lazy" />
                <div className="skills-pic-disabled"></div>
              </div>
              <div className="skills-pic disabled">
                <img src="img/skill-icons/skill-icon06.png" loading="lazy" />
                <div className="skills-pic-disabled"></div>
              </div>
              <div className="skills-pic disabled">
                <img src="img/skill-icons/skill-icon07.png" loading="lazy" />
                <div className="skills-pic-disabled"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="tabs-all-box">
          <div className="tabs-all heroes selected">
            <div className="tabs-name">Heroes</div>
            <div className="tabs-pic">
              <img src="img/tab-01.png" loading="lazy" />
            </div>
          </div>
          <div className="tabs-all">
            <div className="tabs-name">Album</div>
            <div className="tabs-pic">
              <img src="img/tab-05.png" loading="lazy" />
            </div>
          </div>
          <div className="tabs-all">
            <div className="tabs-name">Guild</div>
            <div className="tabs-pic">
              <img src="img/tab-08.png" loading="lazy" />
            </div>
          </div>
          <div className="tabs-all">
            <div className="tabs-name">Rating</div>
            <div className="tabs-pic">
              <img src="img/tab-02.png" loading="lazy" />
            </div>
          </div>
          <div className="tabs-all w-house2">
            <div className="tabs-name">Womens</div>
            <div className="tabs-pic">
              <img src="img/tab-11.png" loading="lazy" />
            </div>
          </div>
          <div className="tabs-all w-house">
            <div className="tabs-name">Angels</div>
            <div className="tabs-pic">
              <img src="img/tab-12.png" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
      <div className="slider-layer" style={{ display: "block" }}>
        <div className="slider-popup open">
          <div className="title">Новое достижение: Opulence!</div>
          <div className="icon">
            <img
              className="img"
              src="img/iconach/ic-ach-02@2x.jpg"
              loading="lazy"
            />
          </div>
          <div className="text">Receive (cumulative) 100sD1 gold.</div>
          <div className="rewards">
            <div className="title">Награды:</div>
            <div className="txt">46% DPS</div>
          </div>
          <div className="close-btn"></div>
        </div>
      </div>
      <WorldBtnBox pageName={pageName} />
      {children}
    </div>
  );
}
