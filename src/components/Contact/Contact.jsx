import React from "react";

export default function Contact() {
  return (
    <>
      <div className="min-h-[100vh] flex justify-center items-center">
        <div className="contact-us container flex flex-col justify-center items-center text-white border-1 border-transparent mt-[5.5rem]">
          <div className="sec-title pt-[1.5rem]">
            <h2 className="text-[#2c3e50] text-[calc(1.375rem+1.5vw)] font-[700] uppercase text-center mb-[1rem]">
              Contact Section
            </h2>
            <div className="flex items-center justify-center mb-[1rem]">
              <div className="h-[4px] w-[80px] me-3 bg-[#2c3e50]"></div>
              <i className="fa-solid fa-star text-[#2c3e50]"></i>
              <div className="h-[4px] w-[80px] ms-3 bg-[#2c3e50]"></div>
            </div>
          </div>
          <form className="contact-form mx-auto px-[1rem] py-[1.5rem] mt-[3rem] w-full">
            {[
              { id: "floating_first_name", type: "text", label: "User Name" },
              { id: "floating_age", type: "number", label: "User Age" },
              { id: "floating_email", type: "email", label: "User Email" },
              {
                id: "floating_password",
                type: "password",
                label: "User Password",
              },
            ].map((field) => (
              <div key={field.id} className="relative z-0 w-full mb-10 group">
                <input
                  type={field.type}
                  id={field.id}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-[#1abc9c] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor={field.id}
                  className="peer-focus:font-medium absolute text-[1rem] leading-[1.5] font-[400] text-gray-500 duration-300 transform 
                    -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {field.label}
                </label>
              </div>
            ))}
            <button
              type="submit"
              className="text-white bg-[#1abc9c] focus:outline-none font-medium rounded-lg text-sm w-full 
              sm:w-auto px-5 py-2.5 text-center"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
