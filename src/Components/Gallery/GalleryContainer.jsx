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
import SingleImage from "./SingleImage";
const GalleryContainer = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  // I took help from chat gpt for unselecting the indexes after delete operation
  const [checkedState, setCheckedState] = useState(new Array(11).fill(false)); // Adjust the array length based number of images
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

  // function for getting the image index I am dragging
  const handleDragStart = (index) => {
    setDraggedImage(index);
  };

  // function for where I am putting the image
  const handleDragOver = (index, e) => {
    e.preventDefault();
  };

  // this is where I am dropping and swapping
  const handleDrop = (index) => {
    if (draggedImage !== null && draggedImage !== index) {
      setGalleryImages((prevImages) => {
        const newGalleryImages = [...prevImages];
        const [draggedItem] = newGalleryImages.splice(draggedImage, 1);
        newGalleryImages.splice(index, 0, draggedItem);
        return newGalleryImages;
      });
    }

    setDraggedImage(null);
    setCheckedState(!checkedState);
  };

  // for selecting multiple images
  const handleImageSelect = (index) => {
    setCheckedState((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });

    setSelectedImages((prevSelected) => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter((item) => item !== index);
      } else {
        return [...prevSelected, index];
      }
    });
  };

  const handleUnselectAll = () => {
    setSelectedImages([]);
    setCheckedState(new Array(galleryImages.length).fill(false));
  };
  const handleDeleteSelected = () => {
    setGalleryImages((prevImages) => {
      const newGalleryImages = prevImages.filter(
        (image, index) => !selectedImages.includes(index)
      );
      setCheckedState((prevState) => {
        const newState = [...prevState];
        selectedImages.forEach((index) => {
          newState[index] = false;
        });
        return newState;
      });
      setSelectedImages([]); // Clear selected images after deletion
      return newGalleryImages;
    });
  };

  return (
    <>
    {/* Heading Section start */}
    <div className="flex mb-1 bg-white justify-between p-4">
      <div>
        {selectedImages.length > 0 ? (
          <div className="flex">
            <label>
              <input
                onClick={handleUnselectAll}
                type="checkbox"
                checked={checkedState.some((value) => value)}
              />
            </label>
            <h3 className="font-bold ms-2">
              {selectedImages.length > 1
                ? ` ${selectedImages.length} files selected`
                : `${selectedImages.length} file selected`}
            </h3>
          </div>
        ) : (
          <h3 className="font-bold">Gallery</h3>
        )}
      </div>
      <div>
        <button
          className="text-red-600 font-bold"
          onClick={handleDeleteSelected}
        >
          Delete files
        </button>
      </div>
    </div>
    {/* Heading Section end */}

    <div className="bg-white md:min-h-[500px] p-8">
      {/* Grid section start */}
      <div className="grid md:grid-cols-5 gap-4">
        {galleryImages?.map((image, index) => (
          <SingleImage
            key={index}
            index={index}
            image={image}
            handleImageSelect={handleImageSelect}
            checkedState={checkedState}
            handleDragStart={handleDragStart}
            handleDrop={handleDrop}
            handleDragOver={handleDragOver}
          />
        ))}
      </div>
      {/* Grid section end */}
    </div>
  </>
  );
};

export default GalleryContainer;
