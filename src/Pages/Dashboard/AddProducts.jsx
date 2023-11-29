/* eslint-disable react/prop-types */
import { ImSpinner10 } from "react-icons/im";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { imageUpload } from "../../api/axios";
import { addProduct } from "../../api/product";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const AddProducts = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();
  const addTags = (event)=>{
    if(event.target.value !== ''){
      setTags([...tags, event.target.value]);
      event.target.value = '';
    }
  }

  // add product function
  const handleAddProduct = async e =>{
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const product_name = form.product_name.value;
    const category = form.category.value;
    const description = form.description.value;
    const image = form.image.files[0];
    const image_url = await imageUpload(image);
    const owner_name = form.owner_name.value;
    const owner_image = user?.photoURL;
    const owner_email = form.owner_email.value;
    const tag = tags;
    const links = form.links.value;
    const productData = {
      product_name,
      category,
      description,
      image: image_url?.data?.display_url,
      ownerInfo: {
        owner_name,
        owner_image,
        owner_email,
      },
      tag,
      links,
      status: "pending",
      upVote: 0,
      timestamp: Date.now(),
    };
     try {
       await addProduct(productData);
       toast.success("Product Added Successfully");
       navigate("/dashboard/my-products");
     } catch (error) {
       toast.error(error.message);
     } finally {
       setLoading(false);
     }
  }
  return (
    <div>
      <Helmet>
        <title>TechHaven | Add Products</title>
      </Helmet>
      <h1 className="text-5xl text-center text-gray-400">Add Product</h1>
      <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
        <form onSubmit={handleAddProduct}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="owner_name" className="block text-gray-600">
                  Owner Name
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="owner_name"
                  id="owner_name"
                  type="text"
                  placeholder="Owner Name"
                  defaultValue={user?.displayName}
                  readOnly
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="owner_image" className="block text-gray-600">
                  Owner Image
                </label>
                <p className="relative block">
                  <img
                    alt="profile"
                    src={user?.photoURL}
                    className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-rose-300"
                  />
                </p>
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="owner_email" className="block text-gray-600">
                  Owner Email
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="owner_email"
                  id="owner_email"
                  type="text"
                  placeholder="Owner Email"
                  defaultValue={user?.email}
                  readOnly
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="product_name" className="block text-gray-600">
                  Product Name
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="product_name"
                  id="product_name"
                  type="text"
                  placeholder="Product Name"
                  required
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="category" className="block text-gray-600">
                  Product Category
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md"
                  name="category"
                >
                  <option value={"featured"}>Featured</option>
                  <option value={"trending "}>Trending</option>
                </select>
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="image" className="block mb-2 text-sm">
                  Product Image
                </label>
                <input
                  required
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="tags" className="block text-gray-600">
                  Tags input
                </label>

                <ul className="flex gap-2 border border-rose-300 rounded-md py-4 px-2">
                  {tags.map((tag, index) => (
                    <li key={index}>
                      <span className="bg-green-400 p-2 rounded-xl ">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
                <input
                  onKeyUp={(e) => (e.key === "Shift" ? addTags(e) : null)}
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="tags"
                  id="tags"
                  type="text"
                  placeholder="press shift to add tags"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="links" className="block text-gray-600">
                  External Links
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="links"
                  id="links"
                  type="url"
                  placeholder="Links here"
                />
              </div>
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
  );
};

export default AddProducts;
