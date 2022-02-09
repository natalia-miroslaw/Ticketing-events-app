import React from 'react';
import { Outlet } from 'react-router-dom';

const CategoryPage: React.FC = () => {
  return (
    <div>
      Concerts Page
      <Outlet />
    </div>
  );
};

export default CategoryPage;
