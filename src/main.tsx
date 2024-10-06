import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ErrorPage from './pages/ErrorPage'
import BookPage from './pages/BookPage'
import ChapterPage from './pages/ChapterPage'
import HomePage from './pages/homePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/book/:bookId',
    element: <BookPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/book/:bookId/chapter/:chapterId',
    element: <ChapterPage />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
