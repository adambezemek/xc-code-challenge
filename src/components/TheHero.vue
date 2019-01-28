<template>
  <div class="xc-hero">
    <div class="xc-hero__carousel-wrap">
      <ol class="xc-hero__carousel-indicators">
        <li class="xc-hero__carousel-indicator-item" aria-label="Slide one">
          <i class="material-icons" aria-hidden="true">panorama_fish_eye</i>
        </li>
        <li class="xc-hero__carousel-indicator-item" aria-label="Slide two">
          <i class="material-icons">panorama_fish_eye</i>
        </li>
        <li
          class="xc-hero__carousel-indicator-item active"
          aria-label="Slide three"
        >
          <i class="material-icons" aria-hidden="true">lens</i>
        </li>
        <li class="xc-hero__carousel-indicator-item" aria-label="Slide four">
          <i class="material-icons" aria-hidden="true">panorama_fish_eye</i>
        </li>
      </ol>
      <div class="xc-hero__carousel-slides">
        <div
          class="xc-hero__carousel-slide-item xc-hero__carousel-slide-item--active"
        >
          <img
            class="xc-hero__carousel-slide-img"
            src="@/assets/carousel.jpg"
            alt="Co-workers putting fists together in accomplishment."
          />
          <div class="xc-hero__carousel-slide-caption">
            <h2 class="xc-hero__carousel-slide-caption--heading">
              Sitecore Powered!
            </h2>
            <p class="xc-hero__carousel-slide-caption--para">
              Fully leveraging the power of Sitecore
            </p>
          </div>
        </div>
      </div>
      <a
        href="#"
        class="xc-hero__carousel-control xc-hero__carousel-control--prev"
        aria-label="Previous slide"
      >
        <i class="material-icons" aria-hidden="true">chevron_left</i>
      </a>
      <a
        href="#"
        class="xc-hero__carousel-control xc-hero__carousel-control--next"
        aria-label="Next slide"
      >
        <i class="material-icons" aria-hidden="true">chevron_right</i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHero"
};
</script>

<style scoped lang="scss">
.xc-hero {
  .xc-hero__carousel-wrap {
    position: relative;

    .xc-hero__carousel-indicators {
      position: absolute;
      bottom: 0;
      left: 50%;
      z-index: 50;
      transform: translate(-50%, 0);

      .xc-hero__carousel-indicator-item {
        display: inline-block;
        color: $slide-indicators;
        cursor: pointer;
        margin-right: 0.3125rem;

        .material-icons {
          font-size: 0.875rem;

          @media screen and (min-width: $md) {
            font-size: 1.125rem;
          }
        }
      }

      .xc-hero__carousel-indicator-item:last-of-type {
        margin-right: 0;
      }
    }

    .xc-hero__carousel-slide-item {
      position: relative;

      .xc-hero__carousel-slide-img {
        width: 100%;
        height: 220px;
        object-fit: cover;

        @media screen and (min-width: $md) {
          height: 520px;
        }
      }

      .xc-hero__carousel-slide-caption {
        position: absolute;
        top: 50%;
        color: $header-color;
        transform: translate(30%, -70%);
        font-size: 1rem;
        font-family: serif;
        font-weight: 700;

        @media screen and (min-width: $md) {
          transform: translate(30%, -70%);
        }

        @media screen and (min-width: $lg) {
          transform: translate(30%, -70%);
        }

        .xc-hero__carousel-slide-caption--heading {
          font-size: 2rem;

          @media screen and (min-width: $md) {
            font-size: 3.5rem;
          }

          @media screen and (min-width: $lg) {
            font-size: 4rem;
          }
        }

        .xc-hero__carousel-slide-caption--para {
          font-size: 1rem;

          @media screen and (min-width: $md) {
            font-size: 1.5rem;
          }

          @media screen and (min-width: $lg) {
            font-size: 2rem;
          }
        }
      }
    }

    .xc-hero__carousel-control {
      position: absolute;
      color: $header-color;
      top: 50%;
      transform: translate(0, -50%);

      &.xc-hero__carousel-control--next {
        right: 0;
      }

      .material-icons {
        font-size: 2.75rem;

        @media screen and (min-width: $md) {
          font-size: 4rem;
        }
        @media screen and (min-width: $lg) {
          font-size: 5.25rem;
        }
      }
    }
  }
}
</style>
