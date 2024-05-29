import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {

    // adiciona a classe dark-nav quando o scroll passa do componente Hero
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false); // se o tamanho do scroll for maior que 50 (Hero component) a classe dark-nav será adicionada!
        })
    }, []);

    const [mobile, setMobile] = useState(false);

    const toggleMenu = () => {
        mobile? setMobile(false) : setMobile(true);
    }

    return (
        <nav className={`container ${sticky? 'dark-nav' : ''}`} >
            
            <img src={logo} alt='Edusity Logo' className='logo'/>

            <ul className={mobile? '' : 'hide-mobile-menu'}>
                <li><Link to='Hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
            </ul>
            <img src={menu_icon} alt="hamburger menu icon - mobile" className='menu-icon' onClick={toggleMenu}/>
        </nav>
    )
}

export default Navbar;