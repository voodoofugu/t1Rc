import React from "react";
import AaComponMap from "../components/AaComponMap";

const File1Component = () => {
  return (
    <>
      <header>werwerwerwer</header>
      <div className="headerBox"></div>
      <img src="../img/favicon.png" alt="Your Image" />
      <main>
        <AaComponMap.SomeObject
          className="myClass"
          text={AaComponMap.GetTextById("mainTitle")}
        />
      </main>
      <footer></footer>
    </>
  );
};

export default React.memo(File1Component);
