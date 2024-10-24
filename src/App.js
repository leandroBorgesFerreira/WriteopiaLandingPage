import './App.css';
import SubHeader from './subHeader/SubHeader.tsx'; 
import Header from './header/Header.tsx';
import Footer from './footer/Footer.tsx';

function App() {
  return (
    <div className='App'>
      <Header />
      <SubHeader />
      <Footer />
    </div>
  );
}

export default App;
