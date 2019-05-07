import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App"> 

    {/* This is the repeatable header for all pages */}
      <nav>
        <div class="nav-wrapper">
          <ul class="right hide-on-med-and-down">
            <li><a href="#" title="home"><i class="material-icons">home</i></a></li>
            <li><a href="#" title="maps"><i class="material-icons">explore</i></a></li>
            <li><a href="#" title="weather"><i class="material-icons">beach_access</i></a></li>
            <li><a href="../components/signin.html" title="my account"><i class="material-icons">account_circle</i></a></li>
          </ul>
        </div>
      </nav>
      {/* End of the repeatable header */}

      <div id="index-banner" class="parallax-container">
        <div class="section no-pad-bot">
          <div class="container">
            <div class="parallax"><img src="images/background3.jpg" alt="Awesome Travel Photo"></img></div>
          </div>
            <h1 class="header center teal-text text-lighten-2"><strong>Wänderlust</strong></h1>
          <div class="row center">
            <h5 class="header col s12 dark">Experience the World and Meet New Friends</h5>
          </div>
          <div class="row center">
            <a href="#LearnMore" id="download-button" class="btn-large waves-effect waves-light teal lighten-3">Learn More</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="../components/signup.html" id="download-button" class="btn-large waves-effect waves-light teal lighten-2">Sign-Up</a>
          </div>
        </div>
      </div> 
      
      <div class="container">
    <div class="section">
      <div class="row">

        <div class="col s12 m2">
          <div class="icon-block" class="containerAB">
            <h2 class="center teal-text"><img src="../images/noun_Compass_7175.png" class="image"></img></h2>
            <div class="middle">
              <div class="text">Explore Maps</div>
            </div>
          </div>
        </div>

        <div class="col s12 m2">
          <div class="icon-block" class="containerAB">
            <h2 class="center teal-text"><img src="../images/noun_weather_2327932.png" class="image"></img></h2>
            <div class="middle">
            <div class="text">Weather Reports</div>
            </div>
          </div>
        </div>

        <div class="col s12 m2">
          <div class="icon-block" class="containerAB">
            <h2 class="center teal-text"><img src="../images/noun_tourist_12751.png" class="image"></img></h2>
            <div class="middle">
            <div class="text">Meet Other Travelers</div>
            </div>
          </div>
        </div>

        <div class="col s12 m2">
          <div class="icon-block" class="containerAB">
            <h2 class="center teal-text"><img src="../images/noun_language_1714005.png" class="image"></img></h2>
            <div class="middle">
            <div class="text">Learn a Language</div>
            </div>
          </div>
        </div>

        <div class="col s12 m2">
          <div class="icon-block" class="containerAB">
            <h2 class="center teal-text"><img src="../images/noun_review_1966404.png" class="image"></img></h2>
            <div class="middle">
            <div class="text">Our Reviews</div>
            </div>
            </div>
        </div>

        <div class="col s12 m2">
          <div class="icon-block" class="containerAB">
            <h2 class="center teal-text"><img src="../images/noun_Planning_965708.png" class="image"></img></h2>
            <div class="middle">
            <div class="text">Travel Blogs</div>
            </div>
            </div>
        </div>
        </div>
    </div>
  </div>

        <div id="index-banner" class="parallax-container">
        <div class="section no-pad-bot">
          <div class="container">
            <div class="parallax"><img src="images/Luxury-Banner.jpg" alt="Awesome Travel Photo"></img></div>
          </div>
            <div class="row center">
            <br></br>
            <h2 class="header col s12">“Not all those who wander are lost.” – J.R.R. Tolkien</h2>
          </div>
        </div>
      </div> 

      <div class="container">
      <div id="LearnMore">
        <h4>Wänderlust is more than just a website.  It's a state of mind.  Those of us that love to travel are always wanting to experience a new place, learn new things, and meet new people.  This site gives you the chance to do all of that - and more.  It doesn't matter if you want to visit the local Zoo or Zimbabwe, exploring the world around you expands your mind and soul.  &nbsp;<a class="highlight">Where do you want to go?</a></h4>
      </div>
      </div>
      <br></br>
      <br></br>

      <div class="mdc-card__actions">
  <div class="mdc-card__action-buttons">
    <button class="mdc-button mdc-card__action mdc-card__action--button">
      <span class="mdc-button__label">Read</span>
    </button>
    <button class="mdc-button mdc-card__action mdc-card__action--button">
      <span class="mdc-button__label">Bookmark</span>
    </button>
  </div>
  <div class="mdc-card__action-icons">
   <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Share">share</button>
    <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="More options">more_vert</button>
  </div>
</div>

      <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h4>Site Contents</h4>
                <p class="text-lighten-4">Wänderlust is built using React, Express, Node, MongoDB, Materialize, and Axios.  </p>
                <p><a href="https://github.com/anniekay825/Wanderlust2" target="_blank"><img id="github" src="../images/PNG/GitHub-Mark-64px.png"></img></a></p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h4>Links</h4>
                <ul>
                  <li><a class="text-lighten-3" href="#!">Maps & Weather</a></li>
                  <li><a class="text-lighten-3" href="#!">Meet other Travelers</a></li>
                  <li><a class="text-lighten-3" href="#!">Make a Plan!</a></li>
                  <li><a class="text-lighten-3" href="#!">Language Tutorials</a></li>
                  <li><a class="text-lighten-3" href="#!">Travel Blogs</a></li>
                  <li><a class="text-lighten-3" href="#!">Travel Tips</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2019 A&K Productions

            </div>
          </div>
        </footer>
        </div>

    );  
  }
}

export default App;
