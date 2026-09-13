import heroImg from './assets/banner-stack.png';

const Hero = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side: Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto md:mx-0 leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:opacity-95 text-white font-medium text-sm px-6 py-3 rounded-xl shadow-sm transition-all cursor-pointer">
              Explore Technologies
            </button>
            <button className="border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium text-sm px-6 py-3 rounded-xl transition-all cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side: 3D Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img 
            src={heroImg} 
            alt="Dev Stack Banner" 
            className="w-full max-w-md object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;