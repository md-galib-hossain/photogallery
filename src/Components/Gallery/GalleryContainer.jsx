const GalleryContainer = () => {
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
        <div className="grid grid-cols-5 gap-4">
          <div className="min-h-[150px] min-w-[150px] col-span-2 row-span-2 bg-red-500"></div>
          <div className="min-h-[150px] min-w-[150px] bg-red-500"></div>
          <div className="min-h-[150px] min-w-[150px] bg-red-500"></div>
          <div className="min-h-[150px] min-w-[150px] bg-red-500"></div>
          <div className="min-h-[150px] min-w-[150px] bg-red-500"></div>
          <div className="min-h-[150px] min-w-[150px] bg-red-500"></div>
          <div className="min-h-[150px] min-w-[150px] bg-red-500"></div>
          <div className="min-h-[150px] min-w-[150px] bg-red-500"></div>
          <div className="min-h-[150px] min-w-[150px] bg-red-500"></div>
          <div className="min-h-[150px] min-w-[150px] bg-red-500"></div>
          <div className="min-h-[150px] min-w-[150px] bg-red-500"></div>
          <div className="min-h-[150px] min-w-[150px] bg-red-500"></div>
        </div>
        {/* Grid section end */}
      </div>
    </>
  );
};

export default GalleryContainer;
