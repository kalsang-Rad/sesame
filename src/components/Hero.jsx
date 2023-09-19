import React from "react";
import img1 from "../assets/birthdayImg.jpg";
import img2 from "../assets/businessEvent.jpg";
import ReactTyped from "react-typed";

const Hero = () => {
  return (
    <div className="my-20 w-full px-4">
      <div className="mx-auto max-w-[1240px] font-europa">
        <div className="">
          <div className="flex items-center justify-center">
            <p className="text-2xl font-bold sm:text-4xl md:text-5xl">
              We offer services for
            </p>
            <ReactTyped
              className="py-4 pl-2 text-2xl font-bold sm:text-4xl md:text-5xl"
              strings={[
                "Birthday Parties",
                "Concerts",
                "Business Conferences",
                "And Many More",
              ]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
        </div>
        <div className="mx-auto mb-20 grid max-w-[720px] gap-8 sm:grid-cols-3">
          <div className="flex flex-col py-4">
            <div className="flex-grow">
              <img src={img1} alt="/" />
            </div>
          </div>
          <div className="rounded-lg bg-[#FFEFCA] px-2 py-4 sm:col-span-2">
            <h1 className="text-xl sm:first-letter:text-2xl"> Birthdays</h1>
            <p className="text-[18px] md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              doloribus aut vitae iusto saepe tempore laboriosam quidem
              molestias quos eius, velit, illum neque inventore vero! Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Omnis
              accusamus dolorem atque consectetur cupiditate repreh
            </p>
            <p className="py-4">
              Find Out More{" "}
              <a href="/" className="underline">
                Here
              </a>
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-[1020px] gap-8 md:grid-cols-3">
          <div className="flex flex-col py-4 sm:col-span-2">
            <div className="flex-grow">
              <img src={img2} alt="/" />
            </div>
          </div>
          <div className="rounded-lg bg-[#FFEFCA] px-2 py-4 ">
            <h1 className="text-xl sm:first-letter:text-2xl">
              {" "}
              Birthday Celebrations
            </h1>
            <p className="text-[18px] md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              doloribus aut vitae iusto saepe tempore laboriosam quidem
              molestias quos eius, velit, illum neque inventore vero! Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Omnis
              accusamus dolorem atque consectetur cupiditate repreh
            </p>
            <p className="py-4">
              Find Out More{" "}
              <a href="/" className="underline">
                Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
