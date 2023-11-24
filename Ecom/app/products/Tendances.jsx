import SlideTendance from "@/components/SlideTendance";
import React from "react";
import axios from "axios";

const getProducts = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/products");
    return res.data.results;
  } catch (err) {
    console.error(err);
  }
};

const Tendances = async () => {
  const products = await getProducts();
  return (
    <section className="tendance">
      <section className="title-underline">
        <div></div>
        <h2>Tendance</h2>
        <div></div>
      </section>
      <SlideTendance products={products} />
    </section>
  );
};

export default Tendances;
