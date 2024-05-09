import TrophyResBoxAll from "../UIComponents/TrophyResBoxAll";

import { useDispatch } from "../../templateComponents/GlobalStateStor";

export const cssFiles = ["clan-trophies", "screen-superhero"];

export default function V2MainScreen02GuildClanTrophies({
  pageName,
  children,
}) {
  const dispatch = useDispatch();

  return (
    <div className="main world1">
      <div className="main-bg"></div>
      <div className="cw-content">
        <div className="cw-bg">
          <div className="clan-trophies-title-big">Clan Trophies</div>
          <div className="clan-trophies">
            <div className="titans-garage-scroll-box">
              <div className="titans-garage-row">
                <div
                  className="titans-garage-item"
                  onClick={() => {
                    dispatch({
                      type: "POPUP_OPEN",
                      payload: {
                        mpopClass: "m-popup clan-trophy",
                        popTit: "Earth Charmer",
                        popCont: ["ClanTrophy"],
                      },
                    });
                  }}
                >
                  <div
                    className="titans-garage-item-inner"
                    style={{
                      backgroundImage:
                        "url('../img/images/back/clan/bg_01.jpg')",
                    }}
                  >
                    <div className="titans-garage-item-image">
                      <img
                        src="img/trophy/trophy/002_1.png"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="stars">
                      <div className="star checked"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                    </div>
                    <div className="ability">Night Witch</div>
                    <div className="titan-progress gold">
                      <div
                        className="titan-progress__bar"
                        style={{
                          width: "70%",
                        }}
                      ></div>
                      <div className="titan-progress__text">100/200</div>
                    </div>
                  </div>
                </div>
                <div
                  className="titans-garage-item"
                  onClick={() => {
                    dispatch({
                      type: "POPUP_OPEN",
                      payload: {
                        mpopClass: "m-popup clan-trophy",
                        popTit: "Earth Charmer",
                        popCont: ["ClanTrophy"],
                      },
                    });
                  }}
                >
                  <div
                    className="titans-garage-item-inner"
                    style={{
                      backgroundImage:
                        "url('../img/images/back/clan/bg_02.jpg')",
                    }}
                  >
                    <div className="titans-garage-item-image">
                      <img
                        src="img/trophy/trophy/003_1.png"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="stars">
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                    </div>
                    <div className="ability">Forest Nymph</div>
                    <div className="titan-progress gold">
                      <div
                        className="titan-progress__bar"
                        style={{
                          width: "0px",
                        }}
                      ></div>
                      <div className="titan-progress__text">0/100</div>
                    </div>
                  </div>
                </div>
                <div
                  className="titans-garage-item"
                  onClick={() => {
                    dispatch({
                      type: "POPUP_OPEN",
                      payload: {
                        mpopClass: "m-popup clan-trophy",
                        popTit: "Earth Charmer",
                        popCont: ["ClanTrophy"],
                      },
                    });
                  }}
                >
                  <div
                    className="titans-garage-item-inner"
                    style={{
                      backgroundImage:
                        "url('../img/images/back/clan/bg_03.jpg')",
                    }}
                  >
                    <div className="titans-garage-item-image">
                      <img
                        src="img/trophy/trophy/004_1.png"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="stars">
                      <div className="star checked"></div>
                      <div className="star checked"></div>
                      <div className="star checked"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                    </div>
                    <div className="ability">Earth Charmer</div>
                    <div className="titan-progress gold">
                      <div
                        className="titan-progress__bar"
                        style={{
                          width: "0px",
                        }}
                      ></div>
                      <div className="titan-progress__text">380/400</div>
                    </div>
                  </div>
                </div>
                <div className="titans-garage-item locked">
                  <div
                    className="titans-garage-item-inner"
                    style={{
                      backgroundImage:
                        "url('../img/images/back/clan/bg_04.jpg')",
                    }}
                  >
                    <div className="titans-garage-item-image">
                      <img
                        src="img/trophy/trophy/006_1.png"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="stars"></div>
                    <div className="ability">Heavenly Mage</div>
                    <div className="titan-progress gold">
                      <div
                        className="titan-progress__bar"
                        style={{
                          width: "0px",
                        }}
                      ></div>
                      <div className="titan-progress__text">0/100</div>
                    </div>
                  </div>
                </div>
                <div className="titans-garage-item locked">
                  <div
                    className="titans-garage-item-inner"
                    style={{
                      backgroundImage:
                        "url('../img/images/back/clan/bg_07.jpg')",
                    }}
                  >
                    <div className="titans-garage-item-image">
                      <img
                        src="img/trophy/trophy/007_1.png"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="stars"></div>
                    <div className="ability">Noble Keeper</div>
                    <div className="titan-progress gold">
                      <div
                        className="titan-progress__bar"
                        style={{
                          width: "0px",
                        }}
                      ></div>
                      <div className="titan-progress__text">0/100</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <TrophyResBoxAll class1="essence-green" class2="essence-blue" />
          </div>
        </div>
        <div className="color-btn exit">
          <div className="color-btn-text">Exit</div>
        </div>
      </div>
      <div className="slider-layer"></div>
      <div className="tooltip-layer"></div>
      {children}
    </div>
  );
}
