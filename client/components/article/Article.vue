<template>
    <article class="sample-article">
        <img class="article-img"
            :src="imageSrc"
            @mousedown="mouseDownEventHandler"
            @mouseup="mouseupEventHandler"
        >
        <h2>{{ articleTitle }}</h2>
        <section>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </section>
        <a class="button" href="/">Read More</a>
    </article>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
    props: ["imageSrc", "articleTitle"],
    methods: {
        mouseDownEventHandler: function (ev) {
            ev.preventDefault();
            this.$emit('image-mousedown', this.imageSrc);
        },
        mouseupEventHandler: function () {
            this.$emit('image-mouseup', this.imageSrc);
        }
    }
})
</script>