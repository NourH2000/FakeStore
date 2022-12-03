import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-screen pt-12 ">
      <div className="w-full   md:h-[600px] bg-[#f4d504] mx-auto flex flex-col items-center py-9 px-4">
        <form className="w-full sm:w-[500px] md:w-[700px] h-full">
          <div className=" flex flex-col md:flex-row  justify-between ">
            <input
              placeholder="Name"
              className="bg-white placeholder:text-black h-12 w-full md:w-80 mb-3 rounded-md px-3 "
            />
            <input
              placeholder="Email"
              className="bg-white placeholder:text-black h-12  w-full md:w-80 mb-3 rounded-md px-3 "
            />
          </div>
          <input
            placeholder="object"
            className="bg-white placeholder:text-black h-12 w-full mb-3 rounded-md px-3 "
          />
          <textarea
            placeholder="your message"
            className="bg-white placeholder:text-black h-72 w-full mb-3 rounded-md px-3 "
          />
          <div className=" w-full flex justify-center">
            {" "}
            <button className="bg-white text-black font-bold text-xl border h-12 w-52  mb-3 rounded-full shadow-md ">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
