import { nexusTrigger } from "nexus-state";

import Button from "../UIComponents/Button";

export default function BuyShop({ img1, img2, img3, img4, diamond }) {
  return (
    <>
      <div
        className="closeBG"
        onClick={() =>
          nexusTrigger({
            type: "handlePopup",
            payload: { type: "close" },
          })
        }
      ></div>

      <div className="content">
        <div className="popupFrame">
          <div className="frame top"></div>
          <div className="frame bottom"></div>
        </div>

        <Button
          className="exit"
          text="✖"
          onClick={() =>
            nexusTrigger({
              type: "handlePopup",
              payload: { type: "close" },
            })
          }
        />

        <div className="essence-card-box">
          <div
            className="essence-but-box"
            style={{
              width: "150px",
              height: "150px",
              marginLeft: "40px",
              backgroundImage: `url(../img/${img1}.png)`,
            }}
          ></div>
          <div className="essence-price">305</div>
          {diamond ? (
            <div className="essebtn-box">
              <div className="essebtn">
                <div className="coron-icon diamond"></div>
                <span className="coron-price">15</span>
              </div>
            </div>
          ) : (
            <div
              className="essebtn-box"
              style={{
                boxShadow: "none",
                background: "none",
              }}
            >
              <div className="store-button" style={{ top: "7px" }}>
                <span className="coron-price" style={{ top: "4px" }}>
                  $2
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="essence-card-box">
          <div
            className="essence-but-box"
            style={{
              width: "150px",
              height: "150px",
              marginLeft: "40px",
              backgroundImage: `url(../img/${img2}.png)`,
            }}
          ></div>
          <div className="essence-price">1550</div>
          {diamond ? (
            <div className="essebtn-box">
              <div className="essebtn">
                <div className="coron-icon diamond"></div>
                <span className="coron-price">15</span>
              </div>
            </div>
          ) : (
            <div
              className="essebtn-box"
              style={{
                boxShadow: "none",
                background: "none",
              }}
            >
              <div className="store-button" style={{ top: "7px" }}>
                <span className="coron-price" style={{ top: "4px" }}>
                  $9.99
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="essence-card-box">
          <div
            className="essence-but-box"
            style={{
              width: "150px",
              height: "150px",
              marginLeft: "40px",
              backgroundImage: `url(../img/${img3}.png)`,
            }}
          ></div>
          <div className="essence-price">6500</div>

          {diamond ? (
            <div className="essebtn-box">
              <div className="essebtn">
                <div className="coron-icon diamond"></div>
                <span className="coron-price">15</span>
              </div>
            </div>
          ) : (
            <div
              className="essebtn-box"
              style={{
                boxShadow: "none",
                background: "none",
              }}
            >
              <div className="store-button" style={{ top: "7px" }}>
                <span className="coron-price" style={{ top: "4px" }}>
                  $24.99
                </span>
              </div>
            </div>
          )}
        </div>

        {img4 && (
          <div className="essence-card-box">
            <div
              className="essence-but-box"
              style={{
                width: "150px",
                height: "150px",
                marginLeft: "40px",
                backgroundImage: `url(../img/${img4}.png)`,
              }}
            ></div>
            <div className="essence-price">15000</div>
            {diamond ? (
              <div className="essebtn-box">
                <div className="essebtn">
                  <div className="coron-icon diamond"></div>
                  <span className="coron-price">15</span>
                </div>
              </div>
            ) : (
              <div
                className="essebtn-box"
                style={{
                  boxShadow: "none",
                  background: "none",
                }}
              >
                <div className="store-button" style={{ top: "7px" }}>
                  <span className="coron-price" style={{ top: "4px" }}>
                    $49.99
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
