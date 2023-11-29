import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Container from "../../Shared/Navbar/Container";
import { BiUpvote } from "react-icons/bi";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { ImSpinner10 } from "react-icons/im";
import toast from "react-hot-toast";
import { addReview, getProductReview } from "../../api/product";
import Loader from "../../Shared/Loader";
import { useQuery } from "@tanstack/react-query";
import Review from "../../Components/Review/Review";

const ProductDetails = () => {
  const product = useLoaderData();
  const {user} = useAuth();
  const [loading, setLoading] = useState(false);

    const {
      data: reviews = [],
      isLoading,
      isError,
      error,
    } = useQuery({
      queryKey: ["review"],
      queryFn: getProductReview,
    });

    const filterReviewData = reviews.filter(review => review.productId === product._id)

  const handleAddReview = async (e) => {
    setLoading(true)
    e.preventDefault();
    const form = e.target;
    const reviewer_name = form.reviewer_name.value;
    const reviewer_image = user?.photoURL;
    const description = form.description.value;
    const rating = form.rating.value;
     const reviewData = {
       description,
       rating,
       productId: product._id,
       reviewerInfo: {
         reviewer_name,
         reviewer_image,
       },
     };
      try {
        await addReview(reviewData);
        toast.success("Review Post Successfully");
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
  };

   if (isLoading) {
     return <Loader></Loader>;
   }
   if (isError) {
     return toast.error(error);
   }

  return (
    <Container>
      <div>
        <Helmet>
          <title>TechHaven | Products - Details</title>
        </Helmet>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={product.image} alt="product" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.product_name}</h2>
            <p>Description: {product.description}</p>
            <p>Tags: {product.tag}</p>
            <a href={product.links}>External Links: {product.links}</a>
            <p>Upvote: 10</p>
            <div className="card-actions justify-end">
              <button
                disabled={product.ownerInfo.owner_email === user.email}
                className="btn btn-warning cursor-pointer"
              >
                <BiUpvote size={20}></BiUpvote>
              </button>
              <button className="btn btn-error">Report</button>
            </div>
          </div>
        </div>
        {/* show all review section this product */}

        <div className="my-12">
          <h1 className="text-center text-5xl text-gray-400 mb-6 mt-2">Review</h1>
          {
            filterReviewData.length > 0 ? <Review filterReviewData={filterReviewData}></Review>: <p className="text-center text-2xl text-red-500">No Review Yet!</p>
          }
        </div>

        {/* post review section */}
        <div className="w-full flex flex-col justify-center items-center mt-14 py-6 text-gray-800 rounded-xl bg-gray-50">
          <form onSubmit={handleAddReview}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="reviewer_name"
                    className="block text-gray-600"
                  >
                    Reviewer Name
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                    name="reviewer_name"
                    id="reviewer_name"
                    type="text"
                    placeholder="Reviewer Name"
                    defaultValue={user?.displayName}
                    readOnly
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="reviewer_image"
                    className="block text-gray-600"
                  >
                    Reviewer Image
                  </label>
                  <p className="relative block">
                    <img
                      alt="profile"
                      src={user?.photoURL}
                      className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-rose-300"
                    />
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-1 text-sm">
                  <label htmlFor="description" className="block text-gray-600">
                    Description
                  </label>

                  <textarea
                    id="description"
                    className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 "
                    name="description"
                    required
                  ></textarea>
                </div>
                <div className="space-y-1 text-sm">
                  <label htmlFor="rating" className="block text-gray-600">
                    Rating
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                    name="rating"
                    id="rating"
                    type="number"
                    placeholder="Your Rating"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500"
            >
              {loading ? (
                <ImSpinner10 className="m-auto animate-spin" size={24} />
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;