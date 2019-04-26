<template>
  <section
    id="Navbar"
    class="section column"
  >
    <div class="row break-container">
      <div class="row break-part">
        <ul class="row links">
          <li>f</li>
          <li>u</li>
          <li>y</li>
        </ul>
      </div>
      <div class="row break-part">
        <ul class="row links">
          <li><a href="#">Habitat</a></li>
          <li><a href="#">Helix</a></li>
          <li><a href="#">Sitecore.net</a></li>
        </ul>
      </div>
    </div>
    <div class="row break-container">
      <div class="row icon-part">
        <div class="column">
          <div class="habitat-icon-container">
            <img
              src="../../static/img/habitat-icon.png"
              alt="Habitat icon"
            >
          </div>
        </div>
        <ul class="row links">
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT HABITAT</a></li>
          <li><a href="#">MODULES</a></li>
          <li><a href="#">MORE INFO</a></li>
        </ul>
      </div>
      <div class="row break-part">
        <ul class="row links">
          <li><font-awesome-icon icon="globe" /></li>
          <li><font-awesome-icon icon="user" /></li>
          <li><font-awesome-icon icon="search" /></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped lang="sass">
@import '../styles/common'
#Navbar
  padding: 0 5%
  .break-container
    padding-bottom: 1rem
    .break-part:first-child
      justify-content: flex-start
      .links
        li:first-child
          margin-left: 0
    .break-part:last-child
      justify-content: flex-end
.links
  width: max-content
  li
    margin-left: 4vmin
.icon-part
  flex: 2
</style>
