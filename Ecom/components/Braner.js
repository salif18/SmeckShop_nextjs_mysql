import Image from 'next/image';
import React from 'react';
import imgbra from '@/public/assets/Shopping.png'
import Link from 'next/link';

const Braner = () => {
    return (
        <section className='braner' >
            <section className='slog'>
             <h2>SmeckShop</h2>
             <p>Transformer vos loocks <br/>en prince et princesse</p>
             <button className='btn'><Link className='lien-btn' href='/products'>Shop now</Link></button>
            </section>
           
            <figure className='img-braner'>
              <Image src={imgbra} alt='' />
            </figure>
            <h2 className='h2'>Obtenez jusqu'a <br/><span className='span-animate'>45%</span> de reduction<br/> sur les nouveaux arrivages</h2>
        </section>
    );
}

export default Braner;
