import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import StoreCards from "../components/store/StoreCards";
import ProductDetails from "../components/store/ProductDetails";
import { FaSearch, FaTimes } from "react-icons/fa";
import data from "../../db/storeDB";

const Store = () => {
  const [viewProducts, setViewProducts] = useState(false);
  const [searchProduct, setSearchProduct] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleViewDetails = (id) => {
    setViewProducts(!viewProducts);
    localStorage.setItem("store-id", id);
  };

  // const filteredTasks = tasks.filter((task) =>
  //   task.text.toLowerCase().includes(search.toLowerCase())
  // );

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredItems = data.filter((product) => {
    product.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !==
      -1;
    // product.title.toLowerCase().includes(search.toLowerCase());
  });

  // console.log(filteredItems);

  function filteredData(data, selected, search) {
    let filteredProducts = data;
    // Filtering Input values
    if (search) {
      filteredProducts = filteredItems;
      console.log("Inside Search ", filteredProducts);
    }
    console.log("After Search: ", filteredProducts);

    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ newPrice, prevPrice, title }) =>
          newPrice === selected || prevPrice === selected || title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice, id }) => (
        <StoreCards
          // key={uuid4()}
          key={id}
          // id={id}
          // img={img}
          title={title}
          handleViewDetails={() => handleViewDetails(id)}
          // star={star}
          // reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }
  const result = filteredData(data, selectedCategory, search);

  // I am trying to make my search queries return a card -- still on it

  return (
    <div className="relative">
      <Title title="Our Store" />

      <section className="mb-4 mt-2 md:mt-4 md:mb-8">
        {/* Available Products */}
        {!searchProduct && (
          <div className="flex items-start justify-between md:justify-normal">
            <div className="flex flex-col md:flex-row md:items-center md:w-[80%] w-[100%]">
              <p className="hidden md:flex pr-2">Available Products: </p>
              <div className="flex items-center md:hidden gap-3 mb-2">
                <p className="md:hidden">Available Products: </p>
                <div
                  className="rounded-full md:hidden border text-slate-600 p-2 w-fit"
                  onClick={() => {
                    setSearchProduct(true);
                  }}
                >
                  <FaSearch />
                </div>
              </div>
              <p className="flex items-center gap-2  overflow-auto">
                <span className="py-2 px-4 text-center border rounded cursor-pointer">
                  Tie
                </span>
                <span className="py-2 px-4 text-center border rounded cursor-pointer">
                  Shoes
                </span>
                <span className="py-2 px-4 text-center border rounded cursor-pointer">
                  Shirts
                </span>
                <span className="py-2 px-4 text-center border rounded cursor-pointer">
                  Coffs
                </span>
                <span className="py-2 px-4 text-center border rounded cursor-pointer">
                  Coffs
                </span>
                <span className="py-2 px-4 text-center border rounded cursor-pointer">
                  Coffs
                </span>
                <span className="py-2 px-4 text-center border rounded cursor-pointer">
                  Coffs
                </span>
                <span className="py-2 px-4 text-center border rounded cursor-pointer">
                  Comb
                </span>
              </p>
            </div>

            <div className="hidden md:flex w-fit cursor-pointer md:flex-col md:items-center md:pl-4">
              <div
                className="rounded-full border text-slate-600 p-2"
                onClick={() => {
                  setSearchProduct(true);
                }}
              >
                <FaSearch />
              </div>
              <span className="text-xs text-slate-700">Search</span>
            </div>
          </div>
        )}

        {/* Search Products */}
        {/* max-w-[820px] */}
        {searchProduct && (
          <div className="flex flex-col md:grid md:grid-cols-4 md:items-center gap-2 mb-4 w-full">
            <div className="flex items-center gap-2 md:col-span-3">
              <p>Search Keywords: </p>
              <p className="flex items-center gap-2 text-nowrap overflow-auto">
                <span className="py-2 px-4 border">All</span>

                <span className="py-2 px-4 border">Tie</span>
                <span className="py-2 px-4 border">Tie</span>
                <span className="py-2 px-4 border">Below 10, 000</span>
                <span className="py-2 px-4 border">Tie</span>

                <span className="py-2 px-4 border">Tie</span>
                <span className="py-2 px-4 border">Tie</span>
                <span className="py-2 px-4 border">Tie</span>
                <span className="py-2 px-4 border">Tie</span>
              </p>
            </div>

            <div className="flex items-center gap-2 w-full md:col-span-1 pl-4">
              <input
                type="text"
                className="border border-cyan-400 rounded px-2 py-3 md:py-3 text-sky-500 w-full outline-none caret-sky-500"
                placeholder="Search for product"
                value={search}
                onChange={handleSearchChange}
              />
              <p
                className="p-3 md:p-1 rounded-full text-rose-500 hover:bg-rose-500 hover:text-white cursor-pointer hover:border-rose-500 transition-all duration-300"
                onClick={() => {
                  setSearchProduct(false);
                }}
              >
                <FaTimes className="md:w-6 md:h-6" />
              </p>
            </div>
          </div>
        )}
      </section>

      {result.length === 0 ? (
        <p className="text-center mt-[40px] text-lg text-slate-600">
          Product not found or unavailable.
        </p>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-[100%] place-content-center gap-4 border-t transition-all duration-300">
          {/* {filteredProduct.map(({ title, prevPrice, newPrice, id }) => (
          <StoreCards
            handleViewDetails={() => handleViewDetails(id)}
            title={title}
            newPrice={newPrice}
            prevPrice={prevPrice}
            key={id}
          />
        ))} */}
          {result}
        </section>
      )}

      {/* Details PopUp */}
      {viewProducts && (
        <ProductDetails
          handleCloseProduct={() => {
            setViewProducts(false);
          }}
        />
      )}
      {/* <p>
        Buy from here - I will make the cards infinite scroll and when the user
        click on any, it will open in a new component with the details
      </p>
      <p>
        The card will have a button that says 'details' - a button with white
        background and a border when hovered on turns black with white text
      </p>
      <p>
        I will add the buy buttons in the pop which will lead them to checkout
        page.
      </p>
      <p>I can also add sections to the Store page and search as well</p> */}
    </div>
  );
};

export default Store;
