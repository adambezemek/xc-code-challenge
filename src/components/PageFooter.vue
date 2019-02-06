<template>
  <footer>
    <p>footer content can go here</p>
    <small>{{ msg }}</small>
  
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
  props: {
    msg: String
  }
}
</script>
