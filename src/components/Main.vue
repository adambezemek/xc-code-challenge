<template>
    <div class="main">
        <Draggable></Draggable>
        <div class="grid">
            <div class="col">
                <div class="text-wrap">
                    <div class="img-wrap">
                        <img class="img-responsive show-xs" src="../assets/images/cta1.png"/>
                    </div>
                  <h2>Introduction to Habitat</h2>
                    <p>Sitecore Habitat is a range of sites demonstrating the capabilities of the Sitecore Experience Platform</p>
                    <p>The solution is built on the Sitecore Helix guidelines, which focuses on incrasing productivity and quality in Sitecore projects</p>
                    <a class="btn" href="www.google.com">Read More</a>
                </div>
            </div>
            <div class="col">
                <div class="text-wrap">
                    <div class="img-wrap">
                        <img class="img-responsive show-xs" src="../assets/images/cta2.png"/>
                    </div>
                  <h2>Modules</h2>
                  <p>The Habitat example implementation has a range of modules which covers the basics of a Sitecore website</p>
                  <a class="btn" href="www.google.com">Read More</a>    
                </div>
            </div>
            <div class="col">
                <div class="text-wrap">
                  <div class="img-wrap">
                    <img class="img-responsive show-xs" src="../assets/images/cta3.png"/>
                  </div>
                  <h2>Getting Started</h2>
                  <p>Sitecore Helix - a defined methodology with conventions and practises - Habitat is an example implementation available for your understanding.</p>
                  <a class="btn" href="www.google.com">Read More</a> 
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import Draggable from './Draggable.vue'
    
export default {
  name: 'Main',
  components: {
      Draggable 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>