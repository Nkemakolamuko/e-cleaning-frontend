import React from "react";
import Title from "../../components/Title";

const AdminCreateProducts = () => {
  return (
    <div>
      <Title title={"Create Product"} />

      <form className="border p-4 flex flex-col w-full md:w-[70%] lg:w-[50%] text-slate-700 text-sm gap-4 shadow">
        <p className="flex flex-col w-full gap-1">
          <label htmlFor="title" className="text-base font-medium">
            Product Title
          </label>
          <input
            type="text"
            className="py-3 px-2 rounded border outline-none"
            placeholder="Enter Product Title"
          />
        </p>
        <p className="flex flex-col w-full gap-1">
          <label htmlFor="prev-price" className="text-base font-medium">
            Previous Price
          </label>
          <input
            type="text"
            className="py-3 px-2 rounded border outline-none"
            placeholder="Enter Product Previous Price"
          />
        </p>
        <p className="flex flex-col w-full gap-1">
          <label htmlFor="new-price" className="text-base font-medium">
            New Price
          </label>
          <input
            type="text"
            className="py-3 px-2 rounded border outline-none"
            placeholder="Enter Product New Price"
          />
        </p>
        <p className="flex flex-col w-full gap-1">
          <label htmlFor="available-qty" className="text-base font-medium">
            Available Quantity
          </label>
          <input
            type="text"
            className="py-3 px-2 rounded border outline-none"
            placeholder="Enter Product Available Quantity"
          />
        </p>
        <p className="flex flex-col w-full gap-1">
          <label htmlFor="category" className="text-base font-medium">
            Category
          </label>
          <input
            type="text"
            className="py-3 px-2 rounded border outline-none"
            placeholder="Enter Product Category"
          />
        </p>
        <p className="flex flex-col w-full gap-1">
          <label htmlFor="company" className="text-base font-medium">
            Company
          </label>
          <input
            type="text"
            className="py-3 px-2 rounded border outline-none"
            placeholder="Enter Product Company"
          />
        </p>
        <p className="flex flex-col w-full gap-1">
          <label htmlFor="desc" className="text-base font-medium">
            Description
          </label>
          <textarea
            name="desc"
            id="desc"
            className="py-3 px-2 rounded border outline-none resize-none"
            placeholder="Enter Product Description"
            rows={5}
            cols={10}
          ></textarea>
        </p>
        <p className="flex flex-col w-full gap-1">
          <label htmlFor="image" className="text-base font-medium">
            Image
          </label>
          <input
            type="text"
            className="py-3 px-2 rounded border outline-none"
            placeholder="Enter Image URL"
          />
          <span>OR</span>
          <input
            id="image"
            title="Click to select file"
            type="file"
            className="py-3 px-2 rounded border outline-none cursor-pointer"
            placeholder="Enter Product Image"
          />
        </p>
        <input
          type="button"
          value="Publish"
          className="py-3 px-2 rounded border outline-none bg-green-500 cursor-pointer text-white font-semibold md:w-1/3"
        />
        {/* I'd make a post request to the product endpoint, then show a success message and after few seconds navigate to all product page where a useEffect will make a get request */}
      </form>
    </div>
  );
};

export default AdminCreateProducts;
