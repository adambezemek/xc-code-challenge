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
     <!-- Facebook Twitter Youtube -->  <!--Habitat Helix Sitecore.net -->

      <!-- Mobile Menu -->  <!--Logo--> <!--Navigation --> <!-- World  User  Search Icon -->
    </header>
    <main id="MainContent">
      <div>
        <h1 class="">Sitecore Powered carousel</h1>
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
        Community
        Documentation
        Knowledge Base
        Partner Network
      </nav>
      <nav>
        Best Practice Blogs
        Business Blogs
        Technical Blogs
        <!-- Top border --> Contact Sitecore
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
        </address>

        <!-- Phone icon --> +1 415 360 0600
        <!-- Email icon --> <a href="mailto:sales@sitecore.net">sales@sitecore.net</a>
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
  }
}
</script>

<style>
.c-skip-nav
{
  padding: 0.5rem !important;
  display: block;
}

.c-skip-nav:focus
{
  border: thick dashed currentColor;
}
</style>
