import { nexusDispatch, useNexus } from "nexus-state";

import ItemBox from "../UIComponents/ItemBox";
import ProgressBar from "../UIComponents/ProgressBar";
import Button from "../UIComponents/Button";
import ResCount from "../UIComponents/ResCount";
import ImageBg from "../UIComponents/ImageBg";
import FraimedTitle from "../UIComponents/FraimedTitle";

export default function FortunaMainRound16Big() {
  const popupState = useNexus("popupState");

  return (
    <>
      <ImageBg className="bG framedBg" img="img/bGs/fortuneBg_hw.jpg" />

      <FraimedTitle
        className="cornersTop"
        text="Wheel of fortune - spin your discount!"
      />

      <Button
        className="exit"
        text="✖"
        onClick={() => popupState.popClose(nexusDispatch)}
      />

      <ResCount
        img="img/heartCoin.png"
        value="234"
        plus
        onClick={() =>
          popupState.popOpen(nexusDispatch, {
            mpopClass: "m-popup essence-buy contentOnly framedPop",
            popCont: [
              "BuyShop",
              {
                img1: "heartCoin-1",
                img2: "heartCoin-2",
                img3: "heartCoin-3",
                img4: "heartCoin-4",
              },
            ],
          })
        }
      />

      <Button
        className="info"
        text="i"
        onClick={() => {
          nexusDispatch({
            type: "POPUP_OPEN",
            payload: {
              mpopClass: "m-popup contentOnly framedPop",
              popCont: ["InfoPopFramed"],
              props: {
                inner: (
                  <div className="rrules-box">
                    <div className="rules-name">Rules</div>
                    <div className="rules-text">
                      <div>
                        1. During the time of the event, you can spin the Great
                        Wheel of Fortune for diamonds.
                      </div>
                      <div>
                        2. Each use of the Push button gives a prize and
                        increases points counter.
                      </div>
                      <div>
                        3. As soon as enough points accumulate, you can get a
                        guaranteed prize!
                      </div>
                      <div>
                        4. You can get FREE WHEEL ROLLS for doing daily quests
                        EACH DAY OF AN EVENT.
                      </div>
                      <div>5. Remember, fortune loves stubborn.</div>
                    </div>
                  </div>
                ),
                girlImg: "img/breakGirls/break-girl915.png",
              },
            },
          });
        }}
      />

      <Button
        className="orange rating"
        text="rating"
        img="img/evPopArts/star_icn.png"
      >
        <div className="place">
          <div className="place-text">
            Your place<div>Not in rating</div>
          </div>
        </div>
      </Button>

      <ImageBg
        className="girl"
        img="img/images/hero-all/tithero-428/icons/break-girl.png"
      />

      <div className="fortuna-main-box">
        <div className="fortuna-wheel-all">
          <div className="fortuna-wheel-box">
            <div className="fortuna-wheel b1">
              <div>
                <div className="fortuna-prize">
                  <img className="prize-pic" src="img/diamond2.png"></img>
                  <div className="fortuna-check-num res-amount">70%</div>0
                </div>
              </div>
            </div>
            <div className="fortuna-wheel b2">
              <div>
                <div className="fortuna-prize">
                  <img className="prize-pic" src="img/v2-f-e1.png"></img>
                  <div className="fortuna-check-num res-amount">1K</div>0
                </div>
              </div>
            </div>
            <div className="fortuna-wheel b3">
              <div>
                <div className="fortuna-prize">
                  <img className="prize-pic" src="img/diamond2.png"></img>
                  <div className="fortuna-check-num res-amount">x3</div>0
                </div>
              </div>
            </div>
            <div className="fortuna-wheel b4">
              <div>
                <div className="fortuna-prize">
                  <img className="prize-pic" src="img/v2-f-e1.png"></img>
                  <div className="fortuna-check-num res-amount">500</div>0
                </div>
              </div>
            </div>
            <div className="fortuna-wheel b5">
              <div>
                <div className="fortuna-prize">
                  <img
                    className="prize-pic"
                    src="img/change-ic-diamond.png"
                  ></img>
                  <div className="fortuna-check-num res-amount">50%</div>0
                </div>
              </div>
            </div>
            <div className="fortuna-wheel b6">
              <div>
                <div className="fortuna-prize">
                  <img className="prize-pic" src="img/v2-f-e1.png"></img>
                  <div className="fortuna-check-num res-amount">100</div>0
                </div>
              </div>
            </div>
            <div className="fortuna-wheel b7">
              <div>
                <div className="fortuna-prize">
                  <img
                    className="prize-pic"
                    src="img/change-ic-diamond.png"
                  ></img>
                  <div className="fortuna-check-num res-amount">x2</div>0
                </div>
              </div>
            </div>
            <div className="fortuna-wheel b8">
              <div>
                <div className="fortuna-prize">
                  <img className="prize-pic" src="img/v2-ns-chest.png"></img>
                  <div className="fortuna-check-num res-amount">10</div>0
                </div>
              </div>
            </div>
            <div className="fortuna-wheel b9">
              <div>
                <div className="fortuna-prize">
                  <img className="prize-pic" src="img/ic-th-176.png"></img>
                  <div className="fortuna-check-num res-amount">50%</div>0
                </div>
              </div>
            </div>
            <div className="fortuna-wheel b10">
              <div>
                <div className="fortuna-prize">
                  <img className="prize-pic" src="img/fapop-token-ic.png"></img>
                  <div className="fortuna-check-num res-amount">10</div>0
                </div>
              </div>
            </div>
            <div className="fortuna-wheel b11">
              <div>
                <div className="fortuna-prize">
                  <img className="prize-pic" src="img/ic-th-176.png"></img>
                  <div className="fortuna-check-num res-amount">33%</div>0
                </div>
              </div>
            </div>
            <div className="fortuna-wheel b12">
              <div>
                <div className="fortuna-prize">
                  <img className="prize-pic" src="img/v2-f-e2.png"></img>
                  <div className="fortuna-check-num res-amount">x2</div>0
                </div>
              </div>
            </div>
            <div className="fortuna-wheel b13">
              <div>
                <div className="fortuna-prize">
                  <img className="prize-pic" src="img/ic-th-176.png"></img>
                  <div className="fortuna-check-num res-amount">25%</div>0
                </div>
              </div>
            </div>
            <div className="fortuna-wheel b14">
              <div>
                <div className="fortuna-prize">
                  <img className="prize-pic" src="img/v2-f-e2.png"></img>
                  <div className="fortuna-check-num res-amount">50%</div>0
                </div>
              </div>
            </div>
            <div className="fortuna-wheel b15">
              <div>
                <div className="fortuna-prize">
                  <img
                    className="prize-pic"
                    src="img/evPopArts/angel_spirit_1.png"
                  ></img>
                  <div className="fortuna-check-num res-amount">50%</div>0
                </div>
              </div>
            </div>
            <div className="fortuna-wheel b16">
              <div>
                <div className="fortuna-prize">
                  <img
                    className="prize-pic"
                    src="img/evPopArts/angel_spirit_1.png"
                  ></img>
                  <div className="fortuna-check-num res-amount">x2</div>0
                </div>
              </div>
            </div>
          </div>
          <div className="fortuna-wheel-center">
            <div className="fortuna-btn-box get-tokens">
              <div className="color-btn green xsingle ">
                <div className="color-btn-text">
                  <div>
                    Push x1<span className="ff-but"></span>1K
                  </div>
                </div>
              </div>
              <div className="color-btn green xmultiply ">
                <div className="color-btn-text">
                  <div>
                    Push x10<span className="ff-but"></span>9K
                  </div>
                </div>
              </div>
              <div className="color-btn">
                <div className="color-btn-text">Spin the wheel!</div>
              </div>
            </div>
            {/* <div className="fortuna-btn-box">
            <div className="color-btn green xsingle free">
              <div className="color-btn-text">Free push</div>
            </div>
          </div> */}
          </div>
        </div>
        <div className="fortuna-main-controls-box">
          <div className="mission-box-all">
            <div className="rname-box">Missions</div>
            <ProgressBar
              className="progressBarOfSympathy"
              progressSize={[200, 24]}
              currentProgress={1}
              maxProgress={6}
              text="mission clear"
              textWithProgress="max"
            >
              <ItemBox itemClass="wh44" itemPic="img/heartCoin.png" />
            </ProgressBar>
            <Button
              className="lightGreen"
              img="img/evPopArts/questBook_icn.png"
              text="Go to quests"
            />
          </div>

          <div className="rrevard-box">
            <div className="rname-box">Guaranteed Rewards</div>
            <ProgressBar
              className="progressBarOfSympathy"
              progressSize={[230, 24]}
              currentProgress={1}
              maxProgress={10}
              textWithProgress="max"
            />
            <Button
              className="orange"
              img="img/evPopArts/reward_icn.png"
              text="Go to rewards"
            />
            <div className="fortuna-reward-box-all">
              <ItemBox itemClass="wh44" itemPic="img/sh-icon-chest-128.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
