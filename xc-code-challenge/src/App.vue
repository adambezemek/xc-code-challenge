<template>
  <div id="app">
    <header>
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
    </header>
    <main id="MainContent">
      <ContentGrid class="t-background--primary t-color--accent" />
    </main>
    <footer>

    </footer>
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
