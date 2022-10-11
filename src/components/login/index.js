import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './index.css'

export default function Login() {
    const a = (cl) => document.querySelector(cl)

    let data = [
        {
            email: localStorage.getItem('saveEmail'),
            senha: localStorage.getItem('saveKey')
        }
    ]

    const login = (e) => {
        if(a('.emailLogin').value != data.map((item) => item.email)) {
            e.preventDefault()

            let newDiv = document.createElement('div')
            newDiv.setAttribute('class', 'dataNotFind')
            a('.buttonLogin').after(newDiv)
            a('.dataNotFind').innerHTML = 'Email ou senha não encontrado'
        }
    }

  return (
    <div className='container'>
        <h1>Login</h1>
        <form method='GET' className='formLogin'>
            <input type='email' placeholder='Email' className='emailLogin'></input>
            <input placeholder='Senha' className='keyLogin'></input>
            <Link to='/mainpage'><button onClick={login} className='buttonLogin'>Login</button></Link>
        </form>
    </div>
  )
}
