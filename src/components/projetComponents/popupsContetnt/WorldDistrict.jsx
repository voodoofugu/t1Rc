import nexus from "nexus";

import Button from "../UIComponents/Button";

export default function WorldDistrict() {
  return (
    <>
      <Button
        className="exit"
        text="✖"
        onClick={() => nexus.acts.handlePopup({ type: "close" })}
      />

      <div className="map-locs-wrap map-01">
        <div className="map-locs-title">District loot</div>
        <div className="loc-box">
          <div className="map-bg map-location1"></div>
          <div className="lock-num-box">
            <div className="num"></div>
          </div>
        </div>
      </div>
      <div className="cw-clan-order-box-all">
        <div className="rewards-tit">
          <div className="tit-text">Rewards</div>
        </div>
        <div className="cw-clan-order-ab-box-all scroll">
          <div
            className="cw-clan-order-ab-box"
            tooltiptext="1 order"
            topdistance="120"
          >
            <div className="cw-clan-order-ab-pic">
              <img src="img/change-ic-essence.png" loading="lazy" />
            </div>
            <div className="cw-clan-order-ab-prg-box">
              <div className="cw-clan-order-ab-prg false"></div>
              <div className="cw-clan-order-ab-prg-text">x1</div>
            </div>
          </div>
          <div
            className="cw-clan-order-ab-box"
            tooltiptext="2 order"
            topdistance="120"
          >
            <div className="cw-clan-order-ab-pic">
              <img src="img/evPopArts/potion_yellow.png" loading="lazy" />
            </div>
            <div className="cw-clan-order-ab-prg-box">
              <div className="cw-clan-order-ab-prg false"></div>
              <div className="cw-clan-order-ab-prg-text">100</div>
            </div>
          </div>
          <div
            className="cw-clan-order-ab-box"
            tooltiptext="3 order"
            topdistance="120"
          >
            <div className="cw-clan-order-ab-pic">
              <img src="img/evPopArts/potion_green.png" loading="lazy" />
            </div>
            <div className="cw-clan-order-ab-prg-box">
              <div className="cw-clan-order-ab-prg red"></div>
              <div className="cw-clan-order-ab-prg-text">Need Clan Trophy</div>
            </div>
          </div>
          <div
            className="cw-clan-order-ab-box"
            tooltiptext="4 order"
            topdistance="120"
          >
            <div className="cw-clan-order-ab-pic">
              <img src="img/evPopArts/potion_blue.png" loading="lazy" />
            </div>
            <div className="cw-clan-order-ab-prg-box">
              <div className="cw-clan-order-ab-prg false"></div>
              <div className="cw-clan-order-ab-prg-text">100</div>
            </div>
          </div>
          <div
            className="cw-clan-order-ab-box"
            tooltiptext="5 order"
            topdistance="120"
          >
            <div className="cw-clan-order-ab-pic">
              <img src="img/v2-icon-chaos.png" loading="lazy" />
            </div>
            <div className="cw-clan-order-ab-prg-box">
              <div className="cw-clan-order-ab-prg false"></div>
              <div className="cw-clan-order-ab-prg-text">500</div>
            </div>
          </div>
        </div>
        <div className="cw-clan-order-rew-box-all">
          <div className="color-btn green working">
            <div className="color-btn-text">
              <div>
                In
                <span className="t">23:50:04</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
