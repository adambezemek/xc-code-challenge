<template>
    <section class="article-grid">
        <Article 
            :imageSrc="this.imageList[0]"
            articleTitle="Introduction to Habitat"
            @image-mousedown="mousedownEventHandler"
            @image-mouseup="mouseupEventHandler"
        />
        <Article 
            :imageSrc="this.imageList[1]"
            articleTitle="Getting Started"
            @image-mousedown="mousedownEventHandler"
            @image-mouseup="mouseupEventHandler"
        />
        <Article 
            :imageSrc="this.imageList[2]"
            articleTitle="Modules"
            @image-mousedown="mousedownEventHandler"
            @image-mouseup="mouseupEventHandler"
        />
    </section>
</template>
<script>
import Vue from 'vue';
import Article from '../article/Article.vue';

export default Vue.extend({
    components: {
        Article
    },
    data: function () {
        return {
            imageList: ['images/bird.jpg', 'images/gears.jpg', 'images/water.jpg'],
            currentDragTarget: ''
        }
    },
    methods: {
        swapImages: function (fromSrc, toSrc) {
            if (
                !this.imageList.includes(fromSrc) ||
                !this.imageList.includes(toSrc) 
            ) return

            this.imageList = this.imageList.map(src => {
                if (src === fromSrc) {
                    return toSrc
                }
                if (src === toSrc) {
                    return fromSrc
                }
                return src
            })
        },
        mousedownEventHandler: function (ev) {
            if (
                this.currentDragTarget !== ev && 
                typeof ev === 'string'
            ) {
                this.currentDragTarget = ev;
            }
        },
        mouseupEventHandler: function (ev) {
            if (
                this.currentDragTarget !== '' &&
                this.currentDragTarget !== ev && 
                typeof ev === 'string'
            ) {
                this.swapImages(this.currentDragTarget, ev);
            }
        },
    },
})
</script>