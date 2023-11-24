"use client";
import axios from "axios";
import React, {useState} from 'react';

const FormUpdateProduct = ({article}) => {
const { id } = article

  const [articles, setArticles] = useState({
    nom: "",
    photo: "",
    details: "",
    categories: "",
    type: "",
    stocks: "",
    prix_vente: "",
    prix_achat:''
  });

  const { nom, photo, details, categories, type, stocks, prix_achat, prix_vente } = articles;
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setArticles({ ...articles, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/api/products/${id}`,articles)
        .then((res)=>res.data)
        .catch((err)=> console.error(err))
    
        setArticles({
          nom: "",
          photo: "",
          details: "",
          categories: "",
          type: "",
          stocks: "",
          prix_vente: "",
          prix_achat:''
        });
      };
    
      const category = [
        {id:0, value:'',label:'Ajouter-une-categorie'},
        {id:1, value:'homme',label:'Homme'},
        {id:2, value:'femme',label:'Femme'},
      ]
      const types = [
        {id:0, value:'',label:'Ajouter-un-type'},
        {id:1, value:'accessoires',label:'Accessoires'},
        {id:2, value:'vetements',label:'Vetements'},
        {id:3, value:'chaussures',label:'Chaussures'}
      ]
    return (
        <form className="form-add" onSubmit={handleSubmit}>
      <section className="add-left">
        <label>
          <input
            type="text"
            name="nom"
            value={nom}
            onChange={handleChange}
            placeholder={article.nom}
          />
        </label>
        <label>
          <input
            type="text"
            name="photo"
            value={photo}
            onChange={handleChange}
            placeholder={article.photo}
          />
        </label>
        <label>
          <input
            type="text"
            name="details"
            value={details}
            onChange={handleChange}
            placeholder={article.details}
          />
        </label>
        <label>
        <input
          type="number"
          name="prix_achat"
          value={prix_achat}
          onChange={handleChange}
          placeholder={article.prix_achat}
        />
      </label>
      <label>
        <input
          type="number"
          name="prix_vente"
          value={prix_vente}
          onChange={handleChange}
          placeholder={article.prix_vente}
        />
      </label>
      </section>
      <section className="add-rigth">
        <label>
          <input
            type="number"
            name="stocks"
            value={stocks}
            onChange={handleChange}
            placeholder={article.stocks}
          />
        </label>
        <select name="categories" value={categories} onChange={handleChange}>
          {
            category.map((item)=>(
            <option value={item.value} key={item.id}>{item.label}</option>
            ))
          }
        </select>
        <select name="type" value={type} onChange={handleChange}>
          {
            types.map((item) =>(
            <option key={item.id} value={item.value}>{item.label}</option>
            ))
          }
        </select>
        <button className="btn" type="submit">Modifier</button>
      </section>
    </form>
    );
}

export default FormUpdateProduct;
