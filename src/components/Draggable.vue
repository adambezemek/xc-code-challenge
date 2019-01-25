<template>
    <div class="grid hide-xs" tag="div"> 
        <div v-for="(img, i) in imgurls" class="col" :key="img">
            <img class="img-responsive" 
                :src="img" 
                draggable="true" 
                :class="className"
                :id="i" 
             />
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Draggable',
        data() {
            return { 
                draggedEl: "", //The original element being dragged. 
                className: "switchable" //easier to change than manually sticking in 'switchable' above
            }
        }, 
        props: [
          'imgurls'
        ],
        methods: {
            dragStart(e) {
                this.draggedEl = e.target.id;
            }, 
            drop(e) {
                e.preventDefault(); //stopping the default "picture" action in this case. Zooming in. 
                const dropZone = e.target.id; //the element being switched. Element being dropped ON  
                const isSwitchable = e.target.classList.contains(this.className);
                //console.log(e.target);
                //console.log(isSwitchable);
                if(isSwitchable && this.draggedEl !== dropZone) {
                    let updatedList = []; 
                    //have to loop through existing array to create a new one. Can't set new array to current - occupies same place in memory. 
                    this.imgurls.forEach((imgurl, i) => {
                        updatedList[i] = imgurl;
                    });
                    //literal swapping of element ids 
                    updatedList[dropZone] = this.imgurls[this.draggedEl];
                    updatedList[this.draggedEl] = this.imgurls[dropZone];
                    //have to tell our parent that we're done and it can update. It's needed for church honey, NEXT https://i.redd.it/bmojp48j6t401.jpg
                    this.$emit('orderUpdated', updatedList);
                }
                this.draggedEl = ""; //reset our dragged element to blank, ready to be reused.
            }
        }, 
        mounted: function () {
            window.addEventListener('dragstart', this.dragStart);
            window.addEventListener('drop', this.drop);
            window.addEventListener('dragenter', (e) => e.preventDefault());
            window.addEventListener('dragover', (e) => e.preventDefault());
        }   
    }

</script>
