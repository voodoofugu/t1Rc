import React from "react";

import ItemBox from "../UIComponents/ItemBox";

export default function TabPanelTowerQuest({ hole, setLeftPanel }) {
  return (
    <div className="tab-panel-box tower-quest">
      <div className="tab-panel-box-title">trophy quests chain</div>
      <div className="map-box">
        <div className="map-box-left-all">
          <div className="map-quest-box-all one">
            <div className="map-quest-box 1 pic2    active progress">
              <div className="map-quest-box-name">
                <div className="map-quest-box-name-text">
                  Kill 600 minions (common)
                </div>
              </div>
              <div className="s-active" />
              <div className="map-s active progress minion1">
                <div className="questChainIcn-wrap">
                  <div className="questChainIcn"></div>
                </div>
              </div>
              <div className="map-quest-prgbar-all">
                <div
                  className="map-quest-prgbar"
                  style={{ width: "28.6667%" }}
                />
                <div className="map-quest-prgbar-text">172/600</div>
              </div>
              <div className="s-claim2">
                <div className="color-btn green">
                  <div className="color-btn-text">claim</div>
                </div>
              </div>
              <div className="s-check" />
              <div className="s-lock" />
              <div className="map-s-line  " />
            </div>
            <div className="map-quest-box 1 pic1 pic2 lock   ">
              <div className="map-quest-box-name">
                <div className="map-quest-box-name-text">
                  Kill 20 bosses (tower)
                </div>
              </div>
              <div className="s-active" />
              <div className="map-s lock boss1 ">
                <div className="questChainIcn-wrap">
                  <div className="questChainIcn"></div>
                </div>
              </div>
              <div className="map-quest-prgbar-all">
                <div className="map-quest-prgbar" style={{ width: "0%" }} />
                <div className="map-quest-prgbar-text" />
              </div>
              <div className="s-claim2">
                <div className="color-btn green">
                  <div className="color-btn-text">claim</div>
                </div>
              </div>
              <div className="s-check" />
              <div className="s-lock" />
              <div className="map-s-line  " />
            </div>
            <div className="map-quest-box 1 pic2 lock   ">
              <div className="map-quest-box-name">
                <div className="map-quest-box-name-text">
                  Kill 1K minions (common)
                </div>
              </div>
              <div className="s-active" />
              <div className="map-s lock minion2 ">
                <div className="questChainIcn-wrap">
                  <div className="questChainIcn"></div>
                </div>
              </div>
              <div className="map-quest-prgbar-all">
                <div className="map-quest-prgbar" style={{ width: "0%" }} />
                <div className="map-quest-prgbar-text" />
              </div>
              <div className="s-claim2">
                <div className="color-btn green">
                  <div className="color-btn-text">claim</div>
                </div>
              </div>
              <div className="s-check" />
              <div className="s-lock" />
              <div className="map-s-line  " />
            </div>
            <div className="map-quest-box 1 pic1 pic2 lock   ">
              <div className="map-quest-box-name">
                <div className="map-quest-box-name-text">
                  Kill 60 bosses (tower)
                </div>
              </div>
              <div className="s-active" />
              <div className="map-s lock boss2 ">
                <div className="questChainIcn-wrap">
                  <div className="questChainIcn"></div>
                </div>
              </div>
              <div className="map-quest-prgbar-all">
                <div className="map-quest-prgbar" style={{ width: "0%" }} />
                <div className="map-quest-prgbar-text" />
              </div>
              <div className="s-claim2">
                <div className="color-btn green">
                  <div className="color-btn-text">claim</div>
                </div>
              </div>
              <div className="s-check" />
              <div className="s-lock" />
              <div className="map-s-line  " />
            </div>
          </div>
          <div className="map-quest-box-all two">
            <div className="map-quest-box 2 shop    active progress">
              <div className="map-quest-box-name">
                <div className="map-quest-box-name-text">Finish 30 levels</div>
              </div>
              <div className="s-active" />
              <div className="map-s active progress lvl1">
                <div className="questChainIcn-wrap">
                  <div className="questChainIcn"></div>
                </div>
              </div>
              <div className="map-quest-prgbar-all">
                <div className="map-quest-prgbar" style={{ width: "0%" }} />
                <div className="map-quest-prgbar-text">0/30</div>
              </div>
              <div className="s-claim2">
                <div className="color-btn green">
                  <div className="color-btn-text">claim</div>
                </div>
              </div>
              <div className="s-check" />
              <div className="s-lock" />
              <div className="map-s-line  " />
            </div>
            <div className="map-quest-box 2 shop lock   ">
              <div className="map-quest-box-name">
                <div className="map-quest-box-name-text">Finish 100 levels</div>
              </div>
              <div className="s-active" />
              <div className="map-s lock lvl2 ">
                <div className="questChainIcn-wrap">
                  <div className="questChainIcn"></div>
                </div>
              </div>
              <div className="map-quest-prgbar-all">
                <div className="map-quest-prgbar" style={{ width: "0%" }} />
                <div className="map-quest-prgbar-text" />
              </div>
              <div className="s-claim2">
                <div className="color-btn green">
                  <div className="color-btn-text">claim</div>
                </div>
              </div>
              <div className="s-check" />
              <div className="s-lock" />
              <div className="map-s-line  " />
            </div>
            <div className="map-quest-box 2 shop lock   ">
              <div className="map-quest-box-name">
                <div className="map-quest-box-name-text">Finish 250 levels</div>
              </div>
              <div className="s-active" />
              <div className="map-s lock lvl3 ">
                <div className="questChainIcn-wrap">
                  <div className="questChainIcn"></div>
                </div>
              </div>
              <div className="map-quest-prgbar-all">
                <div className="map-quest-prgbar" style={{ width: "0%" }} />
                <div className="map-quest-prgbar-text" />
              </div>
              <div className="s-claim2">
                <div className="color-btn green">
                  <div className="color-btn-text">claim</div>
                </div>
              </div>
              <div className="s-check" />
              <div className="s-lock" />
              <div className="map-s-line  " />
            </div>
            <div className="map-quest-box 2 shop lock   ">
              <div className="map-quest-box-name">
                <div className="map-quest-box-name-text">Finish 500 levels</div>
              </div>
              <div className="s-active" />
              <div className="map-s lock lvl4 ">
                <div className="questChainIcn-wrap">
                  <div className="questChainIcn"></div>
                </div>
              </div>
              <div className="map-quest-prgbar-all">
                <div className="map-quest-prgbar" style={{ width: "0%" }} />
                <div className="map-quest-prgbar-text" />
              </div>
              <div className="s-claim2">
                <div className="color-btn green">
                  <div className="color-btn-text">claim</div>
                </div>
              </div>
              <div className="s-check" />
              <div className="s-lock" />
              <div className="map-s-line  " />
            </div>
          </div>
          <div className="map-quest-box-all three">
            <div className="map-quest-box 3 shop    active progress">
              <div className="map-quest-box-name">
                <div className="map-quest-box-name-text">
                  Use 28 skills (common)
                </div>
              </div>
              <div className="s-active" />
              <div className="map-s active progress skill1">
                <div className="questChainIcn-wrap">
                  <div className="questChainIcn"></div>
                </div>
              </div>
              <div className="map-quest-prgbar-all">
                <div className="map-quest-prgbar" style={{ width: "0%" }} />
                <div className="map-quest-prgbar-text">0/28</div>
              </div>
              <div className="s-claim2">
                <div className="color-btn green">
                  <div className="color-btn-text">claim</div>
                </div>
              </div>
              <div className="s-check" />
              <div className="s-lock" />
              <div className="map-s-line  " />
            </div>
            <div className="map-quest-box 3 shop pic1 lock   ">
              <div className="map-quest-box-name">
                <div className="map-quest-box-name-text">
                  Use 5 special skills (tower)
                </div>
              </div>
              <div className="s-active" />
              <div className="map-s lock skill3">
                <div className="questChainIcn-wrap">
                  <div className="questChainIcn"></div>
                </div>
              </div>
              <div className="map-quest-prgbar-all">
                <div className="map-quest-prgbar" style={{ width: "0%" }} />
                <div className="map-quest-prgbar-text" />
              </div>
              <div className="s-claim2">
                <div className="color-btn green">
                  <div className="color-btn-text">claim</div>
                </div>
              </div>
              <div className="s-check" />
              <div className="s-lock" />
              <div className="map-s-line  " />
            </div>
            <div className="map-quest-box 3 shop lock   ">
              <div className="map-quest-box-name">
                <div className="map-quest-box-name-text">
                  Use 105 skills (common)
                </div>
              </div>
              <div className="s-active" />
              <div className="map-s lock skill2 ">
                <div className="questChainIcn-wrap">
                  <div className="questChainIcn"></div>
                </div>
              </div>
              <div className="map-quest-prgbar-all">
                <div className="map-quest-prgbar" style={{ width: "0%" }} />
                <div className="map-quest-prgbar-text" />
              </div>
              <div className="s-claim2">
                <div className="color-btn green">
                  <div className="color-btn-text">claim</div>
                </div>
              </div>
              <div className="s-check" />
              <div className="s-lock" />
              <div className="map-s-line  " />
            </div>
            <div className="map-quest-box 3 shop pic1 lock   ">
              <div className="map-quest-box-name">
                <div className="map-quest-box-name-text">
                  Use 20 special skills (tower)
                </div>
              </div>
              <div className="s-active" />
              <div className="map-s lock skill4 ">
                <div className="questChainIcn-wrap">
                  <div className="questChainIcn"></div>
                </div>
              </div>
              <div className="map-quest-prgbar-all">
                <div className="map-quest-prgbar" style={{ width: "0%" }} />
                <div className="map-quest-prgbar-text" />
              </div>
              <div className="s-claim2">
                <div className="color-btn green">
                  <div className="color-btn-text">claim</div>
                </div>
              </div>
              <div className="s-check" />
              <div className="s-lock" />
              <div className="map-s-line  " />
            </div>
          </div>
        </div>
        <div className="map-box-right-all">
          <div className="map-quest-box-all one">
            <div className="map-quest-box 4 shop lock   ">
              <div className="map-quest-box-name">
                <div className="map-quest-box-name-text">Get 450K ducat</div>
              </div>
              <div className="s-active" />
              <div className={`map-s lock ${hole ? "relicsCards2" : "ducat2"}`}>
                <div className="questChainIcn-wrap">
                  <div className="questChainIcn"></div>
                </div>
              </div>
              <div className="map-quest-prgbar-all">
                <div className="map-quest-prgbar" style={{ width: "0%" }} />
                <div className="map-quest-prgbar-text" />
              </div>
              <div className="s-claim2">
                <div className="color-btn green">
                  <div className="color-btn-text">claim</div>
                </div>
              </div>
              <div className="s-check" />
              <div className="s-lock" />
              <div className="map-s-line  " />
            </div>
            <div className="map-quest-box 4 shop lock   ">
              <div className="map-quest-box-name">
                <div className="map-quest-box-name-text">Make 3 reborns</div>
              </div>
              <div className="s-active" />
              <div className="map-s lock reborn2 ">
                <div className="questChainIcn-wrap">
                  <div className="questChainIcn"></div>
                </div>
              </div>
              <div className="map-quest-prgbar-all">
                <div className="map-quest-prgbar" style={{ width: "0%" }} />
                <div className="map-quest-prgbar-text" />
              </div>
              <div className="s-claim2">
                <div className="color-btn green">
                  <div className="color-btn-text">claim</div>
                </div>
              </div>
              <div className="s-check" />
              <div className="s-lock" />
              <div className="map-s-line  " />
            </div>
            <div className="map-quest-box 4 shop lock   ">
              <div className="map-quest-box-name">
                <div className="map-quest-box-name-text">Get 50K ducat</div>
              </div>
              <div className="s-active" />
              <div className={`map-s lock ${hole ? "relicsCards1" : "ducat1"}`}>
                <div className="questChainIcn-wrap">
                  <div className="questChainIcn"></div>
                </div>
              </div>
              <div className="map-quest-prgbar-all">
                <div className="map-quest-prgbar" style={{ width: "0%" }} />
                <div className="map-quest-prgbar-text" />
              </div>
              <div className="s-claim2">
                <div className="color-btn green">
                  <div className="color-btn-text">claim</div>
                </div>
              </div>
              <div className="s-check" />
              <div className="s-lock" />
              <div className="map-s-line  " />
            </div>
            <div className="map-quest-box 4 shop    active progress">
              <div className="map-quest-box-name">
                <div className="map-quest-box-name-text">Make 5 reborns</div>
              </div>
              <div className="s-active" />
              <div className="map-s active progress reborn1">
                <div className="questChainIcn-wrap">
                  <div className="questChainIcn"></div>
                </div>
              </div>
              <div className="map-quest-prgbar-all">
                <div className="map-quest-prgbar" style={{ width: "0%" }} />
                <div className="map-quest-prgbar-text">0/5</div>
              </div>
              <div className="s-claim2">
                <div className="color-btn green">
                  <div className="color-btn-text">claim</div>
                </div>
              </div>
              <div className="s-check" />
              <div className="s-lock" />
              <div className="map-s-line  " />
            </div>
          </div>
          <div className="map-quest-box-all two">
            <div className="map-quest-box 5 shop   check ">
              <div className="map-quest-box-name">
                <div className="map-quest-box-name-text">
                  Spend 180 diamonds
                </div>
              </div>
              <div className="s-active" />
              <div className="map-s diamond4">
                <div className="questChainIcn-wrap">
                  <div className="questChainIcn"></div>
                </div>
              </div>
              <div className="map-quest-prgbar-all">
                <div className="map-quest-prgbar" style={{ width: "0%" }} />
                <div className="map-quest-prgbar-text" />
              </div>
              <div className="s-claim2">
                <div className="color-btn green">
                  <div className="color-btn-text">claim</div>
                </div>
              </div>
              <div className="s-check" />
              <div className="s-lock" />
              <div className="map-s-line green " />
            </div>
            <div className="map-quest-box 5 shop   check ">
              <div className="map-quest-box-name">
                <div className="map-quest-box-name-text">
                  Spend 100 diamonds
                </div>
              </div>
              <div className="s-active" />
              <div className="map-s diamond3">
                <div className="questChainIcn-wrap">
                  <div className="questChainIcn"></div>
                </div>
              </div>
              <div className="map-quest-prgbar-all">
                <div className="map-quest-prgbar" style={{ width: "0%" }} />
                <div className="map-quest-prgbar-text" />
              </div>
              <div className="s-claim2">
                <div className="color-btn green">
                  <div className="color-btn-text">claim</div>
                </div>
              </div>
              <div className="s-check" />
              <div className="s-lock" />
              <div className="map-s-line green " />
            </div>
            <div className="map-quest-box 5 shop   check ">
              <div className="map-quest-box-name">
                <div className="map-quest-box-name-text">Spend 18 diamonds</div>
              </div>
              <div className="s-active" />
              <div className="map-s diamond2">
                <div className="questChainIcn-wrap">
                  <div className="questChainIcn"></div>
                </div>
              </div>
              <div className="map-quest-prgbar-all">
                <div className="map-quest-prgbar" style={{ width: "0%" }} />
                <div className="map-quest-prgbar-text" />
              </div>
              <div className="s-claim2">
                <div className="color-btn green">
                  <div className="color-btn-text">claim</div>
                </div>
              </div>
              <div className="s-check" />
              <div className="s-lock" />
              <div className="map-s-line green " />
            </div>
            <div className="map-quest-box 5 shop   check ">
              <div className="map-quest-box-name">
                <div className="map-quest-box-name-text">Spend 12 diamonds</div>
              </div>
              <div className="s-active" />
              <div className="map-s diamond1">
                <div className="questChainIcn-wrap">
                  <div className="questChainIcn"></div>
                </div>
              </div>
              <div className="map-quest-prgbar-all">
                <div className="map-quest-prgbar" style={{ width: "0%" }} />
                <div className="map-quest-prgbar-text" />
              </div>
              <div className="s-claim2">
                <div className="color-btn green">
                  <div className="color-btn-text">claim</div>
                </div>
              </div>
              <div className="s-check" />
              <div className="s-lock" />
              <div className="map-s-line green " />
            </div>
          </div>
          <div className="map-quest-box-all three">
            <div className="map-quest-box 6 pic1 lock   ">
              <div className="map-quest-box-name">
                <div className="map-quest-box-name-text">
                  Reach 600 floor (tower)
                </div>
              </div>
              <div className="s-active" />
              <div className="map-s lock floor2">
                <div className="questChainIcn-wrap">
                  <div className="questChainIcn"></div>
                </div>
              </div>
              <div className="map-quest-prgbar-all">
                <div className="map-quest-prgbar" style={{ width: "0%" }} />
                <div className="map-quest-prgbar-text" />
              </div>
              <div className="s-claim2">
                <div className="color-btn green">
                  <div className="color-btn-text">claim</div>
                </div>
              </div>
              <div className="s-check" />
              <div className="s-lock" />
              <div className="map-s-line  " />
            </div>
            <div className="map-quest-box 6 pic1 pic2 lock   ">
              <div className="map-quest-box-name">
                <div className="map-quest-box-name-text">
                  Kill 40 mega bosses (tower)
                </div>
              </div>
              <div className="s-active" />
              <div className="map-s pic2 lock boss4">
                <div className="questChainIcn-wrap">
                  <div className="questChainIcn"></div>
                </div>
              </div>
              <div className="map-quest-prgbar-all">
                <div className="map-quest-prgbar" style={{ width: "0%" }} />
                <div className="map-quest-prgbar-text" />
              </div>
              <div className="s-claim2">
                <div className="color-btn green">
                  <div className="color-btn-text">claim</div>
                </div>
              </div>
              <div className="s-check" />
              <div className="s-lock" />
              <div className="map-s-line  " />
            </div>
            <div className="map-quest-box 6 pic1 lock   ">
              <div className="map-quest-box-name">
                <div className="map-quest-box-name-text">
                  Reach 200 floor (tower)
                </div>
              </div>
              <div className="s-active" />
              <div className="map-s lock floor1 ">
                <div className="questChainIcn-wrap">
                  <div className="questChainIcn"></div>
                </div>
              </div>
              <div className="map-quest-prgbar-all">
                <div className="map-quest-prgbar" style={{ width: "0%" }} />
                <div className="map-quest-prgbar-text" />
              </div>
              <div className="s-claim2">
                <div className="color-btn green">
                  <div className="color-btn-text">claim</div>
                </div>
              </div>
              <div className="s-check" />
              <div className="s-lock" />
              <div className="map-s-line  " />
            </div>
            <div className="map-quest-box 6 pic1 pic2  claim  active progress">
              <div className="map-quest-box-name">
                <div className="map-quest-box-name-text">
                  Kill 10 mega bosses (tower)
                </div>
              </div>
              <div className="s-active" />
              <div className="map-s claim active progress boss3">
                <div className="questChainIcn-wrap">
                  <div className="questChainIcn"></div>
                </div>
              </div>
              <div className="map-quest-prgbar-all">
                <div className="map-quest-prgbar" style={{ width: "0%" }} />
                <div className="map-quest-prgbar-text" />
              </div>
              <div className="s-claim2">
                <div className="color-btn green">
                  <div className="color-btn-text">claim</div>
                </div>
              </div>
              <div className="s-check" />
              <div className="s-lock" />
              <div className="map-s-line green " />
            </div>
          </div>
        </div>
        <div className="s-map-line-all-box">
          <div className="s-map-line1 " />
          <div className="s-map-line2 " />
          <div className="s-map-line3 " />
          <div className="s-map-line4" />
          <div className="s-map-line5 " />
          <div className="s-map-line6 " />
        </div>
        <div className="s-girl-reward-box">
          <ItemBox
            itemClass={`wh94 check`}
            itemPic="img/images/hero-all/tithero-356/x1/ava/tithero-356-1-ava.jpg"
            unique={["d hero", "dark"]}
            count={10}
            get={true}
          />
        </div>
      </div>

      <div className="btn-close-x" onClick={() => setLeftPanel(true)}></div>
      <div className="color-btn-info"></div>
    </div>
  );
}
