<template>
  <div class="xc-socialbar xc-u-container">
    <ul class="xc-socialbar__list">
      <li class="xc-socialbar__item xc-socialbar__item--facebook">
        <a href="#" class="xc-socialbar__item-link" aria-label="Facebook Link">
          <i class="material-icons" aria-hidden="true">local_parking</i>
        </a>
      </li>
      <li class="xc-socialbar__item xc-socialbar__item--twitter">
        <a href="#" class="xc-socialbar__item-link" aria-label="Twitter Link">
          <i class="material-icons" aria-hidden="true">airplanemode_active</i>
        </a>
      </li>
      <li class="xc-socialbar__item xc-socialbar__item--youtube">
        <a href="#" class="xc-socialbar__item-link" aria-label="YouTube Link">
          <i class="material-icons" aria-hidden="true">live_tv</i>
        </a>
      </li>
      <li class="xc-socialbar__item">
        <a href="#" class="xc-socialbar__item-link">Habitat</a>
      </li>
      <li class="xc-socialbar__item xc-socialbar__item--helix">
        <a href="#" class="xc-socialbar__item-link">Helix</a>
      </li>
      <li class="xc-socialbar__item">
        <a href="#" class="xc-socialbar__item-link">Sitecore.net</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheSocialbar"
};
</script>

<style scoped lang="scss">
.xc-socialbar {
  width: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;

  .xc-socialbar__list {
    @include visually-hidden;

    @media screen and (min-width: $md) {
      @include remove-hidden;

      display: flex;
      align-content: center;
      line-height: 2.5rem;
      margin-top: 0;
    }

    .xc-socialbar__item {
      display: inline-block;

      .material-icons {
        margin-bottom: -50px;
        font-size: 1.125rem;
      }

      &.xc-socialbar__item--facebook,
      &.xc-socialbar__item--twitter {
        margin-right: 45px;
      }

      &.xc-socialbar__item--youtube {
        margin-right: auto;
      }

      .xc-socialbar__item-link {
        color: $header-color;
      }
    }

    .xc-socialbar__item--helix {
      margin-right: 20px;
      margin-left: 40px;
    }

    .xc-socialbar__item:last-of-type {
      margin-right: 0;
      padding-left: 20px;
      border-left: 1px solid $header-color;
    }
  }
}
</style>
