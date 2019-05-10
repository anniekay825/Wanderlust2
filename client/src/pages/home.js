import React from 'react';
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
    return (

<div>
<nav>
<div class="nav-wrapper">
  <ul class="right hide-on-med-and-down">
    <li className="nav-item">
       <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
       <i class="material-icons"> home</i>
       </Link>
     </li>

    <li><a href="#" title="maps"><i class="material-icons">explore</i></a></li>
    <li><a href="#" title="weather"><i class="material-icons">beach_access</i></a></li>
    

    <li className="nav-item">
       <Link to="/signin" className={window.location.pathname === "/signin" ? "nav-link active" : "nav-link"}>
       <i class="material-icons"> account_circle</i>
       </Link>
     </li>
  </ul>
</div>
</nav>

<div id="index-banner" class="parallax-container">
        <div class="section no-pad-bot">
          <div class="container">
            <div class="parallax"><img src="../../images/background3.jpg" alt="Awesome Travel Photo"></img></div>
          </div>
            <h1 class="header center teal-text text-lighten-2"><strong>Wänderlust</strong></h1>
          <div class="row center">
            <h5 class="header col s12 dark">Experience the World and Meet New Friends</h5>
          </div>
          <div class="row center">
            <a href="#LearnMore" id="download-button" class="btn-large waves-effect waves-light teal lighten-3">Learn More</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <a href="" id="download-button" class="btn-large waves-effect waves-light teal lighten-2">Sign-Up</a> */}

              <Link id="submits" to="/signup" className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}>
                    SIGN UP </Link>
          
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
            <h2 class="center teal-text"><img src="../images/noun_Language_1714005.png" class="image"></img></h2>
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
      <br></br>
      <Link id="submits" to="/signup" className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}>
                    SIGN UP </Link>
      </div>

      <footer class="page-footer">
 <div class="container">
   <div class="row">
     <div class="col l6 s12">
       <h4>Site Contents</h4>
       <p class="text-lighten-4">Wänderlust is built using React, Express, Node, MongoDB, Materialize, and Axios.  </p>
       <p><a href="https://github.com/anniekay825/Wanderlust2" target="_blank"><img id="github" src="../../images/PNG/GitHub-Mark-64px.png"></img></a></p>
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

export default Home;
