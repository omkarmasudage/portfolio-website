import React from 'react';
import Interior from './Interior';

const images = [
    { src: '../assets/Content/Images/1.jpg', heading: 'Image 1 Heading', subheading: 'Image 1 Subheading', description: 'Image 1 Description' },
    { src: '../assets/Content/Images/2.jpg', heading: 'Image 2 Heading', subheading: 'Image 2 Subheading', description: 'Image 2 Description' },
    // Add more image objects as needed
];

const Image = () => {
    return (
        <div>
            {/* Other components */}
            <Interior images={images} />
        </div>
    );
}

export default Image;
