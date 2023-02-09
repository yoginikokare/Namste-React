import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import RestaurantMenu from "./src/components/RestaurantMenu";

//functional component
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      {/* Commented static body page and to load comp according to 
         route use route-outlet. this the place where we show outlet/}
      {/* <Body /> */}
      {/* this outlet will filled by child configuration */}
      <Outlet/>
      <Footer />
    </React.Fragment>
  );
};

//create route configuration for our app
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Body/>,
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu/>
      }
    ]
  },
  // {
  //   path: '/about',
  //   element: <About/>
  // },
  // {
  //   path: '/contact',
  //   element: <Contact/>
  // }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);

//with routing configuration
root.render(<RouterProvider router={appRouter}/>);
