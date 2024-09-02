import React from "react";

const Delay = ({
  delay = 0,
  children,
  onTimeout,
  styleBeforeTimeout,
  renderOnTimeout = false,
}) => {
  const [delayState, setDelayState] = React.useState(false);

  const validChildren = React.useMemo(() => {
    return React.Children.toArray(children).filter(
      (child) => child !== null && child !== undefined
    );
  }, [children]);

  const localChildren = validChildren.map((child) =>
    styleBeforeTimeout
      ? delayState
        ? child
        : React.cloneElement(child, { style: styleBeforeTimeout })
      : child
  );

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDelayState(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  React.useEffect(() => {
    onTimeout && delayState && onTimeout();
  }, [delayState]);

  return renderOnTimeout ? (delayState ? localChildren : null) : localChildren;
};

export default Delay;
