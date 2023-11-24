import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardProducts = ({ product }) => {
  const { id, nom, prix_vente, photo, categories } = product;

  return (
    <article className="card-product">
      <figure>
        <Image
          className="img"
          src={photo}
          alt=""
          width={300} // Largeur souhaitée en pixels
          height={200}
        />
      </figure>
      <section className="infos-card">
      <span>{categories}</span>
        <h2>{nom}</h2>
        <p>{prix_vente} FCFA</p>
      </section>
      <Link className="link" href={`/products/${id}`}>
      <button className="btn-view"> 
          voir
      </button>
      </Link>
    </article>
  );
};

export default CardProducts;
