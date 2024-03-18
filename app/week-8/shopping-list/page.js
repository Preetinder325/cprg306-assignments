"use client";
import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";

const Page = () => {
  const { user } = useUserAuth(); 
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (!user) {
      console.log("User not logged in. Redirecting to login page...");
    }
  }, [user]);

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

  if (!user) {
    return (
      <main className="p-5 min-h-screen bg-blue-50 flex justify-center items-center">
        <div>
          <h1 className="text-xl font-bold text-center text-blue-800">
            Oops!!! Please log in to access the shopping list.
          </h1>
        </div>
      </main>
    );
  }

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
