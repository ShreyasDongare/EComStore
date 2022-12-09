import React from 'react'
import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";

const Stars = ({ stars, reviews }) => {
  const reviewStar = Array.from({length: 5}, (v, index)=>{
    let number = index +0.5;

    return(
      <span key={index} >
        {
          stars >= index + 1 ? <ImStarFull className='text-yellow-400'/> : stars >= number ? <ImStarHalf className='text-yellow-400'/> : <ImStarEmpty className='text-yellow-400'/>
        }
      </span>
    )

  })


  return (
    <div className="flex gap-4 items-center">
      <div className='flex gap-3'>
      <span className="flex">{reviewStar}</span>
      <span className='text-sm'>{stars}</span>
      </div>
      <p className='text-sm'>({reviews} reviews)</p>
    </div>
  );
};

export default Stars
