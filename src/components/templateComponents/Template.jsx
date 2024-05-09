import { memo } from "react";

import PageBox from "./PageBox";

import HelmetTailwind from "./HelmetTailwind";
import TemplateContent from "./TemplateContent";
import TitlePage from "./Title";

export default memo(function Template() {
  return (
    <>
      <TitlePage />
      <HelmetTailwind />
      <TemplateContent>
        <PageBox />
      </TemplateContent>
    </>
  );
});
