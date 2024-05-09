import React, { memo } from "react";

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
      <div className="v2-bf-keys">
        <div className="v2-bf-keys__image">
          <img src={`img/${ticketImg}.png`} alt="" loading="lazy" />
        </div>
        <div className="v2-bf-keys__count">999</div>
      </div>
      <div className="v2-bf-sale">{saleText}</div>

      <div className="bf-hero-box-all">
        <div className="lhero-box">
          <div className="lhero-pic">
            <img src="img/hero0075@1x.jpg" loading="lazy" />
          </div>
          <div className="topname-box">
            <div className="sh2-icon left">
              <img src="img/cur-r.png" loading="lazy" />
            </div>
            <div className="sh2-icon-forgirl right">
              <img src="img/cur2-sword.png" loading="lazy" />
            </div>
            <div className="lhero-name-box">
              <div className="lhero-name">Rei Hadakasutsu Blowjob</div>
            </div>
          </div>
          <div className="bottom-star-box-girl-count-box">
            <div className="sh2-prgbar-all gold">
              <div className="sh2-prgbar"></div>
              <div className="sh2-prgbar-text">300/300</div>
            </div>
            <div className="girl-bonus-box">
              <div className="girl-bonus-pic">
                <img
                  src="img/images/superhero/suphero-289/x1/avatar/289sh-ava-1.jpg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="sv-sale-bonus-box-all">
            <div className="acbonus-box">
              <div className="lvlbox-name">first bonus</div>
              <div className="bonus-lvl-box-bonus-box">
                <div className="bonus-lvl-box-bonus">
                  Увеличение DPS + 5000%
                  <span className="ff-sh2-icon">
                    <img src="img/cur2-barbarian.png" loading="lazy" />
                  </span>
                </div>
              </div>
            </div>
            <div className="acbonus-box second">
              <div className="lvlbox-name">second bonus</div>
              <div className="bonus-lvl-box-bonus-box">
                <div className="bonus-lvl-box-bonus">
                  Увеличение DPS + 5000%
                  <span className="ff-sh2-icon">
                    <img src="img/cur2-barbarian.png" loading="lazy" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lhero-box">
          <div className="lhero-pic">
            <img src="img/hero0075@1x.jpg" loading="lazy" />
          </div>
          <div className="topname-box">
            <div className="sh2-icon left">
              <img src="img/cur-r.png" loading="lazy" />
            </div>
            <div className="sh2-icon-forgirl right">
              <img src="img/cur2-sword.png" loading="lazy" />
            </div>
            <div className="lhero-name-box">
              <div className="lhero-name">Rei Hadakasutsu Blowjob</div>
            </div>
          </div>
          <div className="bottom-star-box-girl-count-box">
            <div className="sh2-prgbar-all gold">
              <div className="sh2-prgbar"></div>
              <div className="sh2-prgbar-text">300/300</div>
            </div>
            <div className="girl-bonus-box">
              <div className="girl-bonus-pic">
                <img
                  src="img/images/superhero/suphero-289/x1/avatar/289sh-ava-1.jpg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="sv-sale-bonus-box-all">
            <div className="acbonus-box">
              <div className="lvlbox-name">first bonus</div>
              <div className="bonus-lvl-box-bonus-box">
                <div className="bonus-lvl-box-bonus">
                  Увеличение DPS + 5000%
                  <span className="ff-sh2-icon">
                    <img src="img/cur2-barbarian.png" loading="lazy" />
                  </span>
                </div>
              </div>
            </div>
            <div className="acbonus-box second">
              <div className="lvlbox-name">second bonus</div>
              <div className="bonus-lvl-box-bonus-box">
                <div className="bonus-lvl-box-bonus">
                  Увеличение DPS + 5000%
                  <span className="ff-sh2-icon">
                    <img src="img/cur2-barbarian.png" loading="lazy" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lhero-box">
          <div className="lhero-pic">
            <img src="img/hero0075@1x.jpg" loading="lazy" />
          </div>
          <div className="topname-box">
            <div className="sh2-icon left">
              <img src="img/cur-r.png" loading="lazy" />
            </div>
            <div className="sh2-icon-forgirl right">
              <img src="img/cur2-sword.png" loading="lazy" />
            </div>
            <div className="lhero-name-box">
              <div className="lhero-name">Rei Hadakasutsu Blowjob</div>
            </div>
          </div>
          <div className="bottom-star-box-girl-count-box">
            <div className="sh2-prgbar-all gold">
              <div className="sh2-prgbar"></div>
              <div className="sh2-prgbar-text">300/300</div>
            </div>
            <div className="girl-bonus-box">
              <div className="girl-bonus-pic">
                <img
                  src="img/images/superhero/suphero-289/x1/avatar/289sh-ava-1.jpg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="sv-sale-bonus-box-all">
            <div className="acbonus-box">
              <div className="lvlbox-name">first bonus</div>
              <div className="bonus-lvl-box-bonus-box">
                <div className="bonus-lvl-box-bonus">
                  Увеличение DPS + 5000%
                  <span className="ff-sh2-icon">
                    <img src="img/cur2-barbarian.png" loading="lazy" />
                  </span>
                </div>
              </div>
            </div>
            <div className="acbonus-box second">
              <div className="lvlbox-name">second bonus</div>
              <div className="bonus-lvl-box-bonus-box">
                <div className="bonus-lvl-box-bonus">
                  Увеличение DPS + 5000%
                  <span className="ff-sh2-icon">
                    <img src="img/cur2-barbarian.png" loading="lazy" />
                  </span>
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
