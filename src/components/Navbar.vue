<template>
  <section
    id="Navbar"
    class="section column"
  >
    <div class="row break-container-1">
      <div class="row break-part">
        <ul class="row links non-mobile-navs">
          <li
            v-for="(social, ind) in socials"
            :key="'nav-social' + ind"
          >
            <a :href="social.location">{{ social.display }}</a>
          </li>
        </ul>
      </div>
      <div class="row break-part">
        <ul class="row links non-mobile-navs">
          <li
            v-for="(link, ind) in links"
            :key="'nav-link-' + ind"
          >
            <a :href="link.location">{{ link.display }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row break-container-1">
      <div class="row icon-part">
        <!-- Hamburger for opening mobile navs -->
        <a
          href="javascript:void(0);"
          class="nav-hamburger"
          @click="displayList"
        >
          <li><font-awesome-icon icon="bars" /></li>
        </a>
        <!-- END hamburger -->
        <div class="column">
          <div class="habitat-icon-container">
            <img
              src="../../static/img/habitat-icon.png"
              alt="Habitat icon"
            >
          </div>
        </div>
        <ul class="row links non-mobile-navs">
          <li
            v-for="(nav, ind) in navs"
            :key="'nav-nav-' + ind"
            @click="nav.dropdown ? displayNavNavDropdown('nav-nav-dropdown-' + ind) : ''"
          >
            <a :href="nav.location">{{ nav.display }}</a>
            <!-- If nav has a dropdown -->
            <div
              v-if="nav.dropdown"
              class="nav-nav-dropdown-opener"
            >
              <font-awesome-icon icon="caret-down" />
            </div>
            <div
              v-if="nav.dropdown"
              :id="'nav-nav-dropdown-' + ind"
              class="nav-nav-dropdown"
            >
              <ul>
                <li
                  v-for="(dropdownItem, dInd) in nav.dropdown"
                  :key="'nav-nav-dropdown-' + dInd"
                >
                  <a :href="dropdownItem.location">{{ dropdownItem.display }}</a>
                </li>
              </ul>
            </div>
            <!-- END nav dropdown -->
          </li>
        </ul>
      </div>
      <div class="row break-part">
        <ul class="row links">
          <li><font-awesome-icon icon="globe" /></li>
          <li>
            <font-awesome-icon
              class="non-mobile-navs"
              icon="user"
            />
          </li>
          <li><font-awesome-icon icon="search" /></li>
        </ul>
      </div>
      <!-- Mobile dropdown menu -->
      <div class="mobile-nav-dropdown">
        <hr>
        <ul class="row links">
          <li
            v-for="(social, ind) in socials"
            :key="'nav-social' + ind"
          >
            <a :href="social.location">{{ social.display }}</a>
          </li>
        </ul>
        <hr>
        <ul class="row links">
          <li
            v-for="(link, ind) in links"
            :key="'nav-link-' + ind"
          >
            <a :href="link.location">{{ link.display }}</a>
          </li>
        </ul>
        <hr>
        <ul class="row links">
          <li
            v-for="(nav, ind) in navs"
            :key="'nav-nav-' + ind"
            @click="nav.dropdown ? displayNavNavDropdown('nested-nav-nav-dropdown-' + ind) : ''"
          >
            <a :href="nav.location">{{ nav.display }}</a>
            <div
              v-if="nav.dropdown"
              class="nav-nav-dropdown-opener"
            >
              <font-awesome-icon icon="caret-down" />
            </div>
            <div
              v-if="nav.dropdown"
              :id="'nested-nav-nav-dropdown-' + ind"
              class="nav-nav-dropdown"
            >
              <ul>
                <li
                  v-for="(dropdownItem, dInd) in nav.dropdown"
                  :key="'nav-nav-dropdown-' + dInd"
                >
                  <a :href="dropdownItem.location">{{ dropdownItem.display }}</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <hr>
        <ul>
          <li>
            <font-awesome-icon icon="user" />
          </li>
        </ul>
      </div>
      <!-- END mobile dropdown menu -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      socials: [
        { location: '#', display: 'f' },
        { location: '#', display: 'u' },
        { location: '#', display: 'y' }
      ],
      links: [
        { location: '#', display: 'Habitat' },
        { location: '#', display: 'Helix' },
        { location: '#', display: 'Sitcore.net' }
      ],
      navs: [
        { location: '#', display: 'HOME' },
        { location: '#', display: 'ABOUT HABITAT', dropdown: [{ location: '#', display: 'FOO' }] },
        { location: '#', display: 'MODULES', dropdown: [{ location: '#', display: 'BAR' }] },
        { location: '#', display: 'MORE INFO' }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.handleCloseDropdown)
    })
  },
  methods: {
    /**
     * Toggles dropdown
     * @param $ele {HTMLElement}
     * @private
     */
    _toggle ($ele) {
      const display = $ele.style.display
      $ele.style.display = display === 'block' ? 'none' : 'block'
    },
    /**
     * Closes passed in element
     * @param $ele {HTMLElement}
     * @private
     */
    _close ($ele) {
      $ele.style.display = 'none'
    },
    /**
     * Closes all nav dropdowns (dropdowns found within a nav)
     * @private
     */
    _closeAllNavNavDropdowns () {
      const $navNavDropdowns = document.querySelectorAll('.nav-nav-dropdown')
      $navNavDropdowns.forEach(($ele) => {
        this._close($ele)
      })
    },
    /**
     * Displays mobile dropdown menu
     */
    displayList () {
      const $navDropdown = document.querySelector('.mobile-nav-dropdown')
      this._closeAllNavNavDropdowns()
      this._toggle($navDropdown)
    },
    /**
     * Assigned to window resize listener
     * Handles closing dropdowns when window resizes
     */
    handleCloseDropdown () {
      const width = window.innerWidth
      if (width > 623) {
        this._close(document.querySelector('.mobile-nav-dropdown'))
      }
      if (width < 751) {
        this._closeAllNavNavDropdowns()
      }
    },
    /**
     * Opens selected nav nav dropdown
     * @param dropdownId
     */
    displayNavNavDropdown (dropdownId) {
      const $navNavDropdown = document.getElementById(dropdownId)
      this._toggle($navNavDropdown)
    }
  }
}
</script>

<style scoped lang="sass">
@import '../styles/common'
#Navbar
  padding: 0 5%
  position: relative
  .break-container-1
    padding-bottom: 1rem
    @media screen and (max-width: $break-medium)
      flex-direction: row
      align-items: center
    .break-part
      justify-content: flex-end
      flex: 1
    .break-part:first-child
      justify-content: flex-start
      .links
        li:first-child
          margin-left: 0
.links
  width: max-content
  li
    margin-left: 4vmin
    position: relative
.icon-part
  flex: 2
  @media screen and (max-width: $break-large)
    justify-content: flex-start
    align-items: center
    *:first-child
      margin-right: 0.5rem
.nav-hamburger
  display: none
  @media screen and (max-width: $break-medium)
    display: inline-block
  li
    svg
      width: 1.5rem
      height: auto
.mobile-nav-dropdown
  display: none
  position: absolute
  left: 0
  top: 100%
  width: 100%
  background-color: $blue
.non-mobile-navs
  @media screen and (max-width: $break-medium)
    display: none
.nav-nav-dropdown
  position: absolute
  display: none
  left: 0
  width: 100%
  top: 100%
  background-color: $blue
  ul, li
    padding: 0
    margin: 0
.nav-nav-dropdown-opener
  position: absolute
  top: 0
  left: 100% + 10
</style>
