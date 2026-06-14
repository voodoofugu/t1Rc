import React, { useState } from "react";

import HeroMenuBox from "../UIComponents/HeroMenuBox";
import ItemBox from "../UIComponents/ItemBox";
import { MorphScroll } from "morphing-scroll";
import ScrollThumb from "../UIComponents/ScrollThumb";

function ItemSection({ items, lastItem, arrow, plus1, plus2, completed }) {
  return (
    <div className={`itemsSection${completed ? " completed" : ""}`}>
      <div className={`items_wrap${plus1 ? " plus" : ""}`}>{items}</div>
      {arrow ? <div className="arrow"></div> : ""}
      <div className={`items_wrap${plus2 ? " plus" : ""}`}>{lastItem}</div>
      {completed && (
        <div className="completed_box">
          <p className="txt">completed</p>
        </div>
      )}
    </div>
  );
}

function MorphScrollWrap({ children }) {
  return (
    <MorphScroll
      className="content_wrap"
      size={[630, 426]}
      objectsSize={[604, 114]}
      gap={16}
      wrapperMargin={[0, 0, 16, 0]}
      progressTrigger={{
        wheel: true,
        progressElement: <ScrollThumb />,
      }}
      edgeGradient="#373446"
      wrapperAlign="center"
      scrollBarOnHover
    >
      {children}
    </MorphScroll>
  );
}

function tab1Content() {
  return (
    <>
      <div className="textBox">collect resouses and exchange for rewards!</div>
      <MorphScrollWrap key="tab1">
        <ItemSection
          items={
            <>
              <ItemBox
                className="check wh68"
                itemPic="img/sAndL/earringsIcn.png"
                count={"30/30"}
              />
              <ItemBox
                className="check wh68"
                itemPic="img/sAndL/braceletIcn.png"
                count={"30/30"}
              />
            </>
          }
          lastItem={
            <>
              <ItemBox
                itemPic="img/sAndL/jewelryBagIcn.png"
                count={"6.18K"}
                get={true}
              />
              <ItemBox
                className="wh60 simpleItem"
                itemPic="img/sAndL/heroKeyIcn.png"
              />
            </>
          }
          arrow={true}
          plus2={true}
        />
        <ItemSection
          items={
            <>
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/ringIcn.png"
                count={"2/30"}
              />
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/earringsIcn.png"
                count={"5/30"}
              />
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/braceletIcn.png"
                count={"12/30"}
              />
            </>
          }
          lastItem={
            <>
              <ItemBox itemPic="img/sAndL/jewelryBagIcn.png" count={1} />
              <ItemBox
                className="wh60 simpleItem"
                itemPic="img/sAndL/heroKeyIcn.png"
              />
            </>
          }
          arrow={true}
          plus2={true}
          completed={true}
        />
        <ItemSection
          items={
            <>
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/ringIcn.png"
                count={"2/30"}
              />
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/earringsIcn.png"
                count={"5/30"}
              />
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/braceletIcn.png"
                count={"12/30"}
              />
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/necklaceIcn.png"
                count={"28/30"}
              />
            </>
          }
          lastItem={
            <>
              <ItemBox itemPic="img/sAndL/jewelryBagIcn.png" count={1} />
              <ItemBox
                className="wh60 simpleItem"
                itemPic="img/sAndL/heroKeyIcn.png"
              />
            </>
          }
          arrow={true}
          plus2={true}
        />
        <ItemSection
          items={
            <>
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/ringIcn.png"
                count={"2/30"}
              />
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/earringsIcn.png"
                count={"5/30"}
              />
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/braceletIcn.png"
                count={"12/30"}
              />
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/necklaceIcn.png"
                count={"28/30"}
              />
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/earringsIcn.png"
                count={"14/30"}
              />
            </>
          }
          lastItem={
            <>
              <ItemBox itemPic="img/sAndL/jewelryBagIcn.png" count={1} />
              <ItemBox
                className="wh60 simpleItem"
                itemPic="img/sAndL/heroKeyIcn.png"
              />
            </>
          }
          arrow={true}
          plus2={true}
        />
      </MorphScrollWrap>
    </>
  );
}

function tab2Content() {
  return (
    <>
      <div className="textBox">by resouses!</div>
      <MorphScrollWrap key="tab2">
        <ItemSection
          items={
            <>
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/earringsIcn.png"
                count={"30"}
              />
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/braceletIcn.png"
                count={"20"}
              />
            </>
          }
          lastItem={
            <div className="store-button">
              <div className="but-price">$19.99</div>
            </div>
          }
        />
        <ItemSection
          items={
            <>
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/ringIcn.png"
                count={"2/30"}
              />
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/earringsIcn.png"
                count={"5"}
              />
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/braceletIcn.png"
                count={"12"}
              />
            </>
          }
          lastItem={
            <div className="store-button">
              <div className="but-price">$19.99</div>
            </div>
          }
        />
        <ItemSection
          items={
            <>
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/ringIcn.png"
                count={"2/30"}
              />
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/earringsIcn.png"
                count={"5"}
              />
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/braceletIcn.png"
                count={"12"}
              />
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/necklaceIcn.png"
                count={"28"}
              />
            </>
          }
          lastItem={
            <div className="store-button">
              <div className="but-price">$19.99</div>
            </div>
          }
        />
        <ItemSection
          items={
            <>
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/ringIcn.png"
                count={"2/30"}
              />
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/earringsIcn.png"
                count={"5"}
              />
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/braceletIcn.png"
                count={"12"}
              />
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/necklaceIcn.png"
                count={"28"}
              />
              <ItemBox
                className="wh68"
                itemPic="img/sAndL/earringsIcn.png"
                count={"14"}
              />
            </>
          }
          lastItem={
            <div className="store-button">
              <div className="but-price">$19.99</div>
            </div>
          }
        />
      </MorphScrollWrap>
    </>
  );
}

function tab3Content() {
  return (
    <div className="info-box">
      <div>Collect resources on FAPOPOLY board</div>
      <div>
        EXCHANGE resources for chosen rewards. You will get additional keys for
        each reward.
        <br />
        Unused resources will not be deleted after the end of event.
      </div>
      <div>
        COLLECT keys and TAKE most powerful girl here.
        <br />
        Keys will reset at the end of event!
      </div>
    </div>
  );
}

export default function CraftPop() {
  const [activeMenu, setActiveMenu] = useState("craftBtn");

  return (
    <>
      <div className="pse-cf-left-box-all">
        <div className="pse-cf-girl sh-wheelpack">
          <div className="lhero-box">
            <div
              className="lhero-pic"
              style={{
                backgroundPosition: "50% center",
                backgroundImage: "url(img/images/back/clan/bg_01.jpg)",
              }}
            >
              <img src="img/trophy/trophy/002_1.png" />
            </div>
            <div className="topname-box">
              <div className="lhero-name-box">
                <div className="lhero-name">Clan Trophy Night Witch</div>
              </div>
            </div>
            <div className="lhero-pieces">100</div>
          </div>
        </div>

        <div className="color-btn">
          <div className="color-btn-text">exchange</div>
        </div>
        <div className="pse-count-res-box">
          <div className="pse-count-res-text">
            <span className="ic-pse-keygirl"></span>
            10/10
          </div>
        </div>
      </div>

      <HeroMenuBox
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        tab1={["craftBtn", "Craft", tab1Content()]}
        tab2={["shopBtn", "Shop", tab2Content()]}
        tab3={["questBtn", "Info", tab3Content()]}
        contentWrapClass="tab_content_box"
      />
    </>
  );
}
