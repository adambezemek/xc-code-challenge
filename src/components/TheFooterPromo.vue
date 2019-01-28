<template>
  <div class="xc-footerpromo">
    <div class="xc-footerpromo__panel xc-footerpromo__download">
      <h4 class="xc-footerpromo__download-heading">Download Habitat Now!</h4>
      <p>
        Habitat is available as a Sitecore Package and the sourccode is
        available on GitHub.
      </p>
      <AppButton btnType="xc-button__download"
        >Visit Habitat on GitHub</AppButton
      >
    </div>
    <div class="xc-footerpromo__panel xc-footerpromo__testimonial">
      <img
        src="@/assets/man.png"
        class="xc-footerpromo__testimonial-img"
        alt="Photo of Anders Laub Christoffersn"
      />
      <div class="xc-footerpromo__testimonial-caption">
        <h5 class="xc-footerpromo__testimonial-caption-heading">
          Anders Laub Christoffersn, Sitecore MVP, Pentia A/S
        </h5>
        <p>
          [Habitat...] is nothing less than groundbreaking, it is a real
          revolution in the way that Sitecore teaches developers to work with
          their product.
        </p>
      </div>
    </div>
    <div class="xc-footerpromo__panel xc-footerpromo__news">
      <h5 class="xc-footerpromo__news-heading">News</h5>
      <AppButton btnType="xc-button__pill" btnStyle="xc-button__pill--gray"
        >Read more</AppButton
      >
    </div>
  </div>
</template>

<script>
import AppButton from "./UI/AppButton.vue";

export default {
  name: "TheFooterPromo",
  components: {
    AppButton
  }
};
</script>

<style scoped lang="scss">
.xc-footerpromo {
  color: $footer-color;
  font-weight: 700;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;

  @media screen and (min-width: $lg) {
    max-width: 85%;
  }

  .xc-footerpromo__panel {
    margin: 0 10px;

    @media screen and (min-width: $md) {
    }
  }

  .xc-footerpromo__download {
    border-top: $thick-border;
    text-align: center;
    width: 100%;
    padding: 20px 30px;

    @media screen and (min-width: $lg) {
      width: 40%;
    }

    .xc-footerpromo__download-heading {
      margin-top: 0;
    }
  }

  .xc-footerpromo__testimonial {
    text-align: center;
    width: 100%;

    @media screen and (min-width: $md) {
      width: 50%;
    }

    @media screen and (min-width: $lg) {
      width: 25%;
    }

    .xc-footerpromo__testimonial-img {
      margin-bottom: -4px;
    }

    .xc-footerpromo__testimonial-caption {
      border-top: $thin-border;

      .xc-footerpromo__testimonial-caption-heading {
        font-style: italic;
      }
    }
  }

  .xc-footerpromo__news {
    border: $faint-border;
    border-radius: $big-radius;
    padding: 0 15px 20px;
    width: 100%;

    @media screen and (min-width: $md) {
      width: 40%;
    }

    @media screen and (min-width: $lg) {
      width: 25%;
    }

    .xc-footerpromo__news-heading {
      text-transform: uppercase;
      font-weight: 700;
    }
  }
}
</style>
