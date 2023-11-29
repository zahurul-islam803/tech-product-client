/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// eslint-disable-next-line react/prop-types
const Review = ({ filterReviewData }) => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {filterReviewData?.map((review) => (
          <SwiperSlide key={review._id}>
            <h1 className="text-xl text-gray-500 text-center">{review?.reviewerInfo.reviewer_name}</h1>
            <p className="relative block">
              <img
                alt="profile"
                src={review?.reviewerInfo.reviewer_image}
                className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-rose-300"
              />
            </p>
            <p className="text-center">Review: {review?.description}</p>
            <p className="text-center">Rating: {review?.rating}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Review;