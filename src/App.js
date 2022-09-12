import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const[MenuItems, setMenuItems] = useState(items)
  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems)
  }

  return (
    <main>
      <h1>Our menu</h1>
      <h2 className='underline'></h2>
      <Categories allCategories={allCategories} items={items}/>
      <Menu items={items}/>
    </main>
  );
}

export default App;