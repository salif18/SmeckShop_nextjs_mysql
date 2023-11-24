import { Store } from '@/context/store';
import React, { useContext } from 'react';

const Addresse = () => {
    const { address ,setAddress } = useContext(Store)

    //recuperer les valeur des champs
    const handleChange =(e)=> {
        const { name, value } = e.target
        setAddress({...address, [name ]:value})
    }

    return (
        <form className='address-form' >
            <label>
             <input type='text' name='ville' value={address.ville} onChange={handleChange} placeholder='Ville' />
            </label>
            <label>
             <input type='text' name='quartier' value={address.quartier} onChange={handleChange} placeholder='Quartier' />
            </label>
            <label>
             <input type='number' name='rue' value={address.rue} onChange={handleChange} placeholder='Rue' />
            </label>
            <label>
             <input type='number' name='porte' value={address.porte} onChange={handleChange} placeholder='Porte' />
            </label>
            <button className='btn-addres' type='submit'>Envoyer votre commande</button>
        </form>
    );
}

export default Addresse;
