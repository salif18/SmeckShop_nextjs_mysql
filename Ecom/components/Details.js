"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useContext, useState } from "react";
import { Store } from "@/context/store";
import Relateproduct from "./Relateproduct";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const Details = ({ article }) => {
  const { nom, photo, details, prix_vente, type } = article;
  const { setPanier, panier } = useContext(Store);
  const [count, setCount] = useState(1);
  const [taille, setTaille] = useState("");
  const [alertText, setAlertText] = useState("");
  const [productRelate, setProductRelate] = useState([]);
  console.log(article)

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/products`)
      .then((res) =>
      
        setProductRelate(res.data.results.filter((item) => item.type === article.type))
      )
      .catch((err) => console.error(err));
  }, []);

  const handleIncre = () => {
    setCount(() => count + 1);
  };

  const handleDecre = () => {
    setCount(() => count - 1);
  };

  const addToCart = (product) => {
    setPanier([
      ...panier,
      { ...product, qty: count, prix: prix_vente, tailles: taille },
    ]);
    localStorage.setItem('panier',JSON.stringify(panier))
    setAlertText("Ajouté à votre panier");
  };

  

  const tailles = [
    { id: 0, value:'', label:'Choisissez votre pointure'},
    { id: 1, value: "xl", label: "XL" },
    { id: 2, value: "xxl", label: "XXL" },
    { id: 3, value: "m", label: "M" },
    { id: 4, value: "l", label: "L" },
  ];
  const pointures = [
    { id: 0, value:'', label:'Choisissez votre pointure'},
    { id: 1, value: 32, label: 32 },
    { id: 2, value: 35, label: 35 },
    { id: 3, value: 40, label: 42 },
    { id: 4, value: 45, label: 45 },
  ];
  setTimeout(() => {
    setAlertText("");
  }, 3000);

  return (
    <article className="single-product">
      <section className="left-single">
        <h2>{nom}</h2>
        <section className="barre"></section>
        <p>{prix_vente * count}</p>
        <figure>
          <Image
            src={photo}
            alt=""
            width={300}
            height={300}
            className="image"
          />
        </figure>
        <h2>relative product</h2>
        <section className="barre"></section>
        <section className="relative">
          <section className="container-swiper">
            <Swiper
              className="swiper"
              modules={[Pagination]}
              slidesPerView={4}
              pagination={{ clickable: false }}
              
            >
              {productRelate.map((product) => (
                <SwiperSlide className="swiper-card " key={product.id}>
                  <Relateproduct product={product} key={product.id} />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </section>
      </section>
      <section className="infos-single">
        <h2>Description</h2>
        <section className="desc">
          <p>{details}</p>
        </section>
        <section className="choix">
          {type === "vetements" && <p>Taille</p>}
          {type === "chaussure" && <p>Pointures</p>}
          <form>
            {type === "vetements" && (
              <select
                name="taille"
                value={taille}
                onChange={(e) => setTaille(e.target.value)}
              >
                {tailles.map((taille) => (
                  <option value={taille.value} key={taille.id}>
                    {taille.label}
                  </option>
                ))}
              </select>
            )}
            {type === "chaussure" && (
              <select
                value={taille}
                onChange={(e) => setTaille(e.target.value)}
              >
                {pointures.map((taille) => (
                  <option value={taille.value} key={taille.id}>
                    {taille.label}
                  </option>
                ))}
              </select>
            )}
          </form>
          <p className="alert">{alertText}</p>
        </section>
        <section className="btns-group">
          <button className="btn-incre" onClick={handleIncre}>
            +
          </button>
          <p>{count * 1}</p>
          <button className="btn-decre" onClick={handleDecre}>
            -
          </button>
          <button className="btn-ad" onClick={() => addToCart(article)}>
            Ajouter au panier
          </button>
        </section>
      </section>
    </article>
  );
};

export default Details;
