import React from "react";

export const yo = "YO!";
export default function RebornPopup() {
  return (
    <div className="content">
      <div className="text-0">
        Вы можете реинкарнировать - начать игру заново, превращая полученные
        уровни ваших героев в Кристаллы!
      </div>
      <div className="text-1">
        Вы сохраните:
        <ol>
          <li>Все достижения и бонусы достижений, который вы получили.</li>
          <li>Весь прогресс Гильдии и её бонусы.</li>
          <li>Кристаллы и Короны.</li>
          <li>VIP уровень</li>
          <li>Открытые картинки.</li>
          <li>Повышения ваших героев</li>
        </ol>
      </div>
      <div className="text-2">
        Вы получите:
        <div className="price luck_res">+80</div>
        <div className="price gems">+4.32K</div>
      </div>
      <div className="text-3">
        Вы потеряете:
        <ol>
          <li>Всех героев - их уровни и способности</li>
          <li>Золото и Осколки Памяти</li>
        </ol>
      </div>
      <div className="text-4">
        Вы можете реинкарнировать за плату, без потери прогресса - просто
        получите бонус!
      </div>
      <div className="btn-box-1">
        <div className="btn-simple-gold btn-ok">
          Реинкарнировать без потери прогресса за
          <span className="price diamonds">35</span>
        </div>
        <div className="text-5">Реинкарнировать БЕСПЛАТНО, теряя прогресс:</div>
        <div className="btn-box-2">
          <div className="btn-simple-gold btn-ok-free">Да</div>
        </div>
        <div className="btn-box-3">
          <div className="btn-simple-silver btn-cancel">Нет</div>
        </div>
      </div>
    </div>
  );
}
