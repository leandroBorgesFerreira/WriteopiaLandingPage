import '../App.css';

function Header() {
  return (
      <header className="header">
        <img className='header-logo' src="/logo.png" alt="Writeopia logo" />
        <button className="header-button">Home</button>
        <button className="header-button">Product</button>
        <button className="header-button">What's coming</button>
      </header>
  );
}

export default Header;
