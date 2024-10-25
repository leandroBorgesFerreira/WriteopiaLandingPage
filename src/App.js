import './App.css';
import Hero from './hero/Hero.tsx'; 
import Header from './header/Header.tsx';
import Footer from './footer/Footer.tsx';
import Compatibility from './platforms/Compatibility.tsx';
import Newsletter from './contact/Newsletter.tsx';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Compatibility />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
