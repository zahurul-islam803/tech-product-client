import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Container from "../../Shared/Navbar/Container";
import { BiUpvote } from "react-icons/bi";
import useAuth from "../../Hooks/useAuth";

const ProductDetails = () => {
  const product = useLoaderData();
  const {user} = useAuth();
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
      </div>
    </Container>
  );
};

export default ProductDetails;