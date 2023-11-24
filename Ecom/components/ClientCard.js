import React from 'react';
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

const ClientCard = ({user}) => {
    const { prenom , nom , numero, email } = user
    return (
        <tbody className='card-client'>
            <tr>
             <td>{prenom}</td>
             <td>{nom}</td>
             <td>{numero}</td>
             <td>{email}</td>
             <td>
              <button className='del-user'><DeleteSweepIcon style={{fontSize:20}} className='icon-del' /></button>
             </td>
            </tr>
        </tbody>
    );
}

export default ClientCard;
