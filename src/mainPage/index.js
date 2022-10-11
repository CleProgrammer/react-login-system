import React from 'react'

import './index.css'

import { Link } from 'react-router-dom'

export default function MainPage() {

  return (
    <div className='mainPage'>
        <div>LOGIN FEITO COM SUCESSO</div>
        <Link to='/'><button>Página Inicial</button></Link>
    </div>
  )
}
