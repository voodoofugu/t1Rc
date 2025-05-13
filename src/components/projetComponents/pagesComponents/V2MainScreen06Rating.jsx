import { useEffect, useState, useRef } from "react";
import { useNexus } from "nexus-state";

import StateChangeBtn from "../UIComponents/StateChangeBtn";
import MorphScroll from "../../../../morphing-scroll/src/components/MorphScroll";
import ScrollThumb from "../UIComponents/ScrollThumb";

export const cssFiles = [
  "screen-rating-maintab",
  "screen-rating-maintab-coll",
  "screen-rating",
  "screen-rating-hint",
];

function Tooltip() {
  const timerRef = useRef(null);

  const [scrollVisibility, setScrollVisibility] = useState(false);
  const [scrollClasses, setScrollClasses] = useState("prize-textBox");

  const scrollHandler = (motion) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (!motion && !scrollVisibility) {
      timerRef.current = setTimeout(() => {
        setScrollVisibility(true);
        timerRef.current = null;
      }, 1000);
    } else if (!motion) {
      timerRef.current = setTimeout(() => {
        setScrollClasses("prize-textBox hide");

        timerRef.current = setTimeout(() => {
          setScrollVisibility(motion);
          setScrollClasses("prize-textBox");
          timerRef.current = null;
        }, 200);
      }, 1000);
    }
  };

  const text = `Her skin is like bronze polished by the sun, and her long red hair
              is a flame of passion. She sings not only with her voice, but her
              body becomes a melody, her every movement a rhythm of seduction.
              The psaltery in her hands is not just an instrument, but a weapon
              that drives you crazy. When she smiles, men forget why they came.
              She is a fire into which you want to dive, knowing that you will
              be burned. Strings of Vice - She strikes the strings of the
              psaltery, emitting vibrations that penetrate the flesh of her
              enemies, making them feel aroused and weak.`;
  const scrollProps = {
    scrollPosition: scrollVisibility
      ? { value: "end", duration: text.length * 50 }
      : { value: 0, duration: 0 },
  };

  return (
    <div
      className="tooltip-layer"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* <div className="rating-hint-box">
        <div>
          <div className="rating-hint-box-name">сундук топ ранга</div>
          <div className>
            <div className>
              <div className="hint-box">
                <div className="hint-prize-box">
                  <img src="img/rating-bras-wat@1x.png" />
                </div>
                <div className="rank-reward-num">1</div>
                <div className="prize-name-text-box">
                  <div className="name-text-box">
                    <div className="hint-prize-name">bracelet</div>
                    <div className="hint-prize-text">
                      Random royal bracelet, that will please any girl.
                    </div>
                  </div>
                </div>
              </div>
              <div className="hint-box">
                <div className="hint-prize-box">
                  <img src="img/rating-neck-wat@1x.png" />
                </div>
                <div className="rank-reward-num">1</div>
                <div className="prize-name-text-box">
                  <div className="name-text-box">
                    <div className="hint-prize-name">chain</div>
                    <div className="hint-prize-text">
                      Random royal chain, that will please any girl.
                    </div>
                  </div>
                </div>
              </div>
              <div className="hint-box">
                <div className="hint-prize-box">
                  <img src="img/rating-ring-wat@1x.png" />
                </div>
                <div className="rank-reward-num">2</div>
                <div className="prize-name-text-box">
                  <div className="name-text-box">
                    <div className="hint-prize-name">ring</div>
                    <div className="hint-prize-text">
                      Random royal ring, that will please any girl.
                    </div>
                  </div>
                </div>
              </div>
              <div className="hint-box">
                <div className="hint-prize-box">
                  <img src="img/arrow_up1.png" />
                </div>
                <div className="rank-reward-num">3</div>
                <div className="prize-name-text-box">
                  <div className="name-text-box">
                    <div className="hint-prize-name">Heroine promote</div>
                    <div className="hint-prize-text">
                      Promotion of the random heroine.
                    </div>
                  </div>
                </div>
              </div>
              <div className="hint-box">
                <div className="hint-prize-box">
                  <img src="img/ic-abil-gold.png" />
                  <div className="newtime t72h">
                    <div className="newclocktime">72</div>
                  </div>
                </div>
                <div className="rank-reward-num">72</div>
                <div className="prize-name-text-box">
                  <div className="name-text-box">
                    <div className="hint-prize-name">Gold for 72h</div>
                    <div className="hint-prize-text">
                      You instantly get Gold, as if you played for 72h.
                    </div>
                  </div>
                </div>
              </div>
              <div className="hint-box">
                <div className="hint-prize-box">
                  <img src="img/ms-stone-all.png" />
                </div>
                <div className="rank-reward-num">big</div>
                <div className="prize-name-text-box">
                  <div className="name-text-box">
                    <div className="hint-prize-name">big pack Master Gems</div>
                    <div className="hint-prize-text">
                      These are gems for guild master leveling up! Contains some
                      amount of different gems: strength, intelligence, charisma
                      and luck
                    </div>
                  </div>
                </div>
              </div>
              <div className="hint-box">
                <div className="hint-prize-box">
                  <img src="img/evPopArts/potion_red.png" />
                </div>
                <div className="rank-reward-num">big</div>
                <div className="prize-name-text-box">
                  <div className="name-text-box">
                    <div className="hint-prize-name">big pack of essence</div>
                    <div className="hint-prize-text">
                      Essence, through which superheroines become stronger.
                    </div>
                  </div>
                </div>
              </div>
              <div className="hint-box empty" />
              <div className="hint-box empty" />
            </div>
          </div>
        </div>
      </div> */}

      <div className="rating-hint-box-rel">
        <div className="prize-one-box-all-rel">
          <div className="girl-box">
            <img
              className="girl-prize"
              src="https://cdn.faptitans.com/s1/__c154/images/hero-all/tithero-496/x1/tithero-1.jpg"
            />
          </div>
          <div className="prize-name-box">Himeko Akira</div>
          {/* <div className="prize-dps-box">
            <div className="prize-dps-text">124sD4</div>
          </div>
          <div className="prize-promote-box">
            <div className="prize-promote-text" />
          </div> */}
          <div className="prize-name-box small">rare hero</div>
          <MorphScroll
            className={scrollClasses}
            size={[198, 68]}
            objectsSize={[178, "none"]}
            progressTrigger={{
              progressElement: <ScrollThumb />,
            }}
            edgeGradient={{ color: "#C6BDB4", size: 16 }}
            wrapperMargin={[10, 0]}
            scrollPosition={scrollProps.scrollPosition}
            isScrolling={scrollHandler}
            wrapperAlign={"center"}
          >
            <div className="prize-text">{text}</div>
          </MorphScroll>

          <div className="unique-skill-box-all">
            <div className="prize-name-box small">with unique skills</div>
            <div className="unique-skill-box">
              <div className="unique-skill">
                <div className="skill-pic-box">
                  <img
                    className="skill-pic"
                    src="https://cdn.faptitans.com/s1/__744d/images/hero-all/tithero-496/icons/ic-abil.jpg"
                  />
                </div>
                <div className="skill-text-box">
                  <div className="skill-text">+1000% DPS for self</div>
                </div>
              </div>
              <div className="unique-skill">
                <div className="skill-pic-box">
                  <img
                    className="skill-pic"
                    src="https://cdn.faptitans.com/s1/__744d/images/hero-all/tithero-496/icons/ic-abil.jpg"
                  />
                </div>
                <div className="skill-text-box">
                  <div className="skill-text">Boss gold drop + 3900%</div>
                </div>
              </div>
              <div className="unique-skill">
                <div className="skill-pic-box">
                  <img
                    className="skill-pic"
                    src="https://cdn.faptitans.com/s1/__744d/images/hero-all/tithero-496/icons/ic-abil.jpg"
                  />
                </div>
                <div className="skill-text-box">
                  <div className="skill-text">+2500% DPS for self</div>
                </div>
              </div>
              <div className="unique-skill">
                <div className="skill-pic-box">
                  <img
                    className="skill-pic"
                    src="https://cdn.faptitans.com/s1/__744d/images/hero-all/tithero-496/icons/ic-abil.jpg"
                  />
                </div>
                <div className="skill-text-box">
                  <div className="skill-text">+3000% DPS for self</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function V2MainScreen06Rating({ pageName }) {
  const activePage = useNexus("activePage");

  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    if (pageName === activePage) {
      const jB = document.querySelector(".color-btn.jewerly");
      const cB = document.querySelector(".color-btn.collection");
      const jW = document.querySelector(".animations");
      const cW = document.querySelector(".rating-card-list-box.collection");
      cW.style.display = "none";

      cB.addEventListener("click", () => {
        jB.classList.remove("blue");
        jW.style.display = "none";
        cB.classList.add("blue");
        cW.style.display = "block";
      });
      jB.addEventListener("click", () => {
        cB.classList.remove("blue");
        cW.style.display = "none";
        jB.classList.add("blue");
        jW.style.display = "block";
      });
      return;
    }
    return () => {};
  }, [pageName, activePage]);

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
            <img className="icon" src="img/ic-abil-reborn.png" loading="lazy" />
          </div>
          <div className="quest">
            <img className="icon" src="img/ic-abil-reborn.png" loading="lazy" />
          </div>
          <div className="quest">
            <img className="icon" src="img/ic-abil-reborn.png" loading="lazy" />
          </div>
          <div className="quest">
            <img className="icon" src="img/ic-abil-reborn.png" loading="lazy" />
          </div>
          <div className="quest">
            <img className="icon" src="img/ic-abil-reborn.png" loading="lazy" />
          </div>
          <div className="quest">
            <img className="icon" src="img/ic-abil-reborn.png" loading="lazy" />
          </div>
          <div className="quest">
            <img className="icon" src="img/ic-abil-reborn.png" loading="lazy" />
          </div>
        </div>
        <div className="opt-panel-box">
          <div className="btn feedback"></div>
          <div className="btn statistic"></div>
          <div className="btn ru"></div>
        </div>
      </div>

      <div className="right-side"></div>
      <div className="left-side false false">
        <div className="left-panel wide false false">
          <div className="container">
            <div
              className="tab-panel rating-panel"
              style={{ visibility: "visible" }}
            >
              <div>
                <div className="rating-left-box">
                  <div className="rating-topbtn-box">
                    <div className="rating-timer-box">
                      <div className="rating-timer">20:06:42</div>
                      <div className="rating-timer-text">до конца рейтинга</div>
                    </div>
                    <div className="color-btn info">
                      <div className="color-btn-text">информация</div>
                    </div>
                  </div>
                  <div className="rating-ped-box">
                    <div className="ped-box rate1 undefined">
                      <div className="ped-box-noreward">нет награды</div>
                      <div className="rating-ped-box-num">
                        <div className="ped-box-num-text var1">51-100</div>
                      </div>
                    </div>
                    <div className="ped-box rate2 undefined">
                      <div className="ped-box-prize chestNew"></div>
                      <div className="rating-ped-box-num">
                        <div className="ped-box-num-text var2">21-50</div>
                      </div>
                    </div>
                    <div className="ped-box rate3 undefined">
                      <div className="ped-box-prize chestNew"></div>
                      <div className="rating-ped-box-num">
                        <div className="ped-box-num-text var3">4-20</div>
                      </div>
                    </div>
                    <div className="ped-box rate4 undefined">
                      <div className="ped-box-prize chestNew"></div>
                      <div className="rating-ped-box-num">
                        <div className="ped-box-num-text var4">1-3</div>
                      </div>
                    </div>
                    <div className="ped-box-portrait place2">
                      <div className="you-box">ты</div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-scroll-name-box">
                      <div className="rating-scroll-name var1">Место</div>
                      <div className="rating-scroll-name var2">Имя</div>
                      <div className="rating-scroll-name var3">Очки</div>
                    </div>
                    <div className="rating-scroll-box">
                      <div className="rating-scroll">
                        <div>
                          <div className="rating-card-rank top">
                            <div className="top-name-diamond">top</div>
                          </div>
                          <div className="rating-card color2">
                            <div className="number">1</div>
                            <div className="name">joepie</div>
                            <div className="points">12071</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card">
                            <div className="number">2</div>
                            <div className="name">icesweeyss</div>
                            <div className="points">9961</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card color2">
                            <div className="number">3</div>
                            <div className="name">Morgot</div>
                            <div className="points">1549</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card-rank gold">
                            <div className="">gold rank</div>
                          </div>
                          <div className="rating-card">
                            <div className="number">4</div>
                            <div className="name">mambouw</div>
                            <div className="points">1273</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card color2">
                            <div className="number">5</div>
                            <div className="name">Oh-My-Lord</div>
                            <div className="points">945</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card">
                            <div className="number">6</div>
                            <div className="name">luisgarcia</div>
                            <div className="points">800</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card color2">
                            <div className="number">7</div>
                            <div className="name">Okultist</div>
                            <div className="points">800</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card">
                            <div className="number">8</div>
                            <div className="name">lily9111110</div>
                            <div className="points">428</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card color2">
                            <div className="number">9</div>
                            <div className="name">alberthofer</div>
                            <div className="points">354</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card">
                            <div className="number">10</div>
                            <div className="name">Boomberjang</div>
                            <div className="points">203</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card color2">
                            <div className="number">11</div>
                            <div className="name">T-Kuri</div>
                            <div className="points">200</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card">
                            <div className="number">12</div>
                            <div className="name">dendroit1578</div>
                            <div className="points">198</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card color2">
                            <div className="number">13</div>
                            <div className="name">guestsss</div>
                            <div className="points">175</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card">
                            <div className="number">14</div>
                            <div className="name">ghostgo</div>
                            <div className="points">162</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card color2">
                            <div className="number">15</div>
                            <div className="name">lorddoubtful</div>
                            <div className="points">157</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card">
                            <div className="number">16</div>
                            <div className="name">eko19</div>
                            <div className="points">120</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card color2">
                            <div className="number">17</div>
                            <div className="name">rocko23</div>
                            <div className="points">80</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card">
                            <div className="number">18</div>
                            <div className="name">THE_LONG_ONE</div>
                            <div className="points">52</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card color2">
                            <div className="number">19</div>
                            <div className="name">rythm</div>
                            <div className="points">45</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card">
                            <div className="number">20</div>
                            <div className="name">chill4gill</div>
                            <div className="points">40</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card-rank silver">
                            <div className="">silver rank</div>
                          </div>
                          <div className="rating-card color2">
                            <div className="number">21</div>
                            <div className="name">andrey53</div>
                            <div className="points">40</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card">
                            <div className="number">22</div>
                            <div className="name">Pluxasy1367</div>
                            <div className="points">25</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card color2">
                            <div className="number">23</div>
                            <div className="name">DesKro</div>
                            <div className="points">23</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card">
                            <div className="number">24</div>
                            <div className="name">testuuG</div>
                            <div className="points">20</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card color2">
                            <div className="number">25</div>
                            <div className="name">TheSimpson</div>
                            <div className="points">20</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card">
                            <div className="number">26</div>
                            <div className="name">Littlethenr4ssan</div>
                            <div className="points">18</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card color2">
                            <div className="number">27</div>
                            <div className="name">dave2703</div>
                            <div className="points">15</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card">
                            <div className="number">28</div>
                            <div className="name">nitrofisch</div>
                            <div className="points">15</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card color2">
                            <div className="number">29</div>
                            <div className="name">nerondosgonz</div>
                            <div className="points">15</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card">
                            <div className="number">30</div>
                            <div className="name">BarbroMary</div>
                            <div className="points">14</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card color2">
                            <div className="number">31</div>
                            <div className="name">toxc</div>
                            <div className="points">5</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card">
                            <div className="number">32</div>
                            <div className="name">Asta1988</div>
                            <div className="points">5</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card color2 active">
                            <div className="number">33</div>
                            <div className="name">Voodoofugu</div>
                            <div className="points">5</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card">
                            <div className="number">34</div>
                            <div className="name">Giga Chad</div>
                            <div className="points">3</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card color2">
                            <div className="number">35</div>
                            <div className="name">Arrowhead</div>
                            <div className="points">3</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card">
                            <div className="number">36</div>
                            <div className="name">skududu99</div>
                            <div className="points">1</div>
                          </div>
                        </div>
                        <div>
                          <div className="rating-card color2">
                            <div className="number">37</div>
                            <div className="name">JT69</div>
                            <div className="points">1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rating-right-box">
                  <div className="rating-right-topbtn-box">
                    <div className="color-btn jewerly blue">
                      <a className="" href="#/rating/jewerly">
                        <div className="color-btn-text">jewelry</div>
                      </a>
                    </div>
                    <div className="color-btn collection">
                      <a className="" href="#/rating/collection">
                        <div className="color-btn-text">анимации</div>
                      </a>
                    </div>
                  </div>
                  <div className="animations">
                    <div className="rating-card-list-box podium">
                      <div className="rating-card-girl-box card2 high">
                        <div className="rating-card-girl-name">
                          Мадока Кайто
                        </div>
                        <div className="card-girl-box">
                          <img
                            src="img/images/hero-all/tithero-05/x1/tithero-05-1.jpg"
                            loading="lazy"
                          />
                        </div>
                        <div className="rating-visual">
                          <div className="rating-str">
                            <div className="rating-str-right"></div>
                          </div>
                          <div className="rating-str left">
                            <div className="rating-str-right"></div>
                          </div>
                        </div>
                        <div className="rating-slot-box">
                          <div>
                            <div className="rating-slot bottom-left">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-1_1.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-neck-red@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet epic"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot top-right">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-1_2.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-ring-red@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet common"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-1_3.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-ring-red@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet common"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot bottom-right lock">
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-bras-red@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet rare"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot bottom lock legendary">
                              <div>
                                <div className="rating-lock locked"></div>
                                <div className="legend-video-icon">
                                  <img
                                    src="img/rating-video-thumbnails/Sc-1_Full.jpg"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <div className="raritet legendary"></div>
                              <div className="check"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rating-card-girl-box card3 high">
                        <div className="rating-card-girl-name">Акэми Имма</div>
                        <div className="card-girl-box">
                          <img
                            src="img/images/hero-all/tithero-13/x1/tithero-13-1.jpg"
                            loading="lazy"
                          />
                        </div>
                        <div className="rating-visual">
                          <div className="rating-str">
                            <div className="rating-str-right"></div>
                          </div>
                          <div className="rating-str left">
                            <div className="rating-str-right"></div>
                          </div>
                        </div>
                        <div className="rating-slot-box">
                          <div>
                            <div className="rating-slot bottom-left">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-2_1.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-neck-green@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet epic"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot top-right">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-2_2.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-ring-green@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet common"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-2_3.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-ring-green@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet common"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot bottom-right">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-2_4.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-bras-green@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet rare"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot bottom legendary">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-2_Full.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div>
                                <div className="rating-lock locked"></div>
                                <div className="legend-video-icon">
                                  <img
                                    src="img/rating-video-thumbnails/Sc-2_Full.jpg"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <div className="raritet legendary"></div>
                              <div className="check"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rating-card-girl-box card-none">
                        <div className="rating-card-girl-name">Амая Карасу</div>
                        <div className="card-girl-box">
                          <img
                            src="img/images/hero-all/tithero-25/x1/tithero-25-1.jpg"
                            loading="lazy"
                          />
                        </div>
                        <div className="rating-visual">
                          <div className="rating-str">
                            <div className="rating-str-right"></div>
                          </div>
                          <div className="rating-str left">
                            <div className="rating-str-right"></div>
                          </div>
                        </div>
                        <div className="rating-slot-box">
                          <div>
                            <div className="rating-slot bottom-left">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-3_1.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-neck-blue@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet epic"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot top-right">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-3_2.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-ring-blue@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet common"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-3_3.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-ring-blue@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet common"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot bottom-right lock">
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-bras-blue@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet rare"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot bottom lock legendary">
                              <div>
                                <div className="rating-lock locked"></div>
                                <div className="legend-video-icon">
                                  <img
                                    src="img/rating-video-thumbnails/Sc-3_Full.jpg"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <div className="raritet legendary"></div>
                              <div className="check"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rating-card-girl-box card1 high">
                        <div className="rating-card-girl-name">
                          Цубаса Акума
                        </div>
                        <div className="card-girl-box">
                          <img
                            src="img/images/superhero/suphero-04/x1/04sh-2.jpg"
                            loading="lazy"
                          />
                        </div>
                        <div className="rating-visual">
                          <div className="rating-str">
                            <div className="rating-str-right"></div>
                          </div>
                          <div className="rating-str left">
                            <div className="rating-str-right"></div>
                          </div>
                        </div>
                        <div className="rating-slot-box">
                          <div>
                            <div className="rating-slot bottom-left">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-4_1.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-neck-red@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet epic"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot top-right">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-4_2.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-ring-red@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet common"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-4_3.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-ring-red@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet common"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot bottom-right lock">
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-bras-red@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet rare"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot bottom lock legendary">
                              <div>
                                <div className="rating-lock locked"></div>
                                <div className="legend-video-icon">
                                  <img
                                    src="img/rating-video-thumbnails/Sc-4_Full.jpg"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <div className="raritet legendary"></div>
                              <div className="check"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="btn-scroll left"></div>
                      <div className="btn-scroll right"></div>
                    </div>
                  </div>
                  <div className="rating-card-list-box collection">
                    <div className="rating-card-scroll-list-box">
                      <div className="scroll-card-box silver">
                        <div className="top-name-card-box">
                          <div className="top-name-card">Мадока Кайто</div>
                          <div className="top-name-card scenes">сцены</div>
                        </div>
                        <div className="girl-card-box">
                          <img
                            className="girl-card"
                            src="img/images/hero-all/tithero-05/x1/tithero-05-1.jpg"
                            loading="lazy"
                          />
                        </div>
                        <div className="girl-bonus-fullset">
                          Бонус за полный набор
                        </div>
                        <div className="girl-bonus-fullset-all bn-price">
                          DPS +300%
                        </div>
                        <div className="rating-slot-box">
                          <div>
                            <div className="rating-slot bottom-left">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-1_1.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-neck-red@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet epic"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot top-right">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-1_2.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-ring-red@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet common"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-1_3.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-ring-red@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet common"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot bottom-right lock">
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-bras-red@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet rare"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot bottom lock legendary">
                              <div>
                                <div className="rating-lock locked"></div>
                                <div className="legend-video-icon">
                                  <img
                                    src="img/rating-video-thumbnails/Sc-1_Full.jpg"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <div className="raritet legendary"></div>
                              <div className="check"></div>
                            </div>
                          </div>
                          <div className="rating-paychek"></div>
                        </div>
                      </div>
                      <div className="scroll-card-box gold">
                        <div className="top-name-card-box">
                          <div className="top-name-card">Акэми Имма</div>
                          <div className="top-name-card scenes">сцены</div>
                        </div>
                        <div className="girl-card-box">
                          <img
                            className="girl-card"
                            src="img/images/hero-all/tithero-13/x1/tithero-13-1.jpg"
                            loading="lazy"
                          />
                        </div>
                        <div className="girl-bonus-fullset">
                          Бонус за полный набор
                        </div>
                        <div className="girl-bonus-fullset-all bn-price">
                          DPC +300%
                        </div>
                        <div className="rating-slot-box">
                          <div>
                            <div className="rating-slot bottom-left">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-2_1.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-neck-green@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet epic"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot top-right">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-2_2.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-ring-green@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet common"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-2_3.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-ring-green@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet common"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot bottom-right">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-2_4.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-bras-green@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet rare"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot bottom legendary">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-2_Full.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div>
                                <div className="rating-lock locked"></div>
                                <div className="legend-video-icon">
                                  <img
                                    src="img/rating-video-thumbnails/Sc-2_Full.jpg"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <div className="raritet legendary"></div>
                              <div className="check"></div>
                            </div>
                          </div>
                          <div className="rating-paychek"></div>
                        </div>
                      </div>
                      <div className="scroll-card-box silver">
                        <div className="top-name-card-box">
                          <div className="top-name-card">Амая Карасу</div>
                          <div className="top-name-card scenes">сцены</div>
                        </div>
                        <div className="girl-card-box">
                          <img
                            className="girl-card"
                            src="img/images/hero-all/tithero-25/x1/tithero-25-1.jpg"
                            loading="lazy"
                          />
                        </div>
                        <div className="girl-bonus-fullset">
                          Бонус за полный набор
                        </div>
                        <div className="girl-bonus-fullset-all bn-price">
                          +300%
                          <div className="bn-icon gold"></div>
                        </div>
                        <div className="rating-slot-box">
                          <div>
                            <div className="rating-slot bottom-left">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-3_1.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-neck-blue@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet epic"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot top-right">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-3_2.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-ring-blue@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet common"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-3_3.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-ring-blue@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet common"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot bottom-right lock">
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-bras-blue@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet rare"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot bottom lock legendary">
                              <div>
                                <div className="rating-lock locked"></div>
                                <div className="legend-video-icon">
                                  <img
                                    src="img/rating-video-thumbnails/Sc-3_Full.jpg"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <div className="raritet legendary"></div>
                              <div className="check"></div>
                            </div>
                          </div>
                          <div className="rating-paychek"></div>
                        </div>
                      </div>
                      <div className="scroll-card-box silver">
                        <div className="top-name-card-box">
                          <div className="top-name-card">Цубаса Акума</div>
                          <div className="top-name-card scenes">сцены</div>
                        </div>
                        <div className="girl-card-box">
                          <img
                            className="girl-card"
                            src="img/images/superhero/suphero-04/x1/04sh-2.jpg"
                            loading="lazy"
                          />
                        </div>
                        <div className="girl-bonus-fullset">
                          Бонус за полный набор
                        </div>
                        <div className="girl-bonus-fullset-all bn-price">
                          DPS +500%
                        </div>
                        <div className="rating-slot-box">
                          <div>
                            <div className="rating-slot bottom-left">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-4_1.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-neck-red@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet epic"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot top-right">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-4_2.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-ring-red@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet common"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot">
                              <div className="rating-video">
                                <img
                                  src="img/rating-video-thumbnails/Sc-4_3.jpg"
                                  loading="lazy"
                                />
                                <div className="rating-video-play"></div>
                              </div>
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-ring-red@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet common"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot bottom-right lock">
                              <div className="rating-lock locked">
                                <img
                                  src="img/rating-bras-red@1x.png"
                                  loading="lazy"
                                />
                              </div>
                              <div className="raritet rare"></div>
                              <div className="check"></div>
                            </div>
                            <div className="rating-slot bottom lock legendary">
                              <div>
                                <div className="rating-lock locked"></div>
                                <div className="legend-video-icon">
                                  <img
                                    src="img/rating-video-thumbnails/Sc-4_Full.jpg"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <div className="raritet legendary"></div>
                              <div className="check"></div>
                            </div>
                          </div>
                          <div className="rating-paychek"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-close-x"></div>
            </div>
            <div className="tab-loading-wrapper border"></div>
          </div>
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
          <a
            className="tabs-all rating selected"
            href="#/rating/jewerly"
            aria-current="page"
          >
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
      {tooltip && <Tooltip />}
      <StateChangeBtn
        state={tooltip}
        setState={setTooltip}
        textFrom="view tooltip"
        textTo="hide tooltip"
        style={{
          position: "absolute",
          right: "0",
          marginTop: "20px",
        }}
      />
    </div>
  );
}
