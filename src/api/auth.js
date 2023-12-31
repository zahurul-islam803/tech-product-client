
import axiosSecure from './index'
// save user to database
export const saveUser = async (user) => {
  const currentUser = {
    name: user.displayName,
    email: user.email,
    role: "guest",
    status: "Verified",
  };
  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);
  return data;
};

// get token from server
export const getToken = async (email) => {
  const { data } = await axiosSecure.post(`/jwt`, { email });
  console.log("get token from server", data);
  return data;
};

// clear token from server
export const clearCookie = async () => {
  const { data } = await axiosSecure.get("/logout");
  return data;
};

// get user role
export const getRole = async (email) => {
  const { data } = await axiosSecure.get(`/users/${email}`);
  return data.role;
};

// get all users
export const getAllUsers = async () => {
  const { data } = await axiosSecure.get("/users");
  return data;
};

// update user role to database
export const updateRole = async ({ email, role }) => {
  const currentUser = {
    email,
    role,
    status: "Verified",
  };
  const { data } = await axiosSecure.put(`/users/update/${email}`, currentUser);
  return data;
};

// get stats data
// export const getStats = async () =>{
//   const { data } = await axiosSecure.get("/admin-stats");
//   return data;
// }