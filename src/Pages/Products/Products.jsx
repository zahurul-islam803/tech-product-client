import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { getAllProduct } from "../../api/product";
import Loader from "../../Shared/Loader";
import toast from "react-hot-toast";
import { useState } from "react";

const Products = () => {
  const [timestamp, setTimestamp] = useState('');
  const [category, setCategory] = useState('');
  const {data: products = [], isLoading, isError, error} = useQuery({
    queryKey: ['product'],
    queryFn: getAllProduct,
  });
  if(isLoading){
    return <Loader></Loader>
  }
  if(isError){
    return toast.error(error);
  }
  console.log(products)
  return (
    <div>
      <Helmet>
        <title>TechHaven | Products</title>
      </Helmet>
      <h1>products</h1>
    </div>
  );
};

export default Products;