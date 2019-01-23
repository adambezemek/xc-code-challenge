<template>
    <div class="grid hide-xs">
        <div v-for="(img, i) in imgurls" class="col" :key="i">
            <img class="img-responsive" :src="img" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Draggable',
        data() {
            return {
                imgurls: [
                    "../assets/images/cta1.png",
                    "../assets/images/cta2.png",
                    "../assets/images/cta3.png"
                ]
            }
        }     
    }

</script>

<style>
</style>