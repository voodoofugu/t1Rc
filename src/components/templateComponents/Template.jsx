import { memo } from "react";
import { StyledAtom } from "styled-atom";

import PageBox from "./PageBox";

import TemplateContent from "./TemplateContent";
import Loading from "./Loading";

export default memo(function Template() {
  return (
    <>
      <StyledAtom
        fileNames={[
          "01-all",
          "01-all-res",
          "v2-screen-main",
          "v2-screen-main-dark-world",
          "keyframes-animations",
          "customScroll",
          "ui-elements",
        ]}
        fallback={<Loading noBG />}
      >
        <div className={`likeBody absolute overflow-hidden`} id="templateBody">
          <TemplateContent>
            <PageBox />
          </TemplateContent>
        </div>
      </StyledAtom>
    </>
  );
});
