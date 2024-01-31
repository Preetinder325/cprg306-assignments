import React from 'react';
import ItemList from './item-list'; 

const Page = () => {
    return (
      <main className="p-4">
        <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
        <ul>
          {ItemList.map((item, index) => (
            <li key={index}>
              {item.name} - Quantity: {item.quantity} - Category: {item.category}
            </li>
          ))}
        </ul>
      </main>
    );
  };
  

export default Page;
