
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
            <div className