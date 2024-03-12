import React from "react";

const Item = ({ name, quantity, category, onSelect }) => {
  const hoverStyle = `hover:bg-blue-400`; 

  return (
    <li
      className={`border p-3 rounded-md my-2 bg-blue-300 shadow text-black ${hoverStyle} cursor-pointer`}
      onClick={() => onSelect(name)} 
    >
      <div className="text-lg font-bold">Name: {name}</div>
      <div>Quantity: {quantity}</div>
      <div>Category: {category}</div>
    </li>
  );
};

export default Item;
