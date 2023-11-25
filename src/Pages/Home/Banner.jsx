import banner from '../../assets/banner-tech-1.jpg'
const Banner = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-content text-center">
          <div className="">
            <h1 className="mb-5 text-white text-5xl uppercase font-bold">
              Welcome to tech haven
            </h1>
            <p className="mb-5 hidden md:block text-white">
              Your ultimate destination for all things tech! Dive into a world
              of innovation, where we explore the latest in technology trends,
              conduct in-depth gadget reviews, and foster a community of tech
              enthusiasts. Whether you're a seasoned pro or a curious beginner,
              our curated content and vibrant forums provide a space to stay
              informed, inspired, and connected. Join us on the cutting edge of
              technology – Tech Haven, where the future unfolds today.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;