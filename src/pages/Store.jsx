import React, { useState } from "react";
import Title from "../components/Title";
import StoreCards from "../components/store/StoreCards";
import ProductDetails from "../components/store/ProductDetails";

const Store = () => {
  const [viewProducts, setViewProducts] = useState(false);
  const handleViewDetails = () => {
    setViewProducts(!viewProducts);
  };
  return (
    <div className="relative">
      <Title title="Our Store" />

      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-[100%]  place-content-center gap-4 transition-all duration-300">
        <StoreCards handleViewDetails={handleViewDetails} />
        <StoreCards handleViewDetails={handleViewDetails} />
        <StoreCards handleViewDetails={handleViewDetails} />
        <StoreCards handleViewDetails={handleViewDetails} />
        <StoreCards handleViewDetails={handleViewDetails} />
        <StoreCards handleViewDetails={handleViewDetails} />
        <StoreCards handleViewDetails={handleViewDetails} />
        <StoreCards handleViewDetails={handleViewDetails} />
        <StoreCards handleViewDetails={handleViewDetails} />
        <StoreCards handleViewDetails={handleViewDetails} />
        <StoreCards handleViewDetails={handleViewDetails} />
        <StoreCards handleViewDetails={handleViewDetails} />
        <StoreCards handleViewDetails={handleViewDetails} />
        <StoreCards handleViewDetails={handleViewDetails} />
        <StoreCards handleViewDetails={handleViewDetails} />
        <StoreCards handleViewDetails={handleViewDetails} />
        <StoreCards handleViewDetails={handleViewDetails} />
        <StoreCards handleViewDetails={handleViewDetails} />
        <StoreCards handleViewDetails={handleViewDetails} />
        <StoreCards handleViewDetails={handleViewDetails} />
        <StoreCards handleViewDetails={handleViewDetails} />
        <StoreCards handleViewDetails={handleViewDetails} />
        <StoreCards handleViewDetails={handleViewDetails} />
        <StoreCards handleViewDetails={handleViewDetails} />
      </section>

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
