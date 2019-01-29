<template>
  <main class="xc-main xc-u-container">
    <div class="xc-main__article-card">
      <div
        @drop="drop"
        @dragenter.prevent="dragenter"
        @dragover.prevent.stop="dragover"
        @dragleave="dragleave"
        droppable="true"
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
        @drop="drop"
        @dragenter.prevent="dragenter"
        @dragover.prevent.stop="dragover"
        @dragleave="dragleave"
        droppable="true"
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
        @drop="drop"
        @dragenter.prevent="dragenter"
        @dragover.prevent.stop="dragover"
        @dragleave="dragleave"
        droppable="true"
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
      dragSrcEl: null,
      dragTarEl: null
    };
  },
  methods: {
    dragstart(e) {
      console.log("drag has started.", e.target);
      this.dragSrcEl = e.target;
      e.target.style.opacity = ".4";
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", this.dragSrcEl);
      console.log("dragSrcEl is now:", this.dragSrcEl);
    },
    dragenter(e) {
      console.log("dragenter triggered.", e.target);
      this.dragTarEl = e.target;
      e.target.classList.add("dropzone");
    },
    dragover(e) {
      // console.log("dragover triggered.", e.target);
    },
    dragleave(e) {
      console.log("dragleave triggered.", e.target);
      e.target.classList.remove("dropzone");
    },
    dragend(e) {
      console.log("dragend triggered.", e.target);
      e.target.style.opacity = "1";
      e.target.classList.remove("dropzone");
      // if (this.dragTarEl) {
      //   console.log("fire drag end:", e.target.parentNode);
      //   e.target.parentNode.innerHTML = this.dragTarEl;
      // }
    },
    drop(e) {
      console.log("drop triggered.", e.target);
      if (this.dragSrcEl !== this.dragTarEl) {
        console.log("DROP IS GOOD, e.target:", e.target);
        console.log("drop target innerHTML:", e.target.innerHTML);
        this.dragSrcEl = e.target.parentNode.innerHTML;
        console.log(e.dataTransfer.getData("text/plain"));
        e.target.parentNode.innerHTML = e.dataTransfer.getData("text/html");
      }
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
    }

    .xc-main__article-teaser {
      line-height: 1.5rem;
    }
  }
}
</style>
