<template>
    <div class="grid hide-xs">
        <div v-for="(img, i) in imgurls" class="col" :key="i">
            <img class="img-responsive" 
                :src="img" 
                draggable="true" 
                @mousedown="mouseDown"
                @mousemove="activeDrag" 
                @mouseup="mouseUp" />
        </div>
    </div>
</template>

<script>
import img1 from "../assets/images/cta1.png"
import img2 from "../assets/images/cta2.png"
import img3 from "../assets/images/cta3.png"

    export default {
        name: 'Draggable',
        data() {
            return {
                imgurls: [
                    img1, 
                    img2, 
                    img3
                ], 
                dragging: false, //aren't actively moving unless click
            }
        }, 
        methods: {
            mouseDown(event) { //gather info when press
              this.dragging = true;
              console.log(event);

            },
            mouseUp(event) { //grabs info when let go - will be used to compare to original placement
              this.dragging = false; 
              console.log(event);
            }, 
            activeDrag(event) {
                if (this.dragging) {
                    mousemove(event);
                }
            }

        }, 
        mounted: function () {
            window.addEventListener('mouseup', this.mouseUp);
        }   
    }

</script>

<style>
</style>