import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";

const BannerImg = {
  BackgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscription = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-primary dark:bg-gray-800 text-white"
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="sapce-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified about new products
          </h1>
          <input
            data-aos="flip-up"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
