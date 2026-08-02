ig sm:text-xl text-slate-400 max-w-2xl font-normal leading-relaxed">
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