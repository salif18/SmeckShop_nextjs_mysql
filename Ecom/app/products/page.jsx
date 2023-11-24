import React, { Suspense } from "react";
import ProductList from "./ProductList";
import NavCategorie from "@/components/NavCategorie";
import axios from "axios";
import Loading from "../loading";

const getProducts = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/products");
    const { results } = await res.data;
    return results;
  } catch (err) {
    console.error(err);
  }
};

const Page = async () => {
  const products = await getProducts();
  return (
    <main className="products">
      <NavCategorie />
      <section className="container">
        <section className="title-underline">
          <div></div>
          <h2>Nos articles</h2>
          <div></div>
        </section>
      </section>
      <Suspense fallback={<Loading />}>
        <section className="listproduct">
          <ProductList products={products} />
        </section>
      </Suspense>
    </main>
  );
};

export default Page;

// <section className="title-underline">
//           <div></div>
//           <h2>Tendance</h2>
//           <div></div>
//         </section>
//         <Tendances />
