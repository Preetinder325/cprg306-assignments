import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (<li className="border p-2 rounded-md my-2">
      <div className="text-lg font-bold">Name: {name}</div>
      <div className="text-black">Quantity: {quantity}</div>
      <div className="text-black">Category: {category}</div></li>
    );};

export default Item;