export interface MoodPreset {
    id: string;
    name: string;
    icon: string;
    color1: string;
    color2: string;
    angle: number;
    glassOpacity: number;
    glassBlur: number;
  }
  
  export const MOOD_PRESETS: MoodPreset[] = [
    {
      id: "cyberpunk",
      name: "Cyberpunk",
      icon: "⚡",
      color1: "#f72585",
      color2: "#7209b7",
      angle: 135,
      glassOpacity: 0.2,
      glassBlur: 16,
    },
    {
      id: "sunset-chill",
      name: "Sunset Chill",
      icon: "🌅",
      color1: "#ff7e5f",
      color2: "#feb47b",
      angle: 45,
      glassOpacity: 0.25,
      glassBlur: 12,
    },
    {
      id: "cozy-coffee",
      name: "Cozy Coffee",
      icon: "☕",
      color1: "#2c1810",
      color2: "#c0a080",
      angle: 90,
      glassOpacity: 0.15,
      glassBlur: 20,
    },
    {
      id: "neon-night",
      name: "Neon Night",
      icon: "🌌",
      color1: "#00f2fe",
      color2: "#4facfe",
      angle: 180,
      glassOpacity: 0.3,
      glassBlur: 14,
    },
    {
      id: "aurora",
      name: "Aurora",
      icon: "🌿",
      color1: "#00b09b",
      color2: "#96c93d",
      angle: 120,
      glassOpacity: 0.2,
      glassBlur: 18,
    },
  ];