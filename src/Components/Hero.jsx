import '../Assets/css/Hero.css';
import {Typewriter, Cursor} from 'react-simple-typewriter'

function Hero() {

    const data_items = Typewriter({
      words:['Software Engineer', 'AI enthusiast', 'Freelancer'],
      typeSpeed:80,
      deleteSpeed:100,
      loop: 0,
    });
  


    return ( 
    <>
         <div id="hero" className="hero route bg-image" >
    <div className="overlay-itro"></div>
    <div className="hero-content display-table">
      <div className="table-cell">
        <div className="container">
          <h1 className="hero-title mb-4">I am Yashwanth Kumar</h1>
          <p className="hero-subtitle">
            <span>{data_items}</span>
            <span><Cursor cursorStyle='|' /></span>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    </> );
}

export default Hero;