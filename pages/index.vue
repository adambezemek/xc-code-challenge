<template>
  <section class="container">
      <div class="header" v-bind:class="{active: showMenu}">
        <div class="inner-container">
          <!-- Header top row - Social Media and Corporate Links -->
          <div class="top-row">
            <!-- Social Icons -->
            <div class="social-icons">
              <ul class="social">
                <li class="">
                  <a href="http://facebook.com/sitecore" target="_blank" title="Facebook">
                      <span class="fa fa-facebook"></span>
                  </a>
                </li>
                <li class="">
                  <a href="http://twitter.com/sitecore" target="_blank" title="Twitter">
                      <span class="fa fa-twitter"></span>
                  </a>
                </li>
                <li class="">
                  <a href="https://www.youtube.com/user/sitecorechannel" target="_blank" title="YouTube">
                      <span class="fa fa-youtube"></span>
                  </a>
                </li>
              </ul>
            </div>
            <!-- End Social Icons -->

            <!-- Corporate Links -->
            <div class="corporate-links">
              <ul class="corporate">
                <li>
                  <a href="https://github.com/Sitecore/Habitat/" target="" title="Habitat" class="">Habitat</a>
                </li>
                <li>
                  <a href="http://helix.sitecore.net" target="" title="Helix" class="">Helix</a>
                </li>
                <li class="border-left">
                  <a href="https://www.sitecore.net" target="_blank" title="Sitecore.net" class="">Sitecore.net</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- END Header Top Row -->
          <!-- Header Row 2 - Logo and Nav -->
          <div class="logo-row" v-bind:class="{active: showMenu}">
            <div class="mobile-nav" @click="menuToggle">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <Logo />
            <!-- Main Nav -->

            <div class="navbar-container" v-bind:class="{active: showMenu}">
              <div>
                <ul class="navbar">
                      <li class="">
                          <a href="/" target="">
                            Home
                          </a>
                      </li>
                      <li class="has-children">
                          <a href="/About-Habitat" class="dropdown-toggle text-uppercase" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            About Habitat<span class="fa fa-caret-down" aria-hidden="true"></span>
                          </a>
                          <ul class="dropdown">
                              <li class="">
                                <a href="/About-Habitat/Getting-Started" target="">Getting Started</a>
                              </li>
                              <li class="">
                                <a href="http://helix.sitecore.net" target="_blank">Helix Documentation</a>
                              </li>
                          </ul>
                      </li>
                      <li class="has-children">
                          <a href="/Modules" class="dropdown-toggle text-uppercase" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            Modules<span class="fa fa-caret-down" aria-hidden="true"></span>
                          </a>
                          <ul class="dropdown">
                              <li class="">
                                <a href="/Modules/Project" target="">Project</a>
                              </li>
                              <li class="">
                                <a href="/Modules/Feature" target="">Feature</a>
                              </li>
                              <li class="">
                                <a href="/Modules/Foundation" target="">Foundation</a>
                              </li>
                          </ul>
                      </li>
                      <li class="">
                          <a class="text-uppercase" href="/More-Info" target="">
                            More Info
                          </a>
                      </li>
                </ul>
              </div>
            </div><!-- END MAIN NAV -->
            <!-- Right Icons -->
            <div class="navbar-right">
              <ul>
                <li class="hide-mobile">
                  <a href="#">
                    <span class="fa fa-home"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fa fa-globe"></span>
                  </a>
                </li>
                <li class="hide-mobile">
                  <a href="#" >
                    <span class="fa fa-user"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fa fa-search" aria-hidden="true"></span>
                  </a>
                </li>
              </ul>
            </div>
    <!-- END RIGHT ICONS -->

          </div><!-- END LOGO ROW -->
        </div><!-- End Header Inner Container -->
      </div><!-- End Header -->

      <!-- CAROUSEL -->
      <div class="carousel">
        <img class="slideshow-desktop" src="~assets/images/sitecore-slider-1a.png" alt="Sitecore Powered" title="Sitecore Powered!"/>
        <img class="slideshow-mobile" src="~assets/images/sitecore-slider-2.png" alt="Sitecore Powered" title="Sitecore Powered!"/>
      </div>
      <!-- END CAROUSEL -->

      <!-- 3-column blog post area -->
      <div class="3-column inner-container">

      <!-- COL 1-->
        <div class="col-33">
          <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
            <img class="draggable-image" src="~assets/images/Habitat-067-square.jpg" draggable="true" ondragstart="drag(event)" id="drag1" alt="Introduction to Habitat" title="Introduction to Habitat">
          </div>
          <div class="post-content">
            <h3>Introduction to Habitat</h3>
            <p>Sitecore Habitat is a range of sites demonstrating the capabilities of the Sitecore Experience Platform.</p>
            <p>The solution is built on the Sitecore Helix guidelines, which focuses on increasing productivity and quality in Sitecore projects.</p>
            <p><a class="btn" href=''>Read more</a></p>
          </div>
        </div>
        <!-- End Col 1 -->

        <!-- COL 2-->
        <div class="col-33">
          <div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)">
            <img class="draggable-image" src="~assets/images/Habitat-046-square.jpg" draggable="true" ondragstart="drag(event)" id="drag2" alt="Modules" title="Modules">
          </div>
          <div class="post-content">
            <h3>Modules</h3>
            <p>The Habitat example implementation has a range of modules which covers the basics of a Sitecore website.</p>
            <p><a class="btn" href=''>Read more</a></p>
          </div>
        </div>
        <!-- End Col 2 -->

        <!-- COL 3-->
        <div class="col-33">
          <div id="div3" ondrop="drop(event)" ondragover="allowDrop(event)">
            <img class="draggable-image" src="~assets/images/Habitat-022-square.jpg" draggable="true" ondragstart="drag(event)" id="drag3" alt="Getting Started" title="Getting Started">
          </div>
          <div class="post-content">
            <h3>Getting Started</h3>
            <p>Sitecore Helix a defined methodology with conventions and practises - Habitat is an example implementation available for your understanding.</p>
            <p><a class="btn" href=''>Read more</a></p>
          </div>
        </div>
        <!-- End Col 3 -->
    </div><!-- End Blog Post Area -->

  <!-- CTA FOOTER -->
    <div class="call-to-action-footer">
      <div class="inner-container">
        <div class="col-50 download">
          <h3 class="download-h3">Download Habitat Now!</h3>
          <p>Habitat is available as a Sitecore Package and the sourcecode is available on Github.</p>
          <p><a class="btn cta" href=''>Visit Habitat on Github</a></p>
        </div>
        <div class="col-25 anders">
          <div class="underline-image-box">
            <img src="~assets/images/Anders-Laub-Christoffersen.png" alt="Anders Laub Christoffersen" title="Anders Laub Christoffersen">
          </div>
          <p><em>Anders Laub Christoffersen<br>
          Sitecore MVP, Pentia A/S</em></p>
          <p class="quote">[Habitat...] is nothing less than groundbreaking, it is a real revolution in the way that Sitecore teaches developers to work with their product.</p>
        </div>
        <div class="col-25 news">
          <h4>News</h4>
          <p><a class="btn inverse" href=''>Read more</a></p>
        </div>
      </div>
    </div><!-- END CTA FOOTER -->

    <!-- FOOTER -->

    <div class="footer">
      <div class="inner-container">
        <div class="col-16-5">
          <ul class="">
              <li>
                <a href="" target="_blank" title="Community">Community</a>
              </li>
              <li>
                <a href="" target="_blank" title="Documentation">Documentation</a>
              </li>
              <li>
                <a href="" target="_blank" title="Knowledge Base">Knowledge Base</a>
              </li>
              <li>
                <a href="" target="_blank" title="Partner Network">Partner Network</a>
              </li>
          </ul>
        </div>
        <div class="col-16-5">
          <ul class="">
              <li>
                <a href="" target="_blank" title="Best Practice Blogs">Best Practice Blogs</a>
              </li>
              <li>
                <a href="" target="_blank" title="Business Blogs">Business Blogs</a>
              </li>
              <li>
                <a href="" target="_blank" title="Technical Blogs">Technical Blogs</a>
              </li>
                <li class="border"></li>
              <li>
                <a href="" target="_blank" title="Contact Sitecore">Contact Sitecore
                </a>
              </li>
          </ul>
        </div>
        <div class="col-33 about-habitat">
            <h4>About Habitat</h4>
            <p>Habitat sites are demonstration sites for the Sitecore® Experience Platform™.<br>The sites demonstrate the full set of capabilities and potential of the platform through a number of both technical and business scenarios.</p>
            <a class="btn btn-default" href="http://github.com/sitecore/habitat" target="_blank">Example available on GitHub</a>
        </div>
        <div class="col-33 contact-info">
          <div>
            <h4>Contact information</h4>
              <address>
                <p>
                    <strong>Sitecore Corporation</strong>
                  <br>
                  2320 Marinship Way<br>Sausalito, CA 94965<br>USA
                </p>
                <p>
                    <br>
                    <span class="fa fa-phone"></span> +1 415 380 0600              <br>
                    <span class="fa fa-envelope"></span> <a href="mailto:sales@sitecore.net">sales@sitecore.net</a>    </p>
              </address>
          </div>
        </div>
        <div class="col-100 copyright">
          <p>© Copyright 2017, Sitecore. All Rights Reserved<br>
