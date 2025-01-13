import React from "react";

import Button from "../UIComponents/Button";

export default function SignIn() {
  return (
    <>
      <div className="title">Master adad</div>
      <div className="content sign-up1">
        <div className="megapack-banner">
          <div
            className="g2"
            style={{
              backgroundImage: 'url("img/p-master-a1.jpg")',
            }}
          >
            <div className="num">31</div>
            <div className="txt">Rank</div>
          </div>
          <div
            className="g3"
            style={{
              backgroundImage: 'url("img/change-ic-gold.png")',
            }}
          >
            <div className="num">+400% gold</div>
            <div className="txt">Bonus</div>
          </div>
        </div>
        <div className="text-1" style={{ margin: "25px 0px" }}>
          Get skins and increase rank
        </div>
        <div className="sign-up-form">
          <Button
            className="orange max"
            text="Faction Wars Battle Pass"
            img="img/v2-fw-icon-fr0.png"
          />
          <Button
            className="orange max"
            text="Clan Wars Battle Pass"
            img="img/cw-quest-icon.png"
          />
          <Button
            className="orange max"
            text="Change Master Skin"
            img="img/v2-master-pic1.png"
          />
          <div>
            <Button className="lastBtn" text="Account" />
            <Button className="lastBtn" text="Close" />
          </div>
        </div>
      </div>
      <div className="btn-close-x" />
    </>
  );
}
