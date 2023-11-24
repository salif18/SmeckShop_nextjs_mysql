"use client"
import axios from 'axios';
import React, { useState } from 'react';

const Page = () => {
    const [ resetData , setResetData] = useState({email:'',numero:""})
    const handleChange =(e)=>{
        const { name, value } = e.target
        setResetData({...resetData , [name]:value})
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        if(resetData.email.length > 0 && resetData.numero.length > 0){
        axios.post('http://localhost:3000/api/auth/reset',resetData)
        .then((res)=> console.log(res.data.resetToken))
        .catch((err) => console.error(err));
        setResetData({email:'',numero:""})
        }else{
            console.log('veuiller remplir les champs')
        }
    };

    return (
        <main className='reset'>
        <h2> Etape 1</h2>
            <form className='form-reset' >
              <label>
                <input type='text' name='email' value={resetData.email} onChange={handleChange} placeholder='Votre email...' />
              </label>
              <label>
               <input type='number' name='numero' value={resetData.numero} onChange={handleChange} placeholder='Votre numero...' />
              </label>
              <button className='btn-reset' onClick={handleSubmit}>Envoyer </button>
            </form>
        </main>
    );
}

export default Page;
