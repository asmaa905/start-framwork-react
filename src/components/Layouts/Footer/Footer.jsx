import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer  w-full">
        <div className="abs w-full bg-[#2c3e50] p-[40px]">
          <div className="container mx-auto px-[0.75rem]">
            <div className="abstract mx-[calc(-.5*1.5rem)] flex justify-center md:justify-start items-center  text-center text-white flex-wrap">
              <div className="location px-[0.5rem] py-[1.5rem] w-full md:w-1/2 lg:w-1/3">
                <h3 className="sec-title text-[calc(1.3rem+.6vw)] leading-[1.2] font-[500] mb-[0.5rem]">
                  LOCATION
                </h3>
                <p className="address text-[16px] leading-[24px] font-[400] mt-0 mb-[1rem]">
                  2215 John Daniel Drive
                </p>
                <p className="post-code text-[16px] leading-[24px] font-[400] mt-0  mb-[1rem]">
                  Clark, MO 65243
                </p>
              </div>
              <div className="social px-[0.5rem] py-[1.5rem] w-full md:w-1/2 lg:w-1/3">
                <h3 className=" sec-title text-[calc(1.3rem+.6vw)] leading-[1.2] font-[500] mb-[0.5rem]">
                  AROUND THE WEB
                </h3>
                <ul className="social-menu flex justify-center items-center">
                  <li className="rounded-full border border-white p-1 hover:border-[#1abc9c] mx-[5px] ">
                    <a href="www.facebook.com">
                      <i className="fa-brands fa-facebook mx-1  text-[16px] leading-[16px] font-[400] hover:text-[#1abc9c]"></i>
                    </a>
                  </li>
                  <li className="rounded-full border border-white p-1 hover:border-[#1abc9c] mx-[5px] ">
                    <a href="www.x.com">
                      <i className="fa-brands fa-twitter mx-1  text-[16px] leading-[16px] font-[400] hover:text-[#1abc9c]"></i>
                    </a>
                  </li>
                  <li className="rounded-full border border-white p-1 hover:border-[#1abc9c] mx-[5px] ">
                    <a href="www.linkedin.com">
                      <i className="fa-brands fa-linkedin mx-1  text-[16px] leading-[16px] font-[400] hover:text-[#1abc9c]"></i>
                    </a>
                  </li>
                  <li className="rounded-full border border-white p-1 hover:border-[#1abc9c] mx-[5px] ">
                    <a href="www.website.com">
                      <i className="fa-solid fa-globe mx-1  text-[16px] leading-[16px] font-[400] hover:text-[#1abc9c]"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="about px-[0.5rem] py-[1.5rem]  w-full md:w-1/2 lg:w-1/3">
                <h3 className=" sec-title text-[calc(1.3rem+.6vw)] leading-[1.2] font-[500] mb-[0.5rem]">
                  ABOUT FREELANCER
                </h3>
                <p className="about-paragragh  text-[16px] leading-[24px] font-[400] mb-[1rem]">
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright flex flex-col justify-center items-center text-center bg-[#1a252f] w-full p-[10px]">
          <p className="text-[16px] leading-[24px] font-[400] text-[#f0f8ff] pt-[10px] mb-[1rem]">
            Copyright © Your Website 2024
          </p>
        </div>
      </div>
    </>
  );
}
