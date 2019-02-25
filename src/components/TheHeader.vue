<template>
    <header class="header">

        <nav class="nav">
            <!-- ---------- social media links: ---------- -->
            <ul class="nav__social-media-links">
                <li><a href="#"><eva-icon name="facebook" fill="#e3e3e3" width="16" /></a></li>
                <li><a href="#"><eva-icon name="twitter" fill="#e3e3e3" width="16" /></a></li>
                <li><a href="#"><eva-icon name="tv" fill="#e3e3e3" width="16" /></a></li>
            </ul> <!-- /.social-media-links -->


            <!-- ---------- sitecore links: ---------- -->
            <ul class="nav__sitecore-links">
                <li><a href="#">Habitat</a></li>
                <li><a href="#">Helix</a></li>
                <li><a href="#">Sitecore.net</a></li>
            </ul> <!-- /.nav__sitecore-links -->


            <!-- ---------- hamburger menu: ---------- -->
            <div class="nav__hamburger-menu">
                <a href="#"><eva-icon name="menu" fill="#e3e3e3" width="24" /></a>
            </div> <!-- /.nav_-hamburger-menu -->

            <!-- ---------- brand/logo: ---------- -->
            <div class="nav__brand">
                <img src="../assets/images/brand_logo.png" alt="Habitat Logo">
            </div> <!-- /.nav__brand -->


            <!-- ---------- primary nav links: ---------- -->
            <ul class="nav__nav-links">
                <li><a href="#">HOME</a></li>
                <li>
                    <a href="#">
                        <span>ABOUT HABITAT</span>
                        <eva-icon name="arrow-down" fill="#e3e3e3" width="12" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>MODULES</span>
                        <eva-icon name="arrow-down" fill="#e3e3e3" width="12" />
                    </a>
                </li>
                <li><a href="#">MORE INFO</a></li>
            </ul> <!-- /.nav__nav-links -->


            <!-- ---------- misc links: ---------- -->
            <ul class="nav__misc-icons">
                <li><a href="#"><eva-icon name="globe-2" fill="#e3e3e3" width="16" /></a></li>
                <li><a href="#"><eva-icon name="person" fill="#e3e3e3" width="16" /></a></li>
                <li><a href="#"><eva-icon name="search" fill="#e3e3e3" width="16" /></a></li>
            </ul> <!-- /.nav__misc-icons -->
        </nav>

    </header>
</template>


<script>
    import { EvaIcon } from 'vue-eva-icons';


    export default {
        name: 'TheHeader',

        components: {
            [EvaIcon.name]: EvaIcon
        }
    }
</script>


<style scoped lang="scss">
    @import "../styles/base/constants";


    .header {
        background-color: $theme-color;
    }

    .nav {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr 1fr;
        width: $desktop-content-width;
        margin: 0 auto;
        font-family: $font-family-sans-serif;
        padding: 0 8px 8px 8px;

        a:hover {
            color: $font-color-hover;
        }

        // hide hamburger menu icon unless very small screen:
        &__hamburger-menu {
            display: none;
        }

        // since most of the child elements are unordered lists, we need to make them flow in horizontal direction:
        &__social-media-links,
        &__nav-links,
        &__sitecore-links,
        &__misc-icons {
            display: flex;
            align-items: flex-start;

            & > * {
                flex: 1 1 0;
                padding: 8px;
                white-space: nowrap;
            }
        }

        &__social-media-links {
            grid-column: span 2;
            width: 166px;
            justify-self: flex-start;
        }

        &__sitecore-links {
            align-items: flex-start;
            justify-self: flex-end;

            li {
                padding-left: 16px;
                padding-right: 16px;

                &:last-of-type {
                    border-left: 1px solid $font-color-default;
                    padding-right: 8px;
                }
            }
        }

        &__nav-links {
            justify-self: center;
            font-weight: bold;

            i.eva-hover {
                vertical-align: top;
            }
        }

        &__misc-icons {
            justify-self: flex-end;
        }

        // ---------- tablet screen sizes: ----------
        @media (min-width: 620px) and (max-width: 1100px) {
            width: 100%;
            padding-left: 24px;
            padding-right: 24px;
            grid-template-columns: 1fr 1fr;

            &__social-media-links {
                grid-column: span 1;
            }

            &__nav-links {
                justify-self: flex-end;
            }

            &__misc-icons {
                grid-column: span 2;
                justify-self: flex-end;
            }
        }

        // ---------- mobile screen sizes: ----------
        @media (max-width: 619px) {
            display: flex;
            width: 100%;

            &__social-media-links,
            &__nav-links,
            &__sitecore-links {
                display: none;
            }

            &__brand {
                flex-grow: 1;
            }

            &__hamburger-menu {
                display: inline-block;
                padding: 8px;
            }
        }
    }
</style>
