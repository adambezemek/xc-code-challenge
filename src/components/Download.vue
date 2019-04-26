<template>
  <section
    id="Download"
    class="row"
  >
    <div class="column">
      <div class="header">
        Download Habitat Now!
      </div>
      <p>Habitat is available as a Sitecore Package and the sourcecode is available on Github.</p>
      <button class="btn btn-dark">
        Visit Habitat on Github
      </button>
    </div>
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
  .column
    flex: 1
    align-items: center
    padding: 1.8rem
    p
      text-align: center
  .column:first-child
    margin-left: 15%
    margin-top: 3rem
  .column:nth-child(2)
    line-height: 2rem
    p
      font-size: 1.5rem
  .column:last-child
    align-items: flex-start
</style>
