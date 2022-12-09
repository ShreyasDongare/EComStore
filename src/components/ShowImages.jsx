import React, { useState } from 'react'

const ShowImages = ({ images = [{ url: ""}]}) => {

    const [displayImg, setDisplayImg] = useState(images[0])
  //   console.log(images);
  return (
    <div className="flex flex-col justify-between">
      <div className='flex items-center justify-center '>
        <img  src={displayImg.url} alt={images[0].id} className="h-56 md:h-80 rounded" />
      </div>
      <div className="flex gap-2 justify-center my-9">
        {images.map((img, index) => {
          return (
            <div key={index}>
              <img   src={img.url} alt="" className="h-14 w-20 md:h-18 cursor-pointer rounded-sm " onClick={()=> setDisplayImg(img)}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowImages
