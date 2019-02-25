<template>
    <footer class="promo-footer">

        <div class="promo-footer__download">
            <h2>Download Habitat Now!</h2>
            <p>
                Habitat is available as a Sitecore Package and the sourcecode is available on GitHub.
            </p>
            <app-button color="black" shape="default">Visit Habitat on GitHub</app-button>
        </div> <!-- promo-footer__download -->


        <div class="promo-footer__testimonials">
            <figure>
                <img src="../assets/images/profile_anders.png" alt="Anders Laub Christoffersen">
                <figcaption>
                    <div>Anders Laub Christoffersen</div>
                    <div>Sitecore MVP, Pentia A/S</div>
                </figcaption>
            </figure>
            <p>
                [Habitat...] is nothing less than groundbreaking,
                it is a real revolution in the way that Sitecore teaches developers to work with their product.
            </p>
        </div> <!-- promo-footer__testimonials -->


        <div class="promo-footer__news">
            <h4>News</h4>
            <a href="#"><app-button color="white" shape="rounded">Read more</app-button></a>
        </div> <!-- promo-footer__news -->

    </footer>
</template>


<script>
    import AppButton from './AppButton.vue';


    export default {
        name: 'ThePromoFooter',

        components: {
            AppButton
        }
    }
</script>


<style scoped lang="scss">
    @import "../styles/base/constants";


    .promo-footer {
        display: grid;
        grid-gap: 20px;
        grid-template-rows: 1fr;
        grid-template-columns: 510px 300px 290px;
        align-items: flex-start;
        justify-content: center;
        padding: 80px 0;
        background-color: #4d7d9b;

        &__download {
            text-align: center;
            padding: 20px;
        }

        &__testimonials {
            padding: 0 40px;
            text-align: center;

            // this is to remove the extra space between the picture and the line:
            figure {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            figcaption {
                padding-top: 12px;
                border-top: 1px solid $font-color-default;
                font-size: $font-size-small;
                font-style: italic;
                width: 100%;
            }

            p {
                margin-bottom: 0;
            }
        }

        &__news {
            border: 1px solid $muted-color;
            border-radius: 5px;
            padding: 20px;
            width: 260px;

            h4 {
                margin-bottom: 30px;
            }
        }

        // ---------- tablet screen sizes: ----------
        @media (min-width: 500px) and (max-width: 1100px) {
            grid-gap: 20px;
            grid-template-columns: 1fr 1fr;
            padding-left: 24px;
            padding-right: 24px;

            &__download {
                grid-column: span 2;
                grid-row: 1/2;
            }

            &__testimonials,
            &__news {
                grid-column: span 1;
                grid-row: 2/3;
            }

            &__testimonials {
                padding-left: 12px;
                padding-right: 12px;
            }

            &__news {
                width: calc(100% - 24px);
            }
        }

        // ---------- mobile screen sizes: ----------
        @media (max-width: 499px) {
            display: flex;
            flex-direction: column;
            align-items: center;

            &__testimonials {
                padding-top: 24px;
                padding-bottom: 24px;
            }

            &__news {
                width: calc(100% - 24px);
            }
        }
    }
</style>
