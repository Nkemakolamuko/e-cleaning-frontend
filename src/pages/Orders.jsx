import React from "react";
import Title from "../components/Title";

const Orders = () => {
  return (
    <div className="h-full w-full">
      <Title title="Orders" />

      <section className="flex h-full w-full items-center justify-center">
        <p>You don't have any orders right now</p>
      </section>
    </div>
  );
};

export default Orders;
