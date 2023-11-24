import React from 'react';
import Orders from './Orders';
import Navbaradmin from '@/app/layouts/navbaradmin';
import axios from 'axios';

const getOrders = async()=>{
    const res = await axios.get('http://localhost:3000/api/orders')
    return res.data.results
}


const Page = async() => {
    const orders = await getOrders()
    return (
        <>
        <Navbaradmin/>
        <main className='orders'>
            <Orders orders={orders} />
        </main>
        </>
    );
}

export default Page;
