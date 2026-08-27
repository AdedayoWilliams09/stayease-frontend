// FILE: frontend/src/router.jsx
// MODIFIED: Added /hotels route

import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import App from './App';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const HotelsPage = lazy(() => import('./pages/HotelsPage'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600 dark:text-gray-400 text-sm">Loading...</p>
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Oops!</h1>
          <p className="text-gray-600 dark:text-gray-400">Something went wrong. Please try again.</p>
          <a href="/" className="mt-4 inline-block text-blue-600 hover:underline">
            Go back home
          </a>
        </div>
      </div>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'hotels',
        element: (
          <Suspense fallback={<PageLoader />}>
            <HotelsPage />
          </Suspense>
        ),
      },
      {
        path: 'hotels/:id',
        element: (
          <Suspense fallback={<PageLoader />}>
            <div>Hotel Detail Page (Coming Soon)</div>
          </Suspense>
        ),
      },
      // More routes will be added in future phases
    ],
  },
]);

export default router;