“Habitat” as used here is for demonstration purposes only and to represent the software and services provided by Sitecore further described at www.sitecore.net.</p>
        </div>
      </div><!-- END INNER CONTAINER -->
  </div><!-- END FOOTER -->

    <script>
      function allowDrop(ev) {
      ev.preventDefault();
      }
      function drag(ev) {
        ev.dataTransfer.setData('src', ev.target.id);
      }
      function drop(ev) {
        ev.preventDefault();
        var src = document.getElementById(ev.dataTransfer.getData('src'));
        var srcParent = src.parentNode;
        var tgt = ev.currentTarget.firstElementChild;
        ev.currentTarget.replaceChild(src, tgt);
        srcParent.appendChild(tgt);
      }
    </script>
  </section>

</template>

<script >
import Logo from '~/components/Logo.vue'

export default {
  metaInfo: {
    htmlAttrs: {
      foo: 'bar',
      amp: undefined,
      charlie: 'brown'
    }
  },
  components: {
    Logo
  },
  data: function() {
    return {
      showMenu:true
    }
  },
  methods: {
    menuToggle() {
      this.showMenu = !this.showMenu;
      console.log(this.showMenu);
    }
  }
}
</script>

<style lang="scss">

$habitat-blue:#2e384e;
$habitat-gray:#424c5f;

