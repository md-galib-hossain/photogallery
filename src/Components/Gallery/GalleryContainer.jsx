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
import { useEffect, useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import SingleImage from "./SingleImage";
import Heading from "../Heading/Heading";
import toast from "react-hot-toast";

const GalleryContainer = () => {
  const [selectedImages, setSelectedImages] = useState([]);

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

  const [checkedState, setCheckedState] = useState(
    new Array(galleryImages.length).fill(false)
  );

  // for selecting images
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

  // Unselecting all in single click
  const handleUnselectAll = () => {
    setSelectedImages([]);
    setCheckedState(new Array(galleryImages.length).fill(false));
  };


  // Delete selected images
  const [showToast, setShowToast] = useState(false);
  useEffect(() => {
    if (showToast) {
      toast.success('Successfully Deleted');
      setShowToast(false); 
    }
  }, [showToast]);

  const handleDeleteSelected = () => {
    if (selectedImages.length > 0) {
      setGalleryImages((prevImages) => {
        const newGalleryImages = prevImages.filter(
          (image, index) => !selectedImages.includes(index)
        );
  
        setCheckedState((prevState) => {
          const newState = prevState.filter(
            (_, index) => !selectedImages.includes(index)
          );
          return newState;
        });
  
        setShowToast(true);
  
        
        setSelectedImages([]); // Cleared selected images after deletion
        return newGalleryImages;
      });
    }
  else{
    toast.error("You didn't select any image")

  }}

  // Took help from youtube tutorial for this functionality
  const handleDragEnd = (event) => {
    const { active, over } = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER :" + over.id);

    if (active?.id !== over?.id) {
      setGalleryImages((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      {/* Heading Start */}
      <Heading
        checkedState={checkedState}
        handleUnselectAll={handleUnselectAll}
        handleDeleteSelected={handleDeleteSelected}
      ></Heading>
{/* Heading End */}
      <div className="bg-white md:min-h-[500px] p-8">
        {/* Grid section start */}
        <div className="grid md:grid-cols-5 gap-4">
          <SortableContext items={galleryImages} strategy={rectSortingStrategy}>
            {galleryImages?.map((image, index) => (
              <SingleImage
                key={index}
                id={image}
                index={index}
                image={image}
                handleImageSelect={handleImageSelect}
                checkedState={checkedState}
              />
            ))}
          </SortableContext>
        </div>
        {/* Grid section end */}
      </div>
    </DndContext>
  );
};

export default GalleryContainer;
