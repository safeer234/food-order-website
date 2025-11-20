
import App from './App.jsx'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import store from './app/Store.jsx';
import { Provider } from 'react-redux';
import ErrorPage from './pages/ErrorPage.jsx';
import Root from './routing/root.jsx';
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import Services from './Services.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Cart from './pages/Cart.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {index:true, element:<App/>},
      {
        path: "/home",
        element: <Home />
        
      },
      {
        path: "/menu",
        element: <Menu />
        
      },
       {
        path: "/services",
        element: <Services />
        
      },
      {
        path: "/about",
        element: <About />
        
      },
       {
        path: "/contact",
        element: <Contact />
        
      },
       {
        path: "/cart",
        element: <Cart />
        
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />

      </Provider> 
    
  </React.StrictMode>
);