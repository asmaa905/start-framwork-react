import { useState } from "react";
import image1 from "../../assets/images/l1.png";
import image2 from "../../assets/images/l2.png";
import image3 from "../../assets/images/l3.png";

function Portofilo() {
  const [sections, setSections] = useState([
    { id: "sec-1", image: image1 },
    { id: "sec-2", image: image2 },
    { id: "sec-3", image: image3 },
    { id: "sec-4", image: image1 },
    { id: "sec-5", image: image2 },
    { id: "sec-6", image: image3 },
  ]);
  const [openModal, setOpenModal] = useState(null);
  function openModall(sec) {
    setOpenModal({ id: sec.id, image: sec.image });
  }
  return (
    <>
      <div
        className={`${
          openModal ? " overflow-hidden" : " overflow-auto"
        } portofilo  min-h-[100vh] flex justify-center items-center`}
      >
        <div className="container flex flex-col justify-center items-center text-white border-1 border-transparent mt-[5.5rem] py-[3rem]">
          <div className="sec-title pt-[1.5rem] ">
            <h2 className="text-[#2c3e50] text-[calc(1.375rem+1.5vw)]  font-[700]  uppercase text-center mb-[1rem]">
              Portofilo component
            </h2>
            <div className="flex items-center justify-center mb-[1rem]">
              <div className="h-[4px] w-[80px] me-3 bg-[#2c3e50]"></div>
              <i className="fa-solid fa-star text-[#2c3e50]"></i>
              <div className="h-[4px] w-[80px]  ms-3 bg-[#2c3e50]"></div>
            </div>
          </div>
          {sections.length == 0 ? (
            <div className="flex flex-col justify-center items-center text-center ">
              <p>Loading...</p>
            </div>
          ) : (
            <div className="content w-full flex flex-wrap mx-[-0.75rem] mt-[-1.5rem]">
              {sections.map((sec, index) => {
                return (
                  <div
                    className="sec w-full md:w-1/2 lg:w-1/3 h-[300px] px-[0.75rem] mt-[1.5rem]"
                    key={index}
                    onClick={() => openModall(sec)}
                  >
                    <div className="inner-content w-full h-full relative rounded-[0.5rem]">
                      {/* <p>{sec.id}</p>
                      <p>{sec.image}</p> */}

                      <img
                        className="w-full  h-full rounded-[0.5rem] block"
                        src={sec.image}
                        alt="img1"
                      />
                      <div className="overlay top-0 right-0 bottom-0 left-0 absolute bg-[#1abc9c] transition duration-[0.6s] ease-in-out  opacity-0 hover:opacity-100 text-center flex flex-col justify-center items-center">
                        <i className="fa fa-plus fa-6x text-white "></i>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {openModal && (
        <div
          className="floating-modal-product h-full bg-[#0d6dfd40] fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center z-[1031]"
          onClick={() => setOpenModal(null)}
        >
          <div
            className="image-container"
            style={{
              boxShadow: "0 2px 4px #00000080",
              height: "auto",
              maxWidth: "90%",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={openModal.image}
              alt={openModal.id}
              className="block rounded-[0.5rem] w-full h-full"
              style={{
                boxShadow: "0 2px 4px #00000080",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Portofilo;
