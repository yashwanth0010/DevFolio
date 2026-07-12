import '../Assets/css/Hero.css';
import { Typewriter, Cursor } from 'react-simple-typewriter'

function Hero() {

  const data_items = Typewriter({
    words: ['Software Engineer', 'Full Stack Developer', 'AI/ML Enthusiast', 'Automation'],
    typeSpeed: 80,
    deleteSpeed: 100,
    loop: 0,
  });

  const circles = Array.from({ length: 20 });

  return (
    <>
      <div id="hero" className="hero route bg-image" >
        <div className="overlay-itro"></div>
        <div className="hero-content display-table">
          <div className="table-cell">
            <img src='/imgs/about.png' alt='Image' width={500} height={500} />

            <div className="container">
              <h1 className="hero-title mb-4">Hi!, I am Yashwanth</h1>
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
          {
            circles.map((_, key) => (
              <li key={key}></li>
            ))
          }
        </ul>
      </div >
    </>);
}

export default Hero;