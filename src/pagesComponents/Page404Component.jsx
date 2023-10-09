import React from "react";
import HelmetStyleTagWhitWrap from "../components/HelmetStyleTagWhitWrap.jsx";
// import { generateStylePairs } from "../scripts/forBild/stylePairsHelper.js";
// const stylePairs = generateStylePairs(["Page404"]);
import pageStyles from "../styleComponents/Page404";

const Page404Component = ({ idForStyle }) => {
  return (
    <HelmetStyleTagWhitWrap idForStyle={idForStyle} pageStyles={pageStyles}>
      <h1 className="error404">
        -____-
        <br />
        NOT FOUND
        <br />
        404
      </h1>
    </HelmetStyleTagWhitWrap>
  );
};

export default React.memo(Page404Component);
