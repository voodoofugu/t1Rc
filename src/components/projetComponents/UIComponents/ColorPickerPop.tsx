import { useState, useRef, useEffect } from "react";

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function rgbToHsl(r: number, g: number, b: number) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s = 0,
    l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h /= 6;
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
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

function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  const rHex = Math.round((r + m) * 255)
    .toString(16)
    .padStart(2, "0");
  const gHex = Math.round((g + m) * 255)
    .toString(16)
    .padStart(2, "0");
  const bHex = Math.round((b + m) * 255)
    .toString(16)
    .padStart(2, "0");

  return `#${rHex}${gHex}${bHex}`;
}

function formatColor(hex: string, format: "hex" | "rgb" | "hsl") {
  if (format === "hex") return hex;
  const { r, g, b } = hexToRgb(hex);
  if (format === "rgb") return `rgb(${r}, ${g}, ${b})`;
  const { h, s, l } = rgbToHsl(r, g, b);
  return `hsl(${h}, ${s}%, ${l}%)`;
}

// type CanvasClickOptions = {
//   canvasRef: React.RefObject<HTMLCanvasElement>;
//   cursorDuringDrag: string;
//   onMove: (e: MouseEvent, ctx: CanvasRenderingContext2D, rect: DOMRect) => void;
//   triggerUpdate: () => void;
// };

// const handleCanvasClick = (
//   e: React.MouseEvent,
//   { canvasRef, cursorDuringDrag, onMove, triggerUpdate }: CanvasClickOptions
// ) => {
//   const controller = new AbortController();
//   const signal = controller.signal;

//   const canvas = canvasRef.current;
//   if (!canvas) return;

//   const ctx = canvas.getContext("2d");
//   if (!ctx) return;

//   const rect = canvas.getBoundingClientRect();

//   const handleMove = (moveEvent: MouseEvent) => {
//     onMove(moveEvent, ctx, rect);
//   };

//   const handleUp = () => {
//     controller.abort();
//     canvas.style.cursor = "crosshair";
//     document.body.style.cursor = "default";
//   };

//   window.addEventListener("mousemove", handleMove, { signal });
//   window.addEventListener("mouseup", handleUp, { signal });

//   handleMove(e.nativeEvent);

//   canvas.style.cursor = cursorDuringDrag;
//   document.body.style.cursor = cursorDuringDrag;
//   triggerUpdate();
// };

function ColorPickerPop() {
  const [_, forceUpdate] = useState<number>(0); // для принудительного обновления
  const triggerUpdate = () => {
    forceUpdate((x) => (typeof x === "number" && x < 1000 ? x + 1 : 0));
  };

  const hueCanvasRef = useRef<HTMLCanvasElement>(null);
  const paletteCanvasRef = useRef<HTMLCanvasElement>(null);

  const color = useRef<string>("#ffffff");
  const hueColor = useRef<string>("hsl(0, 100%, 50%)");
  const paletteThumbXY = useRef({ x: 0, y: 0 });
  const hueThumbX = useRef({ x: 0 });
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
      hueThumbX.current.x = Math.round((h / 360) * width);

      triggerUpdate();
    } catch (e) {
      console.error("Error picking color", e);
    }
  };

  const handleHueClick = (e: React.MouseEvent) => {
    const controller = new AbortController();
    const signal = controller.signal;

    const { h, s, l } = hexToHsl(color.current);

    const handleMove = (moveEvent: MouseEvent) => {
      const canvas = hueCanvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = Math.min(
        Math.max(moveEvent.clientX - rect.left, 0),
        canvas.width - 1
      );
      hueThumbX.current.x = x;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const hueValue = (x / canvas.width) * 360;
      hueColor.current = `hsl(${Math.round(hueValue)}, 100%, 50%)`;

      const newColor = hslToHex(hueValue, s, l);
      color.current = newColor;

      triggerUpdate();
    };

    const handleUp = () => {
      controller.abort();

      hueCanvasRef.current!.style.cursor = "crosshair";
      document.body.style.cursor = "default";
    };

    window.addEventListener("mousemove", handleMove, { signal });
    window.addEventListener("mouseup", handleUp, { signal });

    // Вызываем сразу при клике (без ожидания движения)
    handleMove(e.nativeEvent);

    triggerUpdate();
    hueCanvasRef.current!.style.cursor = "ew-resize";
    document.body.style.cursor = "ew-resize";
  };

  const handlePaletteClick = (e: React.MouseEvent) => {
    const controller = new AbortController();
    const signal = controller.signal;

    const handleMove = (moveEvent: MouseEvent) => {
      const canvas = paletteCanvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = Math.min(
        Math.max(moveEvent.clientX - rect.left, 0),
        canvas.width - 1
      );
      const y = Math.min(
        Math.max(moveEvent.clientY - rect.top, 0),
        canvas.height - 1
      );
      paletteThumbXY.current = { x, y };

      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const pixel = ctx.getImageData(x, y, 1, 1).data;
      const hex = `#${[pixel[0], pixel[1], pixel[2]]
        .map((v) => v.toString(16).padStart(2, "0"))
        .join("")}`;
      color.current = hex;

      triggerUpdate();
    };

    const handleUp = () => {
      controller.abort();

      paletteCanvasRef.current!.style.cursor = "crosshair";
      document.body.style.cursor = "default";
    };

    window.addEventListener("mousemove", handleMove, { signal });
    window.addEventListener("mouseup", handleUp, { signal });

    // Вызываем сразу при клике (без ожидания движения)
    handleMove(e.nativeEvent);

    triggerUpdate();
    paletteCanvasRef.current!.style.cursor = "all-scroll";
    document.body.style.cursor = "all-scroll";
  };

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
        <div className="hueWrap">
          <div
            className="thumb"
            style={{
              backgroundColor: hueColor.current,
              left: hueThumbX.current.x,
            }}
            onMouseDown={handleHueClick}
          />
          <canvas
            ref={hueCanvasRef}
            onMouseDown={handleHueClick}
            className="canvas"
            width={200}
            height={8}
          />
        </div>

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
      </div>
    </div>
  );
}

export default ColorPickerPop;
