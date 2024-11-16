import profileImg from "../../assets/images/avataaars.svg";
function Home() {
  return (
    <>
      <div className="home text-white bg-[#1abc9c] py-[3rem] min-h-[100vh]">
        <div className="container border-1 border-transparent overflow-hidden">
          <div className="content flex flex-col justify-center items-center text-white mt-[3rem] border-1 border-transparent">
            <div className="profile-img text-center">
              <img src={profileImg} alt="" className=" w-full h-full" />
            </div>
            <h1 className="text-[#fff] text-[40px] leading-[48px] font-[700] uppercase text-center pt-[1.5rem] mb-[1rem]">
              start Framework
            </h1>
            <div className="flex items-center justify-center  mb-[1rem]">
              <div className="h-[4px] w-[80px] me-3 bg-[#fff]"></div>
              <i className="fa-solid fa-star text-white"></i>
              <div className="h-[4px] w-[80px]  ms-3 bg-[#fff]"></div>
            </div>
            <p>
              <span>Graphic Artist</span> -<span>Web Designer</span> -
              <span>Illustrator</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
