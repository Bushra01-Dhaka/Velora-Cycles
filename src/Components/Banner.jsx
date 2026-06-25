import { Link } from "react-router";
import bike from "../assets/bike.png"
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1612638151783-a6afe905cdec?q=80&w=895&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="relative z-20 hero-content text-neutral-content text-center">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl lg:text-8xl font-bold text-primary font-outfit">Ride Beyond Limits</h1>
          <p className="mb-5 text-info font-outfits text-md lg:text-lg">
            Discover premium bicycles designed for city commuting, mountain adventures, and high-performance racing.
          </p>
          <div className="flex flex-col font-outfits lg:flex-row justify-center gap-4"> 
               <Link>
               <button className="btn text-lg btn-outline btn-primary">Shop Cycles</button>
               </Link>
              <Link>
               <button className="btn btn-primary text-lg">Explore Collection</button>
              </Link>
          </div>
        </div>
      </div>
      
    
    </div>
  );
};

export default Banner;
