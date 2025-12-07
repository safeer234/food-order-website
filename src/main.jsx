import App from './App.jsx'
import './App.css';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import store from './app/Store.jsx';
import { Provider } from 'react-redux';
import ErrorPage from './pages/ErrorPage.jsx';
import Root from './routing/root.jsx';
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';
import Order from './pages/Order.jsx';
import Myorders from './pages/Myorders.jsx'; 
import TrackOrder from './pages/TrackOrder.jsx';
import ManageAddress from './pages/ManageAddress.jsx';
import Wallet from './pages/Wallet.jsx';
import Profile from './pages/Profile.jsx';
import EditProfile from './pages/EditProfile.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddAddress from './pages/AddAddress.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> },

      { path: "/home", element: <Home /> },
      { path: "/menu", element: <Menu /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/order", element: <Order /> },
      { path: "/myorder", element: <Myorders /> },
       { path: "/trackorder", element: <TrackOrder /> },
       { path: "/address", element: <ManageAddress /> },
       { path: "/wallet", element: <Wallet /> },
        { path: "/profile", element: <Profile /> },
        { path: "/editprofile", element: <EditProfile /> },
         { path: "/addaddress", element: <AddAddress /> },
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