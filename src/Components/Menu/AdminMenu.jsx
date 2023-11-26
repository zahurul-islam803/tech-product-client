import { FcStatistics } from "react-icons/fc";
import { FaUserCog } from "react-icons/fa";
import { RiCoupon3Line } from "react-icons/ri";
import MenuItem from "../MenuItem/Menuitem";
const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={FcStatistics}
        label="Statistics Page"
        address="statistics-page"
      />
      <MenuItem icon={FaUserCog} label="Manage Users" address="manage-users" />
      <MenuItem
        icon={RiCoupon3Line}
        label="Manage Coupons"
        address="manage-coupons"
      />
    </>
  );
};

export default AdminMenu;
