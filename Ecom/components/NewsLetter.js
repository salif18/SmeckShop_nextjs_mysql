import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';

const Newstell = () => {
    return (
        <section className='newstell'>
        <h2>NEWSLETTER</h2>
            <form>
             <input type='email' placeholder='Example@gmail.com' />
             <button className='btn-abon'>S'abonner</button>
            </form>
            <nav className='sociaux'>
             <ul>
              <li><Link href=''><WhatsAppIcon className='icon' /></Link></li>
              <li><Link href=''><FacebookIcon className='icon'/></Link></li>
              
             </ul>
            </nav>
        </section>
    );
}

export default Newstell;
