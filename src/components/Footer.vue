<template>
  <section
    id="Footer"
    class="section"
  >
    <div class="row top-content">
      <div class="row">
        <ul class="column">
          <li><a href="#">Community</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Knowledge Base</a></li>
          <li><a href="#">Partner Network</a></li>
          <li><a href="#">Best Practice Blogs</a></li>
          <li><a href="#">Business Blogs</a></li>
          <li><a href="#">Technical Blogs</a></li>
          <li><a href="#">Contact Sitecore</a></li>
        </ul>
      </div>
      <div class="column">
        <div class="minor-header">
          About Habitat
        </div>
        <p>Habitat sites are demonstration sites for the Sitecore Experience Platform. The sites demonstrate the full set of capabilities and potential of the platform through a number of both technical and business scenarios.</p>
        <button class="btn">
          Example available on GitHub
        </button>
      </div>
      <div class="column">
        <div class="minor-header">
          Contact information
        </div>
        <p>Sitecore Corporation</p>
        <p>2320 Marinship Way</p>
        <p>Sausalito, CA 94965</p>
        <p>USA</p>
        <br>
        <br>
        <p>+1 415 380 0600</p>
        <p>sales@sitecore.net</p>
      </div>
    </div>
    <div class="column">
      <div>Copyright 2017, Sitcore. All Rights Reserved</div>
      <div>"Habitat" as used here is for demonstration purposes only and to represent the software and services provided by Sitecore further described at www.sitcore.com</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="sass">
@import '../styles/common'
#Footer
  flex-direction: column
  padding-bottom: 2rem
  .column, .row
    text-align: left
  .column:last-child
    font-size: 0.9rem
    text-align: center
  .top-content
    flex: 1
    margin: 0 6rem
    .column, .row
      flex: 1
    .column
      padding: 2rem
    .column:nth-child(2)
      flex: 1
    .row
      ul
        $font-size: 1rem
        font-size: $font-size
        font-weight: $bold-font
        line-height: $font-size * 3
        height: 40%
        width: 100%
        font-family: $font-arial
        flex-wrap: wrap
        text-align: left
    .column
      text-align: left
      .btn
        margin-top: 2rem
      p
        margin: 0
</style>
