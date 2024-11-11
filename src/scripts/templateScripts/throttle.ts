type AnyFunction = (...args: any[]) => any;

const throttle = (func: AnyFunction, limit: number) => {
  let lastFunc: ReturnType<typeof setTimeout> | null;
  let lastRan: number | null = null;

  return function (...args: any[]) {
    if (!lastRan) {
      func(...args); // вызываем функцию без применения `this`
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc as ReturnType<typeof setTimeout>);
      lastFunc = setTimeout(() => {
        // используем стрелочную функцию, чтобы не потерять контекст
        if (Date.now() - (lastRan as number) >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - (lastRan as number)));
    }
  };
};
