/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { deleteProduct } from "../../api/product";
import toast from "react-hot-toast";

const ReportedProductDataRow = ({ product, refetch }) => {
  const handleDelete = async (id) => {
   try {
     await deleteProduct(id);
     toast.success('Product Deleted!')
     refetch();
   } catch (error) {
    toast.error(error.message);
   }
  }
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {product?.product_name}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <Link to={`/product/${product._id}`}>
            <span className="relative">View Details</span>
          </Link>
        </span>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span onClick={()=> handleDelete(product._id)} className="relative">Delete</span>
        </span>
      </td>
    </tr>
  );
};

export default ReportedProductDataRow;