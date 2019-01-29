<template>
  <div class="xc-footernav">
    <div class="xc-footernav__container">
      <nav class="xc-footernav__panel xc-footernav__panel--nav">
        <ul class="xc-footernav__nav-list">
          <li class="xc-footernav__nav-item">
            <a href="#" class="xc-footernav__nav-link">Community</a>
          </li>
          <li class="xc-footernav__nav-item">
            <a href="#" class="xc-footernav__nav-link">Documentation</a>
          </li>
          <li class="xc-footernav__nav-item">
            <a href="#" class="xc-footernav__nav-link">Knowledge Base</a>
          </li>
          <li class="xc-footernav__nav-item">
            <a href="#" class="xc-footernav__nav-link">Partner Network</a>
          </li>
        </ul>
      </nav>
      <nav class="xc-footernav__panel xc-footernav__panel--nav">
        <ul class="xc-footernav__nav-list">
          <li class="xc-footernav__nav-item">
            <a href="#" class="xc-footernav__nav-link">Best Practice Blogs</a>
          </li>
          <li class="xc-footernav__nav-item">
            <a href="#" class="xc-footernav__nav-link">Business Blogs</a>
          </li>
          <li class="xc-footernav__nav-item xc-footernav__nav-item--technical">
            <a href="#" class="xc-footernav__nav-link">Technical Blogs</a>
          </li>
          <li class="xc-footernav__nav-item xc-footernav__nav-item--contact">
            <a href="#" class="xc-footernav__nav-link">Contact Sitecore</a>
          </li>
        </ul>
      </nav>
      <div class="xc-footernav__panel xc-footernav__panel--about">
        <h5 class="xc-footernav__about-heading">About Habitat</h5>
        <p>
          Habitat sites are demonstration sites for the Sitecore&reg; Experience
          Platform&trade;. The sites demonstrate the full set of capabilities
          and potential of the platform through a number of both technical and
          business scenarios.
        </p>
        <AppButton btnType="xc-button__pill" btnStyle="xc-button__pill--gray"
          >Example available on GitHub
        </AppButton>
      </div>

      <div class="xc-footernav__panel xc-footernav__panel--contact">
        <h5 class="xc-footernav__address-heading">Contact Information</h5>
        <div
          class="xc-footernav__address"
          itemscope
          itemtype="http://schema.org/ContactPoint"
        >
          <div itemscope itemtype="schema.org/PostalAddress">
            <span itemprop="name">Sitecore Corporation</span>
            <span itemprop="streetAddress">2320 Marinship Way</span>
            <span itemprop="addressLocality">Sausalito, CA</span>
            <span itemprop="postalCode">94965</span>
            <span itemprop="addressCountry">USA</span>
          </div>
          <span itemprop="telephone"
            ><i class="material-icons" aria-hidden="true">phone</i>+1 415 380
            0600</span
          >
          <a href="mailto:sales@sitecore.net" itemprop="email"
            ><i class="material-icons" aria-hidden="true">mail</i
            >sales@sitecore.net</a
          >
        </div>
      </div>
      <p class="xc-footernav__copyright xc-footernav__copyright--date">
        &copy; Copyright 2017, Sitecore. All Rights Reserved
      </p>
      <p class="xc-footernav__copyright xc-footernav__copyright--byline">
        "Habitat" as used here is for demonstration purposes only and to
        represent software and services provided by Sitecore further described
        at www.sitecore.net
      </p>
    </div>
  </div>
</template>

<script>
import AppButton from "./UI/AppButton.vue";

export default {
  name: "TheFooterNav",
  components: {
    AppButton
  }
};
</script>

<style scoped lang="scss">
.xc-footernav {
  background-color: $footer-nav-bg-color;
  color: $footer-color;
  margin-top: 46px;

  .xc-footernav__container {
    display: flex;
    flex-flow: row wrap;
    max-width: 1000px;
    margin: 0 auto;
    justify-content: space-around;
    padding-top: 26px;
    padding-bottom: 26px;

    .xc-footernav__panel {
      width: 100%;

      &.xc-footernav__panel--nav,
      &.xc-footernav__panel--about,
      &.xc-footernav__panel--contact {
        @media screen and (min-width: $md) {
          width: 50%;
        }
      }

      &.xc-footernav__panel--nav:first-of-type .xc-footernav__nav-list {
        margin-bottom: 0;

        @media screen and (min-width: $md) {
          margin-bottom: 16px;
        }
      }

      &.xc-footernav__panel--nav:last-of-type .xc-footernav__nav-list {
        margin-top: 0;

        @media screen and (min-width: $md) {
          margin-top: 16px;
        }
      }

      &.xc-footernav__panel--nav {
        @media screen and (min-width: $lg) {
          width: 20%;
        }
      }

      &.xc-footernav__panel--about,
      &.xc-footernav__panel--contact {
        padding: 0 20px;
        line-height: 1.5rem;

        @media screen and (min-width: $lg) {
          width: 30%;
        }
      }

      .xc-footernav__nav-item {
        margin-bottom: 25px;
        padding-left: 20px;

        &.xc-footernav__nav-item--technical {
          padding-bottom: 12.5px;
          margin-bottom: 0;
          border-bottom: $thin-border;
        }
        &.xc-footernav__nav-item--contact {
          padding-top: 12.5px;
        }

        .xc-footernav__nav-link {
          color: $footer-color;
          font-weight: 700;
        }
      }

      .xc-footernav__about-heading,
      .xc-footernav__address-heading {
        margin-bottom: 0;
      }

      .xc-footernav__address span[itemprop],
      .xc-footernav__address a[itemprop] {
        display: block;
      }

      .xc-footernav__address span[itemprop="addressLocality"],
      .xc-footernav__address span[itemprop="postalCode"] {
        display: inline-block;
      }

      .xc-footernav__address span[itemprop="name"] {
        font-weight: 700;
        margin-top: 16px;
      }

      .xc-footernav__address a[itemprop="email"] {
        color: $footer-color;
      }

      .xc-footernav__address span[itemprop="addressCountry"] {
        margin-bottom: 24px;
      }

      .xc-footernav__address span[itemprop] .material-icons,
      .xc-footernav__address a[itemprop] .material-icons {
        font-size: 1.125rem;
        vertical-align: middle;
      }
    }

    .xc-footernav__copyright {
      text-align: center;
      font-size: 0.8rem;

      &.xc-footernav__copyright--date {
        margin-top: 60px;
        margin-bottom: 0;
      }

      &.xc-footernav__copyright--byline {
        margin-top: 0;
      }
    }
  }
}
</style>
