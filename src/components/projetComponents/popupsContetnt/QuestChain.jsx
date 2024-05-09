import React from "react";

import QuestChainCard from "../UIComponents/QuestChainCard";

export default function QuestChain() {
  return (
    <>
      <div className="questChainContent">
        <div className="questChainWrap">
          <div className="questChainBox">
            <QuestChainCard
              progressClass="active"
              text="Kill 600 minions (common)"
              icnClass="minion1"
            />
            <QuestChainCard
              progressClass="lock"
              text="Kill 20 bosses (tower)"
              icnClass="boss1"
            />
            <QuestChainCard
              progressClass="lock"
              text="Kill 1K minions (common)"
              icnClass="minion2"
            />
            <QuestChainCard
              progressClass="lock"
              text="Kill 60 bosses (tower)"
              icnClass="boss2"
            />
          </div>

          <div className="questChainBox">
            <QuestChainCard
              progressClass="check"
              text="Finish 30 levels"
              icnClass="lvl1"
            />
            <QuestChainCard
              progressClass="lock"
              text="Finish 100 levels"
              icnClass="lvl2"
            />
            <QuestChainCard
              progressClass="lock"
              text="Finish 250 levels"
              icnClass="lvl3"
            />
            <QuestChainCard
              progressClass="lock"
              text="Finish 500 levels"
              icnClass="lvl4"
            />
          </div>

          <div className="questChainBox">
            <QuestChainCard
              progressClass="active"
              text="Use 28 skills (common)"
              icnClass="skill1"
            />
            <QuestChainCard
              progressClass="lock"
              text="Use 5 special skills (tower)"
              icnClass="skill3"
            />
            <QuestChainCard
              progressClass="lock"
              text="Use 105 skills (common)"
              icnClass="skill2"
            />
            <QuestChainCard
              progressClass="lock"
              text="Use 20 special skills (tower)"
              icnClass="skill4"
            />
          </div>
        </div>
        <div className="questChainWrap right">
          <div className="questChainBox">
            <QuestChainCard
              progressClass="active"
              text="Make 5 reborns"
              icnClass="reborn1"
            />
            <QuestChainCard
              progressClass="lock"
              text="Get 50K ducat"
              icnClass="ducat1"
            />
            <QuestChainCard
              progressClass="lock"
              text="Make 3 reborns"
              icnClass="reborn2"
            />
            <QuestChainCard
              progressClass="lock"
              text="Get 450K ducat"
              icnClass="ducat2"
            />
          </div>

          <div className="questChainBox check">
            <QuestChainCard
              progressClass="check"
              text="Spend 12 diamonds"
              icnClass="diamond1"
            />
            <QuestChainCard
              progressClass="check"
              text="Spend 18 diamonds"
              icnClass="diamond2"
            />
            <QuestChainCard
              progressClass="check"
              text="Spend 100 diamonds"
              icnClass="diamond3"
            />
            <QuestChainCard
              progressClass="check"
              text="Spend 180 diamonds"
              icnClass="diamond4"
            />
          </div>

          <div className="questChainBox">
            <QuestChainCard
              progressClass="claim"
              text="Kill 10 mega bosses (tower)"
              icnClass="boss3"
            />
            <QuestChainCard
              progressClass="lock"
              text="Reach 200 floor (tower)"
              icnClass="floor1"
            />
            <QuestChainCard
              progressClass="lock"
              text="Kill 40 mega bosses (tower)"
              icnClass="boss4"
            />
            <QuestChainCard
              progressClass="lock"
              text="Reach 600 floor (tower)"
              icnClass="floor2"
            />
          </div>
        </div>

        <div className="girlReward_box">
          <div
            className="heroAvatar_box"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="unique dark">dark hero</div>
            <div className="heroAvatar">
              <img src="img/images/hero-all/tithero-356/x1/ava/tithero-356-1-ava.jpg" />
            </div>
          </div>
          <div className="color-btn green" style={{ filter: "grayscale(1)" }}>
            <div className="color-btn-text">claim</div>
          </div>
        </div>
      </div>
    </>
  );
}
