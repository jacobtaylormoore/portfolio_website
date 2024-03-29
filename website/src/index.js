import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import ErrorPage from './error-page';
import './fonts/Forum-Regular.ttf';
import './fonts/Gotu-Regular.ttf';
import './fonts/Forum-Regular.ttf';
import './font.css'
import Passage from './Passage/index.js';
import PassageSuccess from './Passage/PassageSuccess';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/passage",
    element: <Passage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/passageSuccess",
    element: <PassageSuccess />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
