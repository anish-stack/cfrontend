import { useEffect, useState } from 'react';
import './Slider.css'; // Import your CSS file for styling

const Slider = () => {
  // Array of image URLs
  const images = [
    'https://i.ibb.co/LSdJQXZ/confirm-Buyersss.png',
    'https://i.ibb.co/zPN2t8s/White-Happy-New-Year-Instagram-Post.png',
    'https://i.ibb.co/bzrN9xH/award-Photo-11zon.jpg',
    'https://i.ibb.co/cJqc0Vk/confirm1.jpg',
    'https://i.ibb.co/6yF1mfL/confirm3.jpg',
    // Add more image URLs as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let intervalId = setInterval(nextImage,3000);
    return () => clearInterval(intervalId); // cleanup function to stop the interval when the component unmounts
  }, []); // empty dependency array to run the effect only once on mount

  return (
    <div className="slider-container">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="slider-image"
        onClick={prevImage}
      />
    </div>
  );
};

export default Slider;
