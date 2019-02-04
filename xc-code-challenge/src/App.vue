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
    <div class="l-global-container">
      <div class="l-global-inner">
        <header class="l-header t-font--system">
          <ul class="l-header__social-links o-navigation c__social-links">
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

          <ul class="l-header__sitecore-links o-navigation  u-text-right">
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
        <div class="l-header__logo">
          <a href="/">
            <!-- TODO: Improvement - Get a transparent logo so the background colors don't clash. -->
            <img src="/images/Habitat-logo.png" alt="Habitat Logo" class="l-header__logo-img" />
          </a>
        </div>
        <nav class="l-header__navigation">
          <!--
              Support: Accessibility (A11y) & Vue
              Details: Vue reads falsey as 'not needed' so it will remove the attribute all together
              Supporting Details: https://twitter.com/heydonworks/status/1011668371354652672
              Additional Details: https://github.com/vuejs/vue/issues/7422
              Fix: Cast the boolean to a string so Vue doesn't remove it.
          -->
          <button class="c-mobile-menu l-header__mobile-menu t-background--transparent t-border t-border-color--transparent t-color" type="button" @click="MobileMenuOpen = !MobileMenuOpen"
                  aria-label="Menu" aria-controls="navigation" :aria-expanded=MobileMenuOpen.toString()>
            <span class="c-mobile-menu__icon"></span>
            <div class="c-mobile-menu__label">
              Menu
            </div>
          </button>

          <ul id="navigation" class="o-navigation c-main-navigation l-header__navigation-links u-font-weight--bold">
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
        </nav>

          <ul class="l-account-options c-account-options o-navigation u-text-right">
            <li>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer" class="fas fa-globe-asia">
                <span class="u-visually-hidden">Around the world</span>
              </a>
            </li>
            <li class="c-account-options__my-account">
              <a href="https://example.com" target="_blank" rel="noopener noreferrer" class="fas fa-user">
                <span class="u-visually-hidden">User <!--If you are not paying for a product, then you are the product not user--></span>
              </a>
            </li>
            <li>
              <button type="button" class="fas fa-search t-background--transparent t-border t-border-color--transparent t-color">
                <span class="u-visually-hidden">Search</span>
              </button>
            </li>
          </ul>
        </header>
        <main id="MainContent" class="l-main-content">
          <div class="c-carousel">
            <h1 class="">Sitecore Powered</h1>
            <em>Fully Leveraging the power of Sitecore</em>
          </div>
          <ContentGrid class="t-background--primary t-color--accent" />
        </main>
        <footer>
          <div class="t-background--secondary l-subfooter">
            <section class="l-subfooter__download u-text-center">
              <h3>Download Habitat Now!</h3>
              <p>Habitat is available as a Sitecore Package and the sourcecode is available on Github.</p>
              <a href="https://example.com" class="c-link-button c-link-button--dark u-link">Visit Habitat on Github</a>
            </section>

            <div class="l-subfooter__quote c-quote u-text-center">
              <img class="c-quote__image" src="/images/Anders-Laub-Christoffersen-portrait.jpg" alt="Anders Laub Christoffersen" />
              <blockquote class="c-quote__blockquote">
                <p class="c-quote__quote">
                  [Habitat&hellip;] is nothing less than groundbreaking, it is a real revolution in the way that Sitecored teaches developers to work with their product.
                </p>
                <cite class="vcard c-quote__citation">
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

            <section class="l-subfooter__news">
              <h4>News</h4>
              <a href="https://example.com" class="c-link-button u-link">Read More <span class="u-visually-hidden">News</span></a>
            </section>
          </div>

          <div class="l-footer">
            <nav class="l-footer__site-links t-font--system">
              <ul class="o-navigation o-navigation--stacked c-footer-links">
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
            <nav class="l-footer__blog-links t-font--system">
              <ul class="o-navigation o-navigation--stacked c-footer-links">
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
                    Contact Sitecore
                  </a>
                </li>
              </ul>
            </nav>

            <section class="l-footer__about">
              <h5>About Habitat</h5>
              <p>Habitat sites are demonstration sites for the Sitecore &reg; Experience Platform&trade;. The sites demonstrate the full set of capabilities and potential of the platform through a number of both technical and business scenarios.</p>
              <a href="https://example.com" class="c-link-button u-link">Example available on Github</a>
            </section>

            <section class="l-footer__contact">
              <h6>Contact information</h6>
              Sitecore Corporation
              <address class="adr">
                <div class="street-address">2320 Marinship Way</div>
                <span class="locality">Sausalito</span>,
                <span class="region">CA</span>
                <span class="postal-code">94965</span>
                <div class="country-name">USA</div>
                <div> <!-- Add a margin to this -->
                  <span class="fas fa-phone u-rotate--90deg"></span>
                  <a href="tel:+14153600600" class="tel u-link">+1 415 360 0600</a>
                </div>
              </address>

              <div>
                    <span class="fas fa-envelope"></span>
                    <a href="mailto:sales@sitecore.net">sales@sitecore.net</a>
              </div>


            </section>

            <div class="l-footer__legal u-text-center">
              <small>&copy;Copyright 2017, Sitecore. All Rights Reserved<br />
              &ldquo;Habitat&rdquo; as used here is for demonstration purposes only and to represent the software and services provided by Sitecore further described at <a href="https://www.sitecore.net" target="_blank" rel="noopener noreferrer">www.sitecore.net</a>.</small>
            </div>

          </div>

        </footer>
    </div>
  </div>

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

.c__social-links a
{
  padding: 0.75rem;
}

.c-account-options__my-account
{
  display: none !important;
}

.c-account-options a
{
  padding: 0.5rem;
}

@media only screen and (min-width: 48em) {
  .c-account-options__my-account
  {
    display: inline-block !important;
  }
}

.c-quote__image
{
  display: block;
  margin: 0 auto;
}

.c-quote__blockquote
{
  display: flex;
  flex-direction: column-reverse;
  border-top: 1px solid;
  margin-top: 0;
  padding-top: 1rem;
}

.c-footer-links li{
  margin-bottom: 1rem;
}

</style>
