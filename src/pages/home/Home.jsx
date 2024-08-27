import Products from '@/components/Products'
import { useFetch } from '@/hooks/useFetch'
import React, { useState } from 'react'
import { Pagination } from "antd";
import { Link } from 'react-router-dom';
const Home = () => {
  const [skip, setSkip] = useState(1)
  const [limit, setlimit] = useState(4);
  const {data, loading}= useFetch("/products", { limit, skip: skip * limit },[ skip, limit])
  const handleChenge = (current, pageSize) => {
    setSkip(current);
    setlimit(pageSize);
  };
  return (
    <div>
        <h2 className='container mx-auto mb-12 text-3xl font-bold'>Home</h2>
        <Products data={data?.products} loading={loading} />
        <div className='container mx-auto flex justify-center mt-4'>
        <Pagination
          className="py-4 flex flex-1"
          onChange={handleChenge}
          current={skip}
          align="center"
          defaultCurrent={1}
          defaultPageSize={limit}
          total={data?.total}
        />
            <Link to={"/wishlist"}>
              <p className='w-20 h-8 rounded-xl  text-white font-bold text-center pt-1  bg-green-300 ' >Wishlist</p>
            </Link>
        </div>
    </div>
  )
}

export default Home