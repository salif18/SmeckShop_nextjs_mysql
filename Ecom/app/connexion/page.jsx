"use client"
import Login from '@/components/Login';
import Registre from '@/components/Registre';
import { Store } from '@/context/store';
import React, { useContext} from 'react';

const Page = () => {
    const {step } = useContext(Store)

    return (
        <main className='connexion'>
             <h2>Indentifications</h2>
            { step  && <Registre/> }
            { !step  && <Login  /> }
        </main>
    );
}

export default Page;
