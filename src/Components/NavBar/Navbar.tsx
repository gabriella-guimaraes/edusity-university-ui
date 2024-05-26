import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {

    // adiciona a classe dark-nav quando o scroll passa do componente Hero
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false); // se o tamanho do scroll for maior que 50 (Hero component) a classe dark-nav será adicionada!
        })
    }, []);

    return (
        <nav className={`container ${sticky? 'dark-nav' : ''}`} >
            
            <img src={logo} alt='Edusity Logo' className='logo'/>

            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About Us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li><button className='btn'>Contact us</button></li>
            </ul>
        </nav>
    )
}

export default Navbar;