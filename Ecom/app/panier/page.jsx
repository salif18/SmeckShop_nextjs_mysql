"use client";
import CardPanier from "@/components/CardPanier";
import { Store } from "@/context/store";
import Image from "next/image";
import { useContext, useState } from "react";
import cart  from '@/public/assets/cart.jpg'
import axios from "axios";

const Page = () => {
  const { userId, panier, setPanier, total, quantity } = useContext(Store);
  const [ville ,setVille ] = useState('')
  const [quartier , setQuartier] = useState('')
  const [rue ,setRue] = useState('')
  const [porte, setPorte] = useState('')
  const [log , setLog] = useState('')

  const [errorForm, setErrorForm] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault()
    if ( ville.length > 0 && quartier.length > 0 && rue.length > 0 && porte.length > 0 && log.length > 0 ) {
      axios.post('http://localhost:3000/api/orders',{ 
        clientId:userId, panier:panier, total:total, ville:ville,
        quartier:quartier, rue:rue, porte:porte, log:log}
        )
      .then((res)=>res.data)
      .catch((err)=> console.error(err));
      setVille('')
      setQuartier('')
      setRue('')
      setPorte('')
      setLog('')
      setPanier([]);
    } else {
      setErrorForm("Veuillez bien remplir les champs");
    }
  };

   setTimeout(()=>{setErrorForm('')},3000)
  return (
    <main className="panier">
      <section className="cart-prod">
     
        {panier.length > 0 ? (
          panier.map((product) => (
            <CardPanier product={product} key={product.id} />
          ))
        ) : (
          <section className="zone-vide">
          <Image src={cart} width={200} height={200} alt="" />
          <h2 className="vide">Votre panier est vide </h2>
          </section>
        )}
      </section>
      <section className="calcule">
      <h1>Recapitulatif du panier</h1><hr></hr>
      <h2><strong>Nombre d'articles</strong> <span>{quantity}</span></h2>
      <h2>
      <strong>Total</strong> <span>{total} Fcfa</span>
    </h2>
      </section>
      <section className="calc">
        <h1>Addresse de livraison</h1>
        <form className="formu-env">
          <section className="left">
            <label>
             <span>{ville.length <= 0 && errorForm}</span>
              <input
                type="text"
                name="ville"
                value={ville}
                onChange={(e)=>setVille(e.target.value)}
                placeholder="Ville"
              />
              
            </label>
            <label> 
            <span>{quartier.length <= 0 && errorForm}</span>
              <input
                type="text"
                name="quartier"
                value={quartier}
                onChange={(e)=>setQuartier(e.target.value)}
                placeholder="Quartier"
              />
             
            </label>
            <label>
            <span>{rue.length <= 0 && errorForm}</span>
              <input
                type="number"
                name="rue"
                value={rue}
                onChange={(e)=>setRue(e.target.value)}
                placeholder="Rue"
              />
              
            </label>
          </section>
          <section className="rigth">
            <label>
            <span>{porte.length <= 0 && errorForm}</span>
              <input
                type="number"
                name="porte"
                value={porte}
                onChange={(e)=>setPorte(e.target.value)}
                placeholder="Porte"
              />
              
            </label>
            <label>
            <span>{log.length <= 0 && errorForm}</span>
              <input
                type="number"
                name="log"
                value={log}
                onChange={(e)=>setLog(e.target.value)}
                placeholder="Logements"
              />
              
            </label>
           
            <button onClick={handleSubmit} className="btn-send">
              Envoyer votre commande
            </button>
          </section>
        </form>
      </section>
    </main>
  );
};

export default Page;
