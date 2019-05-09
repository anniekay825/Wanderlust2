import React from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

import "../App.css";

function Dashboard() {
  return (

<div>
    <nav>
        <div class="nav-wrapper">
            <ul class="right hide-on-med-and-down">
                <li><a href="#" title="home"><i class="material-icons">home</i></a></li>
                <li><a href="#" title="maps"><i class="material-icons">explore</i></a></li>
                <li><a href="#" title="weather"><i class="material-icons">beach_access</i></a></li>
                <li><a href="" title="my account"><i class="material-icons">account_circle</i></a></li>
            </ul>
        </div>
    </nav>

    <div id="index-banner" class="parallax-container">
        <div class="section no-pad-bot">
            <div class="container">
                <div class="parallax"><img src="images/background3.jpg" alt="Awesome Travel Photo"></img></div>
            </div>
            <h1 class="header center teal-text text-lighten-2"><strong>Wänderlust & You</strong></h1>
        </div>
    </div>

    <div class="containerForm">
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="col s6">
                        <h6 id="title">Hi Kathleen!</h6>
                    </div>
                    <div class="col s6">
                        <button id="signup" class="btn waves-effect waves-light" type="submit" name="action" >Logout
                        <i class="material-icons right">close</i>
                        </button>
                    </div>

                    <div class="col s12">
                        <h4>Let's Plan a Trip!</h4>
                            <ul class="tabs">
                                <li class="tab col s3"><a class="active" href="#test1">Pick a Place</a></li>
                                <li class="tab col s3"><a href="#test2">Budget & Plan</a></li>
                                <li class="tab col s3 disabled"><a href="#test3">Meet Others</a></li>
                                <li class="tab col s3"><a href="#test4">Get Packing!</a></li>
                            </ul>
                     
                        <img src="../images/worldmapFR.png" id="mainmapFR" />

                    </div>

                </div>
            </form>
        </div>
    </div>

  
    <footer class="page-footer">
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h4>Site Contents</h4>
                    <p class="text-lighten-4">Wänderlust is built alledgely using React, Express, Node, MongoDB, Materialize, and
                        Axios. </p>
                    <p><a href="https://github.com/anniekay825/Wanderlust2" target="_blank"><img id="github"
                                src="../images/PNG/GitHub-Mark-64px.png"></img></a></p>
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

export default Dashboard;
