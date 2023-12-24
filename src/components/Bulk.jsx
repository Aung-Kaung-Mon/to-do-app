import React from "react";

const Bulk = ({ updateAllDone }) => {
  return (
    <div className=" flex justify-end mt-1">
      <button
        className=" px-3 py-2 bg-neutral-200 rounded hover:bg-neutral-300 hover:text-neutral-900 active:scale-95 duration-100 select-none"
        onClick={updateAllDone} // calls direct as callback without handler
      >
        Mark all as Done
      </button>
    </div>
  );
};

export default Bulk;
