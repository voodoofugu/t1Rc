export default function MainRelics({ hole }) {
  return (
    <>
      <div className="main-relics-girl-box">
        <div className="main-relics-girl-pic">
          <img src="img/images/superhero/suphero-01/x1/01sh-1.jpg"></img>
        </div>
        <div className="main-relics-timer-box">
          <div className="main-relics-timer-text">осталось</div>
          <div className="main-relics-timer">00:00:00</div>
        </div>
        <div className="main-relics-info"></div>
        <div className="main-relics-girl-ballon">
          <div className="main-relics-girl-ballon-text-box">
            <div className="main-relics-girl-ballon-text">
              open more packs to get me!
            </div>
          </div>
        </div>
      </div>
      <div className="main-relics-right-box-all">
        <div className={`main-relics-set-box ${hole ? "hole" : ""}`}>
          <div className="main-relics-set r1 r1">
            <div className="main-relics-set-pic"></div>
            <div className="main-relics-set-text">1 set of Relics</div>
            <div className="color-btn diamond">
              <div className="color-btn-text">
                <div>
                  buy
                  <span className="f-diamond">7</span>
                </div>
              </div>
            </div>
          </div>
          <div className="main-relics-set r1 r2">
            <div className="main-relics-set-pic"></div>
            <div className="main-relics-set-text">5 sets of Relics</div>
            <div className="color-btn diamond">
              <div className="color-btn-text">
                <div>
                  buy
                  <span className="f-diamond">20</span>
                </div>
              </div>
            </div>
          </div>
          <div className="main-relics-set r1 r3">
            <div className="main-relics-set-pic"></div>
            <div className="main-relics-set-text">20 sets of Relics</div>
            <div className="color-btn diamond">
              <div className="color-btn-text">
                <div>
                  buy
                  <span className="f-diamond">45</span>
                </div>
              </div>
            </div>
          </div>
          <div className="main-relics-set r1 r4">
            <div className="main-relics-set-pic"></div>
            <div className="main-relics-set-text">50 sets of Relics</div>
            <div className="color-btn diamond">
              <div className="color-btn-text">
                <div>
                  buy
                  <span className="f-diamond">80</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-relics-bonus-box">
          <div className="relics-prize-box-all">
            <div className="relics-pack-opened-box">
              <div className="relics-pack-opened-name">packs opened</div>
              <div className="relics-pack-opened-count">40/400</div>
            </div>
            <div className="relics-prize-box"></div>
          </div>
          <div className="relics-prg-box-all">
            <div className="relics-prg-box">
              <div className="prg-box">
                <div className="prgbar" style={{ width: "20%" }}></div>
              </div>
            </div>
          </div>
          <div className="relics-coll-box-all">
            <div className="relics-coll-box r1">
              <div className="relics-coll-line"></div>
              <div className="relics-coll-count-box">
                <div className="relics-coll-count">50</div>
              </div>
              <div className="relics-coll">
                <div className="relics-coll-pic">
                  <img
                    src={
                      hole
                        ? "img/hole/relicsCards-1.png"
                        : "img/card-ic-koloda@2x.png"
                    }
                  ></img>
                </div>
              </div>
              <div className="relics-coll-check"></div>
              <div className="color-btn blue">
                <div className="color-btn-text">claim</div>
              </div>
            </div>
            <div className="relics-coll-box r2">
              <div className="relics-coll-line"></div>
              <div className="relics-coll-count-box">
                <div className="relics-coll-count">125</div>
              </div>
              <div className="relics-coll">
                <div className="relics-coll-pic">
                  <img src="img/arrow_up1.png"></img>
                </div>
              </div>
              <div className="relics-coll-check"></div>
              <div className="color-btn blue">
                <div className="color-btn-text">claim</div>
              </div>
            </div>
            <div className="relics-coll-box r3   ">
              <div className="relics-coll-line"></div>
              <div className="relics-coll-count-box">
                <div className="relics-coll-count">250</div>
              </div>
              <div className="relics-coll">
                <div className="relics-coll-pic">
                  <img src="img/ic-abil-dps-plus@2x.png"></img>
                </div>
              </div>
              <div className="relics-coll-check"></div>
              <div className="color-btn blue">
                <div className="color-btn-text">claim</div>
              </div>
            </div>
            <div className="relics-coll-box r4   girl good">
              <div className="relics-coll-line"></div>
              <div className="relics-coll-count-box">
                <div className="relics-coll-count">400</div>
              </div>
              <div className="relics-coll">
                <div className="relics-coll-pic">
                  <img src="img/images/superhero/suphero-01/x1/avatar/01sh-ava-1.jpg"></img>
                </div>
              </div>
              <div className="relics-coll-check"></div>
              <div className="color-btn blue">
                <div className="color-btn-text">claim</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