body {
  font-family: 'Bitter', serif;
}
.header {
  background-color: $habitat-blue;
  height: 122px;
  color: #fff;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  align-items: center;
  text-align: center;
}
.inner-container {
  margin: 0 auto;
  max-width:1170px;
  text-align: center;
}
/* Header Styles */
.header {
    font-family: 'Open Sans', sans-serif;
}
.header a {
  color: #fff;
  text-decoration: none;
}
.top-row {
    width: 100%;
    height: 53px;
}
.links {
  padding-top: 15px;
}
#div1, #div2, #div3 {
  float: left;
}
.social-icons {
    float: left;
}
ul.social {
    padding: 6px 21px;
}
ul.social li {
    display: inline;
    margin-right: 36px;
}
span.fa {
    font-size: 14px;
}
.corporate-links {
    float: right;
    font-size: 14px;
    margin-right: 20px;
}
ul.corporate li {
    display: inline-block;
    margin-left: 25px;
    height: 40px;
    padding-top: 10px;
}
ul.corporate li.border-left {
    border-left: 1px solid #666;
    margin-left: 11px;
    padding-left: 16px;
}/* Mobile Nav */

.mobile-nav {
    display:none;
}

/* Logo */
.habitat-logo {
  float:left;
  margin-left: 10px;
}
/* Dropdown Nav */
.navbar-container {
    float: left;
    width: 72%;
    padding-top: 13px;
    padding-left: 33px;
}
ul.dropdown {
    display: none;
}
ul.navbar {
    list-style: none;
}
ul.navbar li {
  display:inline-block;
  text-transform: uppercase;
  font-size:14px;
  font-weight: 700;
  margin-right: 27px;
  }
