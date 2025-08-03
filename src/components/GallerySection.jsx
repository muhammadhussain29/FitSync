import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const images = [
  { id: 1, src: 'images/gallery1.webp' },
  { id: 2, src: 'images/gallery2.webp' },
  { id: 3, src: 'images/gallery3.webp' },
  { id: 4, src: 'images/gallery4.webp' },
  { id: 5, src: 'images/gallery5.webp' },
  { id: 6, src: 'images/gallery6.webp' },
  { id: 7, src: 'images/gallery7.webp' },
  { id: 8, src: 'images/gallery8.webp' },
  { id: 9, src: 'images/gallery9.webp' },
  { id: 10, src: 'images/gallery10.webp' },
  { id: 11, src: 'images/gallery11.webp' },
  { id: 12, src: 'images/gallery12.webp' },
  { id: 13, src: 'images/gallery13.webp' },
  { id: 14, src: 'images/gallery14.webp' },
  { id: 15, src: 'images/gallery15.webp' },
  { id: 16, src: 'images/gallery16.webp' },
  { id: 17, src: 'images/gallery17.webp' },
  { id: 18, src: 'images/gallery18.webp' },
  { id: 19, src: 'images/gallery19.webp' },
  { id: 20, src: 'images/gallery20.webp' },
  { id: 21, src: 'images/gallery21.webp' },
  { id: 22, src: 'images/gallery22.webp' },
  { id: 23, src: 'images/gallery23.webp' },
  { id: 24, src: 'images/gallery24.webp' },
  { id: 25, src: 'images/gallery25.webp' },
  { id: 26, src: 'images/gallery26.webp' },
  { id: 27, src: 'images/gallery27.webp' },
  { id: 28, src: 'images/gallery28.webp' },
];

const GallerySection = ({ heading, subheading, btn }) => {
  const [imageClasses, setImageClasses] = useState({});
  const [imgDisplay, setImgDisplay] = useState(8);

  const imageRefs = useRef([]);

  // Function to load more images
  const showMore = () => {
    setImgDisplay((prev) => Math.min(prev + 8, images.length));
  };

  useEffect(() => {
    const updateImageClasses = () => {
      const updatedClasses = {};
      imageRefs.current.forEach((img, index) => {
        if (img) {
          const aspectRatio = img.naturalWidth / img.naturalHeight;
          if (aspectRatio > 1.5) {
            updatedClasses[images[index].id] = 'wide md:col-span-2 col-span-1';
          } else if (aspectRatio < 0.75) {
            updatedClasses[images[index].id] = 'tall md:row-span-2 row-span-1';
          } else {
            updatedClasses[images[index].id] = '';
          }
        }
      });
      setImageClasses(updatedClasses);
    };

    // Ensure update happens when images are loaded
    const handleImageLoad = () => updateImageClasses();
    imageRefs.current.forEach((img) => {
      if (img) {
        img.onload = handleImageLoad;
      }
    });

    return () => {
      imageRefs.current.forEach((img) => {
        if (img) {
          img.onload = null;
        }
      });
    };
  }, [imgDisplay]);

  return (
    <section className="roboto text-center py-12 md:px-16 px-8">
      <h3 className="md:text-4xl text-3xl capitalize font-bold text-red-600">{heading}</h3>
      <p className="md:text-lg text-base text-gray-600">{subheading}</p>

      {/* Gallery Grid */}
      <div className="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-4 gap-2 auto-rows-[200px] my-10">
        {images.slice(0, imgDisplay).map((image, index) => (
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

      {/* Buttons */}
      {imgDisplay < images.length && btn === 'View More' && (
        <button
          onClick={showMore}
          className="button px-6 py-2 mx-auto bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          View More
        </button>
      )}

      {btn === 'Visit Gallery' && (
        <button className="button mx-auto mt-2 bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900 transition">
          <Link to="/gallery">Visit Gallery</Link>
        </button>
      )}
    </section>
  );
};

export default GallerySection;
