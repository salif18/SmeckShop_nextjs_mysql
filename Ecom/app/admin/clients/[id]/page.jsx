import React from 'react';
import Image from 'next/image';

const getClients = async(id)=>{
    const res = axios.get('localhost:4000/clients/'+id)
    return res.data
}


const Page = async({params}) => {
    const client = await getClients(params.id)
    
    return (
        <section className='details-client'>
            <h2>Infos du client</h2>
            <section className='infos'>
            <figure>
             <Image src='' width={80} height={80} objectFit='contain' alt='' />
            </figure>
            <section className='donnees'>
            <h2>Nom <span>Ami</span></h2>
            <h2>Prenom<span>Keita</span></h2>
            <h2>Numero<span>78404208</span></h2>
            <h2>Addresse<span>Bamako</span></h2>
           </section>
           </section>
        </section>
    );
}

export default Page;
