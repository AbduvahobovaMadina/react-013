import React from "react";
import { useStateValue } from "../../context";
import Product from "../../components/Products";
import { Link } from "react-router-dom";
console.log(Product);
const Wishlist = () => {
  const [data, dispatch] = useStateValue();
  console.log(data.wishlist);
  return (
    <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10">Wishlist</h2>
      <Product title={"Like products"} data={data.wishlist} />
      <Link to={"/"}>
        <p className="w-20 h-8 rounded-xl  text-white font-bold text-center pt-1  bg-green-300  mt-[50px]">Home</p>
      </Link>
    </div>
  );
};

export default Wishlist;