import React from "react";
// import pageStyles from "../styleComponents/ScreenFortunaRoundRewards";
// import { db } from "../server/db.server";
// import { Helmet } from "react-helmet-async";

const MainScreen16FortunaRoundRewardsPopupComponent = () => {
  // const message = db.messages[1]; // Получаем сообщение по id
  // if (!message) {
  //   return <div>Сообщение не найдено.</div>;
  // }
  return (
    <div className="main world1">
      {/* <Helmet>
        <style>`werwer`</style>
      </Helmet>
      <div className="messageQwe">
        <h1>{message.title}</h1>
        <p>{message.body}</p>
      </div> */}
      <div className="main-bg"></div>
      <div className="popup-layer" style={{ display: "block" }}>
        <div className="screen-blend-55" style={{ display: "block" }}></div>

        <div
          className="m-popup fortuna-main-round-rewards"
          style={{ display: "block" }}
        >
          <div className="title">rolling rewards list</div>
          <div className="rewards-main-box">
            <div className="rrevard-box r1 collected">
              <div className="rname-box">10 rolls reward</div>
              <div className="fortuna-reward-box-all">
                <div className="fortuna-reward-box claim-btn">
                  <div className="fortuna-reward-bg">
                    <div className="fortuna-reward">
                      <img src="img/ms-stone-pink.png" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rrevard-box-collected-label">
                <div className="rrevard-box-collected-label-text">
                  collected
                </div>
              </div>
            </div>
            <div className="rrevard-box r2">
              <div className="rname-box">20 rolls reward</div>
              <div className="fortuna-reward-box-all">
                <div className="fortuna-reward-box claim-btn">
                  <div className="fortuna-reward-bg">
                    <div className="fortuna-reward">
                      <img src="img/ms-stone-pink.png" loading="lazy" />
                    </div>
                  </div>
                </div>
                <div className="fortuna-reward-box">
                  <div className="fortuna-reward-bg">
                    <div className="fortuna-reward">
                      <img src="img/ms-stone-pink.png" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rrevard-box-collected-label">
                <div className="rrevard-box-collected-label-text">
                  collected
                </div>
              </div>
            </div>
            <div className="rrevard-box r3">
              <div className="rname-box">50 rolls reward</div>
              <div className="fortuna-reward-box-all">
                <div className="fortuna-reward-box claim-btn">
                  <div className="fortuna-reward-bg">
                    <div className="fortuna-reward">
                      <img src="img/ms-stone-pink.png" loading="lazy" />
                    </div>
                  </div>
                </div>
                <div className="fortuna-reward-box">
                  <div className="fortuna-reward-bg">
                    <div className="fortuna-reward">
                      <img src="img/ms-stone-pink.png" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rrevard-box-collected-label">
                <div className="rrevard-box-collected-label-text">
                  collected
                </div>
              </div>
            </div>
            <div className="rrevard-box r4">
              <div className="rname-box">100 rolls reward</div>
              <div className="fortuna-reward-box-all">
                <div className="fortuna-reward-box claim-btn">
                  <div className="fortuna-reward-bg">
                    <div className="fortuna-reward">
                      <img src="img/ms-stone-pink.png" loading="lazy" />
                    </div>
                  </div>
                </div>
                <div className="fortuna-reward-box">
                  <div className="fortuna-reward-bg">
                    <div className="fortuna-reward">
                      <img src="img/ms-stone-pink.png" loading="lazy" />
                    </div>
                  </div>
                </div>
                <div className="fortuna-reward-box">
                  <div className="fortuna-reward-bg">
                    <div className="fortuna-reward">
                      <img src="img/ms-stone-pink.png" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rrevard-box-collected-label">
                <div className="rrevard-box-collected-label-text">
                  collected
                </div>
              </div>
            </div>
            <div className="rrevard-box r5">
              <div className="rname-box">200 rolls reward</div>
              <div className="fortuna-reward-box-all">
                <div className="fortuna-reward-box claim-btn">
                  <div className="fortuna-reward-bg">
                    <div className="fortuna-reward">
                      <img src="img/ms-stone-pink.png" loading="lazy" />
                    </div>
                  </div>
                </div>
                <div className="fortuna-reward-box">
                  <div className="fortuna-reward-bg">
                    <div className="fortuna-reward">
                      <img src="img/ms-stone-pink.png" loading="lazy" />
                    </div>
                  </div>
                </div>
                <div className="fortuna-reward-box">
                  <div className="fortuna-reward-bg">
                    <div className="fortuna-reward">
                      <img src="img/ms-stone-pink.png" loading="lazy" />
                    </div>
                  </div>
                </div>
                <div className="fortuna-reward-box">
                  <div className="fortuna-reward-bg">
                    <div className="fortuna-reward">
                      <img src="img/ms-stone-pink.png" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rrevard-box-collected-label">
                <div className="rrevard-box-collected-label-text">
                  collected
                </div>
              </div>
            </div>
            <div className="rrevard-box r6">
              <div className="rname-box">300 rolls reward</div>
              <div className="fortuna-reward-box-all">
                <div className="fortuna-reward-box claim-btn">
                  <div className="fortuna-reward-bg">
                    <div className="fortuna-reward">
                      <img src="img/ms-stone-pink.png" loading="lazy" />
                    </div>
                  </div>
                </div>
                <div className="fortuna-reward-box">
                  <div className="fortuna-reward-bg">
                    <div className="fortuna-reward">
                      <img src="img/ms-stone-pink.png" loading="lazy" />
                    </div>
                  </div>
                </div>
                <div className="fortuna-reward-box">
                  <div className="fortuna-reward-bg">
                    <div className="fortuna-reward">
                      <img src="img/ms-stone-pink.png" loading="lazy" />
                    </div>
                  </div>
                </div>
                <div className="fortuna-reward-box">
                  <div className="fortuna-reward-bg">
                    <div className="fortuna-reward">
                      <img src="img/ms-stone-pink.png" loading="lazy" />
                    </div>
                  </div>
                </div>
                <div className="fortuna-reward-box">
                  <div className="fortuna-reward-bg">
                    <div className="fortuna-reward">
                      <img src="img/ms-stone-pink.png" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rrevard-box-collected-label">
                <div className="rrevard-box-collected-label-text">
                  collected
                </div>
              </div>
            </div>
            <div className="color-btn">
              <div className="color-btn-text">back to wheel</div>
            </div>
          </div>
          <div className="btn-close-x"></div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MainScreen16FortunaRoundRewardsPopupComponent);
