import '../App.css';

function SubHeader() {
  return (
      <div className="subheader">    
        <p className='subheader-title '>Free documentation. <span className="highlight">For the brave and true.</span> </p>        

        <img src="/usage_screenshot.png" className='responsive-image' alt="Screenshot of Writeopia" />
      </div>
  );
}

export default SubHeader;
