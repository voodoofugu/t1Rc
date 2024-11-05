import React from "react";

import FraimedTitle from "../UIComponents/FraimedTitle";
import Button from "../UIComponents/Button";

export const cssFiles = ["v2-screen-fw-map", "v2-screen-fw-map-warpop"];

const yourFrIcon = ["img/v2-cw-bg34.png", "img/v2-cw-p03.png"];
const mapCellData = [
  {
    className: "c3",
    yourFr: false,
    type: 0,
    iconShield: false,
    iconFr: ["img/v2-cw-bg47.png", "img/v2-cw-p14.png"],
    iconSword: false,
    img: "",
  },
  {
    className: "c3 openToAttack",
    yourFr: false,
    type: 0,
    iconShield: false,
    iconFr: ["img/v2-cw-bg47.png", "img/v2-cw-p14.png"],
    iconSword: false,
    img: "",
  },
  {
    className: "",
    yourFr: true,
    type: 0,
    iconShield: false,
    iconFr: yourFrIcon,
    iconSword: false,
    img: "",
  },
  {
    className: "",
    yourFr: true,
    type: 0,
    iconShield: false,
    iconFr: yourFrIcon,
    iconSword: false,
    img: "",
  },
  {
    className: "openToAttack",
    yourFr: false,
    type: 0,
    iconShield: false,
    iconFr: [],
    iconSword: false,
    img: "",
  },
  {
    className: "",
    yourFr: false,
    type: 0,
    iconShield: false,
    iconFr: [],
    iconSword: false,
    img: "",
  },
  {
    className: "",
    yourFr: false,
    type: 0,
    iconShield: false,
    iconFr: [],
    iconSword: true,
    img: "",
  },
  {
    className: "c3 openToAttack",
    yourFr: false,
    type: 3,
    iconShield: true,
    iconFr: ["img/v2-cw-bg47.png", "img/v2-cw-p14.png"],
    iconSword: true,
    img: "img/v2-fw-icon-sword.png",
  },
  {
    className: "",
    yourFr: true,
    type: 5,
    iconShield: true,
    iconFr: yourFrIcon,
    iconSword: false,
    img: "img/v2-fw-icon-shield-2.png",
  },
  {
    className: "",
    yourFr: true,
    type: 2,
    iconShield: false,
    iconFr: yourFrIcon,
    iconSword: false,
    img: "",
  },
  {
    className: "c6 openToAttack",
    yourFr: false,
    type: 2,
    iconShield: false,
    iconFr: ["img/v2-cw-bg41.png", "img/v2-cw-p13.png"],
    iconSword: false,
    img: "",
  },
  {
    className: "",
    yourFr: false,
    type: 0,
    iconShield: false,
    iconFr: [],
    iconSword: false,
    img: "",
  },
  {
    className: "",
    yourFr: false,
    type: 0,
    iconShield: false,
    iconFr: [],
    iconSword: false,
    img: "",
  },
  {
    className: "openToAttack",
    yourFr: false,
    type: 3,
    iconShield: false,
    iconFr: [],
    iconSword: false,
    img: "",
  },
  {
    className: "",
    yourFr: true,
    type: 4,
    iconShield: false,
    iconFr: yourFrIcon,
    iconSword: false,
    img: "",
  },
  {
    className: "",
    yourFr: true,
    type: 5,
    iconShield: false,
    iconFr: yourFrIcon,
    iconSword: false,
    img: "",
  },
  {
    className: "openToAttack",
    yourFr: false,
    type: 2,
    iconShield: false,
    iconFr: [],
    iconSword: false,
    img: "",
  },
  {
    className: "",
    yourFr: false,
    type: 0,
    iconShield: false,
    iconFr: [],
    iconSword: false,
    img: "",
  },
  {
    className: "",
    yourFr: false,
    type: 0,
    iconShield: false,
    iconFr: [],
    iconSword: false,
    img: "",
  },
  {
    className: "openToAttack",
    yourFr: false,
    type: 4,
    iconShield: false,
    iconFr: [],
    iconSword: false,
    img: "",
  },
  {
    className: "",
    yourFr: true,
    type: 3,
    iconShield: false,
    iconFr: yourFrIcon,
    iconSword: false,
    img: "",
  },
  {
    className: "",
    yourFr: true,
    type: 5,
    iconShield: false,
    iconFr: yourFrIcon,
    iconSword: false,
    img: "",
  },
  {
    className: "openToAttack",
    yourFr: false,
    type: 4,
    iconShield: false,
    iconFr: [],
    iconSword: false,
    img: "",
  },
  {
    className: "",
    yourFr: false,
    type: 0,
    iconShield: false,
    iconFr: [],
    iconSword: false,
    img: "",
  },
  {
    className: "",
    yourFr: false,
    type: 0,
    iconShield: false,
    iconFr: [],
    iconSword: false,
    img: "",
  },
  {
    className: "openToAttack",
    yourFr: false,
    type: 0,
    iconShield: false,
    iconFr: [],
    iconSword: false,
    img: "",
  },
  {
    className: "",
    yourFr: true,
    type: 0,
    iconShield: false,
    iconFr: yourFrIcon,
    iconSword: false,
    img: "",
  },
  {
    className: "openToAttack",
    yourFr: false,
    type: 0,
    iconShield: false,
    iconFr: [],
    iconSword: true,
    img: "img/v2-fw-icon-sword.png",
  },
  {
    className: "",
    yourFr: false,
    type: 0,
    iconShield: false,
    iconFr: [],
    iconSword: false,
    img: "",
  },
  {
    className: "",
    yourFr: false,
    type: 0,
    iconShield: false,
    iconFr: [],
    iconSword: false,
    img: "",
  },
];

function mapCellSelectHandler(mapCellRef) {
  document.querySelectorAll(".fw-map-claim-box").forEach((el) => {
    el.classList.remove("selected");
  });
  mapCellRef.classList.toggle("selected");
}

function MapCell({
  className,
  yourFr,
  type,
  iconFr,
  iconSword,
  iconShield,
  img,
  onClick,
  children,
}) {
  const mapCellRef = React.useRef(null);

  return (
    <div
      className={`fw-map-claim-box${className ? ` ${className}` : ""}${
        yourFr ? " fr-your " : " fr0"
      }${type ? ` type-${type}` : " type-0"}`}
      onClick={() => mapCellSelectHandler(mapCellRef.current)}
      ref={mapCellRef}
    >
      {iconShield && (
        <div className="fw-icon-ws">
          <img src="img/v2-fw-icon-w1.png" loading="lazy" alt="Icon" />
        </div>
      )}
      {iconFr.length > 0 && (
        <div className="fw-icon-fr cw">
          <img className="bg" src={iconFr[0]} alt="Background Icon" />
          <img className="fg" src={iconFr[1]} alt="Foreground Icon" />
        </div>
      )}
      {iconSword && (
        <div className="fw-icon-sword">
          <img src="img/v2-fw-icon-w3.png" loading="lazy" alt="Icon" />
        </div>
      )}
      {img && (
        <div className="imgWrap">
          <img src={img} loading="lazy" alt="Cell Image" />
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

      <Button className="info" text="i" />

      <FraimedTitle
        className="banner clanWarMapTit"
        text="Clan Wars battle map"
      />

      <Button className="exit" text="✖" href="#/guild/clans/wars" />

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
      <div />
      <div className="slider-layer" />
      <div className="tooltip-layer" />
    </div>
  );
}
