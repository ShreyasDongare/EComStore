import React from 'react'
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="w-full bg-gray-800">
      <div className="max-w-screen-lg m-auto flex flex-col justify-center p-4 gap-5  md:flex-row md:justify-between py-12 text-white">
        <div>
          <h2 className="text-lg">Address</h2>
          <p className="text-sm">
            500 Terry Francois <br /> Street San Francisco,CA 94158 <br /> Mail:
            info@mysite.com <br /> Tel: 123-456-7890
          </p>
        </div>
        <div className="">
          <h2 className="text-lg ">Socials</h2>
          <div className='flex'>
          <p className='p-2 pl-0'>
            <AiFillInstagram size={25} className="cursor-pointer" />
          </p>
          <p className='p-2'>
            <AiFillFacebook size={25} className="cursor-pointer" />
          </p>
          <p className='p-2'>
            <AiOutlineTwitter size={25} className="cursor-pointer" />
          </p>
          <p className='p-2'>
            <AiFillYoutube size={25} className="cursor-pointer" />
          </p>

          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Shipping Policy</p>
          <p>Refund Policy</p>
          <p>FAQ</p>
        </div>
      </div>
      <hr />
      <div className="max-w-screen-lg m-auto flex justify-center py-4 text-white">
        <p className="text-xs">
          Copyright My-ECom-Store @2019 - {new Date().getFullYear()}{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer
