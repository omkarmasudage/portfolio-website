import React, { useEffect, useState } from 'react';
import './style.css';
import logo from "../assets/logo.png"
import Contact from './Contact';
import Graphic from './Graphic';
import Interior from './Interior';
import Architecture from './Architecture';
import HL from "../assets/home-left.png"
import HR from "../assets/home-right.png"
import Details from './Details';

export default function Home() {

    const [activeSection, setActiveSection] = useState('');


    //-----------------

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');

            sections.forEach((section) => {
                const top = window.scrollY;
                const offset = section.offsetTop - 150;
                const height = section.offsetHeight;
                const id = section.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    section.classList.remove('fly-in-element');
                    // section.classList.add('fly-out-element');
                    setActiveSection(id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //-----------------

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');

            sections.forEach((section) => {
                const top = window.scrollY;
                const offset = section.offsetTop - 150;
                const height = section.offsetHeight;
                const id = section.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    section.classList.remove('active');
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
        <div className="flex flex-col items-center justify-center h-screen px-2">
            {/* <!-- Home section design --> */}
            <section className={`home container px-5 lg:ml-40 md:ml-28 ${activeSection === 'home' ? 'fly-in-element' : ''}`} id="home">
                <div className="text-gray-600 body-font">
                    <div className="py-24 mx-auto flex flex-col">
                        <div className="lg:w-4/6 mx-auto">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" />
                            </div>
                            <div className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                                        <div className="sm:w-1/2 mb-10 px-4">
                                            <div className="rounded-lg h-64 overflow-hidden">
                                                <img alt="content" className="object-cover object-center h-full w-full" src={HL} />
                                            </div>
                                        </div>
                                        <div className="sm:w-1/2 mb-10 px-4">
                                            <div className="rounded-lg h-64 overflow-hidden">
                                                <img alt="content" className="object-cover object-center h-full w-full" src={HR} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`architecture ${activeSection === 'architecture' ? 'fly-in-element' : 'fly-out-element'}`} id="architecture">
                <h2>Architecture</h2>
                <Architecture />
            </section>

            <section className={`interior ${activeSection === 'interior' ? 'fly-in-element' : 'fly-out-element'}`} id="interior">
                <h2>Interior</h2>
                <Interior />
            </section>

            <section className={`graphic ${activeSection === 'graphic' ? 'fly-in-element' : 'fly-out-element'}`} id="graphic">
                <h2>Graphic</h2>
                <Graphic />
            </section>

            <section className={`contact ${activeSection === 'contact' ? 'fly-in-element' : 'fly-out-element'}`} id="contact">
                <Contact />
            </section>

            <section>
                <Details />
            </section>
        </div>
    )
}