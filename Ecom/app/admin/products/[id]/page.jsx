import FormUpdateProduct from '@/components/FormUpdateProduct';
import { notFound } from 'next/navigation';
import React from 'react';

const getProduct = async (id) => {
    await new Promise((resolve)=> setTimeout(resolve,3000))
     const res = await fetch(`http://localhost:3000/api/products/${id}`);
     if(res.ok){
      const { results } = await res.json()
       return results[0];
     }else{
       notFound()
     }
   };

const Page = async({params}) => {
    const article = await getProduct(params.id)
  
    return (
        <main className='admindetails'>
        <h2>Mis a jour du produit</h2>
            <FormUpdateProduct article={article}  />
        </main>
    );
}

export default Page;
