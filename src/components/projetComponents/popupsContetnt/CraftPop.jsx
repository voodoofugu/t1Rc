import React, { useState } from "react";

import HeroMenuBox from "../UIComponents/HeroMenuBox";
import ItemBox from "../UIComponents/ItemBox";

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
      <>
        <HeroMenuBox
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          tab1={[
            "craftBtn",
            "Craft",
            <>
              <div className="textBox">
                collect resouses and exchange for rewards!
              </div>
              <div className="content_wrap scrollBox">
                <ItemSection
                  items={
                    <>
                      <ItemBox
                        className="check"
                        itemPic="img/sAndL/earringsIcn.png"
                        count={"30/30"}
                      />
                      <ItemBox
                        className="check"
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
                        className="wh60"
                        itemPic="img/sAndL/heroKeyIcn.png"
                        count={1}
                      />
                    </>
                  }
                  arrow={true}
                  plus2={true}
                />
                <ItemSection
                  items={
                    <>
                      <ItemBox itemPic="img/sAndL/ringIcn.png" count={"2/30"} />
                      <ItemBox
                        itemPic="img/sAndL/earringsIcn.png"
                        count={"5/30"}
                      />
                      <ItemBox
                        itemPic="img/sAndL/braceletIcn.png"
                        count={"12/30"}
                      />
                    </>
                  }
                  lastItem={
                    <>
                      <ItemBox
                        itemPic="img/sAndL/jewelryBagIcn.png"
                        count={1}
                      />
                      <ItemBox
                        className="wh60"
                        itemPic="img/sAndL/heroKeyIcn.png"
                        count={1}
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
                      <ItemBox itemPic="img/sAndL/ringIcn.png" count={"2/30"} />
                      <ItemBox
                        itemPic="img/sAndL/earringsIcn.png"
                        count={"5/30"}
                      />
                      <ItemBox
                        itemPic="img/sAndL/braceletIcn.png"
                        count={"12/30"}
                      />
                      <ItemBox
                        itemPic="img/sAndL/necklaceIcn.png"
                        count={"28/30"}
                      />
                    </>
                  }
                  lastItem={
                    <>
                      <ItemBox
                        itemPic="img/sAndL/jewelryBagIcn.png"
                        count={1}
                      />
                      <ItemBox
                        className="wh60"
                        itemPic="img/sAndL/heroKeyIcn.png"
                        count={1}
                      />
                    </>
                  }
                  arrow={true}
                  plus2={true}
                />
                <ItemSection
                  items={
                    <>
                      <ItemBox itemPic="img/sAndL/ringIcn.png" count={"2/30"} />
                      <ItemBox
                        itemPic="img/sAndL/earringsIcn.png"
                        count={"5/30"}
                      />
                      <ItemBox
                        itemPic="img/sAndL/braceletIcn.png"
                        count={"12/30"}
                      />
                      <ItemBox
                        itemPic="img/sAndL/necklaceIcn.png"
                        count={"28/30"}
                      />
                      <ItemBox
                        itemPic="img/sAndL/earringsIcn.png"
                        count={"14/30"}
                      />
                    </>
                  }
                  lastItem={
                    <>
                      <ItemBox
                        itemPic="img/sAndL/jewelryBagIcn.png"
                        count={1}
                      />
                      <ItemBox
                        className="wh60"
                        itemPic="img/sAndL/heroKeyIcn.png"
                        count={1}
                      />
                    </>
                  }
                  arrow={true}
                  plus2={true}
                />
              </div>
            </>,
          ]}
          tab2={[
            "shopBtn",
            "Shop",
            <>
              <div className="textBox">by resouses!</div>
              <div className="content_wrap scrollBox">
                <ItemSection
                  items={
                    <>
                      <ItemBox
                        itemPic="img/sAndL/earringsIcn.png"
                        count={"30"}
                      />
                      <ItemBox
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
                      <ItemBox itemPic="img/sAndL/ringIcn.png" count={"2/30"} />
                      <ItemBox
                        itemPic="img/sAndL/earringsIcn.png"
                        count={"5"}
                      />
                      <ItemBox
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
                      <ItemBox itemPic="img/sAndL/ringIcn.png" count={"2/30"} />
                      <ItemBox
                        itemPic="img/sAndL/earringsIcn.png"
                        count={"5"}
                      />
                      <ItemBox
                        itemPic="img/sAndL/braceletIcn.png"
                        count={"12"}
                      />
                      <ItemBox
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
                      <ItemBox itemPic="img/sAndL/ringIcn.png" count={"2/30"} />
                      <ItemBox
                        itemPic="img/sAndL/earringsIcn.png"
                        count={"5"}
                      />
                      <ItemBox
                        itemPic="img/sAndL/braceletIcn.png"
                        count={"12"}
                      />
                      <ItemBox
                        itemPic="img/sAndL/necklaceIcn.png"
                        count={"28"}
                      />
                      <ItemBox
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
              </div>
            </>,
          ]}
          contentWrapClass={`tab_content_box`}
        />
      </>
    </>
  );
}
