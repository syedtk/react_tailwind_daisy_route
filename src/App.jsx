import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { route } from './Route/Route';
import  './App.css'
const App = () => {
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
};

export default App;