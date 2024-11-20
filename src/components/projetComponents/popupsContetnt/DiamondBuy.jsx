const DiamondBuy = () => {
  const items = [
    {
      points: "+ 275 VIP Points",
      image: "img/diamond2.png",
      price: ["$5", "$2.5"],
      prize: ["40", "(30 + 10 Free)"],
      discount: ["50%", "OFF"],
    },
    {
      points: "+ 575 VIP Points",
      image: "img/diamond3.png",
      price: ["$10", "$5"],
      prize: ["100", "(75 + 25 Free)"],
      discount: ["50%", "OFF"],
    },
    {
      points: "+ 1200 VIP Points",
      image: "img/diamond4.png",
      price: ["$20", "$4.99"],
      prize: ["220", "(180 + 40 Free)"],
      discount: ["70%", "OFF"],
    },
    {
      points: "+ 2500 VIP Points",
      image: "img/diamond5.png",
      price: ["$40", "$14.99"],
      prize: ["500", "(400 + 100 Free)"],
      discount: ["70%", "OFF"],
    },
    {
      points: "+ 6435 VIP Points",
      image: "img/diamond6.png",
      price: ["$99", "$29.99"],
      prize: ["1250", "(1000 + 250 Free)"],
      discount: ["70%", "OFF"],
    },
  ];

  return (
    <div className="diamond-card-box">
      {items.map((item, index) => (
        <div className="store-item-add-box" key={index}>
          <div className="store-item-point-bonus">{item.points}</div>
          <div className="store-item-diamon">
            <img src={item.image} />
          </div>
          <div className="store-prize-box">
            <div className="prize1">{item.prize[0]}</div>
            <div className="free-prize">{item.prize[1]}</div>
          </div>
          <div className="cor-hot-box">
            <div className="hot-text">{item.discount}</div>
          </div>
          <div className="store-button">
            <div className="but-price old">{item.price[0]}</div>
            <div className="but-price">{item.price[1]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiamondBuy;
