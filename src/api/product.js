import axiosSecure from "./index";

// save product to database
export const addProduct = async (productData) => {
  const { data } = await axiosSecure.post(`/products`, productData);
  return data;
};

// get all product data
export const getAllProduct = async () => {
  const { data } = await axiosSecure.get("/products");
  return data;
};
// get all product sort by timestamp latest product data
export const getSortTimestamp = async () => {
  const { data } = await axiosSecure.get("/products?sortField=timestamp&sortOrder=desc");
  return data;
};


// get single product data from database
export const getProduct = async (id) => {
  const { data } = await axiosSecure.get(`/product/${id}`);
  return data;
};
