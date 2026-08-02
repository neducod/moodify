import React from 'react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  title = "Build faster with full control over your stack",
  subtitle = "Empower your development workflow with modern tools, automated pipelines, and flexible components built for scale.",
  primaryCtaText = "Get Started Free",
  secondaryCtaText = "Live Demo",
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950 text-slate-100 px-4 sm:px-6 lg:px-8">
      {/* Background Decorative Gradients */}
      <div 
        aria-hidden="true" 
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/30 to-purple-500/30 blur-3xl rounded-full pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute -bottom-40 right-10 w-[400px] h-[400px] bg-gradient-to-br from-blue-600/20 to-teal-400/20 blur-3xl rounded-full pointer-events-none" 
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center py-20">
        
        {/* Badge / Announcement Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-slate-800 bg-slate-900/80 backdrop-blur-md text-xs font-medium text-slate-300 hover:border-slate-700 transition-colors">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
          <span>Version 2.0 is now live</span>
          <span className="text-slate-500">|</span>
          <a href="#changelog" className="text-indigo-400 hover:underline">Read changelog &rarr;</a>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 max-w-4xl leading-[1.15]">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onPrimaryClick}
            type="button"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/35 transition-all duration-200 active:scale-[0.98]"
          >
            {primaryCtaText}
          </button>
          
          <button
            onClick={onSecondaryClick}
            type="button"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-800 hover:border-slate-700 transition-all duration-200 active:scale-[0.98]"
          >
            {secondaryCtaText}
          </button>
        </div>

        {/* Social Proof / Features Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-slate-400 text-xs sm:text-sm font-medium">
          <div className="flex flex-col items-center gap-1">
            <span className="text-xl font-bold text-slate-100">99.9%</span>
            <span className="text-slate-500">Uptime SLA</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xl font-bold text-slate-100">10k+</span>
            <span className="text-slate-500">Active Developers</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xl font-bold text-slate-100">&lt; 50ms</span>
            <span className="text-slate-500">Global Latency</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xl font-bold text-slate-100">SOC2</span>
            <span className="text-slate-500">Certified Security</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;