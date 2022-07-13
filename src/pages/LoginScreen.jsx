import React from 'react'
import { NavLink } from 'react-router-dom'

export const LoginScreen = () => {
  return (
    <div className='text-white'>
      <h1 className='  text-4xl'>
        Login
      </h1>
      <NavLink
        to='/'
      >Ingresar
      </NavLink>
    </div>
  )
}
