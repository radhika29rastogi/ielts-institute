// The hero image may not be showing because the src is set to "/images/hero.png", which is a path relative to the public directory in a React app created with Create React App or Vite.
// If the image does not exist at "public/images/hero.png", it will not display.
// To fix this, you can use a placeholder image URL or ensure the image exists in the correct location.
// Here is a version using a placeholder image from Unsplash for demonstration:

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-32 md:pt-40 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-200 rounded-full opacity-30 blur-2xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400 rounded-full opacity-20 blur-3xl z-0"></div>
      {/* Content */}
      <div className="md:w-1/2 z-10 space-y-8">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight drop-shadow-sm">
          Achieve Your <span className="text-blue-600">Dream IELTS Band</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-xl">
          Join <span className="font-semibold text-blue-500">thousands</span> of successful students with <span className="font-semibold text-blue-500">personalized practice</span>, expert trainers, and real test simulations.
        </p>
        <div className="flex items-center gap-4">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-600 transition-all text-lg font-semibold flex items-center gap-2 group">
            Get Started
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <a
            href="#features"
            className="text-blue-600 font-medium hover:underline hover:text-blue-800 transition"
          >
            Learn More
          </a>
        </div>
        <div className="flex gap-6 mt-6">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-blue-600">10,000+</span>
            <span className="text-gray-500 text-sm">Students</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-blue-600">4.9/5</span>
            <span className="text-gray-500 text-sm">Avg. Rating</span>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center z-10 mt-12 md:mt-0 relative">
        <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-60 z-0"></div>
        <img
          // src="/images/hero.png"
          src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80"
          alt="IELTS"
          className="w-full max-w-md rounded-3xl shadow-2xl border-4 border-white z-10"
        />
        {/* Decorative floating badge */}
        <div className="absolute top-6 right-6 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2 border border-blue-100 z-20 animate-bounce-slow">
          <span className="text-blue-500 text-xl">🎯</span>
          <span className="font-semibold text-gray-700 text-sm">Band 8+ Achievers</span>
        </div>
      </div>
    </section>
  );
}