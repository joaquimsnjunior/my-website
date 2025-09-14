import Image from 'next/image'
import React from 'react'
import Logotipo from '../assets/icone-js.png'

function Logo() {
  return (
    <div>
      <Image
        src={Logotipo}
        alt="Logo"
        width={100}
        height={100}
      />
    </div>
  )
}

export default Logo