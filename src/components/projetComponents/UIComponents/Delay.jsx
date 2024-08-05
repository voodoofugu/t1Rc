import React from "react";

const Delay = ({ delay = 0, children, onTimeout }) => {
  const [show, setShow] = React.useState(false);

  const onTimeoutHandler = () => {
    setShow(true);
  };

  React.useEffect(() => {
    onTimeout && show && onTimeout();
  }, [show]);

  React.useEffect(() => {
    const timer = setTimeout(onTimeoutHandler, 0);
    return () => clearTimeout(timer);
  }, []);

  return show ? children : null;
};

export default Delay;
