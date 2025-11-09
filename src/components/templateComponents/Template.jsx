import { memo } from "react";
import { StyledAtom } from "styled-atom";
import { nexusUpdate } from "nexus-state";

import PageBox from "./PageBox";

import TemplateContent from "./TemplateContent";
import Loading from "./Loading";

import ResizeTracker from "../../../morphing-scroll/src/components/ResizeTracker";

export default memo(function Template() {
  const onResize = (rect) => {
    const { width, height } = rect;

    const windowWidth = 1200;
    const windowHeight = 640;
    let widthScale = 0,
      heightScale = 0;

    if (width < windowWidth) {
      widthScale = Number((width / windowWidth).toFixed(4));
    }

    if (height < windowHeight) {
      heightScale = Number((height / windowHeight).toFixed(4));
    }

    // Получаем массив только положительных чисел
    const scales = [widthScale, heightScale].filter((n) => n > 0);

    nexusUpdate({
      windowScale: scales.length > 0 ? Math.min(...scales) : 0,
    });
  };

  return (
    <>
      <StyledAtom
        fileNames={[
          "01-all",
          "01-all-res",
          "v2-screen-main",
          "v2-screen-main-dark-world",
          "keyframes-animations",
          // "customScroll", // дефолтные стили для morphing-scroll
          "ui-elements",
          "screen-achiev",
        ]}
        fallback={<Loading noBG />}
      >
        <div className={`likeBody absolute overflow-hidden`} id="templateBody">
          <ResizeTracker
            measure="outer"
            onResize={onResize}
            style={{ position: "absolute" }}
          />
          <TemplateContent>
            <PageBox />
          </TemplateContent>
        </div>
      </StyledAtom>
    </>
  );
});
