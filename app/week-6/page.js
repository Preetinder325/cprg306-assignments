"use client";
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json'; 

const Page = () => {
    const [items, setItems] = useState(itemsData);
    const handleAddItem = (newItem)=> {
        setItems(currentItems => [...currentItems, newItem]);
    };
  return (
    <main className=" p-5 min-h-screen bg-blue-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-800">Shopping List</h1>
        <NewItem onAddItem={handleAddItem}/>
          <ItemList items={items}/>
        </div>
    </main>
  );
};

export default Page;
