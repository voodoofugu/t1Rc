import React from "react";
import nexus from "nexus";

import ItemBox from "../UIComponents/ItemBox";
import Button from "../UIComponents/Button";
import ResCount from "../UIComponents/ResCount";
import OfferCardBox from "../UIComponents/OfferCardBox";

export default function RebornPopup() {
  return (
    <>
      <div
        className="closeBG"
        onClick={() => nexus.acts.handlePopup({ type: "close" })}
      ></div>

      <div className="content">
        <div className="popupFrame">
          <div className="frame top"></div>
          <div className="frame bottom"></div>
        </div>
        <OfferCardBox
          className="bright silver"
          title="Бесплатная реинкарнация"
          btnWrap={<Button className="btnGold big" text="Free" />}
          rewardCard={
            <>
              <div className="tit-small">Вы потеряете часть прогресса</div>
              <div className="textBox">
                <div className="tit">Вы сохраните:</div>
                <ol className="info-list">
                  <li>Все достижения и их бонусы</li>
                  <li>Прогресс Гильдии и её бонусы</li>
                  <li>Кристаллы и Короны</li>
                  <li>VIP уровень</li>
                </ol>
              </div>
              <div className="textBox">
                <div className="tit">Вы потеряете:</div>
                <ol className="info-list">
                  <li>Всех Героинь</li>
                  <li>Золото</li>
                  <li>Осколки Памяти</li>
                </ol>
              </div>
            </>
          }
        >
          <ItemBox
            className="wh68"
            itemPic="img/ms-stone-pink.png"
            count="+1000"
          />
          <ItemBox
            className="wh68"
            itemPic="img/m-ico-gems.png"
            count="+1000"
          />
        </OfferCardBox>

        <OfferCardBox
          className="bright"
          title="Премиум реинкарнация"
          btnWrap={
            <Button
              className="btnGold big"
              text="35"
              textIcn="img/80-topup.png"
              onClick={() => {}}
            />
          }
          rewardCard={
            <>
              <div className="tit-small">Вы сохраните весь ваш прогресс</div>
              <div className="textBox">
                <div className="tit">Вы сохраните:</div>
                <ol className="info-list">
                  <li>Весь прогресс</li>
                  <li>Бонусы</li>
                  <li>0 Бесплатных VIP реинкарнаций</li>
                </ol>
              </div>
              <div className="textBox">
                <div className="text-center">
                  VIP players get <b>0</b> premium reborn for free
                </div>
              </div>
            </>
          }
        >
          <ItemBox
            className="wh68"
            itemPic="img/ms-stone-pink.png"
            count="+1000"
          />
        </OfferCardBox>

        <div className="additional-objects">
          <div className="wrap">
            <div className="object"></div>
            <div className="object"></div>
            <div className="object"></div>
            <div className="object"></div>
            <div className="object"></div>
            <div className="object"></div>
          </div>
        </div>

        <div
          className="btn-close-x"
          onClick={() => nexus.acts.handlePopup({ type: "close" })}
        />
      </div>
    </>
  );
}
