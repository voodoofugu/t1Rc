import { useState, useRef, useEffect, useCallback } from "react";
// import useDebounce from "../../hooks/useDebounce";

function hexToRgba(hex: string) {
  hex = hex.replace(/^#/, "");

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  } else if (hex.length === 4) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  }

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const a = hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : undefined;

  return { r, g, b, a };
}

function rgbToHsl(r: number, g: number, b: number, alpha?: number) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
    alpha: alpha && Math.round(alpha * 100) / 100,
  };
}

function hexToHsl(hex: string): { h: number; s: number; l: number } {
  // Убираем символ #
  hex = hex.replace(/^#/, "");

  // Разбираем r, g, b
  const bigint = parseInt(hex, 16);
  const r = ((bigint >> 16) & 255) / 255;
  const g = ((bigint >> 8) & 255) / 255;
  const b = (bigint & 255) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;

  let h = 0;
  let s = 0;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h *= 60;
  }

  return {
    h: Math.round(h),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function hslToHex(h: number, s: number, l: number, a?: number): string {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0,
    g = 0,
    b = 0;
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];

  const toHex = (v: number) =>
    Math.round((v + m) * 255)
      .toString(16)
      .padStart(2, "0");
  const alphaHex =
    a &&
    Math.round(a * 255)
      .toString(16)
      .padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}${a && a < 1 ? alphaHex : ""}`;
}

function formatColor(hex: string, format: "hex" | "rgb" | "hsl") {
  if (format === "hex") return hex;
  const { r, g, b, a } = hexToRgba(hex);
  if (format === "rgb")
    return a ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
  const { h, s, l, alpha } = rgbToHsl(r, g, b, a);
  return alpha
    ? `hsla(${h}, ${s}%, ${l}%, ${alpha})`
    : `hsl(${h}, ${s}%, ${l}%)`;
}

type CanvasClickOptions = {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  cursorDuringDrag: string;
  onMove: (e: MouseEvent, ctx: CanvasRenderingContext2D, rect: DOMRect) => void;
  triggerUpdate: () => void;
};

const handleCanvasClick = (
  e: React.MouseEvent,
  { canvasRef, cursorDuringDrag, onMove, triggerUpdate }: CanvasClickOptions
) => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const controller = new AbortController();
  const signal = controller.signal;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const rect = canvas.getBoundingClientRect();
  const handleMove = (moveEvent: MouseEvent) => {
    onMove(moveEvent, ctx, rect);
    triggerUpdate();
  };

  const handleUp = () => {
    controller.abort();
    canvas.style.cursor = "";
    document.body.style.cursor = "default";
  };

  window.addEventListener("mousemove", handleMove, { signal });
  window.addEventListener("mouseup", handleUp, { signal });

  // Вызываем сразу при клике (без ожидания движения)
  handleMove(e.nativeEvent);

  canvas.style.cursor = cursorDuringDrag;
  document.body.style.cursor = cursorDuringDrag;
  triggerUpdate();
};

function ColorPickerPop() {
  const [_, forceUpdate] = useState<number>(0); // для принудительного обновления
  const triggerUpdate = () => {
    forceUpdate((x) => (typeof x === "number" && x < 1000 ? x + 1 : 0));
  };

  const hueCanvasRef = useRef<HTMLCanvasElement>(null);
  const paletteCanvasRef = useRef<HTMLCanvasElement>(null);
  const fillCanvasRef = useRef<HTMLCanvasElement>(null);

  const color = useRef<string>("#ffffff");
  const hueColor = useRef<string>("hsl(0, 100%, 50%)");
  const paletteThumbXY = useRef({ x: 0, y: 0 });
  const hueThumbX = useRef(0);
  const fillThumbX = useRef(0);
  const colorFormat = useRef<"hex" | "rgb" | "hsl">("hex");

  const pickColor = async () => {
    try {
      // @ts-expect-error нет типа EyeDropper в TypeScript
      const eyeDropper = new EyeDropper();
      const result = await eyeDropper.open();
      color.current = result.sRGBHex;
      await navigator.clipboard.writeText(result.sRGBHex);

      // Обновляем палитру и цветовой круг
      if (!paletteCanvasRef.current) return;
      const { h, s, l } = hexToHsl(result.sRGBHex);
      hueColor.current = `hsl(${h}, 100%, 50%)`;

      const canvas = paletteCanvasRef.current;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;

      const { width, height } = canvas;
      const x = Math.round((s / 100) * (width - 1));
      const y = Math.round(((100 - l) / 100) * (height - 1));
      paletteThumbXY.current = { x, y };
      hueThumbX.current = Math.round((h / 360) * width);

      triggerUpdate();
    } catch (e) {
      console.error("Error picking color", e);
    }
  };

  const handlePaletteClick = useCallback((e: React.MouseEvent) => {
    handleCanvasClick(e, {
      canvasRef: paletteCanvasRef,
      cursorDuringDrag: "all-scroll",
      onMove: (e: MouseEvent, ctx: CanvasRenderingContext2D, rect: DOMRect) => {
        const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width - 1);
        const y = Math.min(Math.max(e.clientY - rect.top, 0), rect.height - 1);
        paletteThumbXY.current = { x, y };

        const pixel = ctx.getImageData(x, y, 1, 1).data;
        const hex = `#${[pixel[0], pixel[1], pixel[2]]
          .map((v) => v.toString(16).padStart(2, "0"))
          .join("")}`;
        color.current = hex;
      },
      triggerUpdate,
    });
  }, []);

  const handleHueClick = useCallback((e: React.MouseEvent) => {
    handleCanvasClick(e, {
      canvasRef: hueCanvasRef,
      cursorDuringDrag: "ew-resize",
      onMove: (e: MouseEvent, ctx: CanvasRenderingContext2D, rect: DOMRect) => {
        const { h, s, l } = hexToHsl(color.current);
        const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width - 1);
        hueThumbX.current = x;

        const hueValue = (x / rect.width) * 360;
        hueColor.current = `hsl(${Math.round(hueValue)}, 100%, 50%)`;

        const newColor = hslToHex(hueValue, s, l);
        color.current = newColor;
      },
      triggerUpdate,
    });
  }, []);

  const handleFillClick = useCallback((e: React.MouseEvent) => {
    handleCanvasClick(e, {
      canvasRef: fillCanvasRef,
      cursorDuringDrag: "ew-resize",
      onMove: (e: MouseEvent, ctx: CanvasRenderingContext2D, rect: DOMRect) => {
        const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width - 1);
        fillThumbX.current = x;
      },
      triggerUpdate,
    });
  }, []);

  const onChangeColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    colorFormat.current = e.target.value as "hex" | "rgb" | "hsl";
    triggerUpdate();
  };

  useEffect(() => {
    const canvas = hueCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;
    const gradient = ctx.createLinearGradient(0, 0, width, 0);

    const borderOffset = 1 / width; // ширина в долях — 1 пиксель

    // Добавим чуть больше контроля над цветами:
    for (let i = 0; i <= 360; i += 60) {
      const stop = i / 360;

      // Уточнённые позиции вокруг каждого цвета
      const start = Math.max(0, stop - borderOffset / 2);
      const end = Math.min(1, stop + borderOffset / 2);

      gradient.addColorStop(start, `hsl(${i}, 100%, 50%)`);
      gradient.addColorStop(end, `hsl(${i}, 100%, 50%)`);
    }

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }, []);

  useEffect(() => {
    const canvas = paletteCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const { width, height } = canvas;

    const whiteHueGradient = ctx.createLinearGradient(0, 0, width, 0);
    const borderOffset = 1 / width; // или Math.min(1 / width, 0.01)

    whiteHueGradient.addColorStop(0, "#ffffff");
    whiteHueGradient.addColorStop(borderOffset, "#ffffff");
    whiteHueGradient.addColorStop(1 - borderOffset, hueColor.current);
    whiteHueGradient.addColorStop(1, hueColor.current);

    ctx.fillStyle = whiteHueGradient;
    ctx.fillRect(0, 0, width, height);

    const blackGradient = ctx.createLinearGradient(0, 0, 0, height);
    const borderOffsetY = 1 / height;

    blackGradient.addColorStop(0, "transparent");
    blackGradient.addColorStop(borderOffsetY, "transparent");
    blackGradient.addColorStop(1 - borderOffsetY, "#000000");
    blackGradient.addColorStop(1, "#000000");

    ctx.fillStyle = blackGradient;
    ctx.fillRect(0, 0, width, height);
  }, [hueColor.current]);

  useEffect(() => {
    const canvas = fillCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;

    // Шаг клеток (чекерборда)
    const step = 3;

    // 1. Рисуем шахматный фон (checkerboard)
    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const isDark = (x / step + y / step) % 2 === 0;
        ctx.fillStyle = isDark ? "#ccc" : "#fff";
        ctx.fillRect(x, y, step, step);
      }
    }

    // 2. Накладываем градиент color → transparent
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, color.current);
    gradient.addColorStop(1, "transparent");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }, [color.current]);

  return (
    <div className="popup">
      <h1>Color Picker</h1>
      <button onClick={pickColor}>Выбрать цвет</button>

      <select value={colorFormat.current} onChange={onChangeColor}>
        <option value="hex">HEX</option>
        <option value="rgb">RGB</option>
        <option value="hsl">HSL</option>
      </select>

      <div className="color-box" style={{ backgroundColor: color.current }}>
        {formatColor(color.current, colorFormat.current)}
      </div>

      <div className="canvasBox">
        <div className="paletteWrap">
          <div
            className="thumb"
            style={{
              backgroundColor: color.current,
              left: paletteThumbXY.current.x,
              top: paletteThumbXY.current.y,
            }}
            onMouseDown={handlePaletteClick}
          />
          <canvas
            ref={paletteCanvasRef}
            onMouseDown={handlePaletteClick}
            className="canvas"
            width={200}
            height={100}
          />
        </div>

        <div className="hueWrap">
          <div
            className="thumb"
            style={{
              backgroundColor: hueColor.current,
              left: hueThumbX.current,
            }}
            onMouseDown={handleHueClick}
          />
          <canvas
            ref={hueCanvasRef}
            onMouseDown={handleHueClick}
            className="canvas"
            width={200}
            height={6}
          />
        </div>

        <div className="fillWrap">
          <div
            className="thumb"
            style={{
              left: fillThumbX.current,
            }}
            onMouseDown={handleFillClick}
          />
          <canvas
            ref={fillCanvasRef}
            onMouseDown={handleFillClick}
            className="canvas"
            width={200}
            height={6}
          />
        </div>
      </div>
    </div>
  );
}

export default ColorPickerPop;
