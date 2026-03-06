function SvgFilters({ children }: { children?: React.ReactNode }) {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }}>
      <defs>{children}</defs>
    </svg>
  );
}

export default SvgFilters;
