import { memo } from "react";

export default memo(function Rankchange() {
  return (
    <>
      {/* <div className="title">изменение ранга</div> */}
      {/* <div className="color-box"></div> */}
      <div className="rating-ped-box">
        <div className="ped-box rate1 undefined">
          <div className="ped-box-noreward">нет награды</div>
          <div className="rating-ped-box-num">
            <div className="ped-box-num-text var1">51-100</div>
          </div>
        </div>
        <div className="ped-box rate2 undefined">
          <div className="ped-box-prize"></div>
          <div className="rating-ped-box-num">
            <div className="ped-box-num-text var2">21-50</div>
          </div>
        </div>
        <div className="ped-box rate3 undefined">
          <div className="ped-box-prize"></div>
          <div className="rating-ped-box-num">
            <div className="ped-box-num-text var3">4-20</div>
          </div>
        </div>
        <div className="ped-box rate4 undefined">
          <div className="ped-box-prize"></div>
          <div className="rating-ped-box-num">
            <div className="ped-box-num-text var4">1-3</div>
          </div>
        </div>
        <div className="ped-box-portrait place3">
          <div className="you-box">ты</div>
        </div>
      </div>
      <div className="getpoints-box">
        <div className="getpoints-name">получай очки</div>
        <div className="getpoints-btn-box">
          <div className="lvlup-btn">
            <div className="btn-text1-wrap">
              <div className="btn-text1">Повышение уровней девушек</div>
            </div>
          </div>
          <div className="lvlup-btn">
            <div className="btn-text1-wrap">
              <div className="btn-text1">купи предметы</div>
            </div>
          </div>
          <div className="lvlup-btn">
            <div className="btn-text1-wrap">
              <div className="btn-text1">повысь статы</div>
            </div>
          </div>
        </div>
      </div>
      <div className="rank-arrow-up"></div>
      <div className="rank-arrow-down"></div>
    </>
  );
});
