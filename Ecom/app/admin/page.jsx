import React from 'react';
import Navbaradmin from '../layouts/navbaradmin';
import WidgetBudget from '@/components/WidgetBudget';
import WidgetVente from '@/components/WidgetVente';
import WidgetBenefice from '@/components/WidgetBenefice';
import WidgetDepense from '@/components/WidgetDepense';
import WidgetRevenue from '@/components/WidgetRevenue';
import WidgetBest from '@/components/WidgetBest';
import WidgetStocks from '@/components/WidgetStocks';
import WidgetStats from '@/components/WidgetStats';
import WidgetGraphiq from '@/components/WidgetGraphiq';

const Page = () => {
    return (
        <>
        <Navbaradmin/>
        <main className='dashbord'>
            <h2>Resume d'ensemble</h2>
            <section className='widget'>      
             <WidgetBest/>
             <WidgetStocks/>
            </section>
            <section className='widget'>
             <WidgetBudget/>
             <WidgetVente/>
             <WidgetBenefice/>
            </section>
            <section className='widget'>
            <WidgetBenefice/>
            <WidgetDepense/>
            <WidgetRevenue/>
            </section>
            <section className='widget'>
            <WidgetStats/>
            <WidgetGraphiq/>
            </section>
        </main>
        </>
    );
}

export default Page;
