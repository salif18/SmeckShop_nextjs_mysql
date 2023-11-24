import Image from 'next/image';
import React from 'react';

const OrderArticle = ({item}) => {
    const { photo, nom , prix_vente, status} = item
    return (
        <article className='orderarticle'>
            <figure>
              <Image src={photo && photo} width={50} height={50} objectFit='contain' alt='' />
            </figure>
            <h2>{nom && nom }</h2>
            <p>{prix_vente && prix_vente}</p>
            <h2>{status && status }</h2>
        </article>
    );
}

export default OrderArticle;
