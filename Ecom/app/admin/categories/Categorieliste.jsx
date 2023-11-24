"use client"
import Tablebody from '@/components/Tablebody';
import React, { useState } from 'react';

const CategorieListe = ({products}) => {
const [categorie,setCategorie] = useState('homme')

const deleteBtn =(id)=>{
  axios.delete('http://localhost:4000/products/'+id)
  .then((res)=>res.data)
  .catch((err)=>console.error(err))
}

    const classificationProducts = products.filter(
        (product) =>
          product.categories.includes(categorie) || product.type.includes(categorie)
      );
    
      const catFemme =()=>{
        setCategorie('femme')
      }

      const catHomme =()=>{
        setCategorie('homme')
        
      }

      const typAccessoire=()=>{
        setCategorie('accessoires')
        
      }

      const typChaussure=()=>{
        setCategorie('chaussure')
      }

    return (
        <main className='categoriesList'>
            <section className='btn-group'>
             <button className='btn' onClick={catHomme}>Hommes</button>
             <button className='btn' onClick={catFemme}>Femmes</button>
             <button className='btn' onClick={typAccessoire}>Accessoires</button>
             <button className='btn' onClick={typChaussure}>Chaussures</button>
            </section>
            <section className='articl-by-categorie'>
            <table className="table">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Nom</th>
                <th>Categories</th>
                <th>Type</th>
                <th>Prix</th>
                <th>Stocks</th>
                <th>Actions</th>
              </tr>
            </thead>
            { categorie.length > 0 && 
              classificationProducts.map((article) => (
              <Tablebody article={article} key={article.article_id} deleteBtn={deleteBtn} />
            ))
          }
            <tfoot></tfoot>
            </table>
            </section>
        </main>
    );
}

export default CategorieListe;
