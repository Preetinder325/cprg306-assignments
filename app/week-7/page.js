"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((currentItems) => [...currentItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0] 
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g,
        ""
      ) 
      .trim(); 
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="p-5 min-h-screen bg-blue-50 flex justify-around">
      <div className="flex-1 mr-8">
        <h1 className="text-3xl font-bold text-center text-blue-800">
          Shopping List
        </h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1 ml-8">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
};

export default Page;
