export default function TestComponent() {
  return (
    <div className="store-item-box">
      <div className="store-name">Item Name</div>
      <div className="itemBox piecesHero">
        <div className="sale-banner">-50%</div>
        <div className="itemBox_pic">
          <img src="img/unknown-hero-ava.jpg" />
        </div>
        <div className="itemBox_count_wrap">
          <div className="itemBox_count">100</div>
        </div>
      </div>
      <div className="color-btn blue">
        <div className="color-btn-text">
          buy
          <img src="img/evPopArts/potion_black.png" loading="lazy" />
          750
        </div>
      </div>
    </div>
  );
}
