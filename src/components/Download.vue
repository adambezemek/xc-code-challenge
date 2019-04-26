<template>
  <section
    id="Download"
    class="section break-container"
  >
    <div class="column break-part">
      <div class="header">
        Download Habitat Now!
      </div>
      <p>Habitat is available as a Sitecore Package and the sourcecode is available on Github.</p>
      <button class="btn btn-dark">
        Visit Habitat on Github
      </button>
    </div>
    <div class="row break-part">
      <div class="column">
        <img
          src="/../../static/img/anders.png"
          alt="Anders Laub Christofferson"
        >
        <div>Anders Laub Christoffersen</div>
        <div>Sitecore MVP, Pentia A/S</div>
        <p>[Habitat...] is noting less than groundbreaking, it is a real revolution in the way that Sitecore teaches developers to work with their product.</p>
      </div>
      <div class="column">
        <p class="minor-header">
          NEWS
        </p>
        <button class="btn">
          Read more
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Download'
}
</script>

<style scoped lang="sass">
@import '../styles/common'

#Download
  background-color: $slate-gray
  .download-part:first-child
    justify-content: center
    p
      width: 75%
  .column
    flex: 1
    align-items: center
    padding: 10% 5%
    p
      text-align: center
  .column:nth-child(2)
    line-height: 2rem
    p
      font-size: 1.5rem
  .column:last-child
    align-items: flex-start
</style>
