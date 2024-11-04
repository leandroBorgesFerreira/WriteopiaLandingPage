import './App.css';
import Root from './routes/root'
import Product from './routes/product'
import Coming from './routes/coming'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/product",
      element: <Product />,
    },
    {
      path: "/coming",
      element: <Coming />,
    }
  ]
);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
