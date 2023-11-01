import image1 from "./../../../../images/image-1.webp"
import image2 from "./../../../../images/image-2.webp"
import image3 from "./../../../../images/image-3.webp"
import image4 from "./../../../../images/image-4.webp"
import image5 from "./../../../../images/image-5.webp"
import image6 from "./../../../../images/image-6.webp"
import image7 from "./../../../../images/image-7.webp"
import image8 from "./../../../../images/image-8.webp"
import image9 from "./../../../../images/image-9.webp"
import image10 from "./../../../../images/image-10.jpeg"
import image11 from "./../../../../images/image-11.jpeg"
const GalleryContainer = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9,image10, image11]
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
          <div className="min-h-[60px] min-w-[60px] col-span-2 row-span-2 bg-red-500 rounded border-2 ">
            <img src={image1} alt="" />
          </div>
        {
          images?.map(image=>
            <div className="min-h-[60px] min-w-[60px] rounded border-2 ">
            <img src={image} alt="" />
          </div>

          )
        }
       
        </div>
        {/* Grid section end */}
      </div>
    </>
  );
};

export default GalleryContainer;
