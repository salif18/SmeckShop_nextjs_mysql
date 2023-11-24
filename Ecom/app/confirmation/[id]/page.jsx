"use client"
import axios from 'axios';
import {useRouter, useParams } from 'next/navigation';
import React, {useState } from 'react';

const Page = () => {
    const {id} = useParams()
    const router = useRouter()
    const [ resetData , setResetData] = useState({resetToken:id,password:""})
    const handleChange =(e)=>{
        const { name, value } = e.target
        setResetData({...resetData , [name]:value})
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        if(resetData.resetToken.length > 0 && resetData.password.length > 0 ){
        axios.post('http://localhost:3000/api/auth/validation',resetData)
        .then((res)=> {
            if(res){
                console.log(res.data.message)
                router.push('/validation')
            }
        })
        .catch((err) => console.error(err));
        setResetData({resetToken:'',password:""})
        }else{
            console.log('veuiller remplir les champs')
        }
    };

    return (
        <main className='reset-valid'>
        <h2> Etape 2</h2>
        <form className='form-reset' >
          <label>
            <input type='text' name='resetToken' value={resetData.resetToken} onChange={handleChange} placeholder='token de reinitialisation...' />
          </label>
          <label>
           <input type='password' name='password' value={resetData.password} onChange={handleChange} placeholder='Votre nouveau mot de passe...' />
          </label>
          <button className='btn-reset-valid' onClick={handleSubmit}>Envoyer </button>
        </form>
        </main>
    );
}

export default Page;
