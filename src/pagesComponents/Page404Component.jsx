import React from "react";
import HelmetStyleWrap from "../components/HelmetStyleWrap.jsx";
// import { generateStylePairs } from "../scripts/forBild/stylePairsHelper.js";
// const stylePairs = generateStylePairs(["Page404"]);
import pageStyles from "../styleComponents/Page404";

const Page404Component = ({ idForStyle }) => {
  return (
    // <HelmetStyleWrap idForStyle={idForStyle}>
    <h1 className="error404">
      -____-
      <br />
      NOT FOUND
      <br />
      404
    </h1>
    // </HelmetStyleWrap>
  );
};

export default React.memo(Page404Component);
