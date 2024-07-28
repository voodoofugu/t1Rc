import React from "react";

type WrapperConditionalProps = {
  conditional: boolean;
  Wrapper: React.ComponentType<{ children: React.ReactNode }>;
  children: React.ReactNode;
};

const WrapperConditional: React.FC<WrapperConditionalProps> = React.memo(
  ({ conditional, Wrapper, children }) => {
    return conditional ? <>{children}</> : <Wrapper>{children}</Wrapper>;
  }
);

export default WrapperConditional;
