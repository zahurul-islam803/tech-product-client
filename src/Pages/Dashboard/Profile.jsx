import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import { useState } from "react";
import SubscriptionModal from "../../Components/Modal/SubscriptionModal";
import { useQuery } from "@tanstack/react-query";
import { getSubscriptions } from "../../api/subscription";

const Profile = () => {
  const { user, loading} = useAuth();
  const [role] = useRole();
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => {
      setIsOpen(false);
    };
    let price = 159;
    const [subscriptionInfo, setSubscriptionInfo] = useState({
      guest: {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      },
      price: price,
    });

    const {
      data: subscription = [],
       refetch
    } = useQuery({
      queryKey: ["subscription", user?.email],
      enabled: !loading,
      queryFn: async () => await getSubscriptions(user?.email),
    });
    const subscriptEmail = subscription.map(subscript => subscript.guest.email );
    refetch();
      
  return (
    <div className="flex justify-center items-center h-screen">
      <Helmet>
        <title>TechHaven | Profile</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-2xl lg:w-3/5 md:w-4/5 w-5/5">
        <img
          alt="profile"
          src="https://wallpapercave.com/wp/wp10784415.jpg"
          className="w-full mb-4 rounded-t-lg h-36"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <p className="p-2 px-4 text-xs text-white bg-pink-500 rounded-full">
            {role && role.toUpperCase()}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black ">
                  {user?.displayName}
                </span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black ">{user?.email}</span>
              </p>

              <div>
                <p className="text-[#F43F5E] text-xl block mb-2">
                  Subscription MemberShip
                </p>
                {user?.email === subscriptEmail[0] ? (
                  <button className="bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]">
                    verified
                  </button>
                ) : (
                  <button
                    onClick={() => setIsOpen(true)}
                    className="bg-[#F43F5E] px-9 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]"
                  >
                    $159
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubscriptionModal
        closeModal={closeModal}
        isOpen={isOpen}
        subscriptionInfo={subscriptionInfo}
      ></SubscriptionModal>
    </div>
  );
};

export default Profile;
