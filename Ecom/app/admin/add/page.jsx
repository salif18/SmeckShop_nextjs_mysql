import Navbaradmin from '@/app/layouts/navbaradmin';
import FormAddProducts from '@/components/FormAddProducts';
import React from 'react';

const Page = () => {
    return (
        <>
        <Navbaradmin/>
        <main className='add-prod'>
        <h2>Ajouter de nouveaux articles</h2>
           <FormAddProducts/> 
        </main>
        </>
    );
}

export default Page;
