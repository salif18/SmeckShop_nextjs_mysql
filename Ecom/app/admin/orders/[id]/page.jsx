"use client";
import React from "react";
import OrderArticle from "@/components/OrderArticle";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Page = () => {

  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [client, setClient] = useState([]);
  const [articles , setArticles] = useState([])

//   recuperer la commande
  useEffect(() => {
    const getOrders = async () => {
      try {
        // await new Promise((resolve) => setTimeout(resolve, 3000));
        const res = await fetch(`/api/orders/${id}`);
        if (res.ok) {
          const { orders, productBuys } = await res.json();
          setOrder(orders);
          setArticles(productBuys)
        } else {
          notFound();
        }
      } catch (err) {
        console.error(err);
      }
    };
    getOrders();
  }, []);

 
//recuperation des clients
  useEffect(() => {
    const getClients = async () => {
      try {
        const res = await axios.get(`/api/clients`);
        if (res) {
          const { results } = await res.data;
          setClient(results);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getClients();
  }, []);

//   recuperer la ligne commande et lesarticle de la lignecommande
  useEffect(() => {
    const getOrders = async () => {
      try {
        // await new Promise((resolve) => setTimeout(resolve, 3000));
        const res = await fetch(`http://localhost:3000/api/lignecommandes/${id}`);
        if (res.ok) {
          const { results } = await res.json();
          const resultArticle = results.map(async(item)=>{
            const response = await fetch('http://localhost:3000/api/products/'+ item.articleId);
            return response.json().results;
          })
          const article = await Promise.all(resultArticle)
          setArticles(article)
          
        } else {
          notFound();
        }
      } catch (err) {
        console.error(err);
      }
    };
    getOrders();
  }, []);

  
  const user = client.find((item) => item.id === order.clientId)
 

  return (
    <main className="detail-commande">
      <h2>Infos de la commande</h2>
      <section className="infos">
        <figure>
          <Image
            src=""
            width={80}
            height={80}
            objectFit="contain"
            alt="photo"
          />
        </figure>
        <section className="donnees">
          <h2>
            Nom <span>{ user && user.nom}</span>
          </h2>
          <h2>
            Prenom<span>{user && user.prenom}</span>
          </h2>
          <h2>
            Numero<span>{user && user.numero}</span>
          </h2>
          <h2>
            Addresse<span></span>
          </h2>
        </section>
      </section>
      <section className="orderliste">
        <h2>Commande du client</h2>
        {articles && articles.map((item) => <OrderArticle item={item} key={item.id} />)}
      </section>
    </main>
  );
};

export default Page;
