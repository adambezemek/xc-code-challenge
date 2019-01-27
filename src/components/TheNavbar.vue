<template>
  <div class="xc-navbar xc-u-container">
    <a
      href="#main-menu"
      class="xc-navbar__menu-toggle"
      aria-label="Open main menu"
    >
      <i class="material-icons" aria-hidden="true">
        menu
      </i>
    </a>
    <img class="xc-navbar__logo" alt="Habitat logo" src="../assets/logo.png" />
    <nav class="xc-navbar-nav">
      <ul class="xc-navbar__nav-list xc-navbar__nav-list--main">
        <li class="xc-navbar__nav-item">
          <a href="#" class="xc-navbar__nav-link">Home</a>
        </li>
        <li class="xc-navbar__nav-item xc-navbar__nav-item--dropdown">
          <a href="#" class="xc-navbar__nav-link">About Habitat</a>
        </li>
        <li class="xc-navbar__nav-item xc-navbar__nav-item--dropdown">
          <a href="#" class="xc-navbar__nav-link">Modules</a>
        </li>
        <li class="xc-navbar__nav-item">
          <a href="#" class="xc-navbar__nav-link">More Info</a>
        </li>
      </ul>
      <ul class="xc-navbar__nav-list xc-navbar__nav-list--user">
        <li class="xc-navbar__nav-item xc-navbar__nav-item--person">
          <a href="#" class="xc-navbar__nav-link" aria-label="Person Link"
            ><i class="material-icons" aria-hidden="true">
              person
            </i></a
          >
        </li>
        <li class="xc-navbar__nav-item">
          <a href="#" class="xc-navbar__nav-link" aria-label="Public Link"
            ><i class="material-icons" aria-hidden="true">
              public
            </i></a
          >
        </li>
        <li class="xc-navbar__nav-item">
          <a href="#" class="xc-navbar__nav-link" aria-label="Search LInk"
            ><i class="material-icons" aria-hidden="true">
              search
            </i></a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.xc-navbar {
  display: flex;
  align-items: center;
  width: 100%;

  .xc-navbar__menu-toggle {
    color: $header-color;

    @media screen and (min-width: $md) {
      @include visually-hidden;
    }
  }

  .xc-navbar-nav {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    width: 100%;
    margin-left: auto;

    .xc-navbar__logo {
      max-width: 140px;
    }

    .xc-navbar__nav-list {
      list-style-type: none;
      padding-left: 0;

      .xc-navbar__nav-item {
        display: inline-block;
        margin-right: 20px;

        &.xc-navbar__nav-item--dropdown::after {
          font-family: "Material Icons";
          content: "arrow_drop_down";
          color: $header-color;
        }

        .xc-navbar__nav-link {
          color: $header-color;
          font-weight: 700;
          text-transform: uppercase;
        }

        &.xc-navbar__nav-item--person {
          @include visually-hidden;

          @media screen and (min-width: $md) {
            @include remove-hidden;
          }
        }
      }
    }

    .xc-navbar__nav-list--main {
      @include visually-hidden;

      @media screen and (min-width: $md) {
        @include remove-hidden;
      }
    }

    .xc-navbar__nav-list--main,
    .xc-navbar__nav-list--user {
      margin-left: auto;
    }
  }
}
</style>
