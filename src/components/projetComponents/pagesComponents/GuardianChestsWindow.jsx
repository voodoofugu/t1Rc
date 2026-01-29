import { useState, useRef, useEffect } from "react";
import nexus from "nexus";

import ItemBox from "../UIComponents/ItemBox";
import ResCount from "../UIComponents/ResCount";
import ProgressBar from "../UIComponents/ProgressBar";
import Button from "../UIComponents/Button";
import MorphScroll from "../../../../morphing-scroll/src/components/MorphScroll";
import ScrollThumb from "../UIComponents/ScrollThumb";
import Notification from "../UIComponents/Notification";

import data_angels from "../../../scripts/FapTitansScripts/data_angels";

export const cssFiles = [
  "guardian-chests-window",
  "screen-superhero",
  "screen-unipop-subscription",
];

function GuardianChestsWindow({ pageName, children }) {
  // states
  const [quantity, setQuantity] = useState(1);
  const [infoChest, setInfoChest] = useState("");

  //refs
  const guardianWindowRef = useRef(null);
  const controllerRef = useRef(null); // для очищения анимаций (но это не обязательно)

  // funcs
  const chestOnClick = (ev) => {
    controllerRef.current?.abort();
    controllerRef.current = new AbortController();
    const { signal } = controllerRef.current;

    const parent = ev.target.closest(".chest-box");
    const chest = parent.getAttribute("data-chest");

    guardianWindowRef.current?.classList.add("anim-chest-" + chest);
    setTimeout(() => {
      if (signal.aborted) return;

      guardianWindowRef.current?.classList.add("open-chest-" + chest);
      setTimeout(() => {
        if (signal.aborted) return;

        nexus.acts.handlePopup({
          type: "open",
          data: {
            mpopClass: "m-popup contentOnly framedPop heroRewardPop",
            popCont: "CongraPop",
            props: {
              rewardsData: [
                {
                  cardType: "a",
                  itemPic: `img/images/goddess/goddess-20/x2/ava/goddess-ava-1.jpg`,
                },
                {
                  cardType: "a",
                  itemPic: `img/images/goddess/goddess-21/x2/ava/goddess-ava-1.jpg`,
                },
                {
                  cardType: "a",
                  itemPic: `img/images/goddess/goddess-22/x2/ava/goddess-ava-1.jpg`,
                },
              ],
            },
          },
        });
        setTimeout(() => {
          if (signal.aborted) return;

          guardianWindowRef.current?.classList.remove("anim-chest-" + chest);
          guardianWindowRef.current?.classList.remove("open-chest-" + chest);
        }, 600);
      }, 600);
    }, 600);
  };

  const chestInfoOpen = (ev) => {
    const parent = ev.target.closest(".chest-box");
    const chest = parent.getAttribute("data-chest");

    guardianWindowRef.current.classList.add("info-chest");
    guardianWindowRef.current.classList.add(chest);
    setInfoChest(chest);
  };

  const chestInfoClose = () => {
    guardianWindowRef.current.classList.remove("info-chest");
    guardianWindowRef.current.classList.remove(infoChest);
    setInfoChest("");
  };

  const quantityChange = () => {
    quantity === 1 ? setQuantity(10) : setQuantity(1);
  };

  // effects
  useEffect(() => {
    // на всякий случай если анимация идёт а пользователь закрыл окно
    return controllerRef.current?.abort();
  }, []);

  // render
  return (
    <div className="main world1">
      <div className="main-bg"></div>
      <div className="guardian-window" ref={guardianWindowRef}>
        <div className="guardian-window-bg"></div>
        <div className="header">
          <div className="guardian-tit">Guardians Chests</div>

          <Button className="back" text />

          <ProgressBar
            className="progressBarOfSympathy chests-prg-bar"
            progressSize={[240, 24]}
            maxProgress={1000}
            currentProgress={449}
            textWithProgress={"max"}
          >
            <ItemBox
              className="wh40"
              itemPic="img/earthworld-chest-points-chip-icon.png"
            />
          </ProgressBar>

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
                    inner:
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    girlImg: "img/break-girls/break-girl915.png",
                  },
                },
              });
            }}
          />

          <ResCount
            className="spirit-count"
            img="img/evPopArts/angel_spirit_1.png"
            value="234"
            plus
            onClick={() => {
              nexus.acts.handlePopup({
                type: "open",
                data: {
                  mpopClass: "m-popup  contentOnly framedPop essence-buy",
                  popCont: "BuyShop",
                  props: {
                    img1: "evPopArts/angel_spirit_1",
                    img2: "evPopArts/angel_spirit_2",
                    img3: "evPopArts/angel_spirit_3",
                    img4: "evPopArts/angel_spirit_4",
                  },
                },
              });
            }}
          />
        </div>

        <div className="torch-fire-wrap">
          <div className="torch-fire-wrap next"></div>
        </div>

        <div className="chests-wrap">
          <div className="chest-box" data-chest="bronze">
            <Button
              className="btnGold max open-btn"
              text={`${50 * quantity} open`}
              textIcn="img/evPopArts/angel_spirit_1.png"
              onClick={chestOnClick}
            />
            <div className="chest-wrap">
              <div className="chest"></div>
            </div>
            <Button
              className="info info-btn"
              text="?"
              onClick={chestInfoOpen}
            />
          </div>
          <div className="chest-box" data-chest="silver">
            <Button
              className="btnGold max open-btn"
              text={`${100 * quantity} open`}
              textIcn="img/evPopArts/angel_spirit_2.png"
              onClick={chestOnClick}
            />
            <div className="chest-wrap">
              <div className="chest"></div>
            </div>
            <Button
              className="info info-btn"
              text="?"
              onClick={chestInfoOpen}
            />
          </div>
          <div className="chest-box" data-chest="gold">
            <Button
              className="btnGold max open-btn"
              text={`${200 * quantity} open`}
              textIcn="img/evPopArts/angel_spirit_3.png"
              onClick={chestOnClick}
            />
            <div className="chest-wrap">
              <div className="chest"></div>
            </div>
            <Button
              className="info info-btn"
              text="?"
              onClick={chestInfoOpen}
            />
          </div>
        </div>

        <div className="chests-info-window">
          <div className="guardian-tit">{`${infoChest}-Chest`}</div>
          <Button className="exit" text="✖" onClick={chestInfoClose} />

          <div className="chest-info-content">
            <div className="text">
              In this Chest you can get from{" "}
              <div className="text-selected">1</div> to{" "}
              <div className="text-selected">10</div> Pieces this Guardians:
            </div>

            <MorphScroll
              className="guardians-scroll"
              size={[500, 224]}
              objectsSize={94}
              gap={16}
              wrapperMargin={[0, 10]}
              // edgeGradient="#1e191c"
              edgeGradient="rgba(180,120,0,0.3)"
              progressTrigger={{
                wheel: true,
                progressElement: <ScrollThumb />,
              }}
              wrapperAlign="center"
              scrollBarEdge={10}
            >
              {data_angels.map((item) => (
                <ItemBox
                  className="wh94"
                  key={item.id}
                  cardType="a"
                  itemPic={`img/images/goddess/goddess-${item.id}/x1/ava/goddess-ava-1.jpg`}
                >
                  <ProgressBar
                    className="guardians-prg-bar"
                    progressSize={[50, 24]}
                    maxProgress={100}
                    currentProgress={10}
                    textWithProgress={"max"}
                  />
                </ItemBox>
              ))}
            </MorphScroll>

            <div className="text table">
              <div className="info-header">Chance of Dropping:</div>
              <div className="text-content">
                <div className="text">
                  <div className="text-selected">100%</div>
                  to Drop
                  <div className="text-selected selected2">1</div>
                  Angel Pieces
                </div>
                <div className="text">
                  <div className="text-selected">70%</div>
                  to Drop
                  <div className="text-selected selected2">2</div>
                  Angel Pieces
                </div>
                <div className="text">
                  <div className="text-selected">50%</div>
                  to Drop
                  <div className="text-selected selected2">3</div>
                  Angel Pieces
                </div>
                <div className="text">
                  <div className="text-selected">30%</div>
                  to Drop
                  <div className="text-selected selected2">4</div>
                  Angel Pieces
                </div>
                <div className="text">
                  <div className="text-selected">5%</div>
                  to Drop
                  <div className="text-selected selected2">5</div>
                  Angel Pieces
                </div>
                <div className="text">
                  <div className="text-selected">1%</div>
                  to Drop
                  <div className="text-selected selected2">10</div>
                  Angel Pieces
                </div>
              </div>
            </div>

            <div className="notifWrap chip-info">
              <ItemBox
                className="simpleItem wh68"
                itemPic="img/earthworld-chest-points-chip-icon.png"
              />
              <div className="notifText">+30 Chest Points</div>
            </div>
          </div>
        </div>

        <Button
          className="quantity-btn lightGreen"
          text={`x${quantity}`}
          onClick={quantityChange}
        />
      </div>

      {children}
    </div>
  );
}

export default GuardianChestsWindow;
