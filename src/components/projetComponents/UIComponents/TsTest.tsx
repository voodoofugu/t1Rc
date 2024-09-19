import MorphingScroll from "morphing-scroll";

export default function TsTest() {
  return (
    <>
      <div>test</div>
      <MorphingScroll
        className="test"
        scrollXY={[0, 0]}
        objectXY={[0, 0]}
        gap={[0, 0]}
        padding={[0, 0]}
        xDirection={false}
        contentAlignCenter={false}
        wrapAlignCenter={false}
        scrollReverse={false}
        scrollTrigger="←→"
        scrollVisibility="<O>"
        lazyRender={false}
        rootMargin={[0, 0]}
        suspending={false}
        fallback={null}
        scrollTop={1}
        infiniteScroll={false}
        edgeGradient={false}
        objectsWrapperMinSize={0}
      >
        <div>Content</div>
      </MorphingScroll>
    </>
  );
}
