<template>
    <main>
        <Navbar />
        <Grid />
        <Footer />
    </main>
</template>
<script>
import Vue from 'vue';
import Grid from './grid/Grid.vue';
import Navbar from './common/Navbar.vue';
import Footer from './common/Footer.vue';

export default Vue.extend({
    el: '#layout',
    components: {
        Grid,
        Navbar,
        Footer
    }
})
</script>