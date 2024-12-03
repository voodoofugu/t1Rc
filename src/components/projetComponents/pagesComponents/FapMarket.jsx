import { nexusEffect } from "nexus-state";

import ResCount from "../UIComponents/ResCount";
import StoreItemBox from "../UIComponents/StoreItemBox";
import ItemBox from "../UIComponents/ItemBox";
import WpckTimer from "../UIComponents/WpckTimer";

import useDeserializedComponent from "../../hooks/useDeserializedComponent";

export const cssFiles = [
  "fap_market",
  "screen-superhero",
  "screen-unipop-subscription",
  "screen-info-pop",
  "store-items",
];

export default function FapMarket({ pageName, children }) {
  // const ReactElement = useDeserializedComponent("TestCompon", "./");

  return (
    <div className="main world1">
      <div className="main-bg fapMarket"></div>
      <div className="fapMarket_content">
        <div className="fapMarket_title">Tavern of the Worlds</div>
        <div className="color-btn exit">
          <div className="color-btn-text"></div>
        </div>

        <div className="fapMarket_menu">
          <div className="fapMarket_btn earthWorld active">
            <div className="icn"></div>
            <div className="text">Earth World Shop</div>
          </div>
          <div className="fapMarket_btn underWorld">
            <div className="icn"></div>
            <div className="text">Under World Shop</div>
          </div>
          <div className="fapMarket_btn darkWorld">
            <div className="icn"></div>
            <div className="text">Dark World Shop</div>
          </div>
        </div>

        <div className="store-item-box-all">
          <WpckTimer
            timer="23:54:55"
            updateBtn
            onClick={() =>
              nexusEffect({
                type: "handlePopup",
                payload: {
                  type: "open",
                  data: {
                    mpopClass: "m-popup info-pop",
                    popTit: "Info",
                    popCont: "InfoPop",
                    props: {
                      text: "Here you can raise your character's stats, upgrade your abilities, and get an interesting look from events.",
                      btnText1: "cancel",
                      btnText2: "buy 1/3",
                      btnClass1: "blue",
                      btnClass2: "green",
                      btn2curency: ["img/ic-diamond.png", 150],
                    },
                    count: {
                      icon: "img/ic-diamond.png",
                      value: 200,
                      add: true,
                    },
                  },
                },
              })
            }
          />

          <div className="counterBox">
            <ResCount
              img="img/ic-diamond.png"
              value="234"
              plus
              onClick={() => {
                nexusEffect({
                  type: "handlePopup",
                  payload: {
                    type: "open",
                    data: {
                      mpopClass: "m-popup essence-buy",
                      popTit: "Buy Dices",
                      popCont: [
                        "BuyShop",
                        {
                          img1: "diamond1",
                          img2: "diamond2",
                          img3: "diamond4",
                          img4: "diamond6",
                        },
                      ],
                    },
                  },
                });
              }}
            />
            <ResCount
              img="img/evPopArts/potion_black.png"
              value="234"
              plus
              onClick={() => {
                nexusEffect({
                  type: "handlePopup",
                  payload: {
                    type: "open",
                    data: {
                      mpopClass: "m-popup essence-buy",
                      popTit: "Buy Dices",
                      popCont: [
                        "BuyShop",
                        {
                          img1: "evPopArts/potion_black_1",
                          img2: "evPopArts/potion_black_2",
                          img3: "evPopArts/potion_black_3",
                          img4: "evPopArts/potion_black_4",
                        },
                      ],
                    },
                  },
                });
              }}
            />
            <ResCount
              img="img/v2-f-e1.png"
              value="234"
              plus
              onClick={() => {
                nexusEffect({
                  type: "handlePopup",
                  payload: {
                    type: "open",
                    data: {
                      mpopClass: "m-popup essence-buy",
                      popTit: "Buy Dices",
                      popCont: [
                        "BuyShop",
                        {
                          img1: "v2-f-e1",
                          img2: "v2-f-e2",
                          img3: "v2-f-e3",
                          img4: "v2-f-e4",
                        },
                      ],
                    },
                  },
                });
              }}
            />
          </div>

          <div className="btnI" />

          <div className="store-item-box-scroll">
            <div className="store-item-all">
              <StoreItemBox
                storeItemName="Item Name"
                currencyIcon="img/ic-diamond.png"
                buyValue="750"
              >
                <ItemBox
                  itemPic="img/images/superhero/suphero-762/x2/avatar/762sh-ava-1.jpg"
                  count={700}
                  rare="u"
                />
              </StoreItemBox>
              <StoreItemBox
                storeItemName="Item Name"
                currencyIcon="img/ic-diamond.png"
                buyValue="750"
              >
                <ItemBox
                  itemPic="img/images/superhero/suphero-948/x2/avatar/sh-ava-1.jpg"
                  count={700}
                  rare="e"
                  notif
                />
              </StoreItemBox>
              <StoreItemBox
                storeItemName="Item Name"
                currencyIcon="img/evPopArts/potion_black.png"
                buyValue="750"
              >
                <ItemBox
                  itemPic="img/images/hero-all/tithero-00/x2/ava/tithero-ava-1.jpg"
                  itemClass="piecesHero"
                  count={100}
                  sale="-50%"
                />
              </StoreItemBox>
              <StoreItemBox
                storeItemName="Item Name"
                currencyIcon="img/v2-f-e1.png"
                buyValue="750"
                check
              >
                <ItemBox
                  itemPic="img/evPopArts/potion_green.png"
                  itemClass="check"
                  count={1000}
                />
              </StoreItemBox>
              <div className="store-item-all-name">Wooden Chest</div>
            </div>
            <div className="store-item-all">
              {/* {ReactElement} */}
              <div className="store-item-all-name">Wooden Chest</div>
            </div>
            <div className="store-item-all">
              <div className="store-item-all-name">Wooden Chest</div>
            </div>
          </div>
        </div>
        <div className="textBubble">
          <div className="bubbleInner">
            <div className="bubbleText">Make me happy and buy some more!</div>
          </div>
        </div>
        <div className="fapMarket_girl"></div>
      </div>
      {children}
    </div>
  );
}
