import React, { memo, useMemo, useCallback, startTransition } from "react";

export default memo(function ToTopButton({
  usedPages,
  scrollTopValue,
  setScrollTopValue,
  isScrolling,
  setIsScrolling,
}) {
  const scrollTrigger = useMemo(() => scrollTopValue > 400, [scrollTopValue]);

  const scrollToTop = useCallback(() => {
    if (isScrolling) {
      return;
    }

    const animationDuration = 2000;
    const listHeight = (usedPages.length / 3) * 214;
    const scrollSpeed = listHeight / animationDuration;
    const currentTopDuration = scrollTopValue / scrollSpeed;

    const startTime = performance.now();
    const endTime = startTime + scrollTopValue / scrollSpeed;

    function animateScroll(currentTime) {
      setIsScrolling(true);

      const elapsedTime = currentTime - startTime;
      const scrollProgress = elapsedTime / currentTopDuration;

      if (currentTime <= endTime) {
        let newScrollTop = scrollTopValue - scrollProgress * scrollTopValue;

        startTransition(() => {
          setScrollTopValue(newScrollTop);
        });
        requestAnimationFrame(animateScroll);
      } else {
        setScrollTopValue(1);
        setIsScrolling(false);
      }
    }

    requestAnimationFrame(animateScroll);
  }, [isScrolling, scrollTopValue, usedPages]);

  return (
    <>
      {scrollTopValue > 300 && (
        <div
          className={`absolute right-30 bottom-30 w-40 h-40 cursor-pointer bg-indigo-200 dark:bg-indigo-900 rounded-3xl shadow-toTopBtn dark:shadow-darkThemeClearBtn active:scale-90 brightness-105 hover:brightness-110 transition-all1 ${
            scrollTrigger
              ? "opacity-100 scale-100 pointer-events-all"
              : "opacity-0 scale-90 pointer-events-none"
          }`}
          onClick={scrollToTop}
        >
          <div className="absolute left-50% top-50% -translate-x-50% -translate-y-50% w-26 h-26 drop-shadow-dS1 before:absolute before:top-10 before:left-0 before:w-16 before:h-3 before:bg-indigo-400 before:-rotate-45 before:rounded-l-2 after:absolute after:top-10 after:right-0 after:w-16 after:h-3 after:bg-indigo-400 after:rotate-45 after:rounded-r-2"></div>
        </div>
      )}
    </>
  );
});
