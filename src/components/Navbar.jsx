import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='h-20 text-white'>
            <ul className='flex h-full justify-center items-center'>
                <li className='p-5'>
                    <NavLink
                        className={({ isActive }) => (isActive) ? 'text-white' : 'text-gray-600 '}
                        to='/breaking-bad'
                    >
                        Breaking bad
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/better-call-saul'
                        className={({ isActive }) => (isActive) ? 'text-white' : 'text-gray-600 '}
                    >
                        Better call Saul
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink to='/login'>
                        Salir
                    </NavLink>
                </li> */}
            </ul>
        </div>
    )
}
