import React from "react";
import Title from "../components/Title";
import OngoingOrder from "../components/orders/OngoingOrder";

const Orders = () => {
  return (
    <div className="h-full w-full mb-8">
      <Title title="Ongoing Orders" />

      <h2 className="tracking-widest">24 HOURS DELIVERY GUARANTEED</h2>
      <section className="grid h-[80vh] w-full grid-cols-1 md:grid-cols-2 mt-5 gap-6 md:gap-8">
        <OngoingOrder />
        <OngoingOrder />
        <OngoingOrder />
        <OngoingOrder />
        <OngoingOrder />
        <OngoingOrder />
      </section>
    </div>
  );
};

export default Orders;
