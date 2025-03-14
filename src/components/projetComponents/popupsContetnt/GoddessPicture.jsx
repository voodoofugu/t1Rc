import { nexusTrigger } from "nexus-state";
import Button from "../UIComponents/Button";

export default function GoddessPicture() {
  return (
    <>
      <img
        className="img-goddess-picture"
        src="img/images/goddess/goddess-4/x2/goddess-1.jpg"
        loading="lazy"
      />

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
    </>
  );
}
