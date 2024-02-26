import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className=" p-5 min-h-screen bg-blue-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-800">Shopping List</h1>
          <ItemList />
        </div>
    </main>
  );
};

export default Page;
