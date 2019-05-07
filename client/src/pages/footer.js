import React from 'react';

import "../App.css";

function Footer() {
  return (


<footer class="page-footer">
 <div class="container">
   <div class="row">
     <div class="col l6 s12">
       <h4>Site Contents</h4>
       <p class="text-lighten-4">Wänderlust is built using React, Express, Node, MongoDB, Materialize, and Axios.  </p>
       <p><a href="https://github.com/ATATE13/Wanderlust_2.0" target="_blank"><img id="github" src="../images/PNG/GitHub-Mark-64px.png"></img></a></p>
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

    );
 }

export default Footer;