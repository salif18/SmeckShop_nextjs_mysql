import ClientCard from '@/components/ClientCard';
import React from 'react';

const ClientsListe = ({clients}) => {
    return (
        <main className='clientliste'>
        <h2>Listes des clients</h2>
        <table>
        <thead>
          <tr>
           <th>Prenom</th>
           <th>Nom</th>
           <th>Numero</th>
           <th>Email</th>
           <th>Action</th>
          </tr>
        </thead>
        {
            clients.map((user) =>(
                <ClientCard user={user} key={user.id} />
            ))
        }
        <tfood></tfood>
        </table>
        </main>
    );
}

export default ClientsListe;
