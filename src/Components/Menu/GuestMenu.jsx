import { CgProfile } from "react-icons/cg";
import { MdOutlineAddHomeWork, MdList } from "react-icons/md";
import MenuItem from "../MenuItem/Menuitem";

const GuestMenu = () => {
  return (
    <>
      <MenuItem icon={CgProfile} label="My Profile" address="my-profile" />
      <MenuItem
        icon={MdOutlineAddHomeWork}
        label="Add Product "
        address="add-product"
      />
      <MenuItem icon={MdList} label="My Products" address="my-products" />
    </>
  );
};

export default GuestMenu;
