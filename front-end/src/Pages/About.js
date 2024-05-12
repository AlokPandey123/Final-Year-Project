import React from "react";
import Layout from "../Layout/Layout";
import aboutMainImage from "../Assets/Images/aboutMainImage.png";
import Sudhanshu from "../Assets/Images/QuotesPersonalityImage/Sudhanshu.png";
import Shweta from "../Assets/Images/QuotesPersonalityImage/Shweta.png";
import Alok from "../Assets/Images/QuotesPersonalityImage/Alok.png";


const About = () => {
  return (
    <Layout>
      <div className="pl-20 pt-10 flex flex-col text-white">
        {/* creating the about page main section */}
        <div className="flex items-center gap-5 mx-10">
          {/* out moto section */}
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-justify text-yellow-500 font-semibold">
            Advancing Fairness:  The Imperative of a Strong College Grievance System
            </h1>
            <p className="text-xl text-justify text-gray-200">
            "In the realm of higher education, a robust grievance system stands as the guardian of fairness and equity, ensuring that every student's voice is heard and every concern addressed. It is the bridge between student expectations and institutional responsibility, fostering an environment where accountability thrives and trust is upheld. As students navigate the complexities of academia, a well-functioning grievance system serves as a beacon of hope, affirming that their rights and dignity are not just acknowledged but vigorously defended."
            </p>
          </section>

          {/* our moto image section */}
          <div className="w-1/2">
            <img
              id="test1"
              style={{
                filter: "drop-shadow(0px 10px 10px rgb(0, 0, 0))",
              }}
              className="drop-shadow-2xl "
              src={aboutMainImage}
              alt="aboutMainImage"
            />
          </div>
        </div>

        {/* top personalities quotes section */}
        <div className="carousel m-auto w-1/2 my-16">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              {/* for personality image */}
              <img
                className="w-40 h-40 rounded-full border-2 border-gray-400"
                src={Alok}
                alt="Alok Pandey"
              />
              {/* for writting the quotes */}
              <p className="text-xl text-gray-200">
                "Student of SRMS-CET (IT-2020),Bareilly and working on Full Stack Web Development."
              </p>
              {/* for personality name */}
              <h3 className="text-2xl font-semibold">Alok Pandey</h3>
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
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              {/* for personality image */}
              <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={Sudhanshu}
                alt="Sudhanshu"
              />
              {/* for writting the quotes */}
              <p className="text-xl text-gray-200">
                "Student of SRMS-CET (IT-2020), Bareilly and Working on Front-end Technologies."
              </p>
              {/* for personality name */}
              <h3 className="text-2xl font-semibold">Sudhanshu Verma</h3>
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
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              {/* for personality image */}
              <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={Shweta}
                alt="einstein"
              />
              
              <p className="text-xl text-gray-200">
              "Student of SRMS-CET (IT-2020), Bareilly and Working on Database Technologies."
              </p>
              {/* for personality name */}
              <h3 className="text-2xl font-semibold">Shweta Upadhyay</h3>
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

          {/* <div id="slide4" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
             
              <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={steveJobs}
                alt="Steve Jobs"
              />
             
              <p className="text-xl text-gray-200">
                "Innovation distinguishes between a leader and a follower."
              </p>
              
              <h3 className="text-2xl font-semibold">Steve Jobs</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div> */}

          <div id="slide5" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              
              {/* <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={billGates}
                alt="Bill Gates"
              />

              <p className="text-xl text-gray-200">
                "Technology is just a tool. In terms of getting the kids working
                together and motivating them, the teacher is the most
                important."
              </p> */}

              <h3 className="text-2xl font-semibold">Bill Gates</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
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

export default About;
