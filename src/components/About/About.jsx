function About() {
  return (
    <>
      <div className="about text-white bg-[#1abc9c] py-[3rem]  min-h-[100vh] flex justify-center items-center">
        <div className="container  flex flex-col justify-center items-center text-white border-1 border-transparent mt-[3rem] ">
          <div className="about-title pt-[1.5rem] ">
            <h2 className="text-[#fff] text-[calc(1.375rem+1.5vw)]  font-[700]  uppercase text-center mb-[1rem]">
              about component
            </h2>
            <div className="flex items-center justify-center mb-[1rem]">
              <div className="h-[4px] w-[80px] me-3 bg-[#fff]"></div>
              <i className="fa-solid fa-star text-white"></i>
              <div className="h-[4px] w-[80px]  ms-3 bg-[#fff]"></div>
            </div>
          </div>

          <div className="flex  flex-wrap  text-white px-[3rem] mx-[-0.75rem]">
            <div className="w-full md:w-1/2  px-[0.5rem] mb-[1rem] md:pl-[3rem]">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="w-full md:w-1/2  px-[0.5rem] mb-[1rem] md:pr-[3rem]">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
