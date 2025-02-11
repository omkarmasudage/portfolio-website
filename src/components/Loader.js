import React from 'react'
import loader from "../assets/PKDS_INTRO.gif"
import './style.css';

// const Loader = () => {
//     return (
//         <div className='m-0 p-0 flex justify-center items-center overflow-hidden'>
//             <img src={loader} className=" w-full h-screen" alt='loader'/>
//         </div>

//     )
// }
const Loader = () => {
    return (
        <div className="loader-container">
            <img src={loader} className="loader-image" alt="Loader" />
        </div>
    );
};
export default Loader