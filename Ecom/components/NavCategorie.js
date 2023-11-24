"use client";
import { Store } from "@/context/store";
import React, { useContext } from "react";

const NavCategorie = () => {
  const {valueToSearch, setToSearch, setValueToSearch } = useContext(Store);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setToSearch(valueToSearch);
    setValueToSearch("");
   
  };
  
  const catFemme =()=>{
    setToSearch('femme')
  }
  const catHomme =()=>{
    setToSearch('homme');
    
  }
  const typAccessoire=()=>{
    setToSearch('accessoires')
  }
  const typChaussure=()=>{
    setToSearch('chaussure')
  }
    return (
    <nav className="navcategorie">
      <h2>Store</h2>
      <ul>
        <li>
          <button className="link" onClick={catHomme}>
            Hommes
          </button>
        </li>
        <li>
          <button className="link" onClick={catFemme}>
            Femmes
          </button>
        </li>
        <li>
          <button className="link" onClick={typAccessoire}>
            Accessoires
          </button>
        </li>
        <li>
          <button className="link" onClick={typChaussure}>
            Chaussures
          </button>
        </li>
      </ul>
      <section className="zone-search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={valueToSearch}
            onChange={(e) => setValueToSearch(e.target.value)}
            placeholder="Rechercher votre produit"
          />
          <button type="submit" className="btn-search">
            search
          </button>
        </form>
      </section>
    </nav>
  );
};

export default NavCategorie;
