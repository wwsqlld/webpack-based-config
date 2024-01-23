import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './components/App/App';
import { LazyAbout } from '@/pages/about/About.lazy';
import { LazyShop } from '@/pages/shop/Shop.lazy';
import { Suspense } from 'react';
import React from 'react';

const root = document.getElementById('root')

const container = createRoot(root)

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: '/about',
            element: <Suspense fallback={'Loading...'}><LazyAbout /></Suspense>
        },
        {
            path: '/shop',
            element: <Suspense fallback={'Loading...'}><LazyShop /></Suspense> 
        },
      ]
    },
]);

container.render(
    <RouterProvider router={router} />
)