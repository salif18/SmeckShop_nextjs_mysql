import Image from 'next/image'
import React from 'react'
import logo from '@/public/assets/404.jpg'

export default function Notfound() {
  return (
    <section className='notfound'>
    <Image src={logo} width={200} height={200} />
      <section className='error'><h2>Opss !!</h2><h1>Page introuvable</h1></section>
    </section>
  )
}
