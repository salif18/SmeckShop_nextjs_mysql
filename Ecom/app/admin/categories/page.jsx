import React from 'react';
import CategorieListe from './Categorieliste';
import axios from 'axios';


const Page = async() => {
    const getProducts = async()=>{
        const res = await axios.get('http://localhost:3000/api/products')
        return res.data.results
      }
      
    const products = await getProducts()
    return (
        <main className='categorie'>
            <CategorieListe products={products} />
        </main>
    );
}

export default Page;
