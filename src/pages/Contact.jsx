import React from "react";

const Contact = () => {
  return (
    <div className=" w-full  flex flex-col items-center justify-center overflow-x-hidden">
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5766.988949283402!2d-79.57304133338287!3d43.721053754029235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3a71847cf181%3A0x76adde9cf65b3e79!2s22%20Redcliff%20Blvd%2C%20Etobicoke%2C%20ON%20M9W%202H3%2C%20Canada!5e0!3m2!1sen!2sin!4v1670396960974!5m2!1sen!2sin"
          width="1600"
          height="450"
          className="w-screen"
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="max-w-screen-lg mx-auto flex flex-col my-12 px-4 items-center justify-center">
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
