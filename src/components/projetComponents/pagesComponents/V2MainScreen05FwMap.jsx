import React from "react";

export const cssFiles = ["v2-screen-fw-map", "v2-screen-fw-map-warpop"];

const yourFrIcon = ["img/v2-cw-bg34.png", "img/v2-cw-p03.png"];
const mapCellData = [
  {
    className: "selected",
    yourFr: false,
    frIcon: [],
    type: 0,
    img: "",
    icon: "",
  },
  {
    className: "c3",
    yourFr: false,
    frIcon: ["img/v2-cw-bg47.png", "img/v2-cw-p14.png"],
    type: 0,
    img: "",
    icon: "",
  },
  {
    className: "",
    yourFr: true,
    frIcon: yourFrIcon,
    type: 0,
    img: "",
    icon: "",
  },
  {
    className: "",
    yourFr: true,
    frIcon: yourFrIcon,
    type: 0,
    img: "",
    icon: "",
  },
  {
    className: "",
    yourFr: false,
    frIcon: [],
    type: 0,
    img: "",
    icon: "",
  },
  {
    className: "",
    yourFr: false,
    frIcon: [],
    type: 0,
    img: "",
    icon: "",
  },
  {
    className: "",
    yourFr: false,
    frIcon: [],
    type: 0,
    img: "",
    icon: "img/v2-fw-icon-w3.png",
  },
  {
    className: "",
    yourFr: false,
    frIcon: [],
    type: 3,
    img: "",
    icon: "",
  },
  {
    className: "",
    yourFr: true,
    frIcon: yourFrIcon,
    type: 5,
    img: "",
    icon: "",
  },
  {
    className: "",
    yourFr: true,
    frIcon: yourFrIcon,
    type: 2,
    img: "",
    icon: "",
  },
  {
    className: "c6",
    yourFr: false,
    frIcon: ["img/v2-cw-bg41.png", "img/v2-cw-p13.png"],
    type: 2,
    img: "",
    icon: "",
  },
  {
    className: "",
    yourFr: false,
    frIcon: [],
    type: 0,
    img: "",
    icon: "",
  },
  {
    className: "",
    yourFr: false,
    frIcon: [],
    type: 0,
    img: "",
    icon: "",
  },
  {
    className: "",
    yourFr: false,
    frIcon: [],
    type: 3,
    img: "",
    icon: "",
  },
  {
    className: "",
    yourFr: true,
    frIcon: yourFrIcon,
    type: 4,
    img: "",
    icon: "",
  },
  {
    className: "",
    yourFr: true,
    frIcon: yourFrIcon,
    type: 5,
    img: "",
    icon: "",
  },
  {
    className: "",
    yourFr: false,
    frIcon: [],
    type: 2,
    img: "",
    icon: "",
  },
  {
    className: "",
    yourFr: false,
    frIcon: [],
    type: 0,
    img: "",
    icon: "",
  },
  {
    className: "",
    yourFr: false,
    frIcon: [],
    type: 0,
    img: "",
    icon: "",
  },
  {
    className: "",
    yourFr: false,
    frIcon: [],
    type: 4,
    img: "",
    icon: "",
  },
  {
    className: "",
    yourFr: true,
    frIcon: yourFrIcon,
    type: 3,
    img: "",
    icon: "",
  },
  {
    className: "",
    yourFr: true,
    frIcon: yourFrIcon,
    type: 5,
    img: "",
    icon: "",
  },
  {
    className: "",
    yourFr: false,
    frIcon: [],
    type: 4,
    img: "",
    icon: "",
  },
  {
    className: "",
    yourFr: false,
    frIcon: [],
    type: 0,
    img: "",
    icon: "",
  },
  {
    className: "",
    yourFr: false,
    frIcon: [],
    type: 0,
    img: "",
    icon: "",
  },
  {
    className: "",
    yourFr: false,
    frIcon: [],
    type: 0,
    img: "",
    icon: "",
  },
  {
    className: "",
    yourFr: true,
    frIcon: yourFrIcon,
    type: 0,
    img: "",
    icon: "",
  },
  {
    className: "",
    yourFr: false,
    frIcon: [],
    type: 0,
    img: "img/v2-fw-icon-sword.png",
    icon: "img/v2-fw-icon-w3.png",
  },
  {
    className: "",
    yourFr: false,
    frIcon: [],
    type: 0,
    img: "",
    icon: "",
  },
  {
    className: "",
    yourFr: false,
    frIcon: [],
    type: 0,
    img: "",
    icon: "",
  },
];

