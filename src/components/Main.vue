<template>
    <main class="main">
        <Hero></Hero>
        <Draggable :imgurls="imgurls" @orderUpdated="updateImgurls"></Draggable>
        <div class="grid">
            <section class="grid__col">
                <div class="text-wrap">
                    <div class="img-wrap">
                        <img class="img-responsive show-xs" 
                            :src="imgurls[0].url" 
                            :alt="imgurls[0].altText"
                            :title="imgurls[0].title"
                        />
                    </div>
                  <h2>Introduction to Habitat</h2>
                    <p>Sitecore Habitat is a range of sites demonstrating the capabilities of the Sitecore Experience Platform</p>
                    <p>The solution is built on the Sitecore Helix guidelines, which focuses on incrasing productivity and quality in Sitecore projects</p>
                    <a class="btn" href="www.google.com">Read More</a>
                </div>
            </section>
            <section class="grid__col">
                <div class="text-wrap">
                    <div class="img-wrap">
                        <img class="img-responsive show-xs" 
                            :src="imgurls[1].url" 
                            :alt="imgurls[1].altText"
                            :title="imgurls[1].title"
                        />
                    </div>
                  <h2>Modules</h2>
                  <p>The Habitat example implementation has a range of modules which covers the basics of a Sitecore website</p>
                  <a class="btn" href="www.google.com">Read More</a>    
                </div>
            </section>
            <section class="grid__col">
                <div class="text-wrap">
                  <div class="img-wrap">
                    <img class="img-responsive show-xs" 
                        :src="imgurls[2].url" 
                        :alt="imgurls[2].altText" 
                        :title="imgurls[2].title"
                    />
                  </div>
                  <h2>Getting Started</h2>
                  <p>Sitecore Helix - a defined methodology with conventions and practises - Habitat is an example implementation available for your understanding.</p>
                  <a class="btn" href="www.google.com">Read More</a> 
                </div>
            </section>
        </div>
        <Download></Download>
    </main>
    
</template>

<script>
import Hero from './Hero.vue'
import Draggable from './Draggable.vue'
import Download from './Download.vue'

import img1 from "../assets/images/cta1.png"
import img2 from "../assets/images/cta2.png"
import img3 from "../assets/images/cta3.png"


export default {
  name: 'Main',
  data() {
      return {
          imgurls: [
              {
                  id: 0,
                  url: img1,
                  title: 'Man typing',
                  altText: 'Man wearing a baseball cap typing on a keyboard and looking at a monitor that is not on.'
              }, 
              {
                  id: 1, 
                  url: img2,
                  title: 'Woman with headphones',
                  altText: 'Woman with short red hair wearing headphones and holding a tablet while smirking into the distance.'    
              }, 
              {
                  id: 2,
                  url: img3,
                  title: 'Cashier',
                  altText: 'Woman in striped apron accepting a credit card for payment.' 
              },
          ],
      }
  },
  methods: {
      //watching for updated child array. Handle it and display update 
        updateImgurls(updatedList) {
            this.imgurls = updatedList;  
        },
  },
  components: {
      Hero,
      Draggable,
      Download 
  }
}
</script>
