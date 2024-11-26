// import React, { useEffect, useState } from 'react';
// import './style.css';
// import HL from "../assets/home-left.png"
// import HR from "../assets/home-right.png"
// import Architecture from './Architecture'
// import Interior from './Interior'
// import Graphic from './Graphic'
// import Contact from './Contact'
// import SliderImg from './SliderImg';

// const Home2 = () => {

//     const [activeSection, setActiveSection] = useState('');

//     // useEffect(() => {
//     //     const handleScroll = () => {
//     //         const sections = document.querySelectorAll('section');

//     //         sections.forEach((section) => {
//     //             const top = window.scrollY;
//     //             const offset = section.offsetTop - 150;
//     //             const height = section.offsetHeight;
//     //             const id = section.getAttribute('id');

//     //             if (top >= offset && top < offset + height) {
//     //                 section.classList.remove('fly-in-element');
//     //                 // section.classList.add('fly-out-element');
//     //                 setActiveSection(id);
//     //             }
//     //         });
//     //     };

//     //     window.addEventListener('scroll', handleScroll);

//     //     return () => {
//     //         window.removeEventListener('scroll', handleScroll);
//     //     };
//     // }, []);

//     useEffect(() => {
//         const handleScroll = () => {
//             const sections = document.querySelectorAll('section');

//             sections.forEach((section) => {
//                 const top = window.scrollY;
//                 const offset = section.offsetTop - 150;
//                 const height = section.offsetHeight;
//                 const id = section.getAttribute('id');

//                 if (top >= offset && top < offset + height) {
//                     section.classList.remove('active');
//                     setActiveSection(id);
//                 }
//             });
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <div className="flex flex-col justify-center items-center">
//             <section className={`home container px-5 ${activeSection === 'home' ? 'zfly-in-element' : ''}`} id="home">
//                 <div className="text-gray-600 body-font">
//                     <div className="py-14 mx-auto flex flex-col">
//                         <div className="mx-auto">
//                             <SliderImg />
//                             <div className="text-gray-600 body-font">
//                                 <div className="container px-5 py-14 mx-auto">
//                                     <div className="flex flex-wrap -mx-4 -mb-10 text-center">
//                                         <div className="sm:w-1/2 mb-10 px-4">
//                                             {/* <div className="rounded-lg h-20 overflow-hidden">
//                                                 <img alt="content" className="object-contain h-160px w-auto" src={HL} />
//                                             </div> */}
                                        
//                                         <div 
//     className="rounded-lg h-[200px] flex items-center justify-start" 
//     style={{ backgroundColor: "rgb(235, 210, 190)", border: "1px solid rgb(235, 210, 190) ml-0" }}
// >
//     <img 
//         alt="content" 
//         className="object-left h-[160px] w-auto" 
//         src={HL} 
//     />
// </div>

//                                         </div>
//                                         <div className="sm:w-1/2 mb-10 px-4">
//                                             <div className="rounded-lg h-64 overflow-hidden">
//                                                 <img alt="content" className="object-contain h-full w-full" src={HR} />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
                
//             </section>

//             <section className={`architecture ${activeSection === 'architecture' ? 'fly-in-element' : 'fly-out-element'}`} id="architecture">
//                 <Architecture />
//             </section>

//             <section className={`interior ${activeSection === 'interior' ? 'fly-in-element' : 'fly-out-element'}`} id="interior">
//                 <Interior />
//             </section>

//             <section className={`graphic ${activeSection === 'graphic' ? 'fly-in-element' : 'fly-out-element'}`} id="graphic">
//                 <Graphic />
//                 {/* <Interior/> */}
//             </section>

//             <section className={`contact ${activeSection === 'contact' ? 'fly-in-element' : 'fly-out-element'}`} id="contact">
//                 <Contact />
//             </section>
//         </div>
//     )
// }

// export default Home2
import React, { useEffect, useState } from 'react';
import './style.css';
import HL from "../assets/home-left.png";
import HR from "../assets/home-right.png";
import Architecture from './Architecture';
import Interior from './Interior';
import Graphic from './Graphic';
import Contact from './Contact';
import SliderImg from './SliderImg';

const Home2 = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach((section) => {
                const top = window.scrollY;
                const offset = section.offsetTop - 150;
                const height = section.offsetHeight;
                const id = section.getAttribute('id');
                if (top >= offset && top < offset + height) {
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
        <div className="flex flex-col justify-center items-center">
            {/* Home Section */}
            <section
                className={`home container px-5 ${activeSection === 'home' ? 'zfly-in-element' : ''}`}
                id="home"
            >
                <div className="text-gray-600 body-font">
                    <div className="py-14 mx-auto flex flex-col items-center">
                        <SliderImg />
                        <div className="flex flex-wrap -mx-4 text-center mt-8">
                            <div className="sm:w-1/2 w-full px-4 mb-8">
                                <div
                                    className="rounded-lg h-40 flex items-center justify-center bg-[#ebd2be] border border-[#ebd2be]"
                                >
                                    <img
                                        alt="content"
                                        className="object-left h-[160px] w-auto"
                                        src={HL}
                                    />
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full px-4">
                                <div className="rounded-lg h-40 overflow-hidden">
                                    <img
                                        alt="content"
                                        className="object-contain h-full w-full"
                                        src={HR}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Architecture Section */}
            <section
                className={`architecture ${activeSection === 'architecture' ? 'fly-in-element' : 'fly-out-element'}`}
                id="architecture"
            >
                <Architecture />
            </section>

            {/* Interior Section */}
            <section
                className={`interior ${activeSection === 'interior' ? 'fly-in-element' : 'fly-out-element'}`}
                id="interior"
            >
                <Interior />
            </section>

            {/* Graphic Section */}
            <section
                className={`graphic ${activeSection === 'graphic' ? 'fly-in-element' : 'fly-out-element'}`}
                id="graphic"
            >
                <Graphic />
            </section>

            {/* Contact Section */}
            <section
                className={`contact ${activeSection === 'contact' ? 'fly-in-element' : 'fly-out-element'}`}
                id="contact"
            >
                <Contact />
            </section>
        </div>
    );
};

export default Home2;
