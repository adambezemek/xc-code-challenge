<template>
  <main class="xc-main xc-u-container">
    <div class="xc-main__article-card">
      <div
        @drop.stop="drop"
        @dragenter.prevent="dragenter"
        @dragover.prevent="dragover"
        @dragleave="dragleave"
      >
        <img
          src="@/assets/man_at_computer.png"
          alt="A man typing on a computer."
          class="xc-main__article-img"
          draggable="true"
          @dragstart="dragstart"
          @dragend.stop="dragend"
        />
      </div>
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
      <div
        @drop.stop="drop"
        @dragenter.prevent.stop="dragenter"
        @dragover.prevent="dragover"
        @dragleave="dragleave"
      >
        <img
          src="@/assets/woman_enjoy_music.png"
          alt="A woman listening to music from a tablet computer."
          class="xc-main__article-img"
          draggable="true"
          @dragstart="dragstart"
          @dragend.stop="dragend"
        />
      </div>
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
      <div
        @drop.stop="drop"
        @dragenter.prevent="dragenter"
        @dragover.prevent="dragover"
        @dragleave="dragleave"
      >
        <img
          src="@/assets/woman_take_payment.png"
          alt="A woman accepting a credit card."
          class="xc-main__article-img"
          draggable="true"
          @dragstart="dragstart"
          @dragend.stop="dragend"
        />
      </div>
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
  },
  data() {
    return {
      dragSrcEl: null
    };
  },
  methods: {
    dragstart(e) {
      this.dragSrcEl = e.target;
      e.dataTransfer.setData("text/uri-list", e.target.src);
      e.dataTransfer.setData("text/alt", e.target.alt);
      e.target.classList.add("moving");
    },
    dragenter(e) {
      if (e.target.tagName === "IMG") {
        e.target.classList.add("dropzone");
      }
    },
    dragover() {},
    dragleave(e) {
      if (e.target.tagName === "IMG") {
        e.target.classList.remove("dropzone");
      }
    },
    dragend() {
      // Gather any remainging elements with .dropzone or .moving
      // classes into an Array and remove those classes from
      // each element
      let leftoverDropzones = document.getElementsByClassName("dropzone");
      Array.from(leftoverDropzones).forEach(element => {
        element.classList.remove("dropzone");
      });
      let leftoverMoving = document.getElementsByClassName("moving");
      Array.from(leftoverMoving).forEach(element => {
        element.classList.remove("moving");
      });

      this.dragSrcEl = null;
    },
    drop(e) {
      // Do not do the src and alt attribute swap if the
      // images are the same.
      if (this.dragSrcEl.src === e.target.src) {
        return;
      }
      let targetURL = e.target.src;
      let targetAlt = e.target.alt;
      e.target.src = e.dataTransfer.getData("text/uri-list");
      e.target.alt = e.dataTransfer.getData("text/alt");
      this.dragSrcEl.src = targetURL;
      this.dragSrcEl.alt = targetAlt;
    }
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
      cursor: move;

      &.dropzone {
        border: 3px dashed rgb(0, 190, 41);
      }

      &.moving {
        opacity: 0.4;
      }
    }

    .xc-main__article-teaser {
      line-height: 1.5rem;
    }
  }
}
</style>
