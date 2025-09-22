import Image from 'next/image'
import React from 'react'
import Logotipo from '../assets/eyeroll.gif'

function Logo() {
  return (
    <div>
      <Image
        src={Logotipo}
        alt="Logo"
        width={30}
        height={30}
      />
    </div>
  )
}

export default Logo