import React from 'react';
import ClientsListe from './ClientsListe';
import axios from 'axios';

const getClients = async()=>{
    const res = await axios.get('http://localhost:3000/api/clients')
    return res.data.results
}

const Page = async() => {
    const clients = await getClients()
    return (
        <main className='adminclients'>
            <ClientsListe clients={clients} />
        </main>
    );
}

export default Page;
