import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Loader from "../../Shared/Loader";
import { getSortTimestamp } from "../../api/product";
import Container from "../../Shared/Navbar/Container";
import { BiUpvote } from "react-icons/bi";
const FeaturedProduct = () => {
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["product"],
    queryFn: getSortTimestamp,
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
    <Container>
      <h1 className="text-center text-5xl text-gray-400 mb-10 mt-16">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {category?.map((cate) => (
          <>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img className="h-[250px] w-[400px]" src={cate?.image} alt="products" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{cate?.product_name}</h2>
                <p>Tags: {cate?.tag[0]}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-warning"><BiUpvote  size={20}></BiUpvote></button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </Container>
  );
};

export default FeaturedProduct;