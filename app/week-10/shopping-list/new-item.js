// new-item.js
"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce"); // Ensuring that this should match our Firestore rules

  const OnClickSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };

    onAddItem(item);
  };

  return (
    <div className="flex justify-center w-full mt-4">
      <form onSubmit={OnClickSubmit} className="space-y-4">
        <label className="block font-semibold text-blue-800">
          <input
            required
            type="text"
            placeholder="Item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full px-3 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-blue-800 focus:border-blue-800"
          />
        </label>

        <label className="block font-semibold text-blue-800">
          <input
            required
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="block w-full px-3 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-blue-800 focus:border-blue-800"
          />
        </label>

        <label className="block font-semibold text-blue-800">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full px-3 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-blue-800 focus:border-blue-800"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </label>

        <button
          type="submit"
          className="bg-blue-400 active:bg-blue-800 text-white font-bold py-2 px-4 rounded w-full"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
