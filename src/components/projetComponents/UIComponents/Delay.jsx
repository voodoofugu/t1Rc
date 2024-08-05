import React from "react";

const Delay = ({ delay = 0, children, onTimeout, style }) => {
  const [delayState, setDelayState] = React.useState(false);

  const validChildren = React.useMemo(() => {
    return React.Children.toArray(children).filter(
      (child) => child !== null && child !== undefined
    );
  }, [children]);

  const styledChildren = validChildren.map((child) => {
    return delayState ? child : React.cloneElement(child, { style: style });
  });

  const onTimeoutHandler = () => {
    setDelayState(true);
  };

  React.useEffect(() => {
    onTimeout && delayState && onTimeout();
  }, [delayState]);

  React.useEffect(() => {
    const timer = setTimeout(onTimeoutHandler, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return styledChildren;
};

export default Delay;
