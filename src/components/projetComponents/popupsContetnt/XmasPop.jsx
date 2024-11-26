import { nexusDispatch, useNexus } from "nexus-state";

import ItemBox from "../UIComponents/ItemBox";
import elements from "../data/PopResValue";

function XmasPop1({ setXmasPop }) {
  const popupState = useNexus("popupState");

  return (
    <>
      <div className="color-box"></div>
      <div className="xmas-box-all">
        <div className="xmas-collect-box-all">
          <div className="xmas-collect-box">
            <div className="xmas-collect-box-text">
              collect dildos to get xxxmas girls!
            </div>
          </div>
          <div className="xmas-squad-holder">
            <div className="hero-box">
              <div className="hero-avatar-box">
                <img
                  className="hero-avatar"
                  src="img/images/hero-all/tithero-00/x2/ava/tithero-ava-1.jpg"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="hero-box">
              <div className="hero-avatar-box">
                <img
                  className="hero-avatar"
                  src="img/images/hero-all/tithero-00/x2/ava/tithero-ava-1.jpg"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="hero-box">
              <div className="hero-avatar-box">
                <img
                  className="hero-avatar"
                  src="img/images/superhero/suphero-771/x1/avatar/771sh-ava-1.jpg"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="hero-box">
              <div className="hero-avatar-box">
                <img
                  className="hero-avatar"
                  src="img/images/superhero/suphero-777/x1/avatar/777sh-ava-1.jpg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="prgball-box">
            <div className="prgall-prom">
              <div
                className="prg-all-bar"
                style={{
                  width: "25%",
                }}
              ></div>
            </div>
            <div className="prg-all-text">
              you have 0/9.63K
              <span className="ic-dildo"></span>
              dildos
            </div>
          </div>
          <div className="xmas-info-btn"></div>
        </div>
        <div className="xmas-level-box-all">
          <div className="xmas-sim-el-box">
            <div className="xmas-level">level</div>
            <div className="xmas-reward">reward</div>
          </div>
          <div className="xmas-level-simple-box-scroll indiana-scroll-container">
            <div className="xmas-level-level">
              <div
                className="xmas-level-level-prg"
                style={{
                  width: "1%",
                }}
              ></div>
              <div className="xmas-level-level-num-box">
                {elements.map((element, index) => (
                  <div key={index} className="xmas-level-level-num">
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>
            <div className="xmas-level-reward">
              {elements.map((element, index) => (
                <ItemBox
                  key={index}
                  itemClass={`wh60 ${element.itemClass}`}
                  itemPic={element.itemPic}
                  count={element.count}
                  get={element.itemClass === "get" && true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="xmas-girl">
        <img src="img/break-girls/break-girl933.png" loading="lazy" />
      </div>
      <div className="xmas-btn-box">
        <div className="color-btn quest">
          <div
            className="color-btn-text"
            onClick={() => setXmasPop("xmas-pop3")}
          >
            quest
          </div>
        </div>
        <div className="color-btn green" onClick={() => popupState.popClose()}>
          <div className="color-btn-text">close</div>
        </div>
        <div className="color-btn shop">
          <div
            className="color-btn-text"
            onClick={() => setXmasPop("xmas-pop2")}
          >
            shop
          </div>
        </div>
      </div>
    </>
  );
}

function XmasPop2({ setXmasPop }) {
  return (
    <>
      <div className="color-box"></div>
      <div className="xmas-box-all">
        <div className="xmas-collect-box-all">
          <div className="xmas-collect-box">
            <div className="xmas-collect-box-text">
              collect dildos to get xxxmas girls!
            </div>
          </div>
          <div className="prgball-box">
            <div className="prgall-prom">
              <div
                className="prg-all-bar"
                style={{
                  width: "25%",
                }}
              ></div>
            </div>
            <div className="prg-all-text">
              you have 0/9.63K
              <span className="ic-dildo"></span>
              dildos
            </div>
          </div>
          <div className="xmas-info-btn"></div>
        </div>
        <div className="store-item-all">
          <div className="store-item-all-name">x-mas chests</div>
          <div className="store-item-box">
            <div className="store-name">1 XMas Chest</div>
            <div className="item-box">
              <img src="img/v2-xmas-chest-red.png" loading="lazy" />
            </div>
            <div className="color-btn diamond">
              <div className="color-btn-text">
                <div className="diamonds">
                  buy
                  <span className="f-diamond">18</span>
                </div>
              </div>
            </div>
          </div>
          <div className="store-item-box">
            <div className="store-name">3 XMas Chests</div>
            <div className="item-box">
              <img src="img/v2-xmas-chest-red.png" loading="lazy" />
            </div>
            <div className="color-btn diamond">
              <div className="color-btn-text">
                <div className="diamonds">
                  buy
                  <span className="f-diamond">43</span>
                </div>
              </div>
            </div>
          </div>
          <div className="store-item-box">
            <div className="store-name">5 XMas Chests</div>
            <div className="item-box">
              <img src="img/v2-xmas-chest-red.png" loading="lazy" />
            </div>
            <div className="color-btn diamond">
              <div className="color-btn-text">
                <div className="diamonds">
                  buy
                  <span className="f-diamond">63</span>
                </div>
              </div>
            </div>
          </div>
          <div className="store-item-box">
            <div className="store-name">10 XMas Chests</div>
            <div className="item-box">
              <img src="img/v2-xmas-chest-red.png" loading="lazy" />
            </div>
            <div className="color-btn diamond">
              <div className="color-btn-text">
                <div className="diamonds">
                  buy
                  <span className="f-diamond">108</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xmas-girl">
        <img src="img/break-girls/break-girl927.png" loading="lazy" />
      </div>
      <div className="xmas-btn-box">
        <div className="color-btn">
          <div
            className="color-btn-text"
            onClick={() => setXmasPop("xmas-pop1")}
          >
            back
          </div>
        </div>
      </div>
    </>
  );
}

function XmasPop3({ setXmasPop }) {
  return (
    <>
      <div className="color-box xmas"></div>
      <div className="xmas-daily-prg-box-all">
        <div className="xmas-prg-girl">
          <img src="img/break-girls/break-girl927.png" loading="lazy" />
        </div>
        <div className="xmas-prg-bar-box">
          <div className="xmas-prg-name-pic">0</div>
          <div className="xmas-prg-bar">
            <div
              className="xmas-prg"
              style={{
                width: "25%",
              }}
            ></div>
          </div>
        </div>
        <div className="xmas-reward-chest-box undefined undefined undefined">
          <div className="xmas-prg-bar-num-line">
            <div className="xmas-prg-bar-num">30</div>
          </div>
          <div className="xmas-level-rew-pic">
            <img src="img/v2-xmas-chest-red.png" loading="lazy" />
          </div>
          <div className="xmas-level-rew-num-check"></div>
          <div className="color-btn green">
            <div className="color-btn-text">collect</div>
          </div>
          <div className="xmas-level-rew-num-block"></div>
        </div>
        <div className="xmas-reward-chest-box v2 undefined undefined">
          <div className="xmas-prg-bar-num-line">
            <div className="xmas-prg-bar-num">70</div>
          </div>
          <div className="xmas-level-rew-pic">
            <img src="img/v2-xmas-chest-red.png" loading="lazy" />
          </div>
          <div className="xmas-level-rew-num-check"></div>
          <div className="color-btn green">
            <div className="color-btn-text">collect</div>
          </div>
          <div className="xmas-level-rew-num-block"></div>
        </div>
        <div className="xmas-reward-chest-box v3 undefined undefined">
          <div className="xmas-prg-bar-num-line">
            <div className="xmas-prg-bar-num">100</div>
          </div>
          <div className="xmas-level-rew-pic">
            <img src="img/v2-xmas-chest-red.png" loading="lazy" />
          </div>
          <div className="xmas-level-rew-num-check"></div>
          <div className="color-btn green">
            <div className="color-btn-text">collect</div>
          </div>
          <div className="xmas-level-rew-num-block"></div>
        </div>
      </div>
      <div className="xmas-daily-box-all xmas">
        <div className="xmas-daily-box">
          <div className="daily-parth-box">
            <div className="daily-parth-text">Hunt 3 bosses</div>
            <div className="daily-prgbar-all">
              <div
                className="daily-prgbar"
                style={{
                  width: "0%",
                }}
              ></div>
              <div className="daily-prgbar-text">0/3</div>
            </div>
            <div className="daily-parth-claim-box">
              <div className="daily-reward">
                <div className="daily-reward-pic">
                  <img src="img/ic-dildo-gold.png" loading="lazy" />
                </div>
                <div className="daily-reward-count">20</div>
              </div>
              <div className="color-btn disabled">
                <div className="color-btn-text">
                  <span>claim reward</span>
                </div>
              </div>
            </div>
          </div>
          <div className="daily-parth-box">
            <div className="daily-parth-text">Use 1 boss chests.</div>
            <div className="daily-prgbar-all">
              <div
                className="daily-prgbar"
                style={{
                  width: "0%",
                }}
              ></div>
              <div className="daily-prgbar-text">0/1</div>
            </div>
            <div className="daily-parth-claim-box">
              <div className="daily-reward">
                <div className="daily-reward-pic">
                  <img src="img/ic-dildo-gold.png" loading="lazy" />
                </div>
                <div className="daily-reward-count">10</div>
              </div>
              <div className="color-btn disabled">
                <div className="color-btn-text">
                  <span>claim reward</span>
                </div>
              </div>
            </div>
          </div>
          <div className="daily-parth-box">
            <div className="daily-parth-text">
              Level up any heroine by 10 levels.
            </div>
            <div className="daily-prgbar-all">
              <div
                className="daily-prgbar"
                style={{
                  width: "0%",
                }}
              ></div>
              <div className="daily-prgbar-text">0/10</div>
            </div>
            <div className="daily-parth-claim-box">
              <div className="daily-reward">
                <div className="daily-reward-pic">
                  <img src="img/ic-dildo-gold.png" loading="lazy" />
                </div>
                <div className="daily-reward-count">10</div>
              </div>
              <div className="color-btn disabled">
                <div className="color-btn-text">
                  <span>claim reward</span>
                </div>
              </div>
            </div>
          </div>
          <div className="daily-parth-box">
            <div className="daily-parth-text">
              Increase any master stat by 5 levels.
            </div>
            <div className="daily-prgbar-all">
              <div
                className="daily-prgbar"
                style={{
                  width: "0%",
                }}
              ></div>
              <div className="daily-prgbar-text">0/5</div>
            </div>
            <div className="daily-parth-claim-box">
              <div className="daily-reward">
                <div className="daily-reward-pic">
                  <img src="img/ic-dildo-gold.png" loading="lazy" />
                </div>
                <div className="daily-reward-count">10</div>
              </div>
              <div className="color-btn disabled">
                <div className="color-btn-text">
                  <span>claim reward</span>
                </div>
              </div>
            </div>
          </div>
          <div className="daily-parth-box">
            <div className="daily-parth-text">
              Level up any trophy by 10 levels.
            </div>
            <div className="daily-prgbar-all">
              <div
                className="daily-prgbar"
                style={{
                  width: "0%",
                }}
              ></div>
              <div className="daily-prgbar-text">0/10</div>
            </div>
            <div className="daily-parth-claim-box">
              <div className="daily-reward">
                <div className="daily-reward-pic">
                  <img src="img/ic-dildo-gold.png" loading="lazy" />
                </div>
                <div className="daily-reward-count">20</div>
              </div>
              <div className="color-btn disabled">
                <div className="color-btn-text">
                  <span>claim reward</span>
                </div>
              </div>
            </div>
          </div>
          <div className="daily-parth-box">
            <div className="daily-parth-text">
              Level up any trophy by 15 levels.
            </div>
            <div className="daily-prgbar-all">
              <div
                className="daily-prgbar"
                style={{
                  width: "0%",
                }}
              ></div>
              <div className="daily-prgbar-text">0/15</div>
            </div>
            <div className="daily-parth-claim-box">
              <div className="daily-reward">
                <div className="daily-reward-pic">
                  <img src="img/ic-dildo-gold.png" loading="lazy" />
                </div>
                <div className="daily-reward-count">30</div>
              </div>
              <div className="color-btn disabled">
                <div className="color-btn-text">
                  <span>claim reward</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xmas-btn-box">
        <div className="color-btn">
          <div
            className="color-btn-text"
            onClick={() => setXmasPop("xmas-pop1")}
          >
            back
          </div>
        </div>
      </div>
    </>
  );
}

export default function XmasPop({ event, xmasPop, setXmasPop }) {
  return xmasPop === "xmas-pop1" ? (
    <XmasPop1 setXmasPop={setXmasPop} />
  ) : xmasPop === "xmas-pop2" ? (
    <XmasPop2 setXmasPop={setXmasPop} />
  ) : xmasPop === "xmas-pop3" ? (
    <XmasPop3 setXmasPop={setXmasPop} />
  ) : (
    ""
  );
}
