import React from "react";
import Layout from "../Layout/Layout";
import homePageImage1 from "../Assets/Images/homePageMainImage.png";
import homePageImage2 from "../Assets/Images/HomePageImages/ProblemSolving.webp";
import homePageImage3 from "../Assets/Images/HomePageImages/HomePageImage3.png";
import homePageImage4 from "../Assets/Images/HomePageImages/HomePageImage4.png";
import homePageImage5 from "../Assets/Images/HomePageImages/HomePageImage5.png";


import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <Layout>
      <div className="pt-8 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
        {/* for platform details */}
        <div className="w-1/2 space-y-6">
          <h1 className="text-5xl font-semibold">
            Semi Automated{" "}
            <span className="text-yellow-500 font-bold">Grievance System</span>
          </h1>
          <p className="text-xl text-justify text-gray-200">
            Grievance Management System is an official portal for grievances and complaints.
            All the registered members  will be able to access this portal and lodged their complaints, grievances, and queries.
            These will be addressed online through this portal itself.
          </p>

          {/* for buttons */}
          <div className="space-x-6">
            <Link to={"/about"}>
              <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                Explore About Us
              </button>
            </Link>
            <Link to={"/contact"}>
              <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 border-yellow-600 transition-all ease-in-out duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* right section for image */}
        {/* top personalities quotes section */}
        <div className="carousel m-auto w-1/2 my-16">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex items-center justify-center gap-1 px-[2%]">
              
              <img
                className="w-full  "
                src={homePageImage1}
                alt="Nelson Mandela"
              />
              
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide5" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
          <div className="flex items-center justify-center gap-1 px-[10%]">
              
              <img
                className="w-full  "
                src={homePageImage2}
                alt="Nelson Mandela"
              />
              
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative w-full">
          <div className="flex items-center justify-center gap-1 px-[10%]">
              
              <img
                className="w-full  "
                src={homePageImage5}
                alt="Nelson Mandela"
              />
              
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide4" className="carousel-item relative w-full">
          <div className="flex items-center justify-center gap-1 px-[10%]">
              
              <img
                className="w-full  "
                src={homePageImage4}
                alt="Nelson Mandela"
              />
              
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide5" className="carousel-item relative w-full">
            <div className="flex items-center justify-center gap-1 px-[10%]">
              {/* for personality image */}
              <img
                className="w-full rounded-full "
                src={homePageImage3}
                alt="Bill Gates"
              />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn  btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
