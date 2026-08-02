export interface MaximalistPreset {
    id: string;
    name: string;
    tagline: string;
    icon: string;
    color1: string;
    color2: string;
    angle: number;
    glassOpacity: number;
    glassBlur: number;
    borderOpacity: number;
    // Full-Canvas Ambiance Tokens
    theme: {
      bgPattern: string;
      accentColor: string;
      fontFamily: string;
      gridColor: string;
      glowColor: string;
    };
  }
  
  export const MAXIMALIST_PRESETS: MaximalistPreset[] = [
    {
      id: "cyberpunk",
      name: "Cyberpunk 2099",
      tagline: "High-contrast neon grid with electric magenta glow",
      icon: "⚡",
      color1: "#f72585",
      color2: "#7209b7",
      angle: 135,
      glassOpacity: 0.2,
      glassBlur: 20,
      borderOpacity: 0.4,
      theme: {
        bgPattern: "radial-gradient(circle at 50% 50%, rgba(247, 37, 133, 0.15), transparent 70%)",
        accentColor: "#f72585",
        fontFamily: "'Space Grotesk', sans-serif",
        gridColor: "rgba(247, 37, 133, 0.2)",
        glowColor: "#7209b7",
      },
    },
    {
      id: "sunset-chill",
      name: "Sunset Chill",
      tagline: "Golden hour coral, warm horizon, and analog warmth",
      icon: "🌅",
      color1: "#ff7e5f",
      color2: "#feb47b",
      angle: 45,
      glassOpacity: 0.25,
      glassBlur: 14,
      borderOpacity: 0.3,
      theme: {
        bgPattern: "radial-gradient(circle at 50% 50%, rgba(255, 126, 95, 0.2), transparent 70%)",
        accentColor: "#feb47b",
        fontFamily: "'Playfair Display', serif",
        gridColor: "rgba(254, 180, 123, 0.2)",
        glowColor: "#ff7e5f",
      },
    },
    {
      id: "cozy-coffee",
      name: "Cozy Coffee",
      icon: "☕",
      tagline: "Warm roasted sepia tones and tactile paper texture",
      color1: "#2c1810",
      color2: "#c0a080",
      angle: 90,
      glassOpacity: 0.18,
      glassBlur: 24,
      borderOpacity: 0.25,
      theme: {
        bgPattern: "radial-gradient(circle at 50% 50%, rgba(192, 160, 128, 0.15), transparent 70%)",
        accentColor: "#c0a080",
        fontFamily: "'Lora', serif",
        gridColor: "rgba(192, 160, 128, 0.15)",
        glowColor: "#2c1810",
      },
    },
    {
      id: "neon-night",
      name: "Neon Night",
      tagline: "Midnight cyan, deep ocean depth, and laser reflections",
      icon: "🌌",
      color1: "#00f2fe",
      color2: "#4facfe",
      angle: 180,
      glassOpacity: 0.3,
      glassBlur: 16,
      borderOpacity: 0.5,
      theme: {
        bgPattern: "radial-gradient(circle at 50% 50%, rgba(0, 242, 254, 0.2), transparent 70%)",
        accentColor: "#00f2fe",
        fontFamily: "'Syne', sans-serif",
        gridColor: "rgba(0, 242, 254, 0.25)",
        glowColor: "#4facfe",
      },
    },
  ];