"use client";

import React, { useState } from "react";
import { MOOD_PRESETS, MoodPreset } from "@/data/presets";
import { Copy, Check, Sparkles, Sliders, Palette } from "lucide-react";

export default function MoodifyApp() {
  const [activePreset, setActivePreset] = useState<string>("cyberpunk");
  const [color1, setColor1] = useState<string>("#f72585");
  const [color2, setColor2] = useState<string>("#7209b7");
  const [angle, setAngle] = useState<number>(135);
  const [glassBlur, setGlassBlur] = useState<number>(16);
  const [glassOpacity, setGlassOpacity] = useState<number>(0.2);
  const [copied, setCopied] = useState<boolean>(false);

  // Apply a preset configuration
  const applyPreset = (preset: MoodPreset) => {
    setActivePreset(preset.id);
    setColor1(preset.color1);
    setColor2(preset.color2);
    setAngle(preset.angle);
    setGlassBlur(preset.glassBlur);
    setGlassOpacity(preset.glassOpacity);
  };

  // Generate dynamic CSS rule
  const generatedGradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
  const generatedGlassCSS = `/* Glassmorphism Effect */
background: rgba(255, 255, 255, ${glassOpacity});
backdrop-filter: blur(${glassBlur}px);
-webkit-backdrop-filter: blur(${glassBlur}px);
border: 1px solid rgba(255, 255, 255, ${glassOpacity + 0.15});
box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

/* Background Gradient */
background-image: ${generatedGradient};`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedGlassCSS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main
      className="min-h-screen transition-all duration-500 ease-out p-6 md:p-12 flex flex-col items-center justify-center font-sans"
      style={{ background: generatedGradient }}
    >
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Controls Column */}
        <div className="lg:col-span-6 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 text-white shadow-2xl space-y-6">
          <header className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="p-3 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-2xl">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Moodify</h1>
              <p className="text-sm text-slate-400">Aesthetic Gradient & Glass Studio</p>
            </div>
          </header>

          {/* Mood Presets */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
              Mood Presets
            </label>
            <div className="flex flex-wrap gap-2">
              {MOOD_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => applyPreset(preset)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                    activePreset === preset.id
                      ? "bg-white text-slate-900 font-bold scale-105 shadow-lg"
                      : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5"
                  }`}
                >
                  <span>{preset.icon}</span>
                  <span>{preset.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Color Pickers */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                Color Start
              </label>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-2 rounded-xl">
                <input
                  type="color"
                  value={color1}
                  onChange={(e) => setColor1(e.target.value)}
                  className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
                />
                <span className="text-xs font-mono uppercase">{color1}</span>
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                Color End
              </label>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-2 rounded-xl">
                <input
                  type="color"
                  value={color2}
                  onChange={(e) => setColor2(e.target.value)}
                  className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
                />
                <span className="text-xs font-mono uppercase">{color2}</span>
              </div>
            </div>
          </div>

          {/* Sliders */}
          <div className="space-y-4 border-t border-white/10 pt-4">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Gradient Angle</span>
                <span className="font-mono text-pink-400">{angle}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="360"
                value={angle}
                onChange={(e) => setAngle(Number(e.target.value))}
                className="w-full accent-pink-500 bg-white/10 h-2 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Glass Blur</span>
                <span className="font-mono text-pink-400">{glassBlur}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                value={glassBlur}
                onChange={(e) => setGlassBlur(Number(e.target.value))}
                className="w-full accent-pink-500 bg-white/10 h-2 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Glass Opacity</span>
                <span className="font-mono text-pink-400">{glassOpacity}</span>
              </div>
              <input
                type="range"
                min="0.05"
                max="0.8"
                step="0.01"
                value={glassOpacity}
                onChange={(e) => setGlassOpacity(Number(e.target.value))}
                className="w-full accent-pink-500 bg-white/10 h-2 rounded-lg cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Live Preview Column */}
        <div className="lg:col-span-6 space-y-6">
          {/* Card Preview */}
          <div
            className="p-8 rounded-3xl transition-all duration-300 text-white min-h-[280px] flex flex-col justify-between"
            style={{
              background: `rgba(255, 255, 255, ${glassOpacity})`,
              backdropFilter: `blur(${glassBlur}px)`,
              WebkitBackdropFilter: `blur(${glassBlur}px)`,
              border: `1px solid rgba(255, 255, 255, ${glassOpacity + 0.15})`,
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
            }}
          >
            <div className="flex justify-between items-start">
              <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs uppercase font-bold tracking-widest px-3 py-1 bg-white/20 rounded-full backdrop-blur-md">
                Live Preview
              </span>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-1">Glassmorphic Card</h2>
              <p className="text-sm text-white/80">
                Adjust sliders on the left to see dynamic opacity and backdrop blur changes.
              </p>
            </div>
          </div>

          {/* Generated CSS Box */}
          <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-white relative">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                CSS Snippet
              </span>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1.5 text-xs bg-pink-500 hover:bg-pink-600 text-white px-3 py-1.5 rounded-lg font-medium transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "Copy Code"}</span>
              </button>
            </div>
            <pre className="text-xs font-mono bg-black/50 p-3 rounded-xl overflow-x-auto text-pink-300 leading-relaxed">
              {generatedGlassCSS}
            </pre>
          </div>
        </div>

      </div>
    </main>
  );
}