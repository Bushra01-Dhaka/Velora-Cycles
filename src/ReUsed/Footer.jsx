const Footer = () => {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-7xl font-outfits mx-auto px-6 lg:px-12 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <h2 className="text-3xl font-outfit font-bold text-primary">
              Velora
            </h2>

            <p className="mt-4 text-gray-400">
              Premium bicycles crafted for city commuting,
              mountain adventures, and everyday journeys.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>Cycles</li>
              <li>Brands</li>
              <li>Subscription</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">
              Categories
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Mountain Bikes</li>
              <li>Road Bikes</li>
              <li>Electric Bikes</li>
              <li>Hybrid Bikes</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">
              Newsletter
            </h3>

            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full bg-base-100 text-black"
            />

            <button className="btn btn-primary mt-3 w-full">
              Subscribe
            </button>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          © 2026 Velora Cycles. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;