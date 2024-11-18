import React from "react";
import { nexusDispatch, useNexus } from "nexus-state";

import FraimedTitle from "../UIComponents/FraimedTitle";
import Button from "../UIComponents/Button";
import Warpop from "../popupsContetnt/Warpop";
import ImageBg from "../UIComponents/ImageBg";

export const cssFiles = ["v2-screen-fw-map", "v2-screen-fw-map-warpop"];

function isLeftOrRightHalf(elementRef) {
  if (!elementRef) return null;

  const rect = elementRef.getBoundingClientRect();
  const elementCenterX = rect.left + rect.width / 2;
  const screenCenterX = window.innerWidth / 2;

  return elementCenterX < screenCenterX ? "" : "left";
}

function mapCellSelectHandler(mapCellRef, index, type) {
  document.querySelectorAll(".fw-map-claim-box").forEach((el) => {
    el.classList.remove("selected");
  });
  mapCellRef.classList.toggle("selected");
  nexusDispatch({
    type: "WAR_POP",
    payload: {
      key: index,
      visible: true,
      tit: `Cell on the Map ${index + 1}`,
      className: `cell_${index + 1} ${isLeftOrRightHalf(mapCellRef)}`,
      type: type,
    },
  });
}

function MapCell({
  className,
  index,
  yourFr,
  type,
  iconFr,
  iconSword,
  iconShield,
  iconRiot,
  img,
  children,
}) {
  const warpop = useNexus("warpop");

  const mapCellRef = React.useRef(null);

  if (mapCellRef.current && !warpop.visible) {
    mapCellRef.current.classList?.remove("selected");
  }

  return (
    <>
      <div
        className={`fw-map-claim-box${className ? ` ${className}` : ""}${
          yourFr ? " fr-your " : " fr0"
        }${type ? ` type-${type}` : " type-0"}`}
        onClick={() => {
          mapCellSelectHandler(mapCellRef.current, index, type);
        }}
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
        {iconRiot && (
          <div className="fw-icon-riot">
            <img src="img/v2-fw-icon-w4.png" loading="lazy" alt="Icon" />
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
    </>
  );
}

export default function V2MainScreen05FwMap() {
  return (
    <div className="main lang-ru world1">
      <ImageBg className="main-bg" img="img/bGs/warMapBg.jpg" />

      <Button className="info" text="i" />

      <FraimedTitle
        className="banner clanWarMapTit"
        text="Clan Wars battle map"
      />

      <Button className="green updateBtn" textIcn="img/ic-refresh.svg" />

      <Button className="green chatBtn" textIcn="img/ic-chat.svg" />

      <Button className="exit" text="✖" href="#/guild/clans/wars" />

      <div className="fw-map-claim-box-all cw">
        {mapCellData.map((item, index) => (
          <MapCell key={index} index={index} {...item} />
        ))}
      </div>

      <Warpop />
    </div>
  );
}

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
