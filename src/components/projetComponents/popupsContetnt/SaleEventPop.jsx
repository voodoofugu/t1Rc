import { memo } from "react";

import ItemBox from "../UIComponents/ItemBox";
import FraimedTitle from "../UIComponents/FraimedTitle";

export default memo(function SaleEventPop({ event }) {
  let ticketImg =
    event === "bf"
      ? "ic-tickets-bf-1"
      : event === "vl"
      ? "ic-tickets-vl-1"
      : null;
  let saleText = event === "vl" ? "Valentine's Day" : null;

  return (
    <>
      {/* <div className="v2-bf-keys">
        <div className="v2-bf-keys__image">
          <img src={`img/${ticketImg}.png`} alt="" loading="lazy" />
        </div>
        <div className="v2-bf-keys__count">999</div>
      </div> */}
      <div className="rewards-box">
        <FraimedTitle className="cornersBottom" text="Rewards" />
        <div className="rewards-content">
          <ItemBox
            itemClass="wh100"
            count="999"
            itemPic={`img/${ticketImg}.png`}
          />
          <ItemBox
            itemClass="wh100"
            count="999"
            itemPic={`img/${ticketImg}.png`}
          />
        </div>
      </div>

      <div className="bf-hero-box-all">
        <div className="lhero-box">
          <div className="lhero-pic">
            <img
              src="img/images/hero-all/tithero-599/x1/tithero-1.jpg"
              loading="lazy"
            />
          </div>
          <div className="topname-box">
            <div className="sh2-icon-forgirl right">
              <img src="img/cur2-sword.png" loading="lazy" />
            </div>
            <div className="lhero-name-box">
              <div className="lhero-name">Asahina Mio</div>
            </div>
          </div>
          <div className="bottom-star-box-girl-count-box">
            <div className="addInfo">HEROINE</div>
          </div>
          <div className="sv-sale-bonus-box-all">
            <div className="ashero-bonus-box">
              <div className="acbonus-box">
                <div className="lvlbox-name">DPS</div>
                <div className="bonus-lvl-box-bonus-box">
                  <div className="bonus-lvl-box-bonus">
                    +45%
                    <div className="ff-sh2-icon">
                      <img src="img/ico-sword.png" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="acbonus-box second">
                <div className="lvlbox-name">Power</div>
                <div className="bonus-lvl-box-bonus-box">
                  <div className="bonus-lvl-box-bonus">
                    +2.15%
                    <div className="ff-sh2-icon">
                      <img src="img/ms-hand.png" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lhero-box">
          <div className="lhero-pic">
            <img
              src="img/images/hero-all/tithero-599/x1/tithero-1.jpg"
              loading="lazy"
            />
          </div>
          <div className="topname-box">
            <div className="sh2-icon-forgirl right">
              <img src="img/cur2-sword.png" loading="lazy" />
            </div>
            <div className="lhero-name-box">
              <div className="lhero-name">Asahina Mio</div>
            </div>
          </div>
          <div className="bottom-star-box-girl-count-box">
            <div className="addInfo">HEROINE</div>
          </div>
          <div className="sv-sale-bonus-box-all">
            <div className="ashero-bonus-box">
              <div className="acbonus-box">
                <div className="lvlbox-name">DPS</div>
                <div className="bonus-lvl-box-bonus-box">
                  <div className="bonus-lvl-box-bonus">
                    +45%
                    <div className="ff-sh2-icon">
                      <img src="img/ico-sword.png" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="acbonus-box second">
                <div className="lvlbox-name">Power</div>
                <div className="bonus-lvl-box-bonus-box">
                  <div className="bonus-lvl-box-bonus">
                    +2.15%
                    <div className="ff-sh2-icon">
                      <img src="img/ms-hand.png" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lhero-box">
          <div className="lhero-pic">
            <img
              src="img/images/hero-all/tithero-599/x1/tithero-1.jpg"
              loading="lazy"
            />
          </div>
          <div className="topname-box">
            {/* <div className="sh2-icon left">
              <img src="img/cur-r.png" loading="lazy" />
            </div> */}
            <div className="sh2-icon-forgirl right">
              <img src="img/cur2-sword.png" loading="lazy" />
            </div>
            <div className="lhero-name-box">
              <div className="lhero-name">Asahina Mio</div>
            </div>
          </div>
          <div className="bottom-star-box-girl-count-box">
            <div className="addInfo">HEROINE</div>
          </div>
          <div className="sv-sale-bonus-box-all">
            <div className="ashero-bonus-box">
              <div className="acbonus-box">
                <div className="lvlbox-name">DPS</div>
                <div className="bonus-lvl-box-bonus-box">
                  <div className="bonus-lvl-box-bonus">
                    +45%
                    <div className="ff-sh2-icon">
                      <img src="img/ico-sword.png" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="acbonus-box second">
                <div className="lvlbox-name">Power</div>
                <div className="bonus-lvl-box-bonus-box">
                  <div className="bonus-lvl-box-bonus">
                    +2.15%
                    <div className="ff-sh2-icon">
                      <img src="img/ms-hand.png" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="store-button">
        <div className="but-price-text">купить</div>
        <div className="but-price old">$500</div>
        <div className="but-price">
          $49.99
          <div className="price-nutaku"></div>
        </div>
      </div>
    </>
  );
});
