import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const About = lazy(() => import("./components/About"))

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const route = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: (<Suspense fallback={<h1>Loading....</h1>}><About /></Suspense>
                ),
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/restaurant/:resid',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={route} />)