import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import './index.css'

export default function SignUp() {
    const a = (cl) => document.querySelector(cl)

    const [saveData, setSaveData] = useState([])

    const signUp = (e) => {

    //Checar Email
      let usuario = a('.emailSignUp').value.substring(0, a('.emailSignUp').value.indexOf("@"));
      let dominio = a('.emailSignUp').value.substring(a('.emailSignUp').value.indexOf("@")+ 1, a('.emailSignUp').value.length);
      
      if ((usuario.length >=1) &&
          (dominio.length >=3) &&
          (usuario.search("@")==-1) &&
          (dominio.search("@")==-1) &&
          (usuario.search(" ")==-1) &&
          (dominio.search(" ")==-1) &&
          (dominio.search(".")!=-1) &&
          (dominio.indexOf(".") >=1)&&
          (dominio.lastIndexOf(".") < dominio.length - 1)) {

          saveData.push(
            {email: a('.emailSignUp').value,
            senha: a('.keySignUp').value}
          )
  
          localStorage.setItem('saveEmail', saveData.map((item) => item.email))
          localStorage.setItem('saveKey', saveData.map((item) => item.senha))

          if(a('.emailInvalido')) {
            a('.emailInvalido').remove()
          }

      } else {
        e.preventDefault()
        if(!a('.emailInvalido')) {
          let newDiv = document.createElement('div')
          newDiv.setAttribute('class', 'emailInvalido')
          a('.emailSignUp').after(newDiv)
          a('.emailInvalido').innerHTML = 'Email vazio ou Inválido'
        }
      }

    //Checar senha
      if(a('.keySignUp').value === '' || a('.keySignUp').value.length < 3) {
        e.preventDefault()
        if(!a('.emptyKey')) {
          let newDiv = document.createElement('div')
          newDiv.setAttribute('class', 'emptyKey')
          a('.keySignUp').after(newDiv)
          a('.emptyKey').innerHTML = 'Senha muito curta'
        }
      } else if(a('.emptyKey')){
        a('.emptyKey').remove()
      }
    }

  return (
    <div className='container'>
      <h1>SignUp</h1>
      <form>
        <input type='email' placeholder='Email' className='emailSignUp'></input>
        <input placeholder='Senha' className='keySignUp'></input>
        <Link to='/login'><button onClick={signUp}>SignUp</button></Link>
      </form>
    </div>
  )
}