function MapCell({
  className,
  yourFr,
  frIcon,
  type,
  img,
  icon,
  onClick,
  children,
}) {
  return (
    <div
      className={`fw-map-claim-box${className ? ` ${className}` : ""}${
        yourFr ? " fr-your " : " fr0"
      }${type ? ` type-${type}` : " type-0"}`}
      onClick={onClick}
    >
      {frIcon.length > 0 && (
        <div className="fw-icon-fr cw">
          <img className="bg" src={frIcon[0]} alt="Background Icon" />
          <img className="fg" src={frIcon[1]} alt="Foreground Icon" />
        </div>
      )}
      {img && (
        <div className="imgWrap">
          <img src={img} loading="lazy" alt="Cell Image" />
        </div>
      )}
      {icon && (
        <div className="iconWrap">
          <img src={icon} loading="lazy" alt="Icon" />
        </div>
      )}
      {children}
    </div>
  );
}

export default function V2MainScreen05FwMap() {
  return (
    <div className="main lang-ru world1">
      <div
        className="main-bg"
        style={{
          backgroundImage:
            'url("https://cdn.faptitans.com/s1/rc/v2-fw-map-bg.jpg")',
        }}
      />
      <div>
        <div className="fw-map-claim-box-all cw">
          {/* <div className="cw-field-label l1">1</div>
          <div className="cw-field-label l2">2</div>
          <div className="cw-field-label l3">3</div>
          <div className="cw-field-label l4">4</div>
          <div className="cw-field-label l5">5</div>
          <div className="cw-field-label lA">A</div>
          <div className="cw-field-label lB">B</div>
          <div className="cw-field-label lC">C</div>
          <div className="cw-field-label lD">D</div>
          <div className="cw-field-label lE">E</div>
          <div className="cw-field-label lF">F</div> */}
          {mapCellData.map((item, index) => (
            <MapCell key={index} {...item} />
          ))}
        </div>
        {/* <div className="fw-warpop-box-all ">
          <div className="fw-warpop-box-pic">
            <img src="https://cdn.faptitans.com/s1/rc/v2-fw-map-bg8.jpg" />
            <div className="fr-warpop-building type-5" />
          </div>
          <div className="fw-warpop-box-name">B2: Watchtower</div>
          <div className="fw-warpop-effect-box-all">
            <div className="fw-warpop-effect-box">
              <div className="fw-warpop-effect-name">effect</div>
              <div className="fw-warpop-effect-text-box">
                <div className="fw-warpop-effect-text">
                  3 war rating points per round
                </div>
              </div>
            </div>
            <div className="fw-warpop-income-box">
              <div className="fw-warpop-income-name">rewards</div>
              <div className="fw-warpop-income-text">
                <span className="ic-contrip cw" />
                144/round
              </div>
              <div className="fw-warpop-income-text second">
                <span className="ic-warchest" />
                3/round
              </div>
            </div>
          </div>
          <div className="fw-warpop-at-def-box-all attack">
            <div className="fw-warpop-def-box">
              <div className="fw-warpop-def-name">defence</div>
              <div className="fw-warpop-def-pic">
                <img src="https://cdn.faptitans.com/s1/rc/v2-fw-icon-fr0.png" />
              </div>
              <div className="fw-warpop-def-num">
                <span>0</span>
              </div>
            </div>
            <div className="fw-warpop-at-box-all">
              <div className="fw-warpop-at-name">attackers</div>
            </div>
            <div className="fw-warpop-army-power-box">
              <div className="fw-warpop-army-power-text">
                Your army power here
              </div>
              <div className="fw-warpop-army-power-num">0</div>
            </div>
            <div className="fw-warpop-gr-con-power-box">
              <div className="fw-warpop-gr-box">
                <div className="fw-warpop-army-power-text">Your army power</div>
                <div className="fw-warpop-army-power-num">0</div>
              </div>
            </div>
          </div>
          <div>
            <div className="color-btn green" style={{ filter: "grayscale(1)" }}>
              <div className="color-btn-text">clash in progress</div>
            </div>
          </div>
          <div className="fw-warpop-close" />
        </div> */}
        <a
          className="color-btn green exit active0"
          aria-current="page"
          href="#/guild/clans/wars"
          style={{ width: 28 }}
        >
          <div className="color-btn-text">
            <img src="https://cdn.faptitans.com/s1/rc/cw-ic-exit.png" />
          </div>
        </a>
        <div
          className="color-btn green update"
          style={{ position: "absolute", right: 10, top: 60, width: 28 }}
        >
          <div className="color-btn-text">
            <img src="https://cdn.faptitans.com/s1/rc/refresh-icon-white-1.png" />
          </div>
        </div>
        <div
          className="color-btn green chat"
          style={{ position: "absolute", right: 10, top: 110, width: 28 }}
        >
          <div className="color-btn-text">
            <img src="https://cdn.faptitans.com/s1/rc/ob-ico-5.png" />
          </div>
        </div>
      </div>
      <div />
      <div className="slider-layer" />
      <div className="tooltip-layer" />
    </div>
  );
}
