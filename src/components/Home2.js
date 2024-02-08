import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import './style.css';
import HL from "../assets/home-left.png"
import HR from "../assets/home-right.png"
import Architecture from './Architecture'
import Interior from './Interior'
import Graphic from './Graphic'
import Contact from './Contact'

const Home2 = () => {

    useEffect(() => {
        ScrollReveal({
            reset: true,
            distance: '80px',
            duration: 2000,
            delay: 200
        });

        ScrollReveal().reveal('.home, .architecture, .interior, .graphic, .contact', { origin: 'top' });
    }, []);

    return (
        <div className="flex flex-col justify-center items-center">
            <section className="home container px-5" id="home">
                <div className="text-gray-600 body-font">
                    <div className="py-14 mx-auto flex flex-col">
                        <div className="mx-auto">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" />
                            </div>
                            <div className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                                        <div className="sm:w-1/2 mb-10 px-4">
                                            <div className="rounded-lg h-64 overflow-hidden">
                                                <img alt="content" className="object-contain h-full w-full" src={HL} />
                                            </div>
                                        </div>
                                        <div className="sm:w-1/2 mb-10 px-4">
                                            <div className="rounded-lg h-64 overflow-hidden">
                                                <img alt="content" className="object-contain h-full w-full" src={HR} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="architecture" id="architecture">
                <Architecture />
            </section>

            <section className="interior" id="interior">
                <Interior />
            </section>

            <section className="graphic" id="graphic">
                <Graphic />
                {/* <Interior/> */}
            </section>

            <section className="contact" id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default Home2