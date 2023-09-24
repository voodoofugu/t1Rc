import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { css } from "@emotion/react";

const RegCont = css`
  .error404 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;

const Page404Component = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <style>{RegCont.styles}</style>
      </Helmet>
      <h1 className="error404">
        -____-
        <br />
        NOT FOUND
        <br />
        404
      </h1>
    </HelmetProvider>
  );
};

export default React.memo(Page404Component);
