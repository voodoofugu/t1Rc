import { useState } from "react";

import { nexusTrigger } from "nexus-state";

export const cssFiles = [
  "screen-fapopoly-rules",
  // "screen-unipop-subscription",
  // "v2-screen-tower",
  // "v2-screen-tower-relics",
  // "v2-screen-events-btlpass",
  // "screen-superhero",
  // "popup-loseboss",
  // "screen-event_main-sale",
  // "screen-change-openchest",
  // "screen-change-all",
  // "screen-change-givepic",
  // "screen-change-collpop",
  // "v2-screen-offer-boss-chest-pop",
  // "v2-screen-error",
  // "screen-rating",
  // "screen-rating-popstart",
  // "screen-fortuna-dual-pack",
  // "quests-ui",
  // "screen-fortuna-winpop",
  // "pop-wpck-end",
  // "pop-wpck-all",
  // "pop-wpck1",
  // "pop-wpck2",
  // "pop-wpck3",
  // "pop-wpck4",
  // "pop-wpck5",
  // "screen-fortuna-round-main_16x",
  // "screen-base",
  // "screen-change-addchest",
  // "shop-diamondbuy",
  // "screen-rating-reward",
  // "screen-rating-rankchange",
  // "v2-screen-hero",
  // "v2-screen-hero-promotion",
  // "v2-screen-xmas-pop1",
  // "v2-screen-xmas-pop2",
  // "v2-screen-xmas-pop3",
  // "sh2-openchest",
  // "v2-screen-offer",
  // "v2-screen-main-relics-pop",
  // "screen-chests-shop",
  // "screen-info-pop",
  // // "pop-dark-btlpas",
  // "screen-bank",
  // "screen-rating-fullcoll",
  // "screen-bank-5st",
  // "fap_market",
  // "store-items",
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

      <div className="header">
        <div className="resource-panel">
          <div className="avatar-box-all">
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
          <div className="res-chest-btn">
            <div className="res-chest-btn-text">chests</div>
          </div>
        </div>
        <div className="btn signinout-btn out">
          <div className="icon-reg"></div>
          <div className="icon-reg2"></div>
        </div>
      </div>

      <div className="quest-box-all">
        <div className="quest-box-scroll">
          <div className="quest-box">
            <li className="quest">
              <img
                className="icon"
                loading="lazy"
                src="img/ic-abil-reborn.png"
              />
            </li>
          </div>
        </div>
        <div className="opt-panel-box">
          <div className="color-bg" />
          <div className="btn feedback" />
          <div className="btn statistic" />
          <div className="btn settings" />
          <div className="btn ru" />
        </div>
        <div className="btn-discord" />
      </div>

      <div className="right-side"></div>
      <div className="left-side">
        <div className="left-panel wide">
          <div className="heroes-list-all-box"></div>
        </div>
        <div className="tabs-all-box">
          <a className="tabs-all heroes" href="#/">
            <div>
              <div className="tabs-name">Heroes</div>
              <div className="tabs-pic">
                <img src="img/tab-01.png" loading="lazy" />
              </div>
            </div>
          </a>
          <a className="tabs-all guild" href="#/guild">
            <div>
              <div className="tabs-name">Guild base</div>
              <div className="tabs-pic">
                <img src="img/tab-08.png" loading="lazy" />
              </div>
            </div>
            <div className="v2-tab-notif notif notif20"></div>
          </a>
          <a className="tabs-all album" href="#/galery/pictures">
            <div>
              <div className="tabs-name">Gallery</div>
              <div className="tabs-pic">
                <img src="img/tab-05.png" loading="lazy" />
              </div>
            </div>
          </a>
          <a className="tabs-all rating" href="#/rating/jewerly">
            <div>
              <div className="tabs-name">Rating Tab</div>
              <div className="tabs-pic">
                <img src="img/tab-02.png" loading="lazy" />
              </div>
            </div>
          </a>
          <a className="tabs-all squests" href="#/quests">
            <div>
              <div className="tabs-name">Quests</div>
              <div className="tabs-pic">
                <img src="img/tab-10.png" loading="lazy" />
              </div>
            </div>
          </a>
          <a className="tabs-all gallery selected" href="#/shorts">
            <div>
              <div className="tabs-name">Shorts</div>
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
