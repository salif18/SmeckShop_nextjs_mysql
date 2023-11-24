import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <main className='validation'>
          <section className='container'>
            <h2>Votre mot de passe a été réinitialisé avec <span>succes !!</span></h2>
            <Link className='link' href='/connexion'>Retour pour se connecter</Link>
          </section>
            
        </main>
    );
}

export default Page;
