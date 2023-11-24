import Image from 'next/image';
import React from 'react';

const CardImage = ({item}) => {
    return (
        <article className='card-image'>
            <Image className='img' src={item.img} alt='' />
        </article>
    );
}

export default CardImage;