ul.navbar span.fa.fa-caret-down {
    margin-left: 7px;
}
/* Nav Right Icons */@at-root
.navbar-right {
    float: right;
    margin-right: 20px;
    margin-top: 11px;
}
.navbar-right ul {
    list-style: none;
    padding-left: 0px;
}
.navbar-right ul li {
    display: inline-block;
    margin-left: 24px;
}
.navbar-right ul li:nth-child(1) {
    margin-left: 0px;
}
/* Carousel */
.carousel {
    margin-bottom: 85px;
}
.carousel img {
    width: 100%;
}
.slideshow-mobile {
  display: none;
}
/* Blog Area Styles */
.col-33 {
  width:33.33333333333%;
  padding:0 15px;
  float:left;
}
.draggable-image {
    width: 100%;
    margin-bottom: 20px;
}
.post-content{
  text-align: left;
  color: $habitat-blue;
}
h2 {
  font-size:31px;
  font-weight:bolder;
  letter-spacing: -0.03em;
}
h3 {
    font-size: 24px;
    margin-bottom: 15px;
    font-weight: bolder;
    letter-spacing: -0.03em;
    color: $habitat-blue;
}
p {
  line-height: 1.8;
  font-size: 14px;
  margin-bottom: 15px;
}

.btn {
  display:block;
  color: $habitat-blue;
  background-color:#fff;
  text-decoration: none;
  text-align:center;
  border:2px solid $habitat-blue;
  float:left;
  font-weight: 700;
  padding: 5px 10px;
  border-radius:20px;
  }
  .btn.inverse {
    color:#fff;
    border-color: #fff;
    background-color:transparent;
  }
.btn:hover {
  background-color: $habitat-blue;
  color:#fff;
}

/* Call to action Footer */

.call-to-action-footer {
    background-color: #424c5f;
    height: 700px;
    float: left;
    width: 100%;
    margin-top: 85px;
    padding-top: 85px;
    color:#fff;
}
.col-50 {
  width:50%;
  padding:0 15px;
  float:left;
}
.col-25 {
  width:25%;
  padding:0 15px;
  float:left;
}
.call-to-action-footer .col-50 {
  padding:58px 80px 0px;
}
.call-to-action-footer .col-50 p {
    margin-top: 16px;
    font-weight: bold;
    font-size: 15px;
}
h3.download-h3 {
    color: #fff;
    font-size: 31px;
}
a.btn.cta {
    background-color: #2e384e;
    color: #fff;
    border-radius: 10px;
    margin: 0 auto;
    float: none;
    max-width: 300px;
    font-size: 18px;
}
a.btn.cta:hover {
  background-color: $habitat-gray;
}
.underline-image-box {
  border-bottom:1px solid #fff;
}
p.quote {
  font-size: 17.5px;
  font-weight: 700;
}
.call-to-action-footer .col-25 h4 {
    float: left;
    height: 30px;
    width: 100%;
    text-align:left;
}
.call-to-action-footer .col-25 .btn.inverse {
  margin-top: 60px;
}
/* FOOTER  */

.footer {
  background-color: $habitat-blue;
  float: left;
  width:100%;
  padding-top: 30px;
  color:#fff;
}

.footer a {
  color:#fff;
}
.footer .btn {
  color:#fff;
  border-color:#fff;
  background-color:transparent;

  }

  .footer .btn:hover {
    color: $habitat-blue;
    background-color:#fff;
  }

