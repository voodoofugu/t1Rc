import React from "react";

import Button from "../UIComponents/Button";
import ItemBox from "../UIComponents/ItemBox";
import Scroll from "../../../../morphing-scroll/src/MorphingScroll";
import ScrollThumb from "../UIComponents/ScrollThumb";

import heroBoxData from "../data/heroBoxData";

function HeroBox({
  className,
  name,
  text,
  lvl,
  dps,
  power,
  timer,
  img,
  heroType,
  abilImg,
  abilOnClick,
  onClick,
  btnText,
  btnOnClick,
}) {
  return (
    <div
      className={`hero-card${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      {!/\offerClose/.test(className) && (
        <Button
          className={`${
            /\offer|starterpack/.test(className) ? " btnGold btnBuy" : " green"
          }`}
          text={btnText}
          onClick={btnOnClick}
        />
      )}

      <ItemBox
        itemClass={`cardAva${className.includes("close") ? " close" : ""}`}
        type={heroType}
        itemPic={img}
      />

      {abilImg && (
        <ItemBox
          itemClass="heroAbilIcn"
          itemPic={abilImg}
          onClick={abilOnClick}
        />
      )}

      <div className="hero-name-box">
        <div className="hero-name">{name}</div>
        {text && <div className="hero-info">{text}</div>}
      </div>

      {/\starterpack/.test(className) ? (
        <div className="timerBox">
          <div className="timerText">осталось</div>
          <div className="timer">{timer}</div>
        </div>
      ) : /\offer/.test(className) ? (
        ""
      ) : (
        <div className="hero-level-box">
          <div className="hero-level-box">
            level
            <div className="hero-level">{lvl}</div>
          </div>
          <div className="hero-dps-box">
            dps
            <div className="hero-dps">{dps}</div>
          </div>
          <div className="hero-power-box">
            power
            <div className="hero-power">{power}</div>
          </div>
        </div>
      )}

      {/\offer|starterpack/.test(className) && (
        <Button className="exit" text="✖" />
      )}
    </div>
  );
}

export default function AllHeroesBoxScroll() {
  return (
    // <div className="all-heroes-box-scroll">
    //   <div className="hero-card-box-all">
    //     <div className="hero-card starterpack">
    //       {/* <div className="btn-close-x"></div> */}
    //       <Button className="exit" text="✖" />

    //       <Button className="btnGold btnBuy" text="Купить" />

    //       <ItemBox
    //         itemClass="cardAva heroCard"
    //         type="gun"
    //         itemPic="img/images/superhero/suphero-653/x1/avatar/653sh-ava-1.jpg"
    //       />

    //       <div className="hero-level-box">Осталось</div>
    //       <div className="hero-dps-box">
    //         <div className="st-time">15:01:37</div>
    //       </div>
    //       <div className="hero-name-box">
    //         <div className="hero-name">Tokuda Arisu</div>
    //       </div>
    //       {/* <div className="btn-buy starterpack">
    //         <div className="txt">Купить</div>
    //       </div> */}
    //     </div>

    //     <div className="hero-card offer disabled">
    //       <Button className="exit" text="✖" />

    //       <div className="hero-avatar-box">
    //         <img
    //           className="hero-avatar"
    //           src="img/images/hero-all/tithero-328/x2/ava/tithero-328-1-ava.jpg"
    //           loading="lazy"
    //         />
    //         <div className="sh2-icon-forgirl">
    //           <img src="img/cur2-gun.png" loading="lazy" />
    //         </div>
    //       </div>
    //       <div className="hero-name-box">
    //         <div className="hero-name">Tokuda Arisu</div>
    //         <div className="hero-info">получите карту на уровне 100500</div>
    //       </div>
    //     </div>

    //     <div className="hero-card offer disabled">
    //       <Button className="exit" text="✖" />

    //       <Button className="btnGold btnBuy" text="Купить" />

    //       <div className="hero-avatar-box">
    //         <img
    //           className="hero-avatar"
    //           src="img/images/hero-all/tithero-328/x2/ava/tithero-328-1-ava.jpg"
    //           loading="lazy"
    //         />
    //         <div className="sh2-icon-forgirl">
    //           <img src="img/cur2-gun.png" loading="lazy" />
    //         </div>
    //       </div>
    //       <div className="hero-name-box">
    //         <div className="hero-name">Tokuda Arisu</div>
    //       </div>
    //     </div>

    //     <div className="hero-card highlight">
    //       <div className="hero-avatar-box">
    //         <img
    //           className="hero-avatar"
    //           src="img/images/hero-all/tithero-11/x2/ava/tithero-11-1-ava.jpg"
    //           loading="lazy"
    //         />
    //         <div className="sh2-icon-forgirl">
    //           <img src="img/cur2-barbarian.png" loading="lazy" />
    //         </div>
    //       </div>
    //       <div className="hero-level-box">
    //         level
    //         <div className="hero-level">6969</div>
    //       </div>
    //       <div className="hero-dps-box">
    //         dps
    //         <div className="hero-dps">6969K</div>
    //       </div>
    //       <div className="hero-power-box">
    //         power
    //         <div className="hero-power">223</div>
    //       </div>
    //       <div className="hero-name-box">
    //         <div className="hero-name">Murayama Naora</div>
    //       </div>
    //       <div className="color-btn green">
    //         <div className="color-btn-text">
    //           <div className="gold">
    //             <span className="f-gold">6969K</span>
    //           </div>
    //           <div className="color-btn-text">up</div>
    //         </div>
    //       </div>
    //       <div className="hero-pieces-icon"></div>
    //     </div>
    //     <div className="hero-card">
    //       <div className="hero-avatar-box">
    //         <img
    //           className="hero-avatar"
    //           src="img/images/hero-all/tithero-11/x2/ava/tithero-11-1-ava.jpg"
    //           loading="lazy"
    //         />
    //         <div className="sh2-icon-forgirl">
    //           <img src="img/cur2-barbarian.png" loading="lazy" />
    //         </div>
    //       </div>
    //       <div className="hero-level-box">
    //         level
    //         <div className="hero-level">6969</div>
    //       </div>
    //       <div className="hero-dps-box">
    //         dps
    //         <div className="hero-dps">6969K</div>
    //       </div>
    //       <div className="hero-power-box">
    //         power
    //         <div className="hero-power">223</div>
    //       </div>
    //       <div className="hero-name-box">
    //         <div className="hero-name">Murayama Naora</div>
    //       </div>
    //       <div className="color-btn green">
    //         <div className="color-btn-text">
    //           <div className="gold">
    //             <span className="f-gold">6969K</span>
    //           </div>
    //           <div className="color-btn-text">buy</div>
    //         </div>
    //       </div>
    //       <div className="hero-abil-icon">
    //         <img src="img/icons/ic-abil-78.jpg" loading="lazy" />
    //       </div>
    //     </div>
    //     <div className="hero-card">
    //       <div className="hero-avatar-box">
    //         <img
    //           className="hero-avatar"
    //           src="img/images/hero-all/tithero-11/x2/ava/tithero-11-1-ava.jpg"
    //           loading="lazy"
    //         />
    //         <div className="sh2-icon-forgirl">
    //           <img src="img/cur2-barbarian.png" loading="lazy" />
    //         </div>
    //       </div>
    //       <div className="hero-level-box">
    //         level
    //         <div className="hero-level">6969</div>
    //       </div>
    //       <div className="hero-dps-box">
    //         dps
    //         <div className="hero-dps">6969K</div>
    //       </div>
    //       <div className="hero-power-box">
    //         power
    //         <div className="hero-power">223</div>
    //       </div>
    //       <div className="hero-name-box">
    //         <div className="hero-name">Murayama Naora</div>
    //       </div>
    //       <div className="color-btn green">
    //         <div className="color-btn-text">
    //           <div className="gold">
    //             <span className="f-gold">6969K</span>
    //           </div>
    //           <div className="color-btn-text">up</div>
    //         </div>
    //       </div>
    //       <div className="hero-abil-icon">
    //         <img src="img/icons/ic-abil-78.jpg" loading="lazy" />
    //       </div>
    //     </div>
    //     <div className="hero-card">
    //       <div className="hero-avatar-box">
    //         <img
    //           className="hero-avatar"
    //           src="img/images/hero-all/tithero-11/x2/ava/tithero-11-1-ava.jpg"
    //           loading="lazy"
    //         />
    //         <div className="sh2-icon-forgirl">
    //           <img src="img/cur2-barbarian.png" loading="lazy" />
    //         </div>
    //       </div>
    //       <div className="hero-level-box">
    //         level
    //         <div className="hero-level">6969</div>
    //       </div>
    //       <div className="hero-dps-box">
    //         dps
    //         <div className="hero-dps">6969K</div>
    //       </div>
    //       <div className="hero-power-box">
    //         power
    //         <div className="hero-power">223</div>
    //       </div>
    //       <div className="hero-name-box">
    //         <div className="hero-name">Murayama Naora</div>
    //       </div>
    //       <div className="color-btn green">
    //         <div className="color-btn-text">
    //           <div className="gold">
    //             <span className="f-gold">6969K</span>
    //           </div>
    //           <div className="color-btn-text">up</div>
    //         </div>
    //       </div>
    //       <div className="hero-abil-icon">
    //         <img src="img/icons/ic-abil-78.jpg" loading="lazy" />
    //       </div>
    //     </div>
    //     <div className="hero-card">
    //       <div className="hero-avatar-box">
    //         <img
    //           className="hero-avatar"
    //           src="img/images/hero-all/tithero-11/x2/ava/tithero-11-1-ava.jpg"
    //           loading="lazy"
    //         />
    //         <div className="sh2-icon-forgirl">
    //           <img src="img/cur2-barbarian.png" loading="lazy" />
    //         </div>
    //       </div>
    //       <div className="hero-level-box">
    //         level
    //         <div className="hero-level">6969</div>
    //       </div>
    //       <div className="hero-dps-box">
    //         dps
    //         <div className="hero-dps">6969K</div>
    //       </div>
    //       <div className="hero-power-box">
    //         power
    //         <div className="hero-power">223</div>
    //       </div>
    //       <div className="hero-name-box">
    //         <div className="hero-name">Murayama Naora</div>
    //       </div>
    //       <div className="color-btn green">
    //         <div className="color-btn-text">
    //           <div className="gold">
    //             <span className="f-gold">6969K</span>
    //           </div>
    //           <div className="color-btn-text">up</div>
    //         </div>
    //       </div>
    //       <div className="hero-abil-icon">
    //         <img src="img/icons/ic-abil-78.jpg" loading="lazy" />
    //       </div>
    //     </div>
    //     <div className="hero-card">
    //       <div className="hero-avatar-box">
    //         <img
    //           className="hero-avatar"
    //           src="img/images/hero-all/tithero-11/x2/ava/tithero-11-1-ava.jpg"
    //           loading="lazy"
    //         />
    //         <div className="sh2-icon-forgirl">
    //           <img src="img/cur2-barbarian.png" loading="lazy" />
    //         </div>
    //       </div>
    //       <div className="hero-level-box">
    //         level
    //         <div className="hero-level">6969</div>
    //       </div>
    //       <div className="hero-dps-box">
    //         dps
    //         <div className="hero-dps">6969K</div>
    //       </div>
    //       <div className="hero-power-box">
    //         power
    //         <div className="hero-power">223</div>
    //       </div>
    //       <div className="hero-name-box">
    //         <div className="hero-name">Murayama Naora</div>
    //       </div>
    //       <div className="color-btn green">
    //         <div className="color-btn-text">
    //           <div className="gold">
    //             <span className="f-gold">6969K</span>
    //           </div>
    //           <div className="color-btn-text">up</div>
    //         </div>
    //       </div>
    //       <div className="hero-abil-icon">
    //         <img src="img/icons/ic-abil-78.jpg" loading="lazy" />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <Scroll
      className="heroBoxsScroll"
      scrollXY={[492, 336]}
      objectXY={[230, 124]}
      gap={10}
      padding={[5, 0]}
      progressTrigger={["wheel", "progressElement"]}
      thumbElement={<ScrollThumb />}
      edgeGradient={{ color: "#866f68" }}
      progressBarSize={6}
      infiniteScroll
      progressVisibility="hover"
    >
      {heroBoxData.map((item, index) => (
        <HeroBox key={index} {...item} />
      ))}
    </Scroll>
  );
}
