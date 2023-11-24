"use client";
import { Store } from "@/context/store";
import Image from "next/image";
import React, { useContext } from "react";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CardPanier = ({ product }) => {
  const { nom, photo, prix, qty } = product;
  const { incremente, decremente, deleteTopanier } = useContext(Store);

  return (
    <article className="card-panier" key={product.id}>
      <section className="left">
        <figure>
          <Image src={photo} alt="" width={80} height={80} />
        </figure>
      </section>
      <section className="donnee">
        <h2 className="title">{nom}</h2>
        <p>{prix * qty}Fcfa</p>
      </section>
      <section className="rigth">
        <button className="btn-in" onClick={() => incremente(product)}>
          <KeyboardArrowUpIcon className="icon" />
        </button>
        <p>{qty}</p>
        <button className="btn-dec" onClick={() => decremente(product)}>
          <KeyboardArrowDownIcon className="icon" />
        </button>
        <button className="btn-del" onClick={() => deleteTopanier(product.id)}>
          <DeleteSweepIcon className="icon" />
        </button>
      </section>
    </article>
  );
};

export default CardPanier;
