import React from 'react';
import Button from 'react-bootstrap/Button';
import "../App.css";

function Signin() {
  return (

<div>
<div class="nav-wrapper">
  <ul class="right hide-on-med-and-down">
    <li><a href="#" title="home"><i class="material-icons">home</i></a></li>
    <li><a href="#" title="maps"><i class="material-icons">explore</i></a></li>
    <li><a href="#" title="weather"><i class="material-icons">beach_access</i></a></li>
    <li><a href="" title="my account"><i class="material-icons">account_circle</i></a></li>
  </ul>
  </div>

 <footer class="page-footer">
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h4>Site Contents</h4>
                    <p class="text-lighten-4">Wänderlust is built using React, Express, Node, MongoDB, Materialize, and
                        Axios. </p>
                    <p><a href="https://github.com/anniekay825/Wanderlust2" target="_blank"><img id="github"
                                src="../../public/images/PNG/GitHub-Mark-64px.png"></img></a></p>
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

export default Signin;

