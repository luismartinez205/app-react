import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Mapa from './Mapa';
import Json from './Json';
import Rick from './Rick'; 
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Header from './Header';

const router=createBrowserRouter([
{
  path:'/',
  element:<Header/>,
},
{
  path:'/mapa',
  element:<Mapa/>, 
   
},
{
  path:'/Rick',
  element:<Rick/>,
},
{
  path:'/json',
  element:<Json/>
},
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
