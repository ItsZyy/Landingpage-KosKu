export default function ZigzagEdge({ fill = "#ffffff" }: { fill?: string }) {
  const teeth = 40;
  const step = 24;
  const width = teeth * step;
  let d = `M0 16`;
  for (let i = 0; i < teeth; i++) {
    d += ` L${i * step + step / 2} 0 L${(i + 1) * step} 16`;
  }
  d += ` V16 H0 Z`;

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0"
      style={{ height: 12, width: "100%", display: "block" }}
      viewBox={`0 0 ${width} 16`}
      preserveAspectRatio="none"
    >
      <path d={d} fill={fill} />
    </svg>
  );
}