.col-16-5 {
  width:16.5%;
  padding:0 15px;
  float:left;
}
.footer .col-16-5 ul {
    padding: 0px;
    list-style: none;
    text-align: left;
}
.footer .col-16-5 ul li a {
  text-decoration: none;
  font-weight: 700;
  display:block;
  height:40px;
  padding:10px;
  font-size:14px;
}
.footer .col-16-5 ul li a:hover {
  background-color:#fff;
  color:$habitat-blue;
}
.about-habitat {
  text-align:left;
  padding:30px 50px 85px 15px;
}
.about-habitat h4, .contact-info h4 {
  font-size:18px;
  margin-bottom: 10px;
}
.about-habitat p {
  font-weight: 700;
}
.contact-info {
  text-align: left;
  font-weight: 700;
}
/*Copyright */
.col-100 {
    float: left;
    text-align: center;
    width:100%;
}
.copyright {
  padding-top: 20px;
}
.copyright p{
  font-size:12px;
  text-align: center;
}
/******* Responsive Styles ***********/

/****** TABLET ******/
@media screen and (max-width:1024px) {

/*Header */
.header {
    height: 200px;
}
.habitat-logo {
    margin-top: 35px;
    width: 140px;
    margin-left: 15px;
}
.habitat-logo img {
    width: 140px;
}
.social-icons {
    float: left;
    width: 100%;
    height: 24px;
}
ul.social {
    padding: 6px 30px;
    float: left;
}
.corporate-links {
    margin-right: 15px;
    margin-bottom: 15px;
}
.navbar-right {
    float: right;
    margin-right: 15px;
    margin-top: 35px;
}

/* CTA FOOTER */

.call-to-action-footer {
    height: auto;
    padding-bottom: 85px;
}

.call-to-action-footer .col-50 {
  width:100%;
}
.call-to-action-footer .col-25 {
  width:50%;
}
.download {
    margin-bottom:60px;
}
.download p {
    font-size: 12px;
}
.news {
  border:1px solid #999;
  padding:20px;
}

/*Footer */

.footer .col-16-5 {
    width: 50%;
}

.footer .col-33 {
    width: 50%;
    margin-top: 30px;
}
.about-habitat {
    padding: 0px 50px 85px 25px;
}
.col-33.contact-info {
    padding: 0 25px;
}
.copyright {
    padding-top: 0px;
}


}

/****** MOBILE ******/
@media screen and (max-width:767px) {

  /*Header */
.header {
    height: 70px;
    transition-duration: 0.4s;
}
.header.active {
  height:290px;
  transition-duration: 0.8s;
}
.top-row {
    display: none;
}
.mobile-nav {
    float: left;
    width: 22px;
    font-size: 26px;
    display: block;
    height: 20px;
    margin-top: 26px;
    margin-left:27px;
    cursor:pointer;
}
.mobile-nav .bar {
    background-color: #fff;
    width: 100%;
    height: 2px;
    margin-bottom: 4px;
    border-radius: 10px;
}
.logo-row {
    height: 67px;
}
.logo-row.active {
  border-bottom:1px solid $habitat-gray;
}
.habitat-logo {
    margin-top: 17px;
    width: 140px;
    margin-left: 16px;
}
.navbar-container {
    display: none;
}
.navbar-right ul li.hide-mobile {
  display:none;
}
.navbar-right {
    margin-right: 45px;
    margin-top: 20px;
}
.navbar-container.active {
    display: block;
    padding-left: 0px;
    width: 100%;
}
ul.navbar {
    padding: 0px;
}
ul.navbar li {
    display: inherit;
    margin-bottom: 22px;
    margin-right: 0px;
}

/* Carousel */
.slideshow-mobile {
  display: block;
}
.slideshow-desktop {
  display: none;
}
.carousel {
    margin-bottom: 30px;
}

/* COLUMNS */

.col-33, .col-25, .footer .col-33, .footer .col-16-5, .call-to-action-footer .col-50, .call-to-action-footer .col-25 {
    width: 100%;
}

/* BLOG AREA */

.inner-container .col-33 {
  margin-bottom:30px;
}

/* CTA Footer */

.call-to-action-footer .col-50 {
    padding: 0px;
}

/* Footer */

.about-habitat {
    padding: 0 25px;
}



}

</style>
