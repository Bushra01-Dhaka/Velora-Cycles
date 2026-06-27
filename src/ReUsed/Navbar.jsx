const Navbar = () => {
  return (
    <nav className="bg-success font-outfits  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

        <h1 className="text-3xl font-bold font-outfit text-primary">
          Velora
        </h1>

        <ul className="hidden lg:flex items-center gap-8 text-info">
          <li><a href="#">Home</a></li>
          <li><a href="#">Cycles</a></li>
          <li><a href="#">Brands</a></li>
          <li><a href="#">Subscription</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <button className="btn btn-primary rounded-full">
          Shop Now
        </button>

      </div>
    </nav>
  );
};

export default Navbar;