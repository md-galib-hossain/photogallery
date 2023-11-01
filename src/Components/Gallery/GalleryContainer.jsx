import image1 from "./../../../../images/image-1.webp";
import image2 from "./../../../../images/image-2.webp";
import image3 from "./../../../../images/image-3.webp";
import image4 from "./../../../../images/image-4.webp";
import image5 from "./../../../../images/image-5.webp";
import image6 from "./../../../../images/image-6.webp";
import image7 from "./../../../../images/image-7.webp";
import image8 from "./../../../../images/image-8.webp";
import image9 from "./../../../../images/image-9.webp";
import image10 from "./../../../../images/image-10.jpeg";
import image11 from "./../../../../images/image-11.jpeg";
import { useState } from "react";
const GalleryContainer = () => {
  const [draggedImage, setDraggedImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  ]);
  // function for getting the image index i am dragging
  const handleDragStart = (index) => {
    setDraggedImage(index);
  };
  // function for where i am putting the image
  const handleDragOver = (index, e) => {
    e.preventDefault();
  };
  // this is where i am dropping and swapping , I took help from chatgpt for this function
  const handleDrop = (index) => {
    if (draggedImage !== null && draggedImage !== index) {
      setGalleryImages((prevImages) => {
        const newGalleryImages = [...prevImages];
        [newGalleryImages[draggedImage], newGalleryImages[index]] = [
          newGalleryImages[index],
          newGalleryImages[draggedImage],
        ];
        return newGalleryImages;
      });
    }

    setDraggedImage(null);
  };
  return (
    <>
      {/* Heading Section start */}

      <div className="flex mb-1 bg-white justify-between p-4">
        <div>
          <h3>Gallery</h3>
        </div>
        <div>
          <button>Delete files</button>
        </div>
      </div>
      {/* Heading Section end */}

      <div className="bg-white md:min-h-[500px] p-8">
        {/* Grid section start */}
        <div className="grid md:grid-cols-5 gap-4">
          {galleryImages?.map((image, index) => (
            <div
              key={index}
              className={`min-h-[60px] min-w-[60px] ${
                index == 0 && "col-span-2 row-span-2"
              } rounded border-2`}
              onDragOver={(e) => handleDragOver(index, e)}
              onDrop={() => handleDrop(index)}
              draggable
              onDragStart={() => handleDragStart(index)}
            >
              <span>{index}</span>
              <img src={image} alt="" />
            </div>
          ))}
        </div>
        {/* Grid section end */}
      </div>
    </>
  );
};

export default GalleryContainer;
