import { useState } from 'react';
import './App.css';
import dorey from './Dorey.gif';



function App() {
  const [count, setCount] = useState(0);
  const [animationActive, setAnimationActive] = useState(false);
  const handleClick = () => {
    setAnimationActive((prev) => !prev);
  };

  function toggleMobileMenu(menu) {
    menu.classList.toggle(`open`);
}

  return (
    <div>
      <header id="nav">
        <div className="nav-name">Trey Williams</div>
        <nav className="navbar">
          <ul>
            <li className="nav-about"><a href="#section2">About</a></li>
            <li className="nav-project"><a href="#section3">Projects</a></li>
            <li className="nav-contact"><a href="#section4">Contact</a></li>
          </ul>
        </nav>
        <div id="hamburger-icon" onClick={() => toggleMobileMenu(this)}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          <ul className="mobile-menu">
            <li className="nav-mobile-about"><a href="#section2">About</a></li>
            <li className="nav-mobile-project"><a href="#section3">Projects</a></li>
            <li className="nav-mobile-contact"><a href="#section4">Contact</a></li>
          </ul>
        </div>
      </header>
      <section id="section1">
        <div className="opening-text" onClick={handleClick}>
          <h2 className="op-name1">Trey Williams</h2>
          <h1 className="op-name3">Software Engineer</h1>
          </div> 
          {animationActive && (
            <>
            <h1></h1>
            <span class="bub a"></span>
            <span class="bub b"></span>
            {/* <span class="bub c"></span> */}
            <span class="bub d"></span>
            <span class="bub e"></span>
            <span class="bub f"></span>
            {/* <span class="bub g"></span> */}
            <span class="bub h"></span>
            {/* <span class="bub i"></span> */}
            {/* <span class="bub j"></span> // dev- blocked out due to streching across page */}
            <span class="bub k"></span> 
            {/* <div className={`fish ${animationActive ? 'active' : ''}`}
              style={{ backgroundImage: `url(${dorey})` }}
            ></div> */}
            </>
          )}
           
      </section>
      <section id="section2">
        <h1 id="s2-top">Who am I?</h1>
        <div className="bracket_about">
          <h3 className="bracket1">[</h3>
          <h2 className="about_me">
          I'm a collaborative, motivated and dedicated full-
          stack software engineer with a customer service
          and sales background. Possesses strong
          interpersonal skills to drive consumer  
          engagement through a user interface.
          Passionate about building creative web
          applications with the user in mind and
          incorporating interactive features to enhance
          the overall user experience. Driven to bring
          artistic and analytical perspectives to create
          innovative products and services.
          </h2>
          <h3 className="bracket2">]</h3>
        </div>
      </section>
      <section id="section3">
        <div id="project_box">
          <a href="https://trey-way.github.io/SuperHeroAlmanac/">
            <div className="box1">
              <img src="https://i.ibb.co/CPhFR5V/2022-06-08-T00-27-20.png" alt="Showcase Photo" className="box1Photo" />
              <div className="box1Text">
                <h2>SuperHero Almanac</h2>
                <p>Neat tool that allows you to search for any SuperHero!</p>
              </div>
            </div>
          </a>
          <a href="https://github.com/Team-French-Fries/todo-fries-client" className="box2">
            <div>
              <img src="https://i.imgur.com/Uaomdox.png" alt="Showcase Photo2" className="box2Photo" />
              <div className="box2Text">
                <h2>Todo-list</h2>
                <p>Create a list that categorizes your day the right way!</p>
              </div>
            </div>
          </a>
          <a href="https://github.com/Trey-Way/Snake-Cave" className="box3">
            <div>
              <img src="https://user-images.githubusercontent.com/100661082/178079338-6aff8f49-3845-41da-b146-4ab5921a5236.png" alt="Showcase Photo2" className="box2Photo" />
              <div className="box3Text">
                <h2>Snake Cave</h2>
                <p>Infinite Platformer built entirely in Python!</p>
              </div>
            </div>
          </a>
          <h3 className="text_p">Projects</h3>
        </div>
      </section>
      <section id="section4">
        <h3 id="s3top">How do I contact?</h3>
        <div className="icons">
          <a href="https://docs.google.com/document/d/151Fey3FCzpfSWTgiJc_0aJjggXU7It3FbLRQGEJbjZI/edit?usp=sharing">
            <div className="resume-icon">
              <i className="fa fa-paper-plane"></i>
              <h2>My Resume</h2>
            </div>
          </a>
          <a href="https://github.com/Trey-Way">
            <div className="github-icon">
              <i className="fa fa-github"></i>
              <h2>GitHub</h2>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/treywilliams-se1111/">
            <div className="linkedin-icon">
              <i className="fa fa-user-circle-o"></i>
              <h2>LinkedIn</h2>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
