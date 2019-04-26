<template>
  <footer>
    <section class="top">
      <div>
        <h2>Do Cool Thing!</h2>
        <p>Please describe what this cool thing is.</p>
        <styled-button white>Subscribe</styled-button>
      </div>
      <div>
        <p>This is a cool testimonial about how the product has really changed this person's life, and I didn't manageto get a picture of him, so that's too bad.</p>
      </div>
      <div>
        <h3>News!</h3>
        <styled-button white>Read more</styled-button>
      </div>
    </section>
    <section class="middle">
      <div class="links">
        <ul class="left">
          <li>
            <a href="#">First Link</a>
          </li>
          <li>
            <a href="#">Second Link</a>
          </li>
          <li>
            <a href="#">Third Link</a>
          </li>
          <li>
            <a href="#">Fourth Link</a>
          </li>
          <li>
            <a href="#">Fifth Link</a>
          </li>
        </ul>
        <ul class="right">
          <li>
            <a href="#">Sixth Link</a>
          </li>
          <li>
            <a href="#">Seventh Link</a>
          </li>
          <li>
            <a href="#">Eighth Link</a>
          </li>
          <li>
            <a href="#">Nineth Link</a>
          </li>
          <li>
            <a href="#">Tenth Link</a>
          </li>
        </ul>
      </div>
      <div id="blurb">
        <h3>About Science Fiction Life</h3>
        <p>Some text about how cool this magazine (is that what this is?) is and how you should totally sign up for a subscription.</p>
        <styled-button white>Subscribe</styled-button>
      </div>
      <div id="contact">
        <h3>Contact Information</h3>
        <h4>Science Fiction Life, LLC</h4>
        <p>456 Some Str</p>
        <p>Nowhere, Wyoming, 12345</p>
      </div>
    </section>
    <section class="bottom">
      <p>&copy; 2019, Science Fiction Life. All Rights Reserved</p>
      <p>Disclaimer text about how these images are not mine and belong to the various entities they actually belong to.</p>
    </section>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '../assets/scss/_variables.scss';

footer {
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: $dark-blue;
  display: flex;
  flex-direction: column;

  section {
    font-size: 14px;
    flex: 1;
    color: white;
    padding: 15px;

    &.top {
      background-color: lighten($dark-blue, 10%);
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      div {
        padding: 15px;
        flex: 1;
        // max-width: 35%;
        min-width: 100%;
      }

      div:first-child {
        text-align: center;
        // min-width: 100%;
        flex: 2;
      }
    }

    &.middle {
      display: flex;
      flex-wrap: wrap;

      div {
        flex: 1;
        // padding: 10px;
        min-width: 100%;
      }

      div.links {
        display: flex;
        font-size: 14px;
        flex: 2;
        // min-width: 100%;

        ul {
          list-style-type: none;
          padding: 0;
          flex: 1;
          min-width: 50%;

          li {
            margin: 15px;
          }

          a {
            color: white;
            text-decoration: none;
            font-weight: bolder;
          }
        }
      }
    }

    &.bottom {
      text-align: center;
      font-size: 10px;
    }
  }
}

@media only screen and (min-width: 426px) {
  footer section.top div {
    min-width: 35%;
    max-width: 35%;
  }
  footer section.top div:first-child {
    min-width: 100%;
  }
  footer section.middle div.links {
    min-width: 100%;
  }
  footer section.middle div {
    min-width: 47%;
  }
}

@media only screen and (min-width: 1024px) {
  footer section.top div,
  footer section.top div:first-child {
    min-width: 0%;
  }
  footer section.middle div,
  footer section.middle div.links {
    min-width: 0%;
  }
}
</style>
