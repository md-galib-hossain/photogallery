import "./index.css"
const SingleImage = ({index,image,handleImageSelect,checkedState, handleDragStart,handleDrop,handleDragOver}) => {
  console.log(checkedState, "hah")  
  return (
      <div   key={index}
      className={`min-h-[60px] min-w-[60px] ${
        index === 0 && "col-span-2 row-span-2"
      } rounded border-2 main_img_container`}
      onDragOver={(e) => handleDragOver(index, e)}
      onDrop={() => handleDrop(index)}
      draggable
      onDragStart={() => handleDragStart(index)}
      style={{ position: "relative" }}>
    <div className="div_overlay"
>
              {/* checkbox start */}
              <lable className={`checkbox_label ${ checkedState[index] === true ? "block" : "hidden"} `} >
              <input
                type="checkbox"
                checked={checkedState[index]}
                onClick={() => handleImageSelect(index)}
                style={{ position: "absolute", margin: "8px", }}
              ></input>
              </lable>
              <img src={image} alt="" />
              {/* checkbox end */}
            </div>
            </div>
  )
}

export default SingleImage


