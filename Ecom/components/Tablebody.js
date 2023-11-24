"use client"
import Image from 'next/image';
import React from 'react';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';


const Tablebody = ({article,deleteBtn}) => {
    const {photo, nom ,prix_vente , stocks , categories, type, id } = article
    return (
        <tbody>
            <tr>
              <td><Image src={photo} width={80} height={80} alt=''/></td>
              <td>{nom}</td>
              <td>{categories}</td>
              <td>{type}</td>
              <td>{prix_vente}</td>
              <td>{stocks}</td>
              <td>
                <section className='actions'>
                <Link className="link" href={`/admin/products/${id}`}>
                 <button className='btn-edit'>
                 <EditIcon className='icon-edi' style={{color:'#fff'}} />
                 </button>
                 </Link>
                 <button className='btn-del'onClick={()=>deleteBtn(id)} >
                 <DeleteSweepIcon style={{color:'#fff'}} className='icon'/></button>
                </section>
              </td>
            </tr>
        </tbody>
    );
}

export default Tablebody;
