import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="bg-blue-100 p-5 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold text-center text-black mb-4">Shopping List</h1>
        <ul className="bg-blue-300 rounded-lg p-5">
          {ItemList.map((item, index) => (
            <li key={index} className="border-b py-2 ">
              <div className="font-bold text-black">{item.name}</div>
              <div className="text-black">Quantity : {item.quantity}</div>
              <div className="text-black">Category : {item.category}</div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Page;
