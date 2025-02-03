import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const images = [
  { id: 1, src: '/images/gallery1.jpg' },
  { id: 3, src: '/images/gallery3.jpg' },
  { id: 5, src: '/images/gallery5.jpg' },
  { id: 7, src: '/images/gallery7.jpg' },
  { id: 2, src: '/images/gallery2.jpg' },
  { id: 6, src: '/images/gallery6.jpg' },
//   { id: 4, src: '/images/gallery4.jpg' },
  { id: 8, src: '/images/gallery8.jpg' },
];

const GallerySection = () => {
  const [imageClasses, setImageClasses] = useState({});

  const imageRefs = useRef([]);

  useEffect(() => {
    const updateImageClasses = () => {
      const updatedClasses = {};
      imageRefs.current.forEach((img, index) => {
        if (img) {
          const aspectRatio = img.naturalWidth / img.naturalHeight;
          if (aspectRatio > 1.5) {
            updatedClasses[images[index].id] = 'wide col-span-2';  // Landscape images
          } else if (aspectRatio < 0.75) {
            updatedClasses[images[index].id] = 'tall row-span-2';  // Portrait images
          } else {
            updatedClasses[images[index].id] = ''; // Square images (default)
          }
        }
      });
      setImageClasses(updatedClasses);
    };

    // Run function once images are loaded
    imageRefs.current.forEach((img) => {
      if (img) {
        img.onload = updateImageClasses;
      }
    });
  }, []);

  return (
    <section className="text-center py-12 md:px-16 px-8">
      <h3 className='text-4xl capitalize font-bold text-red-600'>Our Fitness Journey</h3>
        <p className='text-lg'>Explore the moments that define FitSync</p>

      {/* Gallery Grid */}
      <div className="gallery grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] my-10">
        {images.map((image, index) => (
          <div key={image.id} className={`overflow-hidden rounded-lg ${imageClasses[image.id] || ''}`}>
            <img
              ref={(el) => (imageRefs.current[index] = el)}
              src={image.src}
              alt="Gallery"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
      <button className="button mx-auto">
        <Link className='px-6 py-2' to="/gallery">View More</Link>
      </button>
    </section>
  );
};

export default GallerySection;
