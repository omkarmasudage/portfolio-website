// import React from "react"
// import { Carousel } from "flowbite-react"
// import HomeImage1 from "../assets/Content/PNGs_sketches/01.png"
// // import HomeImage2 from "../assets/Content/PNGs_sketches/02.png"
// // import HomeImage3 from "../assets/Content/PNGs_sketches/03.png"
// // import HomeImage4 from "../assets/Content/PNGs_sketches/04.png"
// // import HomeImage5 from "../assets/Content/PNGs_sketches/05.png"
// // import HomeImage6 from "../assets/Content/PNGs_sketches/06.png"
// // import HomeImage7 from "../assets/Content/PNGs_sketches/07.png"

// const SliderImg = () => {
//   return (
//     <div>
//       <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
//         <Carousel>
//           <img
//             className="lg:h-full md:h-full w-full object-contain ml-40"
//             src={HomeImage1}
//             alt="..."
//           />
//           <div className="relative rounded-lg h-20 overflow-hidden">
//     <img 
//         alt="content" 
//         className="object-contain w-30 h-20 absolute transition-all duration-500 ease-in-out left-[-30px] top-0 hover:left-0"
//         src={HL} 
//     />
// </div>

//           {/* <img className="lg:h-48 md:h-36 w-full object-contain" src={HomeImage1} alt="..." />
//                     <img className="lg:h-48 md:h-36 w-full object-contain" src={HomeImage1} alt="..." />
//                     <img className="lg:h-48 md:h-36 w-full object-contain" src={HomeImage1} alt="..." />
//                     <img className="lg:h-48 md:h-36 w-full object-contain" src={HomeImage1} alt="..." />
//                     <img className="lg:h-48 md:h-36 w-full object-contain" src={HomeImage1} alt="..." />
//                     <img className="lg:h-48 md:h-36 w-full object-contain" src={HomeImage1} alt="..." /> */}
//         </Carousel>
//       </div>
//     </div>
//   )
// }

// export default SliderImg


// import './style.css';
// import "./style.css";
// import React from "react";
// import HomeImage1 from "../assets/Content/PNGs_sketches/01.png";
// import HomeImage2 from "../assets/Content/PNGs_sketches/02.png";
// import HomeImage3 from "../assets/Content/PNGs_sketches/03.png";

// const SliderImg = () => {
//   return (
//     <div className="relative h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden">
//       <div className="absolute w-full h-full transition-container animation-delay-0">
//         <img
//           className="w-full h-full object-contain"
//           src={HomeImage1}
//           alt="Image 1"
//         />
//       </div>
//       <div className="absolute w-full h-full transition-container animation-delay-3s">
//         <img
//           className="w-full h-full object-contain"
//           src={HomeImage2}
//           alt="Image 2"
//         />
//       </div>
//       <div className="absolute w-full h-full transition-container animation-delay-6s">
//         <img
//           className="w-full h-full object-contain"
//           src={HomeImage3}
//           alt="Image 3"
//         />
//       </div>
//     </div>
//   );
// };

// export default SliderImg;

// import './style.css';
// import React from "react";
// import HomeImage1 from "../assets/Content/PNGs_sketches/01.png";
// import HomeImage2 from "../assets/Content/PNGs_sketches/02.png";
// import HomeImage3 from "../assets/Content/PNGs_sketches/03.png";

// const SliderImg = () => {
//   return (
//     <div className="relative h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden">
//       <div className="transition-container animation-img-1">
//         <img
//           className="w-full h-full object-contain"
//           src={HomeImage1}
//           alt="Image 1"
//         />
//       </div>
//       <div className="transition-container animation-img-2">
//         <img
//           className="w-full h-full object-contain"
//           src={HomeImage2}
//           alt="Image 2"
//         />
//       </div>
//       <div className="transition-container animation-img-3">
//         <img
//           className="w-full h-full object-contain"
//           src={HomeImage3}
//           alt="Image 3"
//         />
//       </div>
//     </div>
//   );
// };

// export default SliderImg;


import React, { useState, useEffect } from "react";
import HomeImage1 from "../assets/Content/PNGs_sketches/01.png";
import HomeImage2 from "../assets/Content/PNGs_sketches/02.png";
import HomeImage3 from "../assets/Content/PNGs_sketches/03.png";
import './style.css';

const SliderImg = () => {
  const images = [HomeImage1, HomeImage2, HomeImage3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionState, setTransitionState] = useState("active"); // "active" or "wipe-out"

  useEffect(() => {
    const timer = setTimeout(() => {
      if (transitionState === "active") {
        setTransitionState("wipe-out"); // Start wiping out
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Move to next image
        setTransitionState("active"); // Start the next image fade-in
      }
    }, 2000); // Adjust time for display and transition (2s per phase)

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [transitionState , images.length]);

  return (
    <div className="relative h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`transition-container ${
            index === currentIndex ? transitionState : ""
          }`}
        >
        <img
  className="w-full h-full object-contain"
  src={image}
  alt=""
/>

        </div>
      ))}
    </div>
  );
};

export default SliderImg;







