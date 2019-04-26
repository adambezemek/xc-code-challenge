<template>
  <div>
    <Header />

    <draggable
      :list="list"
      :disabled="!enabled"
      class="list-group layout xs12 sm3 row wrap"
      ghost-class="ghost"
      @start="dragging = true"
      @end="dragging = false"
    >

      <v-flex v-for="card in list" :key="card.id" xs12 sm4 fluid>
        <card :card-data="card" />
      </v-flex>
    </draggable>

    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Card from '../components/Card.vue';
import draggable from "vuedraggable";

export default {
  data() {
    return {
      enabled: true,
      dragging: false,
      list: [
        {
          id: 1,
          alt: 'Here is a habitat image',
          title: 'Introduction to Habitat',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          id: 2,
          alt: 'Here is a modules image',
          title: 'Modules',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          id: 3,
          alt: 'Here is the getting started image',
          title: 'Geting Started',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
      ],
    };
  },
  components: {
    Header,
    Footer,
    Card,
    draggable,
  },
}
</script>

<style lang="stylus" scoped>
.ghost
  opacity: 0.5
  background: #c8ebfb

.list-group
  padding-left: 50px

@media screen and (min-width: 960px)
  .list-group
    padding-left: 150px
</style>
