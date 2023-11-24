import React from 'react';
import SliderImg from './SliderImg';
import SliderPopulaire from './SliderPopulaire';

const BestSellers = () => {
    return (
        <section className='bestseller'>
            <section className='bet-tile'><span className='lin'></span><h2>Populaires</h2></section>
            <SliderPopulaire/>
        </section>
    );
}

export default BestSellers;
