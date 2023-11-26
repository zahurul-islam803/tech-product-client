import axiosSecure from "./index";

export const cretePaymentIntent = async (price) => {
  const { data } = await axiosSecure.post("/create-payment-intent", price);
  return data;
};

// save subscription info in db
export const saveSubscriptionInfo = async (paymentInfo) => {
  const { data } = await axiosSecure.post("/subscription", paymentInfo);
  return data;
};

// get subscription collection for a guest by email
export const getSubscriptions = async (email) => {
  const { data } = await axiosSecure.get(`/subscriptions?email=${email}`);
  return data;
};
