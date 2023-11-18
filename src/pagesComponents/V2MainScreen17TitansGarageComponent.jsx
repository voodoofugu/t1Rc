import React from "react";

import HelmetForCss from "../components/HelmetForCss.jsx";
const cssFiles = [
  "01-all",
  "01-all-res",
  "v2-screen-main",
  "v2-screen-main-dark-world",

  "v2-screen-titans-garage",
];

export default function V2MainScreen17TitansGarageComponent() {
  return (
    <HelmetForCss cssFiles={cssFiles}>
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
          <div className="quest-box">
            <div className="quest">
              <img
                className="icon"
                src="img/ic-abil-reborn.png"
                loading="lazy"
              />
            </div>
            <div className="quest">
              <img
                className="icon"
                src="img/ic-abil-reborn.png"
                loading="lazy"
              />
            </div>
            <div className="quest">
              <img
                className="icon"
                src="img/ic-abil-reborn.png"
                loading="lazy"
              />
            </div>
            <div className="quest">
              <img
                className="icon"
                src="img/ic-abil-reborn.png"
                loading="lazy"
              />
            </div>
            <div className="quest">
              <img
                className="icon"
                src="img/ic-abil-reborn.png"
                loading="lazy"
              />
            </div>
            <div className="quest">
              <img
                className="icon"
                src="img/ic-abil-reborn.png"
                loading="lazy"
              />
            </div>
            <div className="quest">
              <img
                className="icon"
                src="img/ic-abil-reborn.png"
                loading="lazy"
              />
            </div>
          </div>
          <div className="opt-panel-box">
            <div className="btn feedback"></div>
            <div className="btn statistic"></div>
            <div className="btn ru"></div>
          </div>
        </div>
        <div className="left-side">
          <div className="left-panel wide">
            <div className="tab-panel-box at-titans-garage">
              <div className="titans-garage-scroll-box">
                <div className="titans-garage-row">
                  <div className="titans-garage-item">
                    <div className="titans-garage-item-inner">
                      <div className="titans-garage-item-image">
                        <img src="img/v2-at-master.png" alt="" loading="lazy" />
                      </div>
                      <div className="stars">
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="ability">Ability: Laser Beam</div>
                      <div className="mech-stats">
                        <div className="stat atk">686868</div>
                        <div className="stat hp">686868</div>
                        <div className="stat pow">686868</div>
                      </div>
                      <div className="titan-progress gold">
                        <div
                          className="titan-progress__bar"
                          style={{
                            width: "85%",
                          }}
                        ></div>
                        <div className="titan-progress__text">300/300</div>
                      </div>
                      {/*                                    <div className="titan-label">*/}
                      {/*                                        Master*/}
                      {/*                                    </div>*/}
                      <div className="event-to-unlock">
                        <div className="text">Unlocked in Clan Wars Event</div>
                        <div className="color-btn">
                          <div className="color-btn-text">Show</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="titans-garage-item">
                    <div className="titans-garage-item-inner">
                      <div className="titans-garage-item-image">
                        <img src="img/v2-at-master.png" alt="" loading="lazy" />
                      </div>
                      <div className="stars">
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="ability">Ability: Laser Beam</div>
                      <div className="mech-stats">
                        <div className="stat atk">686868</div>
                        <div className="stat hp">686868</div>
                        <div className="stat pow">686868</div>
                      </div>
                      <div className="titan-progress gold">
                        <div
                          className="titan-progress__bar"
                          style={{
                            width: "85%",
                          }}
                        ></div>
                        <div className="titan-progress__text">300/300</div>
                      </div>
                      {/*                                    <div className="titan-label">*/}
                      {/*                                        Master*/}
                      {/*                                    </div>*/}
                      <div className="event-to-unlock">
                        <div className="text">Unlocked in Clan Wars Event</div>
                        <div className="color-btn">
                          <div className="color-btn-text">Show</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="titans-garage-item locked">
                    <div className="titans-garage-item-inner">
                      <div className="titans-garage-item-image">
                        <img src="img/v2-at-master.png" alt="" loading="lazy" />
                      </div>
                      <div className="stars">
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="ability">Ability: Laser Beam</div>
                      <div className="mech-stats">
                        <div className="stat atk">686868</div>
                        <div className="stat hp">686868</div>
                        <div className="stat pow">686868</div>
                      </div>
                      <div className="titan-progress gold">
                        <div
                          className="titan-progress__bar"
                          style={{
                            width: "85%",
                          }}
                        ></div>
                        <div className="titan-progress__text">300/300</div>
                      </div>
                      {/*                                    <div className="titan-label">*/}
                      {/*                                        Master*/}
                      {/*                                    </div>*/}
                      <div className="event-to-unlock">
                        <div className="text">Unlocked in Clan Wars Event</div>
                        <div className="color-btn">
                          <div className="color-btn-text">Show</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="titans-garage-item locked">
                    <div className="titans-garage-item-inner">
                      <div className="titans-garage-item-image">
                        <img src="img/v2-at-master.png" alt="" loading="lazy" />
                      </div>
                      <div className="stars">
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="ability">Ability: Laser Beam</div>
                      <div className="mech-stats">
                        <div className="stat atk">686868</div>
                        <div className="stat hp">686868</div>
                        <div className="stat pow">686868</div>
                      </div>
                      <div className="titan-progress gold">
                        <div
                          className="titan-progress__bar"
                          style={{
                            width: "85%",
                          }}
                        ></div>
                        <div className="titan-progress__text">300/300</div>
                      </div>
                      {/*                                    <div className="titan-label">*/}
                      {/*                                        Master*/}
                      {/*                                    </div>*/}
                      <div className="event-to-unlock">
                        <div className="text">Unlocked in Clan Wars Event</div>
                        <div className="color-btn">
                          <div className="color-btn-text">Show</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="titans-garage-item locked">
                    <div className="titans-garage-item-inner">
                      <div className="titans-garage-item-image">
                        <img src="img/v2-at-master.png" alt="" loading="lazy" />
                      </div>
                      <div className="stars">
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="ability">Ability: Laser Beam</div>
                      <div className="mech-stats">
                        <div className="stat atk">686868</div>
                        <div className="stat hp">686868</div>
                        <div className="stat pow">686868</div>
                      </div>
                      <div className="titan-progress gold">
                        <div
                          className="titan-progress__bar"
                          style={{
                            width: "85%",
                          }}
                        ></div>
                        <div className="titan-progress__text">300/300</div>
                      </div>
                      {/*                                    <div className="titan-label">*/}
                      {/*                                        Master*/}
                      {/*                                    </div>*/}
                      <div className="event-to-unlock">
                        <div className="text">Unlocked in Clan Wars Event</div>
                        <div className="color-btn">
                          <div className="color-btn-text">Show</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="titans-garage-item locked">
                    <div className="titans-garage-item-inner">
                      <div className="titans-garage-item-image">
                        <img src="img/v2-at-master.png" alt="" loading="lazy" />
                      </div>
                      <div className="stars">
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="ability">Ability: Laser Beam</div>
                      <div className="mech-stats">
                        <div className="stat atk">686868</div>
                        <div className="stat hp">686868</div>
                        <div className="stat pow">686868</div>
                      </div>
                      <div className="titan-progress gold">
                        <div
                          className="titan-progress__bar"
                          style={{
                            width: "85%",
                          }}
                        ></div>
                        <div className="titan-progress__text">300/300</div>
                      </div>
                      {/*                                    <div className="titan-label">*/}
                      {/*                                        Master*/}
                      {/*                                    </div>*/}
                      <div className="event-to-unlock">
                        <div className="text">Unlocked in Clan Wars Event</div>
                        <div className="color-btn">
                          <div className="color-btn-text">Show</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="titans-garage-item locked">
                    <div className="titans-garage-item-inner">
                      <div className="titans-garage-item-image">
                        <img src="img/v2-at-master.png" alt="" loading="lazy" />
                      </div>
                      <div className="stars">
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="ability">Ability: Laser Beam</div>
                      <div className="mech-stats">
                        <div className="stat atk">686868</div>
                        <div className="stat hp">686868</div>
                        <div className="stat pow">686868</div>
                      </div>
                      <div className="titan-progress gold">
                        <div
                          className="titan-progress__bar"
                          style={{
                            width: "85%",
                          }}
                        ></div>
                        <div className="titan-progress__text">300/300</div>
                      </div>
                      {/*                                    <div className="titan-label">*/}
                      {/*                                        Master*/}
                      {/*                                    </div>*/}
                      <div className="event-to-unlock">
                        <div className="text">Unlocked in Clan Wars Event</div>
                        <div className="color-btn">
                          <div className="color-btn-text">Show</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="titans-garage-item locked">
                    <div className="titans-garage-item-inner">
                      <div className="titans-garage-item-image">
                        <img src="img/v2-at-master.png" alt="" loading="lazy" />
                      </div>
                      <div className="stars">
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="ability">Ability: Laser Beam</div>
                      <div className="mech-stats">
                        <div className="stat atk">686868</div>
                        <div className="stat hp">686868</div>
                        <div className="stat pow">686868</div>
                      </div>
                      <div className="titan-progress gold">
                        <div
                          className="titan-progress__bar"
                          style={{
                            width: "85%",
                          }}
                        ></div>
                        <div className="titan-progress__text">300/300</div>
                      </div>
                      {/*                                    <div className="titan-label">*/}
                      {/*                                        Master*/}
                      {/*                                    </div>*/}
                      <div className="event-to-unlock">
                        <div className="text">Unlocked in Clan Wars Event</div>
                        <div className="color-btn">
                          <div className="color-btn-text">Show</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="titans-garage-item locked">
                    <div className="titans-garage-item-inner">
                      <div className="titans-garage-item-image">
                        <img src="img/v2-at-master.png" alt="" loading="lazy" />
                      </div>
                      <div className="stars">
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="ability">Ability: Laser Beam</div>
                      <div className="mech-stats">
                        <div className="stat atk">686868</div>
                        <div className="stat hp">686868</div>
                        <div className="stat pow">686868</div>
                      </div>
                      <div className="titan-progress gold">
                        <div
                          className="titan-progress__bar"
                          style={{
                            width: "85%",
                          }}
                        ></div>
                        <div className="titan-progress__text">300/300</div>
                      </div>
                      {/*                                    <div className="titan-label">*/}
                      {/*                                        Master*/}
                      {/*                                    </div>*/}
                      <div className="event-to-unlock">
                        <div className="text">Unlocked in Clan Wars Event</div>
                        <div className="color-btn">
                          <div className="color-btn-text">Show</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="titans-garage-item locked">
                    <div className="titans-garage-item-inner">
                      <div className="titans-garage-item-image">
                        <img src="img/v2-at-master.png" alt="" loading="lazy" />
                      </div>
                      <div className="stars">
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="ability">Ability: Laser Beam</div>
                      <div className="mech-stats">
                        <div className="stat atk">686868</div>
                        <div className="stat hp">686868</div>
                        <div className="stat pow">686868</div>
                      </div>
                      <div className="titan-progress gold">
                        <div
                          className="titan-progress__bar"
                          style={{
                            width: "85%",
                          }}
                        ></div>
                        <div className="titan-progress__text">300/300</div>
                      </div>
                      {/*                                    <div className="titan-label">*/}
                      {/*                                        Master*/}
                      {/*                                    </div>*/}
                      <div className="event-to-unlock">
                        <div className="text">Unlocked in Clan Wars Event</div>
                        <div className="color-btn">
                          <div className="color-btn-text">Show</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="titans-garage-item locked">
                    <div className="titans-garage-item-inner">
                      <div className="titans-garage-item-image">
                        <img src="img/v2-at-master.png" alt="" loading="lazy" />
                      </div>
                      <div className="stars">
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star checked"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="ability">Ability: Laser Beam</div>
                      <div className="mech-stats">
                        <div className="stat atk">686868</div>
                        <div className="stat hp">686868</div>
                        <div className="stat pow">686868</div>
                      </div>
                      <div className="titan-progress gold">
                        <div
                          className="titan-progress__bar"
                          style={{
                            width: "85%",
                          }}
                        ></div>
                        <div className="titan-progress__text">300/300</div>
                      </div>
                      {/*                                    <div className="titan-label">*/}
                      {/*                                        Master*/}
                      {/*                                    </div>*/}
                      <div className="event-to-unlock">
                        <div className="text">Unlocked in Clan Wars Event</div>
                        <div className="color-btn">
                          <div className="color-btn-text">Show</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="btn-close-x"></div>
              {/*                    <div className="trophy-res-box-all">*/}
              {/*                        <div className="trophy-res-box gems">*/}
              {/*                            <div className="trophy-value">696969К</div>*/}
              {/*                            <div className="trophy-value-btn-add"></div>*/}
              {/*                        </div>*/}
              {/*                        <div className="trophy-res-box mithril">*/}
              {/*                            <div className="trophy-value">696969К</div>*/}
              {/*                            <div className="trophy-value-btn-add"></div>*/}
              {/*                        </div>*/}
              {/*                    </div>*/}
              <div className="essence-hero-box open">
                <div className="essence-icon"></div>
                <div className="essence-coll">5154T</div>
                <div className="essence-plus-btn color-btn"></div>
                <div className="essence-plus-open-btn color-btn green">
                  <div className="color-btn-text">open</div>
                </div>
              </div>
            </div>
          </div>
          <div className="tabs-all-box">
            <div className="tabs-all selected">
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
          </div>
        </div>
      </div>
    </HelmetForCss>
  );
}