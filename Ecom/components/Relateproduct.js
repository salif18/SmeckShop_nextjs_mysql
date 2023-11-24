import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Relateproduct = ({product}) => {
    const {photo,id} = product
    return (
        <article className='relat-card'>
            <figure >
            <Link className="link" href={`/products/${id}`}>
              <Image  src={photo} alt='' width={80} height={80} />
            </Link>
            </figure>
        </article>
    );
}

export default Relateproduct;
