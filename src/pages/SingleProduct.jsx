import React, { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageNavigation from "../components/PageNavigation";
import { AppContext } from "../context/productContext";
import Loading from "../components/Loading";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsShieldShaded } from "react-icons/bs";
import { FaHandHoldingUsd } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import ShowImages from "../components/ShowImages";



const SingleProduct = () => {
  const { isSingleLoading, singleProduct, fetchSingleProduct } =
    useContext(AppContext);
  // console.log(isSingleLoading);
  const { id } = useParams();
  // console.log(singleProduct);

  const {
    id: singleId,
    name,
    company,
    category,
    price,
    description,
    stars,
    stock,
    reviews,
    image,
  } = singleProduct;

  const SINGLE_API = `https://api.pujakaitem.com/api/products?id=${id}`;

  useEffect(() => {
    fetchSingleProduct(SINGLE_API);
  }, []);

  if (isSingleLoading) {
    return <Loading />;
  }
   const MRP = Intl.NumberFormat("en-IN", {
     style: "currency",
     currency: "INR",
     maximumFractionDigits: 0,
   }).format((price+250000) / 100);
   const pirceRs = Intl.NumberFormat("en-IN", {
     style: "currency",
     currency: "INR",
     maximumFractionDigits: 0,
   }).format(price / 100);
   const save = Intl.NumberFormat("en-IN", {
     style: "currency",
     currency: "INR",
     maximumFractionDigits: 0,
   }).format((price + 250000) / 100 - price / 100);

  return (
    <div className="w-full ">
      <PageNavigation pageTitle={name} />
      <div className="max-w-screen-lg mx-auto my-6 gap-8 px-4 flex flex-col md:flex-row">
        <div className="flex-1 flex justify-center">
            <ShowImages images={image}/>
        </div>
        <div className="flex-1 ">
          <p className="capitalize text-2xl ">{name}</p>
          <p className="text-sm capitalize">
            Brand name: <span className=" text-teal-600 cursor-pointer">{company}</span>
          </p>
          <p>{stars}</p>
          <p>{reviews} reviews</p>
          <div>
            <p className="text-lg">
              M.R.P.: <del className="text-red-500">{MRP}</del>
            </p>
          </div>
          <p className="text-lg ">
            Deal Price: <span className="text-green-600">{pirceRs}</span>
          </p>
          <p>You save {save}</p>
          <p className="my-2">{description}</p>
          <div className="flex justify-between border-t-2 border-b-2 py-2 my-4">
            <div className="flex flex-col justify-center items-center gap-2 hover:bg-teal-100 rounded duration-500 p-2">
              <CiDeliveryTruck size={25} />
              <p className="text-xs text-center">Fast delivery</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 hover:bg-teal-100 rounded duration-500 p-2">
              <GiReturnArrow size={25} />
              <p className="text-xs text-center">15 days Replacement</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 hover:bg-teal-100 rounded duration-500 p-2">
              <BsShieldShaded size={25} />
              <p className="text-xs text-center">1 Year warranty</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 hover:bg-teal-100 rounded duration-500 p-2">
              <FaHandHoldingUsd size={25} />
              <p className="text-xs text-center">Pay on delivery</p>
            </div>
          </div>
          <p>{stock > 0 ? "Available in stock" : "Out of stock"}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
