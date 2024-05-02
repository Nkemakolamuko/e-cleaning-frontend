import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import StoreCards from "../components/store/StoreCards";
import ProductDetails from "../components/store/ProductDetails";
import { FaSearch, FaTimes } from "react-icons/fa";
import data from "../../db/storeDB";
import { BgContext } from "../App";

const Store = () => {
  const { cartExistErr, cartAdded, darkMode } = useContext(BgContext);
  const [viewProducts, setViewProducts] = useState(false);
  const [searchProduct, setSearchProduct] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleViewDetails = (id) => {
    setViewProducts(!viewProducts);
    localStorage.setItem("store-id", id);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // I needed to add a return statement to make it fully work here --
  const filteredItems = data.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });

  function filteredData(data, selected, search) {
    let filteredProducts = data;
    // Filtering Input values - If there's a value in the search input, then thr data , which is the filteredProducts becomes the filteredItems (which we've specified how it should behave above) - and then the (map) is now done on the whatever was assigned to filteredProducts
    if (search) {
      filteredProducts = filteredItems;
    }

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
          key={id}
          id={id}
          img={img}
          title={title}
          handleViewDetails={() => handleViewDetails(id)}
          // star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }
  const result = filteredData(data, selectedCategory, search);

  return (
    <div className={`relative ${darkMode ? "dark-mode" : ""}`}>
      {cartAdded && (
        <p className="p-3 text-green-800 bg-white text-center rounded-full-md w-full md:w-1/3 ml-auto md:right-0 h-full transition-all duration-300 sticky top-0 right-0 z-[9999] shadow-2xl border-t border-t-green-500">
          Added to cart!
        </p>
      )}
      <Title title="Our Store" />

      <section className="mb-4 mt-2 lg:mt-4 lg:mb-8">
        {/* Available Products */}
        {!searchProduct && (
          <div className="flex items-start lg:items-center justify-between lg:justify-normal">
            <div className="flex flex-col lg:flex-row lg:items-center lg:w-[80%] w-[100%]">
              <p className="hidden lg:flex pr-2">Available Products: </p>
              <div className="flex items-center lg:hidden gap-3 mb-2">
                <p className="lg:hidden">Available Products: </p>
                <div
                  className="hover:rounded-lg rounded-md py-2 px-4 lg:hidden border text-slate-600 hover:text-black active:text-black hover:bg-slate-100 active:bg-slate-100 w-fit cursor-pointer transition-all duration-300"
                  onClick={() => {
                    setSearchProduct(true);
                  }}
                >
                  <FaSearch />
                </div>
              </div>
              <p className="flex items-center gap-2 overflow-auto scroll text-nowrap">
                <span className="py-2 px-4 text-center border rounded-full cursor-pointer text-sm">
                  Tie
                </span>
                <span className="py-2 px-4 text-center border rounded-full cursor-pointer text-sm">
                  Shoes
                </span>
                <span className="py-2 px-4 text-center border rounded-full cursor-pointer text-sm">
                  Shirts
                </span>
                <span className="py-2 px-4 text-center border rounded-full cursor-pointer text-sm">
                  Coffs
                </span>
                <span className="py-2 px-4 text-center border rounded-full cursor-pointer text-sm">
                  Cap
                </span>
                <span className="py-2 px-4 text-center border rounded-full cursor-pointer text-sm">
                  Socks
                </span>
                <span className="py-2 px-4 text-center border rounded-full cursor-pointer text-sm">
                  Slippers
                </span>
                <span className="py-2 px-4 text-center border rounded-full cursor-pointer text-sm">
                  Spray-starch
                </span>
              </p>
            </div>

            <div
              className="hidden lg:flex w-fit cursor-pointer lg:flex-row lg:py-3 lg:px-12 lg:text-center lg:justify-center lg:gap-2 lg:rounded lg:hover:bg-cyan-200 lg:items-center lg:pl-4 lg:bg-cyan-100 lg:border transition-all duration-300"
              onClick={() => {
                setSearchProduct(true);
              }}
            >
              <FaSearch />
              <span className="text-base text-slate-700">Search</span>
            </div>
          </div>
        )}

        {/* Search Products */}
        {/* max-w-[820px] */}
        {searchProduct && (
          <div className="flex flex-col lg:grid lg:grid-cols-4 lg:items-center gap-2 mb-4 w-full">
            <div className="flex items-center md:justify-between md:w-full gap-2 md:gap-0 lg:gap-2 lg:col-span-3">
              <p className="md:w-[20%]">Search Keywords: </p>
              <p className="flex items-center gap-2 text-nowrap overflow-auto w-full mt-1 md:w-[80%] scroll">
                <span className="py-2 px-4 border rounded-full text-sm">
                  All
                </span>

                <span className="py-2 px-4 border rounded-full text-sm">
                  Tie
                </span>
                <span className="py-2 px-4 border rounded-full text-sm">
                  Above ₦ 10, 000
                </span>
                <span className="py-2 px-4 border rounded-full text-sm">
                  Below ₦ 10, 000
                </span>
                <span className="py-2 px-4 border rounded-full text-sm">
                  Cloths
                </span>

                <span className="py-2 px-4 border rounded-full text-sm">
                  Shoes
                </span>
                <span className="py-2 px-4 border rounded-full text-sm">
                  Promo Items
                </span>
                <span className="py-2 px-4 border rounded-full text-sm">
                  Reviews - 50 and above
                </span>
                <span className="py-2 px-4 border rounded-full text-sm">
                  Flats
                </span>
              </p>
            </div>

            <div className="flex items-center gap-2 w-full md:w-[60%] lg:w-[100%] lg:col-span-1 lg:pl-4 md:container md:mx-auto">
              <input
                type="text"
                className="border border-cyan-400 rounded px-2 py-3 lg:py-3 text-sky-500 w-full outline-none caret-sky-500"
                placeholder="Search for product"
                value={search}
                onChange={handleSearchChange}
              />
              <p
                className="p-3 lg:p-1 rounded-full text-rose-500 hover:bg-rose-500 hover:text-white cursor-pointer hover:border-rose-500 transition-all duration-300"
                onClick={() => {
                  setSearchProduct(false);
                  setSearch("");
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
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-[100%] place-content-center gap-4 transition-all duration-300">
          {result}
        </section>
      )}

      {/* Details PopUp */}
      <div className="fixed w-full top-0 left-0 z-[999]">
        {viewProducts && (
          <ProductDetails
            handleCloseProduct={() => {
              setViewProducts(false);
            }}
          />
        )}
      </div>
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
