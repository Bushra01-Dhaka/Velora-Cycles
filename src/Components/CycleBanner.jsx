const CycleBanner = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://www.pexels.com/download/video/10452536/" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="max-w-4xl text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Ride Beyond <br />
            Every Horizon
          </h1>

          <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Discover premium bicycles engineered for speed, comfort, and
            adventure. Whether you're conquering mountain trails or cruising
            through the city, every ride starts here.
          </p>

          <button className="mt-8 px-8 py-3 rounded-full bg-primary text-white font-semibold hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-all duration-300">
            Explore Bikes
          </button>
        </div>
      </div>
    </section>
  );
};

export default CycleBanner;