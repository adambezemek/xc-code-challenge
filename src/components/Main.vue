<template>
    <div class="main">
        <Draggable :imgurls="imgurls" @orderUpdated="updateImgurls"></Draggable>
        <div class="grid">
            <section class="col">
                <div class="text-wrap">
                    <div class="img-wrap">
                        <img class="img-responsive show-xs" :src="imgurls[0]"/>
                    </div>
                  <h2>Introduction to Habitat</h2>
                    <p>Sitecore Habitat is a range of sites demonstrating the capabilities of the Sitecore Experience Platform</p>
                    <p>The solution is built on the Sitecore Helix guidelines, which focuses on incrasing productivity and quality in Sitecore projects</p>
                    <a class="btn" href="www.google.com">Read More</a>
                </div>
            </section>
            <section class="col">
                <div class="text-wrap">
                    <div class="img-wrap">
                        <img class="img-responsive show-xs" :src="imgurls[1]"/>
                    </div>
                  <h2>Modules</h2>
                  <p>The Habitat example implementation has a range of modules which covers the basics of a Sitecore website</p>
                  <a class="btn" href="www.google.com">Read More</a>    
                </div>
            </section>
            <section class="col">
                <div class="text-wrap">
                  <div class="img-wrap">
                    <img class="img-responsive show-xs" :src="imgurls[2]"/>
                  </div>
                  <h2>Getting Started</h2>
                  <p>Sitecore Helix - a defined methodology with conventions and practises - Habitat is an example implementation available for your understanding.</p>
                  <a class="btn" href="www.google.com">Read More</a> 
                </div>
            </section>
        </div>
    </div>
    
</template>

<script>
import Draggable from './Draggable.vue'

import img1 from "../assets/images/cta1.png"
import img2 from "../assets/images/cta2.png"
import img3 from "../assets/images/cta3.png"


export default {
  name: 'Main',
  data() {
      return {
          imgurls: [
              img1, 
              img2, 
              img3
          ],
      }
  },
  methods: {
      //watching for updated child array. Handle it and display update 
        updateImgurls(updatedList) {
            this.imgurls = updatedList;
            
        }
  },
  components: {
      Draggable 
  }
}
</script>
