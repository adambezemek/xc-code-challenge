<template>
    <div id="app">

        <the-header />
        <the-carousel />
        <the-main />
        <the-promo-footer />
        <the-info-footer />

    </div>
</template>


<script>
    import TheHeader from './components/TheHeader.vue'
    import TheCarousel from './components/TheCarousel.vue';
    import TheMain from './components/TheMain.vue';
    import ThePromoFooter from './components/ThePromoFooter.vue';
    import TheInfoFooter from './components/TheInfoFooter.vue';


    export default {
        name: 'app',

        components: {
            TheHeader,
            TheCarousel,
            TheMain,
            ThePromoFooter,
            TheInfoFooter
        }
    }
</script>
