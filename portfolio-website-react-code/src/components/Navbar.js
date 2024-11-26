import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png"


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('header nav a');

            sections.forEach((section) => {
                const top = window.scrollY;
                const offset = section.offsetTop - 150;
                const height = section.offsetHeight;
                const id = section.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach((link) => {
                        link.classList.remove('active');
                        document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
                    });
                    setActiveSection(id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-rgb(235, 210, 190)">
            <a href="#" className="flex items-center pl-3 mb-14 mt-4">
                <img src={logo} alt='logo' className={`${activeSection === 'architecture' || activeSection === 'graphic' || activeSection === 'interior' || activeSection === 'contact' ? 'logo' : 'logo-hide'}`}
                />
                {/* <h1 className="text-2xl font-bold">PKSD</h1> */}
            </a>
            <i
                id="menu-icon"
                className={isMenuOpen ? 'bx bx-x' : 'bx bx-menu'}
                onClick={handleMenuToggle}
            ></i>
            <nav className={`navbar h-full px-3 py-4 overflow-y-auto space-y-2 font-medium ${isMenuOpen ? 'active' : ''}`}>
                <a href="#home" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:text-[#622c00] hover:border-b-8 border-[#622c00] group ${activeSection === 'home' ? 'active' : ''}`}>
                    Home
                </a>
                <a
                    href="#architecture"
                    className={` flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:text-[#622c00] hover:border-b-8 border-[#622c00] group ${activeSection === 'architecture' ? 'active' : ''}`}>
                    Architecture
                </a>
                <a
                    href="#interior"
                    className={` flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:text-[#622c00] hover:border-b-8 border-[#622c00] group ${activeSection === 'interior' ? 'active' : ''}`}>
                    Interior
                </a>
                <a href="#graphic" className={` flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:text-[#622c00] hover:border-b-8 border-[#622c00] group ${activeSection === 'graphic' ? 'active' : ''}`}>
                    Graphic
                </a>
                <a
                    href="#contact"
                    className={` flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:text-[#622c00] hover:border-b-8 border-[#622c00] group ${activeSection === 'contact' ? 'active' : ''}`}>
                    Contact
                </a>
            </nav>
            <div className="h-2/3 w-10 absolute inset-x-44 inset-y-0 flex items-center justify-center">
                <div className="h-full w-10 rounded-b-lg bg-[#622c00] pointer-events-none"></div>
            </div>
            

        </div>
    );
};

export default Navbar;
