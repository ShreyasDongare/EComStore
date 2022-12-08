import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/productContext'
import Product from '../components/product';
import Loading from '../components/Loading';

const FeaturedProduct = () => {
  const { isLoading, featuredProducts } = useContext(AppContext);
  // console.log(isLoading, )

  if(isLoading){
    return <Loading/>
  }

  return (
    <div className='w-full  py-4 bg-gray-200'>
     <div className='max-w-screen-lg mx-auto flex flex-col'>
      <div className='w-full flex justify-center '>
        <h3 className='text-3xl text-gray-700'>Trending Now</h3>
      </div>
      <div className='w-full flex flex-col md:flex-row items-center justify-center my-4'>
        {
          featuredProducts.map((item)=>{
            // console.log(item)

            return (
              <div key={item.id} className="px-4 w-96 my-4">
                <Product item={item} />
              </div>
            );
          })
        }
      </div>
     </div>
    </div>
  )
}

export default FeaturedProduct
