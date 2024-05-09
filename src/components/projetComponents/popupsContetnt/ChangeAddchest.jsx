import React, { memo } from "react";
import PopResValue from "../UIComponents/PopResValue";

export default memo(function ChangeAddchest() {
  return (
    <>
      <PopResValue resClass="chest" resValue="1000" notPlus />
      <div className="color-box"></div>
      <div className="addchest-box-all">
        <div className="addchest-box">
          <div className="chest-icon">
            <img src="img/change-sun1.png" loading="lazy" />
          </div>
          <div className="value-text-box">
            <div className="value-text-main">1</div>
            <div className="value-text-free"></div>
          </div>
          <div className="buy-btn">
            <div className="text-box">
              <div className="crown-icon"></div>
              <div className="crown-text">6</div>
            </div>
            <div className="btn-text">buy</div>
          </div>
        </div>
        <div className="addchest-box">
          <div className="chest-icon">
            <img src="img/change-sun1.png" loading="lazy" />
          </div>
          <div className="value-text-box">
            <div className="value-text-main">10</div>
            <div className="value-text-free">9 + (1 FREE)</div>
          </div>
          <div className="buy-btn">
            <div className="text-box">
              <div className="crown-icon"></div>
              <div className="crown-text">48</div>
            </div>
            <div className="btn-text">buy</div>
          </div>
        </div>
        <div className="addchest-box">
          <div className="chest-icon">
            <img src="img/change-sun1.png" loading="lazy" />
          </div>
          <div className="value-text-box">
            <div className="value-text-main">50</div>
            <div className="value-text-free">36 + (14 FREE)</div>
          </div>
          <div className="buy-btn">
            <div className="text-box">
              <div className="crown-icon"></div>
              <div className="crown-text">192</div>
            </div>
            <div className="btn-text">buy</div>
          </div>
        </div>
        <div className="addchest-box">
          <div className="chest-icon">
            <img src="img/change-sun1.png" loading="lazy" />
          </div>
          <div className="value-text-box">
            <div className="value-text-main">100</div>
            <div className="value-text-free">72 + (28 FREE)</div>
          </div>
          <div className="buy-btn">
            <div className="text-box">
              <div className="crown-icon"></div>
              <div className="crown-text">384</div>
            </div>
            <div className="btn-text">buy</div>
          </div>
        </div>
      </div>
      <div className="openchest-close-box">
        <div className="openchest-btn-close">
          <div className="btn-text">обратно</div>
        </div>
      </div>
    </>
  );
});
