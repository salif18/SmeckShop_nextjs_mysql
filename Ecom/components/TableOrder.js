import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';

//recuperer le client selon userId de la commande
const getClients = async(clientId)=>{
    const res = await axios.get('http://localhost:3000/api/clients')
    const {results} = res.data
    return results.find((item) => item.id === clientId)
}

const TableOrder = async({order}) => {
  const {id, clientId, timestamps, status } = order
  const client = await getClients(clientId)
  
    return (
        <tbody>
        <tr>
         <td>{client.prenom}</td>
         <td>{timestamps}</td>
         {status === 'En cours' && <td style={{color:'blue'}}>{status}</td>}
         {status === 'Livre' && <td style={{color:'green'}}>{status}</td>}
         {status === 'Annuler' && <td style={{color:'red'}}>{status}</td>}
         <td >
         <section className='gbtn'>
           <Link className='link' href={`/admin/orders/${id}`}>
           <button className='btn-view'><VisibilityIcon style={{fontSize:20}} className='icon-view' /></button>
           </Link>
           <button className='btn-livre'>Livrer</button>
           <button className='btn-annul'>Annuler</button>
           </section>
         </td>
        </tr>
       </tbody>
    );
}

export default TableOrder;
