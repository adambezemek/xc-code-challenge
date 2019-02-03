<template>
  <div id="app">
     <!--
          Support: Inclusive Design, Accessibility (A11y), Usability
          Details: The main content is not usually the first thing on a web page. Keyboard and screen reader users generally must navigate a long list
                    of navigation links, sub-lists of links, corporate icons, site searches, and other elements before ever arriving at the main content.
                    This is particularly difficult for users with some forms of motor disabilities.
          Supporting Details: http://webaim.org/techniques/skipnav/
          Fix: Provide a link at the top of the page to allow a user to skip the navigation and go straight to the main content of the site.
      -->
      <a href="#MainContent" class="c-skip-nav u-visually-hidden u-focusable t-background--primary t-color--accent">
          Skip to main content
      </a>
    <header>
      <ul class="l-social-links">
        <li>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" class="fab fa-facebook-f">
            <span class="u-visually-hidden">Visit our Facebook page and Like Us</span>
         </a>
        </li>
        <li>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" class="fab fa-twitter">
            <span class="u-visually-hidden">Check out our latest tweets on Twitter</span>
         </a>
        </li>
        <li>
          <!-- It appears the design maybe using an older youtube logo -->
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" class="fab fa-youtube">
            <span class="u-visually-hidden">Watch some of our videos on our YouTube Channel</span>
         </a>
        </li>
      </ul>

      <ul class="l-sitecore-links">
        <li>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            Habitat
          </a>
        </li>
        <li>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            Helix
          </a>
        </li>
        <li>
          <a href="https://Sitecore.net" target="_blank" rel="noopener noreferrer">
            Sitecore.net
          </a>
        </li>
      </ul>

    <a href="/">
      <!-- TODO: Improvement - Get a transparent logo so the background colors don't clash. -->
      <img src="/images/Habitat-logo.png" alt="Habitat Logo" />
    </a>

    <nav>
      <!--
          Support: Accessibility (A11y) & Vue
          Details: Vue reads falsey as 'not needed' so it will remove the attribute all together
          Supporting Details: https://twitter.com/heydonworks/status/1011668371354652672
          Additional Details: https://github.com/vuejs/vue/issues/7422
          Fix: Cast the boolean to a string so Vue doesn't remove it.
      -->
      <button class="c-mobile-menu" type="button" @click="MobileMenuOpen = !MobileMenuOpen"
              aria-label="Menu" aria-controls="navigation" :aria-expanded=MobileMenuOpen.toString()>
        <span class="c-mobile-menu__icon"></span>
        <div class="c-mobile-menu__label">
          Menu
        </div>
      </button>

      <div id="navigation">
        <ul>
          <li>
            <a href="https://example.com">
              Home
            </a>
          </li>
          <li>
            <a href="https://example.com">
            About Habitat
            </a>
            <ul>
              <li>
                <a href="https://example.com">Sublink</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://example.com">
              Modules
            </a>
            <ul>
              <li>
                <a href="https://example.com">Sublink</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://example.com">
              More Info
            </a>
          </li>
        </ul>
      </div>
    </nav>

      <ul class="l-account-options">
        <li>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" class="fas fa-globe-asia">
            <span class="u-visually-hidden">Around the world</span>
          </a>
        </li>
        <li>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" class="fas fa-user">
            <span class="u-visually-hidden">User <!--If you are not paying for a product, then you are the product not user--></span>
          </a>
        </li>
        <li>
          <button type="button" class="fas fa-search">
            <span class="u-visually-hidden">Search</span>
          </button>
        </li>
      </ul>
    </header>
    <main id="MainContent">
      <div class="c-carousel">
        <h1 class="">Sitecore Powered</h1>
        <em>Fully Leveraging the power of Sitecore</em>
      </div>
      <ContentGrid class="t-background--primary t-color--accent" />
    </main>
    <footer>
      <div class="t-background--secondary">
        <section>
          <h3>Download Habitat Now!</h3>
          <p>Habitat is available as a Sitecore Package and the sourcecode is available on Github.</p>
          <!--darkbutton styles-->Visit Habitat on Github<!--/darkbutton styles-->
        </section>

        <div>
          <img src="" alt="" />
          <!-- border -->
          <blockquote>
            <p>
              [Habitat&hellip;] is nothing less than groundbreaking, it is a real revolution in the way that Sitecored teaches developers to work with their product.
            </p>
          <cite class="vcard">
            <div class="fn n">
              <span class="given-name">Anders</span>&nbsp;
              <span class="additional-name">Laub</span>&nbsp;
              <span class="family-name">Christoffersen</span>
            </div>
            <span class="title">Sitecore MVP</span>,&nbsp;
            <span class="org">Pentia A/S</span>
          </cite>

          </blockquote>
        </div>

        <section>
          <h4>News</h4>
          <a href="https://example.com">Read More <span class="u-visually-hidden">News</span></a>
        </section>
      </div>

      <nav>
        <ul>
          <li>
            <a href="https://example.com">
              Community
            </a>
          </li>
            <li>
            <a href="https://example.com">
              Documentation
            </a>
          </li>
          <li>
            <a href="https://example.com">
              Knowledge Base
            </a>
          </li>
          <li>
            <a href="https://example.com">
              Partner Network
            </a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <a href="https://example.com">
              Best Practice Blogs
            </a>
          </li>
            <li>
            <a href="https://example.com">
              Business Blogs
            </a>
          </li>
          <li>
            <a href="https://example.com">
              Technical Blogs
            </a>
          </li>
          <li>
            <a href="https://example.com">
               <!-- Top border --> Contact Sitecore
            </a>
          </li>
        </ul>
      </nav>

      <section>
        <h5>About Habitat</h5>
        <p>Habitat sites are demonstration sites for the Sitecore &reg; Experience Platform&trade;. The sites demonstrate the full set of capabilities and potential of the platform through a number of both technical and business scenarios.</p>
        <!--link button styles ghost -->Example available on Github
      </section>

      <section>
        <h6>Contact information</h6>
        Sitecore Corporation
        <address class="adr">
          <div class="street-address">2320 Marinship Way</div>
          <span class="locality">Sausalito</span>,
          <span class="region">CA</span>
          <span class="postal-code">94965</span>
          <div class="country-name">USA</div>
          <div>
            <span class="fas fa-phone u-rotate--90deg"></span>
            <a href="tel:+14153600600" class="tel">+1 415 360 0600</a>
          </div>
        </address>

       <div>
            <span class="fas fa-envelope"></span>
            <a href="mailto:sales@sitecore.net">sales@sitecore.net</a>
       </div>


      </section>

      <div>
        <small>&copy;Copyright 2017, Sitecore. All Rights Reserved<br />
        &ldquo;Habitat&rdquo; as used here is for demonstration purposes only and to represent the software and services provided by Sitecore further described at <a href="https://www.sitecore.net" target="_blank" rel="noopener noreferrer">www.sitecore.net</a>.</small>
      </div>

    </footer>
    <!--
          Support: Inclusive Design, Accessibility (A11y), Usability
          Supporting Details: http://webaim.org/techniques/skipnav/
    -->
    <a href="#Top" class="c-skip-nav u-visually-hidden u-focusable t-background--primary t-color--accent">
      Go back to top of the page?
    </a>
  </div>
