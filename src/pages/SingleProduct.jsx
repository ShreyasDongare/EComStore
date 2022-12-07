import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/productContext';

const SingleProduct = () => {
const { isSingleLoading, singleProduct ,fetchSingleProduct } = useContext(AppContext);
  const {id} = useParams()
  console.log( singleProduct);

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
  } = singleProduct; 

  const SINGLE_API = `https://api.pujakaitem.com/api/products?id=${id}`;

  useEffect(()=>{
    fetchSingleProduct(SINGLE_API)
  },[])



  return <div>SingleProducts</div>;
}

export default SingleProduct
