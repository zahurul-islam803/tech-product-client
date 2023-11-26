import { MdOutlineRateReview } from "react-icons/md";
import { VscReport } from "react-icons/vsc";
import MenuItem from "../MenuItem/Menuitem";

const ModeratorMenu = () => {
  return (
    <>
      <MenuItem
        icon={MdOutlineRateReview}
        label="Product Review Queue"
        address="product-review-queue"
      />
      <MenuItem
        icon={VscReport}
        label="Reported Contents"
        address="reported-contents"
      />
    </>
  );
};

export default ModeratorMenu;
