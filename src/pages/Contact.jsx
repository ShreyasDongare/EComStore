import React from "react";

const Contact = () => {
  return (
    <div className="h-screen w-full  flex items-center justify-center">
      <div className="max-w-screen-lg mx-auto flex flex-col px-4 items-center justify-center">
        <p className="text-2xl my-2">Conatct</p>
        <form
          action="https://www.formbackend.com/f/ecbe5e3580334dbe"
          method="POST"
          className="flex items-center justify-center flex-col"
        >
          <div className="flex flex-col ">
            <input
              type="text"
              name="username"
              placeholder="username"
              required
              className="w-[300px] md:w-[400px] h-10 border-2 border-gray-600 rounded  my-2 px-2"
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              required
              className="w-[300px] md:w-[400px] h-10 border-2 border-gray-600 rounded my-2  px-2"
            />
          </div>
          <input
            type="text"
            name="number"
            placeholder="conatct no"
            required
            className="w-[300px] md:w-[400px] h-10 border-2 border-gray-600 rounded my-2  px-2"
          />
          <textarea
            name="message"
            placeholder="message"
            cols="30"
            rows="10"
            required
            className="w-[300px] md:w-[400px] h-90 border-2 border-gray-600 rounded my-2 py-2 px-2"
          ></textarea>
          <button
            type="submit"
            className="btn hover:scale-105 my-2 duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
