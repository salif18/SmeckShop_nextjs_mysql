import Link from 'next/link';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Image from 'next/image';
const Footer = () => {
    const logo = 'data:image/png;base64,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'
    return (
        <footer className='footer'>
            <section className='resau-sociaux'>
             <ul>
              <li><FacebookIcon/></li>
              <li><WhatsAppIcon/></li>
             </ul>
            </section>
            <section className='contact'>
             <nav>
              <Link className='link' href='/contacts'>Nous contacter</Link>
             </nav>
            </section>
            <section className='spons'>
             <h2>Sponsores</h2>
             <Image src={logo} alt='' height={50} width={50} />
            </section>
        </footer>
    );
}

export default Footer;
