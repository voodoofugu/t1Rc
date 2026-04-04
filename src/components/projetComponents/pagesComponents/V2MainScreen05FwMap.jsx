import React from "react";
import nexus from "nexus";

import FraimedTitle from "../UIComponents/FraimedTitle";
import Button from "../UIComponents/Button";
import Warpop from "../popupsContetnt/Warpop";
import ImageBg from "../UIComponents/ImageBg";
import MapCell from "../UIComponents/MapCell";

import mapCell from "../data/mapCell";

export const cssFiles = [
  "v2-screen-fw-map",
  "v2-screen-fw-map-warpop",
  "v2-screen-fw-army-setup",
];

export default function V2MainScreen05FwMap({ children }) {
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
        {mapCell.map((item, index) => (
          <MapCell key={index} index={index} {...item} />
        ))}
      </div>
      <Warpop />
      {children}
    </div>
  );
}
