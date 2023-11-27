import axiosSecure from "./index";

// save product to database
export const addProduct = async (productData) => {
  const { data } = await axiosSecure.post(`/products`, productData);
  return data;
};

// get all product data
export const getAllRooms = async () => {
  const { data } = await axiosSecure.get("/rooms");
  return data;
};

// get rooms data for host
export const getHostRooms = async (email) => {
  const { data } = await axiosSecure.get(`/rooms/${email}`);
  return data;
};

// get single room data from database
export const getRoom = async (id) => {
  const { data } = await axiosSecure.get(`/room/${id}`);
  return data;
};
