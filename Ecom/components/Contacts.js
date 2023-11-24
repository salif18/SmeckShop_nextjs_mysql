"use client"
import React, { useState } from 'react';

const Contacts = () => {
    const [errorForm , setErrorForm ] = useState('')
    const [messages , setMessages ] = useState({titre:"",email:"",message:""})
    const { titre ,email, message } = messages

    const handleChange =(e)=>{
       const { name , value } = e.target
       setMessages({...messages , [name]:value})
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        setErrorForm('Veuillez remplir ce champs')
    }

    setTimeout(()=>{setErrorForm('')},3000)

    return (
        <form className='form-contact' onSubmit={handleSubmit}>
        <h2>Nous contacter</h2>
            <label>
             <input type='text' name='titre' value={titre} placeholder='Titre' />
             <span>{ titre.length <= 0 && errorForm }</span>
            </label>
            <label>
             <input type='text' name='email' value={email} placeholder='Email' />
             <span>{ email.length <= 0 && errorForm }</span>
            </label>
            <label>
             <input type='text' name='message' value={message} placeholder='Votre message...' />
             <span>{ message.length <= 0 && errorForm }</span>
            </label>
            <button className='btn-send'>Envoyer</button>
        </form>
    );
}

export default Contacts;
