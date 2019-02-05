<template>
  <div class="habitat-logo">
    <img src="~assets/images/Habitat.png" title="Habitat Logo" alt="Habitat Logo">
  </div>
</template>

<style>
.habitat-logo{
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 50px;
  width: 145px;
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}
</style>
