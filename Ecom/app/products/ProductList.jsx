"use client";
import React, { useContext } from "react";
import CardProducts from "@/components/CardProducts";
import { Store } from "@/context/store";

const ProductList = ({ products }) => {
  const { ToSearch } = useContext(Store);
  const resultSearch = products.filter(
    (product) =>
      product.nom.toLowerCase().includes(ToSearch.toLowerCase()) ||
      product.categories.toLowerCase().includes(ToSearch.toLowerCase()) ||
      product.type.toLowerCase().includes(ToSearch.toLowerCase())
  );

  return (
    <section className="productlist">
      {ToSearch
        ? resultSearch.map((product) => (
            <CardProducts product={product} key={product.id} />
          ))
        : products.map((product) => (
            <CardProducts product={product} key={product.id} />
          ))}
      {resultSearch.length <= 0 && (
        <h1 className="no-article">Ops!! article non disponible</h1>
      )}
    </section>
  );
};

export default ProductList;
