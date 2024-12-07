import React from "react";

import Button from "../UIComponents/Button";

const btnQuantity = [1, 10, 25, 100, 200, 500, 1000];

export default function X2BtnAllBox({ quantity, setQuantity }) {
  return (
    <div className="x2-btn-all-box">
      {btnQuantity.map((item, index) => (
        <Button
          key={index}
          className={`${quantity === item ? "check green" : "gray"}`}
          text={`x${item}`}
          onClick={() => setQuantity(item)}
        />
      ))}
    </div>
  );
}
