import Image from 'next/image';
import React from 'react';
import pull from '@/public/images/pull.webp'
import Link from 'next/link';

const Promos = () => {
    return (
        <section className='promos'>
        <span className='reduct'>-20%</span>
        <figure>
        
         <Image className='img' src={pull} alt='' />
        </figure>
            <section className='left'>
            <h2>Offre de la semaine </h2>
            <section className='times'> <p>Compte a rebours</p><span>2jrs</span> <span>48h</span><span>56m</span></section>
            <button className='btn-shop'><Link className='lien' href='/products'>Shop Now</Link></button>
            </section>
        </section>
    );
}

export default Promos;
