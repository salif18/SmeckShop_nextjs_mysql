"use client";

import { createContext, useState } from "react";

const defaultValue = {
    userId:'',
    token:null,
    userIsConnect:false,
    login:()=>{},
    logout:()=>{}
}

export const Store = createContext(defaultValue);

const getUserId = localStorage.getItem('userId')
const getToken = localStorage.getItem('token')
const getStep = localStorage.getItem('step')
  




export const StoreProvider = (props) => {
  //token authentification
  const [ token , setToken ] = useState(getToken)

  //userId authentification
  const [ userId , setUserId ] = useState(getUserId)

  //default page connextion
  const [step , setStep ] = useState(getStep)

  //mon panier
  const [panier, setPanier] = useState([]);

  //valeur pour rechercher
  const [valueToSearch , setValueToSearch ] = useState('')
  const [ToSearch, setToSearch ] = useState('')
  console.log(userId)

  //fonction pour se connecter
  const handleLoginUser =(userId , token )=>{
      setUserId(userId)
      setToken(token)
      localStorage.setItem('userId',userId)
      localStorage.setItem('token',token)
  }

  //fonction se deconnecter
  const handleLogoutUser =()=> {
    setToken(null)
    setUserId(null)
    localStorage.clear()
  }

  //constante pour indiguer l'etat de connection de user
  const userIsConnect = !!token 

  //incremente dans le panier
  const incremente = (item) => {
    const newPanier = panier
    .map((x) =>
      x.id === item.id ? { ...x, qty: x.qty + 1 } : x
    );
    setPanier(newPanier);
  };

  //decremente dans le panier
  const decremente = (item) => {
    const newPanier = panier
    .map((x) =>
      x.id === item.id ? { ...x, qty: x.qty - 1 } : x
    );
    setPanier(newPanier);
  };

  //deleteto
  const deleteTopanier =(id)=>{
    const updatePanier = panier.filter((product) => product.id !== id)
    setPanier(updatePanier)
  }
  //calcule le montant du panier
  const total = panier
    .map((item) => item.prix_vente*item.qty )
    .reduce((a, b) => a + b, 0);
  
    //total producti
    const quantity = panier.map((item )=> item.qty).reduce((a,b) => a + b,0)


 //les variable globale a partager dans les components
  const contextValue = {
    userId:userId,
    token:token,
    login:handleLoginUser,
    logout:handleLogoutUser,
    islogin:userIsConnect,
    panier:panier,
    setPanier:setPanier,
    incremente:incremente,
    decremente:decremente,
    total:total,
    valueToSearch:valueToSearch,
    setValueToSearch:setValueToSearch,
    ToSearch:ToSearch,
    setToSearch:setToSearch,
    deleteTopanier:deleteTopanier,
    quantity:quantity,
    step:step,
    setStep:setStep
  };

  return <Store.Provider value={contextValue}>{props.children}</Store.Provider>;
};
