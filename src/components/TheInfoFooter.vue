<template>
    <footer class="info-footer">

        <ul class="info-footer__links">
            <li><a href="#">Community</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Knowledge Base</a></li>
            <li><a href="#">Partner Network</a></li>
        </ul> <!-- /.info-footer__links -->


        <ul class="info-footer__links">
            <li><a href="#">Best Practice Blogs</a></li>
            <li><a href="#">Business Blogs</a></li>
            <li><a href="#">Technical Blogs</a></li>
            <li class="contact-sitecore"><a href="#">Contact Sitecore</a></li>
        </ul> <!-- /.info-footer__links -->


        <div class="info-footer__about">
            <h4>About Habitat</h4>
            <p>
                Habitat sites are demonstration sites for the Sitecore® Experience Platform™.
                The sites demonstrate the full set of capabilities and potential of the platform
                through a number of both technical and business scenarios.
            </p>
            <app-button color="white" shape="rounded">Example available on GitHub</app-button>
        </div> <!-- /.info-footer__about -->


        <div class="info-footer__contact footer-contact">
            <h4>Contact Information</h4>
            <ul>
                <li>Sitecore Corporation</li>
                <li>2320 Marinship Way</li>
                <li>Sausalito, CA 94965</li>
                <li>USA</li>
            </ul>

            <ul>
                <li><eva-icon name="phone" fill="#e3e3e3" width="16" /> +1 415 380 0600</li>
                <li>
                    <a href="mailto:sales@sitecore.net?subject=Sitecore%20Inquiry">
                        <eva-icon name="email" fill="#e3e3e3" width="16" /> sales@sitecore.net
                    </a>
                </li>
            </ul>
        </div> <!-- /.info-footer__contact -->


        <div class="info-footer__copyright">
            <div>© Copyright 2017, Sitecore. All Rights Reserved</div>
            <div>"Habitat" as used here is for demonstration purposes only and to represent the software and services
                provided by Sitecore further described at www.sitecore.net.
            </div>
        </div> <!-- /.footer-copyright -->

    </footer>
</template>


<script>
    import AppButton from './AppButton.vue';
    import { EvaIcon } from 'vue-eva-icons';


    export default {
        name: 'TheInfoFooter',

        components: {
            AppButton,
            [EvaIcon.name]: EvaIcon
        }
    }
</script>


<style scoped lang="scss">
    @import "../styles/base/constants";


    .info-footer {
        display: grid;
        grid-gap: 20px;
        grid-template-rows: 1fr 120px;
        grid-template-columns: 180px 180px 350px 240px;
        justify-content: center;
        background-color: $theme-color;
        padding: 24px;

        a:hover {
            color: $font-color-hover;
        }

        &__links {
            grid-row: 1/2;

            li {
                font-weight: bold;
                padding: 8px 0;
            }

            .contact-sitecore {
                border-top: 1px solid $font-color-default;
            }
        }

        &__about {
            grid-row: 1/2;
            padding: 8px 40px;
        }

        &__contact {
            grid-row: 1/2;
            padding: 8px 20px;

            h4 {
                margin-bottom: 16px;
            }

            ul + ul {
                margin-top: 40px
            }

            // offset icons to align with text:
            .eva-hover {
                transform: translateY(2px);
            }
        }

        &__copyright {
            grid-row: 2/3;
            grid-column: span 4;
            align-self: flex-end;
            font-size: $font-size-small;
            text-align: center;
        }

        // ---------- tablet screen sizes: ----------
        @media (min-width: 500px) and (max-width: 1100px) {
            grid-template-rows: auto;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;

            &__links,
            &__contact,
            &__about {
                padding: 12px;
                width: auto;
                grid-row: span 1;
                grid-column: span 1;
            }

            &__copyright {
                padding-top: 24px;
                grid-row: span 1;
                grid-column: span 2;
            }
        }

        // ---------- mobile screen sizes: ----------
        @media (max-width: 499px) {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            & > * {
                padding-left: 12px;
                padding-right: 12px;
            }

            &__links {
                width: 100%;

                li {
                    padding-left: 0;
                    padding-right: 0;
                }
            }
        }
    }
</style>
