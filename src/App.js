import './App.css';
import Root from './routes/root'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Privacy from './routes/privacy';
import "./i18n";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/privacy",
      element: <Privacy />,
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
