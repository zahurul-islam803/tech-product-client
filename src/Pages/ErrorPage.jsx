import errorGif from '../../src/assets/404.gif'
const ErrorPage = () => {
  return (
    <div className="flex justify-center py-2 mt-7 max-w-[1250px] mx-auto">
      <div className="max-w-[850px]">
       <img src={errorGif} alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;