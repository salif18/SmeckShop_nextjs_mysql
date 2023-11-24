import React from 'react';
import Image from 'next/image';

const CardTendance = ({product}) => {
    const { nom , prix , photo } = product
    return (
        <article className='card-product'>
            <figure>
             <Image className='img' src={photo} alt='' width={300} // Largeur souhaitée en pixels
             height={200} />
            </figure>
            <section className='infos-card'>
             <h2>{nom}</h2>
             <p>{prix} FCFA</p>
            </section>
            <button className='btn-view'>voir</button>
        </article>
    );
}

export default CardTendance;
