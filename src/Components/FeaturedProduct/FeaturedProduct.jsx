import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Loader from "../../Shared/Loader";
// import { getSortTimestamp } from "../../api/product";
import Container from "../../Shared/Navbar/Container";
import { BiUpvote } from "react-icons/bi";
import useAuth from "../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const FeaturedProduct = () => {
  const {user} = useAuth();
  const navigate = useNavigate();

  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASEURL,
    withCredentials: true,
  });

  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await instance.get(
        "/products?sortField=timestamp&sortOrder=desc"
      );
      return res.data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  if (isError) {
    return toast.error(error);
  }
 
  const featuredData = products.result;
  const category = featuredData.filter(
    (productCat) => productCat.category === "featured"
  );
  return (
    <>
      <Container>
        <h1 className="text-center text-5xl text-gray-400 mb-10 mt-16">
          Featured Products
        </h1>
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {category?.map((cate) => (
              <>
                <div
                  key={cate._id}
                  className="card card-compact bg-base-100 shadow-xl"
                >
                  <figure>
                    <img
                      className="h-[250px] w-[400px]"
                      src={cate?.image}
                      alt="products"
                    />
                  </figure>
                  <div className="card-body">
                    <Link to={`/product/${cate._id}`}>
                      <h2 className="card-title">{cate?.product_name}</h2>
                    </Link>
                    <p>Tags: {cate?.tag[0]}</p>
                    <div className="card-actions justify-end">
                      {user?.email ? (
                        <button
                          disabled={cate.ownerInfo.owner_email === user.email}
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
              </>
            ))}
          </div>
        )}
      </Container>
    </>
  );
};

export default FeaturedProduct;