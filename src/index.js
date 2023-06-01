import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Detail from './Components/Detail';
import Home from './Components/Home';

//REDUX
 import {Provider} from "react-redux";
 import {configureStore} from "@reduxjs/toolkit";
 import lists from './reducers/lists';

 const store = configureStore({
  reducer:{lists},
  devTools: true,
 });



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "todos/:todoId",
        element: <Detail/>,

      },

      {
        path: "todos",
        element: <Home/>,
        
      },
      
      {
        path: "/",
        element: <Home/>,
        
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>   
    <RouterProvider router={router} />
  </Provider>
);


reportWebVitals();
