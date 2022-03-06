import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CategoryPage: React.FC = () => {
  // useSelector((state) => state.category);

  return (
    <div>
      <h2>Concerts / Dancing Events / Online Events Page</h2>
      <Outlet />
    </div>
  );
};

export default CategoryPage;
