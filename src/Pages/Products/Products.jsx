import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { getAllProduct } from "../../api/product";
import Loader from "../../Shared/Loader";
import toast from "react-hot-toast";
import Container from "../../Shared/Navbar/Container";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { BiUpvote } from "react-icons/bi";

const Products = () => {
  const {user} = useAuth();
  const navigate = useNavigate();
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
  const productInfo = products.result;
  return (
    <div>
      <Helmet>
        <title>TechHaven | Products</title>
      </Helmet>
      <Container>
        <h1 className="text-center text-5xl text-gray-400 mb-10 mt-16">
          All Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productInfo?.map((product) => (
            <div
              key={product._id}
              className="card card-compact bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  className="h-[250px] w-[400px]"
                  src={product?.image}
                  alt="products"
                />
              </figure>
              <div className="card-body">
                <Link to={`/product/${product._id}`}>
                  <h2 className="card-title">{product?.product_name}</h2>
                </Link>
                <p>Tags: {product?.tag[0]}</p>
                <div className="card-actions justify-end">
                  {user?.email ? (
                    <button
                      disabled={product?.ownerInfo?.owner_email === user.email}
                      className="btn btn-warning cursor-pointer"
                    >
                      <BiUpvote size={20}></BiUpvote>
                    </button>
                  ) : (
                    navigate("/login")
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="join mt-10 mb-24 border-2 border-warning">
            <button className="join-item btn">1</button>
            <button className="join-item btn">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">4</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Products;