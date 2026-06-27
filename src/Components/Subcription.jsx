import { MdBrightness1 } from "react-icons/md";

const Subcription = () => {
  return (
    <div className="flex justify-center bg-primary font-outfits items-center min-h-screen py-20 px-6 lg:px-20">
      <div>

        <div className="text-center ">
          <h2 className="text-3xl text-success lg:text-6xl font-extrabold font-outfit">
           Ride More. Worry Less.
          </h2>
          <p className="py-4 lg:text-lg font-outfits w-full lg:w-[60%] mx-auto">
            Join our servicing subscription plans and keep your bicycle performing like new throughout the year.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-10 lg:p-20">
            <div className=" bg-transparent rounded-2xl hover:shadow-info cursor-pointer duration-300 transition-all  shadow-xl shadow-accent p-6">
                     <div className="text-center">
                        <h3 className="text-2xl rounded-full border-info border-1 font-semibold">Basic Plan</h3>
                        <p className="text-4xl py-4 font-extrabold text-success">$9/month</p>
                     </div>
                     <div className="py-6 flex flex-col">
                        <div className="flex justify-start gap-2 mb-2 items-center">
                            <MdBrightness1 className="text-lg text-success" />
                            <p className="text-success text-lg">Monthly Inspection</p>
                        </div>
                        <div className="flex justify-start gap-2 mb-2 items-center">
                             <MdBrightness1 className="text-lg text-success" />
                            <p className="text-success text-lg">Brake Adjustment</p>
                        </div>
                        <div className="flex justify-start gap-2 mb-2 items-center">
                             <MdBrightness1 className="text-lg text-success" />
                            <p className="text-success text-lg">Tire Pressure Check</p>
                        </div>
                            <div className="flex justify-start gap-2 mb-2 items-center">
                                 <MdBrightness1 className="text-lg text-success" />
                            <p className="text-success text-lg">Email Support</p>
                            </div>
                        </div>
            </div>

            <div className=" bg-transparent rounded-2xl hover:shadow-info cursor-pointer duration-300 transition-all  shadow-xl shadow-accent p-6">
                     <div className="text-center">
                        <h3 className="text-2xl rounded-full border-info border-1 font-semibold">Pro Plan</h3>
                        <p className="text-4xl py-4 font-extrabold text-success">$19/month</p>
                     </div>
                     <div className="py-6 flex flex-col">
                        <div className="flex justify-start gap-2 mb-2 items-center">
                            <MdBrightness1 className="text-lg text-success" />
                            <p className="text-success text-lg">Everything in Basic</p>
                        </div>
                        <div className="flex justify-start gap-2 mb-2 items-center">
                             <MdBrightness1 className="text-lg text-success" />
                            <p className="text-success text-lg">Chain Lubrication</p>
                        </div>
                        <div className="flex justify-start gap-2 mb-2 items-center">
                             <MdBrightness1 className="text-lg text-success" />
                            <p className="text-success text-lg">Gear Tuning</p>
                        </div>
                            <div className="flex justify-start gap-2 mb-2 items-center">
                                 <MdBrightness1 className="text-lg text-success" />
                            <p className="text-success text-lg">Priority Service</p>
                            </div>
                        </div>
            </div>

            <div className=" bg-transparent rounded-2xl hover:shadow-info cursor-pointer duration-300 transition-all  shadow-xl shadow-accent p-6">
                     <div className="text-center">
                        <h3 className="text-2xl rounded-full border-info border-1 font-semibold">Elite Plan</h3>
                        <p className="text-4xl py-4 font-extrabold text-success">$39/month</p>
                     </div>
                     <div className="py-6 flex flex-col">
                        <div className="flex justify-start gap-2 mb-2 items-center">
                            <MdBrightness1 className="text-lg text-success" />
                            <p className="text-success text-lg">Everything in Pro</p>
                        </div>
                        <div className="flex justify-start gap-2 mb-2 items-center">
                             <MdBrightness1 className="text-lg text-success" />
                            <p className="text-success text-lg">Full Bike Servicing</p>
                        </div>
                        <div className="flex justify-start gap-2 mb-2 items-center">
                             <MdBrightness1 className="text-lg text-success" />
                            <p className="text-success text-lg">Free Parts Installation</p>
                        </div>
                            <div className="flex justify-start gap-2 mb-2 items-center">
                                 <MdBrightness1 className="text-lg text-success" />
                            <p className="text-success text-lg">Home Pickup & Delivery</p>
                            </div>
                        </div>
            </div>
        
        

            </div>

             


        </div>


      </div>

  );
};

export default Subcription;
