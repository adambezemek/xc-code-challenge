<template>
  <main>
    <card-wrapper :data="cards"></card-wrapper>
  </main>
</template>

<script>
import CardWrapper from './card-wrapper'
import StarTrek from '../assets/images/startrek.jpg'
import StarWars from '../assets/images/starwars.jpg'
import Stargate from '../assets/images/stargate-sg-1.jpg'

export default {
  components: {
    CardWrapper
  },
  data() {
    return {
      cards: [
        {
          title: 'Star Trek: The Next Generation',
          content: [
            'Star Trek: The Next Generation (TNG and ST:TNG) is an American science fiction television series created by Gene Roddenberry.'
          ],
          imageUrl: StarTrek,
          buttonText: 'Make it so'
        },
        {
          title: 'Star Wars',
          content: [
            'Star Wars is an American epic space-opera media franchise created by George Lucas.',
            'The franchise began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon.'
          ],
          imageUrl: StarWars,

          buttonText: 'May the force be with you'
        },
        {
          title: 'Stargate: SG-1',
          content: [
            "Stargate SG-1 (often abbreviated SG-1) is a Canadian-American military science fiction adventure television series and part of Metro-Goldwyn-Mayer's Stargate franchise.",
            'The show, created by Brad Wright and Jonathan Glassner, is based on the 1994 science fiction film Stargate by Dean Devlin and Roland Emmerich.'
          ],
          imageUrl: Stargate,
          buttonText: 'Through the wormhole'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
main {
  flex: 1;
}
</style>
