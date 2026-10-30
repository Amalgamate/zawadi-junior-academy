import { useEffect, useRef, useState } from "react";

/** Individual floating shape definition */
interface Shape {
  id: number;
  type: "star4" | "star6" | "sparkle" | "circle" | "triangle" | "donut" | "cross";
  color: string;
  size: number;
  // offset from top-left corner of nearest parent image (px)
  ox: number; // can be negative = outside left/top
  oy: number;
  depth: number; // parallax strength 0.02 – 0.09
  rotate: number; // initial rotation deg
  opacity: number;
}

/** Colors intentionally outside the navy/gold/sky theme */
const ACCENT_COLORS = [
  "#ff6b9d", // hot pink
  "#c084fc", // lilac
  "#fb923c", // coral-orange
  "#34d399", // mint-green
  "#f472b6", // rose
  "#a78bfa", // violet
  "#4ade80", // lime-green
  "#38bdf8", // light-blue (slightly off-theme)
  "#fbbf24", // amber (warm, not the school gold)
  "#e879f9", // fuchsia
];

function pickColor(i: number) {
  return ACCENT_COLORS[i % ACCENT_COLORS.length];
}

/** Generate a stable set of shapes for a given image wrapper */
function generateShapes(seed: number): Shape[] {
  // Pseudo-random helper seeded by index
  const rand = (n: number) => {
    const s = Math.sin(seed * 9301 + n * 49297) * 0.5 + 0.5;
    return s;
  };

  const types: Shape["type"][] = ["star4", "star6", "sparkle", "circle", "triangle", "donut", "cross"];
  const count = 5 + Math.round(rand(99) * 3); // 5–8 shapes

  return Array.from({ length: count }, (_, i) => ({
    id: i,
    type: types[Math.round(rand(i * 3) * (types.length - 1))],
    color: pickColor(seed + i),
    size: 10 + rand(i * 7) * 22,     // 10–32 px
    ox: (rand(i * 11) - 0.5) * 120,  // -60 to +60 px from top-left
    oy: (rand(i * 13) - 0.5) * 120,
    depth: 0.025 + rand(i * 17) * 0.065,
    rotate: rand(i * 19) * 360,
    opacity: 0.55 + rand(i * 23) * 0.4,
  }));
}

/* ── SVG path renderers ── */
function ShapeSvg({ shape, dx, dy }: { shape: Shape; dx: number; dy: number }) {
  const { type, color, size, ox, oy, depth, rotate, opacity } = shape;
  const x = ox + dx * depth;
  const y = oy + dy * depth;
  const r = size / 2;
  const svgProps = {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    fill: "none",
    style: {
      position: "absolute" as const,
      left: x,
      top: y,
      transform: `rotate(${rotate + dx * depth * 0.3}deg)`,
      opacity,
      pointerEvents: "none" as const,
      willChange: "transform",
      transition: "transform 0.12s linear",
      filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.18))",
    },
  };

  if (type === "star4") {
    // 4-pointed star
    const a = r * 0.9, b = r * 0.3;
    const pts = `${r},${r - a} ${r + b},${r} ${r},${r + a} ${r - b},${r}`;
    return <svg {...svgProps}><polygon points={pts} fill={color} /></svg>;
  }
  if (type === "star6") {
    // 6-pointed star (two triangles)
    const a = r * 0.88;
    const tri = (rot: number) => {
      const angle = (deg: number) => ({
        x: r + a * Math.cos((deg + rot) * Math.PI / 180),
        y: r + a * Math.sin((deg + rot) * Math.PI / 180),
      });
      const p = [angle(-90), angle(30), angle(150)];
      return p.map(pt => `${pt.x},${pt.y}`).join(" ");
    };
    return (
      <svg {...svgProps}>
        <polygon points={tri(0)} fill={color} fillOpacity={0.9} />
        <polygon points={tri(180)} fill={color} fillOpacity={0.7} />
      </svg>
    );
  }
  if (type === "sparkle") {
    // 4-arm sparkle with thin & thick arms
    const arms = [0, 90, 180, 270];
    const paths = arms.map(a => {
      const rad = a * Math.PI / 180;
      const ex = r + r * 0.9 * Math.cos(rad);
      const ey = r + r * 0.9 * Math.sin(rad);
      const bx = r + r * 0.28 * Math.cos((a + 90) * Math.PI / 180);
      const by = r + r * 0.28 * Math.sin((a + 90) * Math.PI / 180);
      const cx2 = r + r * 0.28 * Math.cos((a - 90) * Math.PI / 180);
      const cy2 = r + r * 0.28 * Math.sin((a - 90) * Math.PI / 180);
      return `M ${bx} ${by} Q ${r} ${r} ${ex} ${ey} Q ${r} ${r} ${cx2} ${cy2}`;
    });
    return <svg {...svgProps}><path d={paths.join(" ")} fill={color} /></svg>;
  }
  if (type === "circle") {
    return <svg {...svgProps}><circle cx={r} cy={r} r={r * 0.85} fill={color} /></svg>;
  }
  if (type === "triangle") {
    return (
      <svg {...svgProps}>
        <polygon points={`${r},${r * 0.1} ${r * 1.9},${r * 1.9} ${r * 0.1},${r * 1.9}`} fill={color} />
      </svg>
    );
  }
  if (type === "donut") {
    return (
      <svg {...svgProps}>
        <circle cx={r} cy={r} r={r * 0.85} fill="none" stroke={color} strokeWidth={r * 0.32} />
      </svg>
    );
  }
  // cross
  const t = r * 0.22;
  return (
    <svg {...svgProps}>
      <rect x={r - t} y={r * 0.08} width={t * 2} height={r * 1.85} rx={t * 0.6} fill={color} />
      <rect x={r * 0.08} y={r - t} width={r * 1.85} height={t * 2} rx={t * 0.6} fill={color} />
    </svg>
  );
}

/* ── Main exported component ── */
interface FloatingElementsProps {
  seed?: number; // pass a unique int per image so shapes are stable but varied
}

export default function FloatingElements({ seed = 0 }: FloatingElementsProps) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const shapes = useRef(generateShapes(seed)).current;

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      // Offset from viewport centre so shapes converge inward
      setMouse({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        overflow: "visible",
        zIndex: 5,
        pointerEvents: "none",
      }}
    >
      {shapes.map(shape => (
        <ShapeSvg key={shape.id} shape={shape} dx={mouse.x} dy={mouse.y} />
      ))}
    </div>
  );
}

