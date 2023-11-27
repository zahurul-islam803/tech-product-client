/* eslint-disable react/prop-types */
import { BounceLoader} from "react-spinners";
const Loader = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? "h-[250px]" : "h-[70vh]"}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <BounceLoader size={100} color="#36d7b7" />
    </div>
  );
};

export default Loader;