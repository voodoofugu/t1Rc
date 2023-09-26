import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const HelmetStyleTagWhitWrap = ({ stylePairs, children }) => {
    return (
        <HelmetProvider>
            <Helmet>
                {stylePairs.map(({ stylesFileName, pageStyles }) => (
                    <style
                        key={
                            stylesFileName
                        }>{`.${stylesFileName} { ${pageStyles.styles} }`}</style>
                ))}
            </Helmet>
            <div
                style={{ height: 100 + "%" }}
                className={stylePairs
                    .map(({ stylesFileName }) => stylesFileName)
                    .join(" ")}>
                {children}
            </div>
        </HelmetProvider>
    );
};

export default HelmetStyleTagWhitWrap;
