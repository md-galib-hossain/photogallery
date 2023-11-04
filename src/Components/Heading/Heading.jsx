const Heading = ({ checkedState, handleUnselectAll, handleDeleteSelected }) => {
  return (
    <div className="flex mb-1 bg-white justify-between items-center p-4">
        {/* Took help from chatgpt */}
        {checkedState.some((value) => value) ? (
          <div className="flex">
            <label>
              <input
                onChange={handleUnselectAll}
                type="checkbox"
                checked={checkedState.some((value) => value)}
              />
            </label>
            <h3 className="font-bold ms-2">
              {checkedState.filter((value) => value).length > 1
                ? ` ${
                    checkedState.filter((value) => value).length
                  } files selected`
                : `1 file selected`}
            </h3>
          </div>
        ) : (
          <h3 className="font-bold">Gallery</h3>
        )}
        <button
          onClick={handleDeleteSelected}
          type="button"
          class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded text-sm px-8 py-2.5 text-center mr-2"
        >
          Delete
        </button>
    </div>
  );
};

export default Heading;
