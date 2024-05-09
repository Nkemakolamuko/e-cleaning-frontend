import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import image from "../../assets/download.jpg";
import { FaPen, FaTrashCan } from "react-icons/fa6";
import data from "../../../db/storeDB";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div>
      <Title title={"Products"} />

      <div className="p-4 flex flex-col border gap-4">
        <select
          name="category"
          id="category"
          className="w-full md:w-1/2 border rounded px-2 py-2 text-sm"
        >
          <option value="Category">---Select Category---</option>
          <option value="category">All</option>
          {products?.map((product) => (
            <option value={product.category} key={product.id}>
              {product.category}
            </option>
          ))}
        </select>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products?.map((product) => (
            <div
              className="border rounded flex flex-col w-full p-2 text-center"
              key={product.id}
            >
              <div className="w-full h-[220px]">
                <img
                  src={product.img}
                  alt="Product Image"
                  className="w-full h-full"
                />
              </div>
              <p className="py-2">{product.title}</p>
              <p className="pb-2 font-medium">{product.newPrice}</p>

              <div className="w-full flex flex-col md:flex-row items-center gap-2">
                <p className="rounded text-center py-3 border border-green-500 text-green-500 active:scale-95 cursor-pointer w-full flex justify-center">
                  <FaPen />
                </p>
                <p className="rounded text-center py-3 border border-rose-500 text-rose-500 active:scale-95 cursor-pointer w-full flex justify-center">
                  <FaTrashCan />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
