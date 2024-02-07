import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div className="mx-1 relative">
            <Slider {...settings}>
                <div className="h-[600px] overflow-hidden">
                    <img alt="content" className="object-cover object-center h-1/2 w-2/3" src="https://dummyimage.com/1200x500" />
                </div>
                <div className="h-[600px] overflow-hidden">
                    <img alt="content" className="object-cover object-center h-1/2 w-2/3" src="https://dummyimage.com/1200x500" />
                </div>
                {/* Add more slides as needed */}
            </Slider>
        </div>
    );
};

export default Carousel;
