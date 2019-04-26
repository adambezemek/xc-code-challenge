<template>
  <nav>
    <ul>
      <li class="menu">
        <font-awesome-icon icon="bars"></font-awesome-icon>
      </li>
      <div class="collapsible">
        <li>Home</li>
        <li>About</li>
        <li>Modules</li>
        <li>Learn More</li>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
nav {
  background-color: #456799;
  height: 65px;
  width: 100%;

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0px;
    padding: 0px;

    div.collapsible {
      display: none;
    }

    li {
      margin: 0px 15px;
      color: white;
    }
  }
}

@media only screen and (min-width: 426px) {
  nav {
    ul {
      .menu {
        display: none;
      }
      div.collapsible {
        display: flex;
      }
    }
  }
}
</style>
