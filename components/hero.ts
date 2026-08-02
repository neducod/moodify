export const Hero = () => {
    return (
      <section className="bg-slate-950 text-white min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center space-y-6">
          
          {/* Tagline / Badge */}
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-950/60 rounded-full border border-indigo-800/50">
            Now Live
          </span>
  
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
            Build stunning web apps <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              faster than ever.
            </span>
          </h1>
  
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal">
            A minimalist boilerplate and modern starter template designed to help you launch your next idea without the hassle.
          </p>
  
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#get-started"
              className="px-6 py-3 rounded-lg font-medium bg-indigo-600 hover:bg-indigo-500 transition-colors text-white text-center shadow-lg shadow-indigo-600/25"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="px-6 py-3 rounded-lg font-medium border border-slate-800 hover:bg-slate-900 transition-colors text-slate-300 text-center"
            >
              Documentation
            </a>
          </div>
  
        </div>
      </section>
    );
  };