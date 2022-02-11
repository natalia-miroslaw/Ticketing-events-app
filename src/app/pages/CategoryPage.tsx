import React from 'react';
import { Outlet } from 'react-router-dom';

const CategoryPage: React.FC = () => {
  return (
    <div>
      <h2>Concerts / Dancing Events / Online Events Page</h2>
      <Outlet />
    </div>
  );
};

export default CategoryPage;