</template>

<script>
import ContentGrid from './components/ContentGrid.vue'

export default {
  name: 'app',
  components: {
    ContentGrid
  },
  data(){
    return {
      MobileMenuOpen: false
    }
  }
}
</script>

<style>

.c-mobile-menu
{
  cursor: pointer;
}

.c-mobile-menu__icon
{
  position: relative;
  margin-top: 1rem;
  margin-right: auto;
  margin-left: auto;
}

.c-mobile-menu__icon:before{
  margin-top:-12px;
}

.c-mobile-menu__icon:after{
  margin-top:12px;
}

.c-mobile-menu__icon:before,
.c-mobile-menu__icon:after
{
  position: absolute;
  content: "";
}

.c-mobile-menu__icon,
.c-mobile-menu__icon:before,
.c-mobile-menu__icon:after
{
  width: 30px;
  height: 6px;
  background-color: currentColor;
  display: block;
}

.c-mobile-menu__label
{
  margin-top:1rem;
  height: 0;
  visibility: hidden;
}

@media screen and (-ms-high-contrast: active)
{
  /**
  * Support: Accessibility (A11y)
  * Details: When a user has high contrast, they won't be able to see the hamburger icon, so add the border when high-contrast mode is active so users can see it.
  */

  .c-mobile-menu__icon,
  .c-mobile-menu__icon:after,
  .c-mobile-menu__icon:before
  {
      border: 1px solid;
  }

  .c-mobile-menu__icon:after
  {
      margin-top: 11px;
  }

  .c-mobile-menu__icon:before,
  .c-mobile-menu__icon:after
  {
      margin-left: -1px /* Because pseudo-elements are contained by the elements formatting box & that box has a border applied, a negative margin needs to be applied to keep them aligned */;
  }

  .c-mobile-menu__label
  {
    visibility: visible;
    height: auto;
  }

}

.c-skip-nav
{
  padding: 0.5rem !important;
  display: block;
}

.c-skip-nav:focus
{
  border: thick dashed currentColor;
}

.u-rotate--90deg
{
  transform: rotate(90deg);
}
</style>
