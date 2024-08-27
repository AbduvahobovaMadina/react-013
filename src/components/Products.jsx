import React from 'react'
import { Card, Skeleton } from 'antd'
import Skeletons from './Skeletons'
import { CiHeart } from "react-icons/ci";
import { useStateValue } from '../context/index';

const Products = ({data,loading}) => {
    console.log(data);
    const [_, dispatch] = useStateValue() 
    if(loading){
        return <Skeletons limit={8}/>
    }
  return (
    <div className='container mx-auto grid grid-cols-4 gap-3'>
        {
            data?.map((product)=>(
                <Card key={product.id}>
                    <div>
                        <img src={product.images[0]} alt="" className='w-full h-60 object-contain transition-all hover:scale-105 cursor-pointer' />
                    </div>
                    <h2 className='text-3xl'>{product.title}</h2>
                    <p className='font-bold text-red-500'>{product.price}$</p>
                    <p className='text-gray-500'>{product.description}</p>
                    <CiHeart className='cursor-pointer text-2xl active:text-red-500 flex absolute right-2 top-2' onClick={() =>
                         dispatch({ type: "TOGGLE_WISHLIST", payload: product })
                     } />
                </Card>
            ))
        }
       
    </div>
  )
}

export default Products