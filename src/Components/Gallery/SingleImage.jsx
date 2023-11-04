import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./index.css";

const SingleImage = ({ index, image, handleImageSelect, checkedState }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: image,
  });

  // Getting dnd-kit's css 
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      // {...listeners}
      className={`min-h-[100px] min-w-[60px] ${
        index === 0 && "col-span-2 row-span-2"
      } rounded border-2 main_img_container relative z-50`}
    >
      <div className="div_overlay">
        {/* checkbox start */}
        <label
          className={`checkbox_label ${
            checkedState[index] === true ? "block" : "hidden"
          } `}
        >
          <input
            type="checkbox"
            checked={checkedState[index]}
            onChange={()=>handleImageSelect(index)
            }
            style={{ position: "absolute", margin: "8px", zIndex: 99 }}
          />
        </label>
        {/* checkbox end */}
        <img src={image} alt="Product image" />
        <div
          className="listeners_overlay absolute inset-0 bg-transparent"
          {...listeners}
        ></div>
      </div>
    </div>
  );
};

export default SingleImage;
