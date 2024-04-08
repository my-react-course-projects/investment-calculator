import React from 'react'
import Logo from '../../assets/images/logo.png'

export default function Header() {
    return <header id='header'>
         <img src={Logo} alt='logo' />
         <h1>Investment Calculator</h1>
    </header>
}