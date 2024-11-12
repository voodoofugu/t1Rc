import { memo, useState } from "react";
import { nexusDispatch, useNexus } from "nexus-state";

import PopResValue from "../UIComponents/PopResValue";

export default memo(function OpenChest() {
  const popupState = useNexus("popupState");

  const [rightBox, setRightBox] = useState("");

  return (
    <>
      <PopResValue resClass="chest" resValue="1000" />
      <div className="openchest-left-box">
        <div className="openchest-timer-box">
          <div>
            <div className="openchest-timer">00:04:26</div>
            time to choose the chest
          </div>
        </div>
        <div className="openchest-bonus-box-all">
          <div className="openchest-bonus-box payments chest">
            <div className="openchest-bonus null chest">
              <div className="openchest-bonus-pic">
                <div className="openchest-pic-chest"></div>
              </div>
            </div>
            <div className="openchest-bonus-btn-none"></div>
            <div className="openchest-bonus-btn diamond">
              <div className="btn-text">4</div>
              <div className="ic-diamond"></div>
            </div>
            <div className="openchest-bonus-btn ticket">
              <div className="btn-text">4</div>
              <div className="ic-ticket"></div>
            </div>
          </div>
          <div className="openchest-bonus-box free chest">
            <div className="openchest-bonus picture">
              <div className="openchest-bonus-pic">
                <img
                  className="openchest-pic"
                  src="https://cdn.faptitans.com/ths/a/3/a/oa3a7cbf9f491142d09289957ee66b4df.jpg"
                  loading="lazy"
                />
                <div className="openchest-starbox">
                  <div className="star3"></div>
                </div>
              </div>
            </div>
            <div className="openchest-bonus-btn-none"></div>
            <div
              className="openchest-bonus-btn free"
              onClick={() =>
                popupState.popOpen(nexusDispatch, {
                  mpopClass: "m-popup change-givepic",
                  popTit: "Новая картинка!",
                  popCont: ["ChangeGivepic"],
                })
              }
            >
              <div className="btn-text">free</div>
            </div>
          </div>
          <div className="openchest-bonus-box btnnone">
            <div className="openchest-bonus res">
              <div>
                <div className="openchest-bonus-pic">
                  <img src="img/ic-abil-gold@2x.png" loading="lazy" />
                </div>
                <div className="openchest-bonus-count">19.7dD22</div>
              </div>
            </div>
            <div className="openchest-bonus-btn-none"></div>
          </div>
        </div>
        <div className="openchest-close-box">
          <div className="openchest-btn-close">
            <div className="btn-text">next</div>
          </div>
          <div className="openchest-btn-back"></div>
          {!rightBox && (
            <div
              className="openchest-btn-info right"
              onClick={() => setRightBox(" info")}
            ></div>
          )}
        </div>
      </div>
      <div className={`openchest-right-box${rightBox}`}>
        {!rightBox ? (
          <>
            <div className="openchest-name-box big">
              <div className="openchest-name">
                guaranted in one in the chest
              </div>
            </div>
            <div className="openchest-guaranted-box">
              <div className="openchest-in picture">
                <div className="openchest-bonus-pic">
                  <img
                    className="openchest-pic"
                    src="img/photo-ic@2x.png"
                    loading="lazy"
                  />
                </div>
                <div className="openchest-in-check"></div>
              </div>
            </div>
            <div className="openchest-name-box">
              <div className="openchest-name">возможные награды</div>
            </div>
            <div className="openchest-in-all-box">
              <div className="openchest-in picture">
                <div className="openchest-bonus-pic">
                  <img
                    className="openchest-pic"
                    src="img/photo-ic@2x.png"
                    loading="lazy"
                  />
                </div>
                <div className="openchest-in-check"></div>
              </div>
              <div className="openchest-in picture">
                <div className="openchest-bonus-pic">
                  <img
                    className="openchest-pic"
                    src="img/ic-abil-gold@2x.png"
                    loading="lazy"
                  />
                </div>
                <div className="openchest-in-check"></div>
              </div>
              <div className="openchest-in picture">
                <div className="openchest-bonus-pic">
                  <img
                    className="openchest-pic"
                    src="img/change-ic-essence.png"
                    loading="lazy"
                  />
                </div>
                <div className="openchest-in-check"></div>
              </div>
              <div className="openchest-in picture">
                <div className="openchest-bonus-pic">
                  <img
                    className="openchest-pic"
                    src="img/change-ic-gem-master.png"
                    loading="lazy"
                  />
                </div>
                <div className="openchest-in-check"></div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className="openchest-btn-info left"
              onClick={() => setRightBox("")}
            ></div>
            <div className="openchest-info">
              1. You can open one first chest for free - choose any.
              <br />
              2. After you receive the reward from the first chest, you can open
              the next for tickets or diamonds. <br />
              3. The third - only for diamonds. On the right side, the list
              shows the possible rewards that you can get by opening the chest.{" "}
              <br />
              4. When you open several chests at once, the Next button will
              allow you to open the next chest.
            </div>
          </>
        )}
      </div>
    </>
  );
});
