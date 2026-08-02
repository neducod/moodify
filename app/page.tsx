"use client";

import React, { useState, useRef } from "react";
import { MAXIMALIST_PRESETS, MaximalistPreset } from "@/data/maximalistPresets";
import { Copy, Check, Sparkles, Box, Layers, Eye } from "lucide-react";

export default function MaximalistMoodify() {
  const [preset, setPreset] = useState<MaximalistPreset>(MAXIMALIST_PRESETS[0]);
  const [color1, setColor1] = useState<string>(MAXIMALIST_PRESETS[0].color1);
  const [color2, setColor2] = useState<string>(MAXIMALIST_PRESETS[0].color2);
  const [angle, setAngle] = useState<number>(MAXIMALIST_PRESETS[0].angle);
  const [glassBlur, setGlassBlur] = useState<number>(MAXIMALIST_PRESETS[0].glassBlur);
  const [glassOpacity, setGlassOpacity] = useState<number>(MAXIMALIST_PRESETS[0].glassOpacity);
  const [borderOpacity, setBorderOpacity] = useState<number>(MAXIMALIST_PRESETS[0].borderOpacity);
  const [copied, setCopied] = useState<boolean>(false);

  // 3D Tilt State
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePresetSelect = (selected: MaximalistPreset) => {
    setPreset(selected);
    setColor1(selected.color1);
    setColor2(selected.color2);
    setAngle(selected.angle);
    setGlassBlur(selected.glassBlur);
    setGlassOpacity(selected.glassOpacity);
    setBorderOpacity(selected.borderOpacity);
  };

  // Calculate 3D card tilt based on mouse position relative to card center
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (y / (rect.height / 2)) * -12, // Pitch
      y: (x / (rect.width / 2)) * 12,   // Yaw
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const generatedGradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;

  // STRICT VANILLA CSS OUTPUT
  const plainCSSOutput = `/* Glassmorphism Token */
.glass-card {
  background: rgba(255, 255, 255, ${glassOpacity});
  backdrop-filter: blur(${glassBlur}px);
  -webkit-backdrop-filter: blur(${glassBlur}px);
  border: 1px solid rgba(255, 255, 255, ${borderOpacity});
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
}

/* Background Canvas */
.canvas-background {
  background: ${generatedGradient};
}`;

  const copyCSS = () => {
    navigator.clipboard.writeText(plainCSSOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
    <section>fgfgfgfgf</section>
    <main
      className="min-h-screen transition-all duration-700 ease-out text-white p-6 md:p-12 relative overflow-hidden"
      style={{
        background: generatedGradient,
        fontFamily: preset.theme.fontFamily,
      }}
    >
      {/* Dynamic Background Grid Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 transition-all duration-700"
        style={{
          backgroundImage: `linear-gradient(${preset.theme.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${preset.theme.gridColor} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial Theme Glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700"
        style={{ background: preset.theme.bgPattern }}
      />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Mood Selection & Parameters */}
        <div className="lg:col-span-5 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
          
          <header className="border-b border-white/10 pb-4">
            <span
              className="text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full border mb-2 inline-block transition-colors"
              style={{ borderColor: preset.theme.accentColor, color: preset.theme.accentColor }}
            >
              Mode: {preset.name}
            </span>
            <h1 className="text-3xl font-black tracking-tight mt-1">Moodify Studio</h1>
            <p className="text-xs text-white/60 mt-1">Total Ambiance Shift & Dynamic Refraction Generator</p>
          </header>

          {/* Large Mood Cards */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-3">
              Select Ambiance Presets
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MAXIMALIST_PRESETS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handlePresetSelect(item)}
                  className={`p-4 rounded-2xl text-left border transition-all duration-300 relative overflow-hidden group ${
                    preset.id === item.id
                      ? "bg-white/15 border-white shadow-xl scale-[1.02]"
                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{item.icon}</span>
                    <div
                      className="w-4 h-4 rounded-full border border-white/20"
                      style={{
                        background: `linear-gradient(${item.angle}deg, ${item.color1}, ${item.color2})`,
                      }}
                    />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-0.5">{item.name}</h3>
                  <p className="text-[10px] text-white/60 leading-snug line-clamp-2">{item.tagline}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Color & Angle Controls */}
          <div className="space-y-4 border-t border-white/10 pt-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">Color A</label>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-2 rounded-xl">
                  <input
                    type="color"
                    value={color1}
                    onChange={(e) => setColor1(e.target.value)}
                    className="w-7 h-7 rounded-lg cursor-pointer bg-transparent border-0"
                  />
                  <span className="text-xs font-mono">{color1}</span>
                </div>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">Color B</label>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-2 rounded-xl">
                  <input
                    type="color"
                    value={color2}
                    onChange={(e) => setColor2(e.target.value)}
                    className="w-7 h-7 rounded-lg cursor-pointer bg-transparent border-0"
                  />
                  <span className="text-xs font-mono">{color2}</span>
                </div>
              </div>
            </div>

            {/* Sliders */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-white/60">Gradient Angle</span>
                <span className="font-mono" style={{ color: preset.theme.accentColor }}>{angle}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="360"
                value={angle}
                onChange={(e) => setAngle(Number(e.target.value))}
                className="w-full bg-white/10 h-1.5 rounded-lg cursor-pointer accent-white"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-white/60">Glass Blur</span>
                <span className="font-mono" style={{ color: preset.theme.accentColor }}>{glassBlur}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                value={glassBlur}
                onChange={(e) => setGlassBlur(Number(e.target.value))}
                className="w-full bg-white/10 h-1.5 rounded-lg cursor-pointer accent-white"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-white/60">Glass Opacity</span>
                <span className="font-mono" style={{ color: preset.theme.accentColor }}>{glassOpacity}</span>
              </div>
              <input
                type="range"
                min="0.05"
                max="0.8"
                step="0.01"
                value={glassOpacity}
                onChange={(e) => setGlassOpacity(Number(e.target.value))}
                className="w-full bg-white/10 h-1.5 rounded-lg cursor-pointer accent-white"
              />
            </div>
          </div>

        </div>

        {/* Right Column: 3D Stage & Plain CSS Output */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Interactive 3D Stage with Floating Shapes */}
          <div
            className="w-full h-[380px] rounded-3xl relative flex items-center justify-center p-8 overflow-hidden"
            style={{ perspective: 1000 }}
          >
            {/* Animated Background Spheres (Shows Backdrop Blur & Refraction) */}
            <div
              className="absolute w-36 h-36 rounded-full blur-sm animate-bounce top-8 left-12 opacity-80 transition-colors duration-700"
              style={{ background: color1, animationDuration: "6s" }}
            />
            <div
              className="absolute w-44 h-44 rounded-full blur-md animate-pulse bottom-6 right-12 opacity-80 transition-colors duration-700"
              style={{ background: color2, animationDuration: "4s" }}
            />
            <div
              className="absolute w-24 h-24 rounded-2xl rotate-45 border-2 border-white/40 top-1/3 right-1/4 animate-spin"
              style={{ animationDuration: "12s" }}
            />

            {/* Dynamic 3D Glass Card */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="w-full max-w-md p-8 rounded-3xl text-white relative z-10 transition-transform duration-100 ease-out cursor-pointer shadow-2xl"
              style={{
                background: `rgba(255, 255, 255, ${glassOpacity})`,
                backdropFilter: `blur(${glassBlur}px)`,
                WebkitBackdropFilter: `blur(${glassBlur}px)`,
                border: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="flex justify-between items-start mb-6" style={{ transform: "translateZ(30px)" }}>
                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                  <Box className="w-6 h-6 text-white" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/20 rounded-full border border-white/20">
                  3D Tilt Active
                </span>
              </div>

              <div style={{ transform: "translateZ(40px)" }}>
                <h2 className="text-2xl font-black mb-2">{preset.name}</h2>
                <p className="text-xs text-white/80 leading-relaxed mb-4">
                  Move your cursor over this card to observe real-time 3D perspective tilt and light refraction across the glowing spheres behind it.
                </p>
                <div className="flex gap-2">
                  <span className="text-[10px] font-mono px-2 py-1 bg-black/30 rounded-lg">
                    Blur: {glassBlur}px
                  </span>
                  <span className="text-[10px] font-mono px-2 py-1 bg-black/30 rounded-lg">
                    Opacity: {glassOpacity}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Plain Vanilla CSS Export Box */}
          <div className="bg-black/80 backdrop-blur-xl border border-white/15 rounded-3xl p-6 relative shadow-2xl">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-white/60" />
                <span className="text-xs font-bold uppercase tracking-wider text-white/60">
                  Vanilla CSS Output
                </span>
              </div>
              <button
                onClick={copyCSS}
                className="flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-lg"
                style={{
                  background: preset.theme.accentColor,
                  color: "#000",
                }}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copied Vanilla CSS!" : "Copy Vanilla CSS"}</span>
              </button>
            </div>

            <pre className="text-xs font-mono bg-black/70 border border-white/10 p-4 rounded-2xl text-emerald-400 overflow-x-auto leading-relaxed">
              {plainCSSOutput}
            </pre>
          </div>

        </div>

      </div>
    </main>
    </>
  );
}