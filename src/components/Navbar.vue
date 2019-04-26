<template>
  <div
    id="Navbar"
    class="row"
  >
    <div class="column left">
      <div class="content">
        <div>
          <ul class="row">
            <li>F</li>
            <li>U</li>
            <li>Y</li>
          </ul>
        </div>
        <div class="habitat-icon-container">
          <img
            src="../../static/img/habitat-icon.png"
            alt="Habitat icon"
          >
        </div>
        <div class="habitat-name">
          HABITAT
        </div>
      </div>
    </div>
    <div class="column middle">
      <ul class="row">
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT HABITAT</a></li>
        <li><a href="#">MODULES</a></li>
        <li><a href="#">MORE INFO</a></li>
      </ul>
    </div>
    <div class="column right">
      <div class="column">
        <ul class="row">
          <li><a href="#">Habitat</a></li>
          <li><a href="#">Helix</a></li>
          <li><a href="#">Sitecore.net</a></li>
        </ul>
      </div>
      <div class="column">
        <ul class="row">
          <li><font-awesome-icon icon="globe" /></li>
          <li><font-awesome-icon icon="user" /></li>
          <li><font-awesome-icon icon="search" /></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped lang="sass">
@import '../styles/common'
#Navbar
  @extend %flex-row
  justify-content: space-around
  padding: 1rem
  font-family: $font-arial
  .left
    flex: 1
    align-items: center
    .row:first-child
      margin-bottom: 30px
    .habitat-icon-container
      img
        width: 100%
    .habitat-name
      letter-spacing: 13px
  .middle
    flex: 2
    align-items: center
    justify-content: flex-end
    margin-bottom: 25px
    font-weight: $bold-font
    font-size: 14px
    .row
      width: 70%
  .right
    flex: 1
    justify-content: space-between
    .column:first-child
      margin-right: 40%
    .column:last-child
      margin: 0 40% 25px 0
      align-items: flex-end
      *
        margin-left: 12px
</style>
