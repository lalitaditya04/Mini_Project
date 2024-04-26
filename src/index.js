import ReactDOM from 'react-dom/client';
import ReviewPage from './Pages/Review';
import reportWebVitals from './reportWebVitals';
import Quiz from './Pages/Quiz';
import Land from './Landing';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


  const router = createBrowserRouter([
    {
        path: "/",
        element: <Land/>,
      },
    {
        path: "Review",
        element: <ReviewPage/>,
      },
    {
        path:"Quiz",
        element: <Quiz/>,
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

reportWebVitals();