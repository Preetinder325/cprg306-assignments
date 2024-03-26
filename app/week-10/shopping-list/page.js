"use client";
import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

const Page = () => {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    // Load items from Firebase
    const loadItems = async () => {
      if (user) {
        const itemsFromService = await getItems(user.uid);
        setItems(itemsFromService);
      }
    };
    loadItems();
  }, [user]); // Depend on user to reload items when user changes

  const handleAddItem = async (item) => {
    if (user) {
      const id = await addItem(user.uid, item); // Add item to Firebase
      setItems((currentItems) => [...currentItems, { ...item, id }]); // Add new item with id to state
    }
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
