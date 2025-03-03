import './App.css';
import Root from './routes/root'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Privacy from './routes/privacy';

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
