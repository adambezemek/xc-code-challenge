<template>
  <main class="xc-main xc-u-container">
    <div class="xc-main__article-card">
      <img
        src="@/assets/man_at_computer.png"
        alt="A man typing on a computer."
        class="xc-main__article-img"
      />
      <h4>Introduction to Habitat</h4>
      <p class="xc-main__article-teaser">
        Sitecore Habitat is a range of sites demonstrating the capabilities of
        the Sitecore Experience Platform.
      </p>
      <p class="xc-main__article-teaser">
        The solution is built on the Sitecore Helix guidelines, which focuses on
        increasing productivity and quality Sitecore projects
      </p>
      <AppButton btnType="xc-button__pill" btnStyle="xc-button__pill--purple"
        >Read more</AppButton
      >
    </div>
    <div class="xc-main__article-card">
      <img
        src="@/assets/woman_enjoy_music.png"
        alt="A woman listening to music from a tablet computer."
        class="xc-main__article-img"
      />
      <h4>Modules</h4>
      <p class="xc-main__article-teaser">
        The Habitat example implementation has a range of modules which covers
        the basics of a Sitecore website.
      </p>
      <AppButton btnType="xc-button__pill" btnStyle="xc-button__pill--purple"
        >Read more</AppButton
      >
    </div>
    <div class="xc-main__article-card">
      <img
        src="@/assets/woman_take_payment.png"
        alt="A woman accepting a credit card."
        class="xc-main__article-img"
      />
      <h4>Getting Started</h4>
      <p class="xc-main__article-teaser">
        Sitecore Helix a defined methodology with conventions and practices -
        Habitat is an example implementation available for your understanding.
      </p>
      <AppButton btnType="xc-button__pill" btnStyle="xc-button__pill--purple"
        >Read more</AppButton
      >
    </div>
  </main>
</template>

<script>
import AppButton from "./UI/AppButton.vue";

export default {
  name: "AppMain",
  components: {
    AppButton
  }
};
</script>

<style scoped lang="scss">
.xc-main {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  color: $main-color;
  padding: 50px 0;

  .xc-main__article-card {
    padding: 10px;
    @media screen and (min-width: $sm) {
      max-width: 33%;
    }

    .xc-main__article-img {
      width: 100%;
      height: auto;
    }

    .xc-main__article-teaser {
      line-height: 1.5rem;
    }
  }
}
</style>
