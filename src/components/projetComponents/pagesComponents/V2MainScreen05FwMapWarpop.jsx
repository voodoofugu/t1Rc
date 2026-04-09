import Button from "../UIComponents/Button";
import MapCell from "../UIComponents/MapCell";
import Warpop from "../popupsContetnt/Warpop";

import mapCell from "../data/mapCell";

export const cssFiles = [
  "v2-screen-fw-map",
  "v2-screen-fw-map-warpop",
  "v2-screen-fw-main",
  "v2-screen-fw-army-setup",
];

export default function V2MainScreen05FwMapWarpop({ children }) {
  return (
    <div className="main world1">
      <div className="main-bg fw-map"></div>

      <Button className="exit" text="✖" />
      <Button
        className="green refreshBtn"
        textIcn="img/ic-refresh.svg"
        text="refresh"
      />

      <div className="fw-map-name-box-all">
        <div className="fw-map-time-box">
          <div className="fw-map-time1">битва начнется: 06:59</div>
          <div className="fw-map-time2">награда появится: 23:59</div>
        </div>
        <div className="fw-map-name-box">
          <div className="fw-map-name">фракционные войны</div>
          <div className="fw-map-date">day 31</div>
        </div>
      </div>

      <div className="fw-map-claim-box-all fw">
        {mapCell.map((item, index) =>
          index > 19 ? null : <MapCell key={index} index={index} {...item} />,
        )}
      </div>

      <div className="fw-round-box-all">
        <div className="fw-round-box-name">раунд</div>
        <div className="fw-round-box">
          <div className="fw-round-num check">1</div>
          <div className="fw-round-num check">2</div>
          <div className="fw-round-num check">3</div>
          <div className="fw-round-num check">4</div>
          <div className="fw-round-num check">5</div>
          <div className="fw-round-num check">6</div>
          <div className="fw-round-num active">7</div>
          <div className="fw-round-num">8</div>
          <div className="fw-round-num">9</div>
          <div className="fw-round-num">10</div>
          <div className="fw-round-num">11</div>
          <div className="fw-round-num">12</div>
          <div className="fw-round-num">13</div>
          <div className="fw-round-num">14</div>
          <div className="fw-round-num">15</div>
          <div className="fw-round-num">16</div>
        </div>
      </div>

      <Warpop />
      {children}
    </div>
  );
}
