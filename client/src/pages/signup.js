import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Signup() {
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
                <div class="parallax"><img src="images/background3.jpg" alt="Awesome Travel Photo"></img></div>
            </div>
            <h1 class="header center teal-text text-lighten-2"><strong>Wänderlust</strong></h1>

        </div>
    </div>

    <div class="containerForm">
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <i class="material-icons prefix">account_circle</i>
                        <input id="yourname" type="text" class="validate" />
                        <label for="yourname">Your Name</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <i class="material-icons prefix">email</i>
                        <input id="email" type="email" class="validate" />
                        <label for="email">Email</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <i class="material-icons prefix">security</i>
                        <input id="password" type="password" class="validate" />
                        <label for="password">Password</label>
                    </div>
                </div>

                <label>
                    <div class="input-field col s6">
                        <input type="checkbox" class="filled-in" checked="checked" />
                        <span>Yes, I want to stay in touch!</span>
                    </div>
                </label>

                <select>
                    <div class="input-field col s6">
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option selected value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                    </div>
                </select>

                <Link id="submits" to="/dashboard" className={window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}>
                    SUBMIT </Link>

                {/* <button id="signup" class="btn waves-effect waves-light" type="submit" name="action" >Submit
                    <i class="material-icons right">send</i>
                </button> */}
                <br></br>
            </form>
        </div>
    </div>

  
    <footer class="page-footer">
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h4>Site Contents</h4>
                    <p class="text-lighten-4">Wänderlust is built using React, Express, Node, MongoDB, Materialize, and
                        Axios. </p>
                    <p><a href="https://github.com/anniekay825/Wanderlust2" target="_blank"><img id="github"
                                src="../../images/PNG/GitHub-Mark-64px.png"></img></a></p>
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

export default Signup;
