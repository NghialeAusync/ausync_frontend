import React from 'react';
import NavBar from '../../Shared/Navbar/Navbar';
import './Header.css'
import Hero from '../Hero/Hero';

const Header = () => {
    return (
        <div>
            <section className="header">
                <NavBar/>
                <Hero/>
            </section>
        </div>
    );
};

export default Header;