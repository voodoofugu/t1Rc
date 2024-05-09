import React, { memo } from "react";

export default memo(function CwOffersPop() {
  return (
    <div className="content">
      <div className="offer-text">
        Тут Адекватный текст про то, что получаешь ресурсы из окошек ниже на
        протяжении 30-ти дней
      </div>
      <div className="offer-wrap">
        <div className="offer-title">
          <div className="title-text">Всего за 30 дней ты получишь:</div>
        </div>
        <div className="gainings-wrap">
          <div className="gainings-box di diamond6">
            <div className="box-title">
              <span className="text">+330</span>
            </div>
          </div>
          <div className="gainings-box chest2">
            <div className="box-title">
              <span className="text">+60</span>
            </div>
          </div>
        </div>
      </div>
      <div className="offer-wrap">
        <div className="offer-title">
          <div className="title-text">Ежедневно ты получаешь:</div>
        </div>
        <div className="gainings-wrap">
          <div className="gainings-box chest1">
            <div className="box-title">
              <span className="text">+2</span>
            </div>
          </div>
          <div className="gainings-box di diamond2">
            <div className="box-title">
              <span className="text">+10</span>
            </div>
          </div>
          <div className="gainings-box di diamond4 extra">
            <div className="box-title">
              <span className="text">+30</span>
            </div>
            <div className="sale-box">
              <div className="sale-text">
                <div>сегодня</div>
                доп.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profit">
        <span className="price">+700% value!</span>
      </div>
      <div className="color-btn green">
        <div className="color-btn-text">
          <p>10$</p>
          <div className="price-nutaku"></div>
          BUY
        </div>
      </div>
    </div>
  );
});
