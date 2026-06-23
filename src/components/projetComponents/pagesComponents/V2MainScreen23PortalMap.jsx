import { useEffect, useState } from "react";
import nexus from "nexus";

import { mapsData, clipPathMap, maxLocNum } from "../data/portalMapData";

import Button from "../UIComponents/Button";
import ItemNotiz from "../UIComponents/ItemNotiz";

export const cssFiles = [
  "screen-achiev",
  "v2-screen-portal-map",
  "screen-fortuna-winpop",
  "v2-screen-world-district",
];

const infoContent = (
  <ol>
    <li>
      Explore the Underworld maps and free all the goddesses by defeating mobs.
    </li>
    <li>
      Find a special reward in the chests on the map and level up the "Dungeons
      Treasures" button to get even more rewards.
    </li>
    <li>
      Here you can get Squad tokens that can be used in the Squad shop to level
      up your squads. Also, you can use Squad tokens in the Underworld shop.
    </li>
    <li>
      When you complete the selected location on the map, you get a chest with
      unique reward.
    </li>
  </ol>
);

const LocBox = ({
  children,
  className,
  locNum,
  setActiveLoc,
  onMouseLeave,
  onMouseOver,
}) => {
  const clipPath =
    locNum < 4
      ? clipPathMap[locNum - 1]
      : locNum === 9
        ? clipPathMap[3]
        : locNum === 10
          ? clipPathMap[4]
          : clipPathMap[2];

  return (
    <div
      className={`loc-box${className ? ` ${className}` : ""}`}
      onClick={setActiveLoc}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <div className={`map-bg map-location${locNum}`}>
        {[1, 2, 3, 9, 10].includes(locNum) && (
          <svg>
            <clipPath id={`clipping-${locNum}`}>
              <path d={clipPath}></path>
            </clipPath>
          </svg>
        )}
        {children}
        <svg className="svg-frame">
          <g>
            <path d={clipPath}></path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default function V2MainScreen23PortalMap({ children, pageName }) {
  const [mapNum, setMapNum] = useState(1);
  const [currentLoc, setCurrentLoc] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const currentLP = 11000;
  const currentMaxLP = 10000 * mapNum;
  let nextLocStage = Math.ceil((currentLP - 10000 * (mapNum - 1)) / 1000);
  if (nextLocStage < 0) nextLocStage = 1;

  const currentPath = document.querySelector("title").innerHTML;
  const currentMapData = mapsData[mapNum];

  const isLocVisited = (locNum) => {
    return currentMapData[locNum].visited;
  };
  const setLocVisited = (locNum) => {
    currentMapData[locNum].visited = true;
  };

  // Обработчик наведения
  const handleMouseOver = (i) => {
    setHoveredIndex(i);
  };

  // Обработчик ухода мыши
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    if (pageName === currentPath) {
      // всплывашка
      const chests = document.querySelectorAll(".chest");
      [...chests].map((chest, index) => {
        if (chest.classList.contains("close")) {
          chest.querySelector(".chest-notif").innerHTML = "LP 1000";
        }

        // переключаем состояния сундуков
        chest.addEventListener("click", () => {
          let currentClassName = "";
          if (chest.classList.contains("ready")) {
            currentClassName = "ready";
          }
          if (chest.classList.contains("open")) {
            currentClassName = "open";
          }
          if (chest.classList.contains("closed")) {
            currentClassName = "closed";
          }

          if (currentClassName === "ready") {
            chest.classList.remove("ready");
            chest.classList.add("open");

            const chestOpen = [...document.querySelectorAll(".chest.open")];
            chestOpen.map((el) => {
              el.style.pointerEvents = "all";
            });
          }
          if (currentClassName === "open") {
            chest.classList.remove("open");
            chest.classList.add("closed");
          }
          if (currentClassName === "closed") {
            chest.classList.remove("closed");
            chest.classList.add("ready");
          }
        });
      });

      return;
    }
    return () => {};
  }, [pageName, currentPath]);

  const arrowHandler = (event) => {
    if (event.target.classList.contains("left")) {
      if (mapNum === 1) return;

      const newMapNum = mapNum - 1;
      setMapNum(newMapNum);

      if (!mapsData[newMapNum][0].visited) setCurrentLoc(0);
      else setCurrentLoc(1);
    } else {
      if (mapNum === maxLocNum) return;

      const newMapNum = mapNum + 1;
      setMapNum(newMapNum);

      if (!mapsData[newMapNum][0].visited) setCurrentLoc(0);
      else setCurrentLoc(1);
    }
  };

  return (
    <div className="main world2">
      <Button className="exit" text="✖" />
      <Button
        className="info"
        text="i"
        onClick={() => {
          nexus.acts.handlePopup({
            type: "open",
            data: {
              mpopClass: "m-popup contentOnly framedPop",
              popCont: "InfoPopFramed",
              props: {
                inner: infoContent,
                girlImg: "img/break-girls/break-girl915.png",
              },
            },
          });
        }}
      />

      <div className="portal-map-box">
        <div className={`map-locs-wrap map-0${mapNum}`}>
          {currentMapData.map((_, i) => (
            <LocBox
              key={i}
              className={`${currentLP > i * 1000 + 10000 * (mapNum - 1) ? (isLocVisited(i) ? "" : "foropen") : "lock"}${currentLoc === i + 1 ? " active" : ""}`}
              locNum={i + 1}
              setActiveLoc={() => {
                // устанавливаю текущую локацию если она открыта
                if (currentLP > i * 1000 + 10000 * (mapNum - 1))
                  setCurrentLoc(i + 1);
                // отмечаю что локация была посещена
                if (!currentMapData[i].visited) setLocVisited(i);
              }}
              onMouseOver={() => handleMouseOver(i)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="station-wrap">
                <div className="station"></div>
                {currentLoc === i + 1 && (
                  <div className="station-lvl-box">
                    <div className="lvl-box-text1">lvl</div>
                    <div className="lvl-box-text2">{currentLP}</div>
                  </div>
                )}
              </div>
              <div className="chest-wrap">
                {/* "chest chest-1 ready" */}
                <div className="chest chest-1 open">
                  <div className="chest-notif">claim</div>
                </div>
                <div className="chest chest-2 closed">
                  <div className="chest-notif">claim</div>
                </div>
              </div>
            </LocBox>
          ))}

          {nextLocStage < 10 && currentMapData[nextLocStage - 1].visited && (
            <div className={`inf-btn step${nextLocStage}`}>
              <div className="inf-text">from {nextLocStage + 1}000 LP</div>
            </div>
          )}
        </div>

        <div className="title-wrap">
          <div className="header-title">
            {`${currentLoc ? currentMapData[currentLoc - 1].name : "—"}`}
          </div>
        </div>
        <div
          className={`arrow left${mapNum === 1 ? " unactive" : ""}`}
          onClick={arrowHandler}
        ></div>
        <div
          className={`arrow right${mapNum === maxLocNum ? " unactive" : ""}`}
          onClick={arrowHandler}
        ></div>
        <div
          className="progres-bar"
          onClick={() => {
            if (!currentLoc) return;

            nexus.acts.handlePopup({
              type: "open",
              data: {
                mpopClass: "m-popup world-district",
                popCont: "WorldDistrict",
                popTit: "District loot",
                props: {
                  mapNum: mapNum,
                  locNum: currentLoc,
                  locName: currentMapData[currentLoc - 1].name,
                },
              },
            });
          }}
        >
          <div className="bar-scale">
            <div
              className="bar-scale-patf"
              style={{ width: `${(currentLP / currentMaxLP) * 100}%` }}
            ></div>
          </div>
          <div className="bar-value">
            {currentLP}/{currentMaxLP} LP
          </div>
          <div className="bar-text">
            This shows the progress of the location or LP
          </div>
        </div>
        <div
          className="dungTreas-btn"
          onClick={() => {
            nexus.acts.handlePopup({
              type: "open",
              data: {
                mpopClass: "m-popup fortuna-winpop2",
                popCont: "DungeonTreasuresPop",
                popTit: "Congratulations",
              },
            });
          }}
        >
          <div className="dungTreas-inf-ic">
            <div className="dungTreas-inf-box">
              <div className="dungTreas-tit">Dungeon Treasures</div>
              <div className="dungTreas-cont">
                <div className="dungTreas-text">
                  Here you can get rewards after a certain time.
                  <br />
                  To level up the dungeon, you will need a<p>special reward*</p>
                  , which can be found in chests on the map.
                </div>
                <div className="mark">
                  <img
                    className="prize-pic"
                    src="img/dungTreas-res-ic.png"
                    loading="lazy"
                  />
                  <div className="dungTreas-text">
                    <p>*special reward</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dungTreas-lvl">lvl 1</div>
          <div className="timer">20:48:43</div>
          <div className="claim-inf">claim</div>
        </div>
      </div>

      {hoveredIndex !== null && (
        <ItemNotiz
          pageName={pageName}
          positiom={{ top: 10, left: 10 }}
          items={[
            ["img/sAndL/ringIcn.png", 1],
            ["img/sAndL/necklaceIcn.png", 6],
            ["img/sAndL/jewelryBagIcn.png", 12],
            ["img/sAndL/heroKeyIcn.png", 88],
          ]}
          onMouseOver={() => setHoveredIndex(hoveredIndex)}
          onMouseLeave={() => {
            setHoveredIndex(null);
          }}
        />
      )}
      {children}
    </div>
  );
}
