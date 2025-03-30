import React from "react";

const About = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center sm:text-lg text-gray-400">
          <h1 className="text-gray-900 text-4xl font-bold">About Us</h1>
          <div className="mb-4 mt-4 font-light">
            Welcome to CarVault, your go-to platform for seamless vehicle
            rentals. Whether you need a car for a short trip or a long-term
            rental, CarVault offers a wide range of well-maintained vehicles,
            ensuring a hassle-free and reliable experience.
          </div>
          <div>
            <div className="mb-4  font-light text-wrap">
              Our Mission at CarVault, we aim to make vehicle rentals simple,
              secure, and accessible. Our platform is designed to provide
              renters with an easy and efficient way to find the perfect vehicle
              for their needs.
            </div>
          </div>
          <h3 className="text-gray-900 text-xl font-bold text-wrap">
            What We Offer
          </h3>
          <div className="flex flex-wrap justify-center items-stretch gap-5">
            <div className="max-w-sm border-gray-200 border mt-4 border-gray-200 rounded-lg shadow-sm ">
              <div className="p-4">
                <div className="">
                  <img
                    src="\src\assets\diversityFleet.jpeg"
                    alt=""
                    className="rounded-md"
                  />
                </div>
                <h5 className="mt-2 text-xl font-medium tracking-tight text-gray-900">
                  Diverse Fleet
                </h5>
                <p className="mb-3 py-2 font-light text-sm text-gray-500">
                  Whether you need a compact car for city drives, an SUV for
                  family trips, or a luxury vehicle for a special occasion,
                  CarVault provides a wide selection of well-maintained vehicles
                  to suit every need.
                </p>
              </div>
            </div>

            <div className="max-w-sm border-gray-200 border mt-4 border-gray-200 rounded-lg shadow-sm ">
              <div className="p-5">
                <div className="">
                  <img
                    src="\src\assets\secureandreliable.jpeg"
                    alt=""
                    className="rounded-md"
                  />
                </div>
                <h5 className="mt-2 text-xl font-medium tracking-tight text-gray-900">
                  Secure & Reliable
                </h5>
                <p className="mb-3 py-2 font-light text-sm text-gray-500">
                  Enjoy peace of mind with verified listings, trusted rental
                  partners, and secure payment options. We ensure that every
                  vehicle meets high safety and quality standards before being
                  made available for rent.
                </p>
              </div>
            </div>

            <div className="max-w-sm border-gray-200 border mt-4 border-gray-200 rounded-lg shadow-sm ">
              <div className="p-5">
                <div className="">
                  <img
                    src="\src\assets\booking.jpeg"
                    alt=""
                    className="rounded-md"
                  />
                </div>
                <h5 className="mt-2 text-xl font-medium tracking-tight text-gray-900">
                  Easy Booking
                </h5>
                <p className="mb-3 py-2 font-light text-sm text-gray-500">
                  Renting a car has never been easier! Our intuitive platform
                  allows you to browse, select, and book a vehicle in just a few
                  clicks, making the process quick and hassle-free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
