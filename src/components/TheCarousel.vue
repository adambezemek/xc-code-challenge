<template>
    <section class="carousel" aria-label="carousel">

        <!-- ---------- slides: ---------- -->
        <transition-group tag="div" :name="transitionName">
            <div class="slide carousel__slide" :key="currentSlideIndex">
                <div class="slide__text">
                    <h1 class="slide__text--heading">{{ slides[currentSlideIndex].heading }}</h1>
                    <h4 class="slide__text--subheading">{{ slides[currentSlideIndex].subheading }}</h4>
                </div>
                <img class="slide__img" :src="slideImgSrc" alt="carousel slide">
            </div>
        </transition-group>

        <!-- ---------- controls: ---------- -->
        <span class="carousel__arrow carousel__arrow--prev" aria-label="previous slide" @click="handleArrowBackClick">
            <eva-icon name="chevron-left" width="80" height="80" fill="#e3e3e3" />
        </span>

        <span class="carousel__arrow carousel__arrow--next" aria-label="next slide" @click="handleArrowNextClick">
            <eva-icon name="chevron-right" width="80" height="80" fill="#e3e3e3" />
        </span>

    </section>
</template>


<script>
    import { EvaIcon } from 'vue-eva-icons';


    export default {
        name: 'TheCarousel',

        components: {
            [EvaIcon.name]: EvaIcon
        },

        data() {
            return {
                transitionName: '',         // used by Vue to determine with CSS animation class to use
                currentSlideIndex: 0,

                // the carousel comes with these default slides (and their associated text); add/replace slides as needed:
                slides: [
                    {
                        heading: 'Sitecore Powered!',
                        subheading: 'Fully leveraging the power of Sitecore',
                        imgSrc: 'london_office.jpg'
                    },
                    {
                        heading: 'Extensibility',
                        subheading: 'Add new features, simply and without a steep learning curve',
                        imgSrc: 'toronto.jpg'
                    },
                    {
                        heading: 'Simplicity',
                        subheading: 'A consistent and discoverable architecture',
                        imgSrc: 'sky_scraper.jpg'
                    }
                ]
            };
        },

        methods: {
            /**
             * Back arrow click handler: picks previous image in carousel slide list.
             */
            handleArrowBackClick() {
                this.transitionName = 'slide-prev';

                // if current slide is at the beginning of list, go to last slide in list:
                if (this.currentSlideIndex === 0) {
                    this.currentSlideIndex = this.slides.length - 1;
                }
                else {
                    this.currentSlideIndex -= 1;
                }
            },

            /**
             * Next arrow click handler: picks the next image in carousel slide list.
             */
            handleArrowNextClick() {
                this.transitionName = 'slide-next';

                // if current slide is at the end of the list, go to first slide:
                if (this.currentSlideIndex === (this.slides.length - 1)) {
                    this.currentSlideIndex = 0;
                }
                else {
                    this.currentSlideIndex += 1;
                }
            }
        },

        computed: {
            /**
             * Gets the proper file path of a slide image.
             * This method is needed because Vue cannot directly bing static image sources.
             * TODO: We should eventually lazy load the images instead.
             *
             * @returns {String}: string path of slide images
             */
            slideImgSrc() {
                return require(`../assets/images/carousel_slides/${this.slides[this.currentSlideIndex].imgSrc}`);
            }
        },

        mounted() {
            // automatically change slides on a regular interval:
            setInterval(() => {
                this.handleArrowNextClick();
            }, 6000);
        }
    }
</script>


<style scoped lang="scss">
    @import "../styles/base/constants";
    $carousel-height: 400px;


    .carousel {
        position: relative;
        height: $carousel-height;
        background-color: darken($theme-color, 30%);

        &__arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 3;
            cursor: pointer;

            &--next {
                right: 12px;
            }

            &--prev {
                left: 12px;
            }
        }
    }

    .slide {
        will-change: transform;             // creates a new DOM layer to increase rendering performance
        width: 100%;
        height: $carousel-height;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        &__text {
            top: 40%;
            left: 128px;
            transform: translateY(-50%);
            z-index: 2;
            position: absolute;

            &--heading {
                font-size: 9.5rem;
            }

            &--subheading {
                font-size: 2rem;
            }
        }

        &__img {
            filter: brightness(0.3);
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
    }


    // ---------- tablet screen sizes: ----------
    @media (min-width: 750px) and (max-width: 1100px) {
        .slide {
            &__text {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) translateZ(0);

                &--heading {
                    font-size: 6rem;
                }

                &--subheading {
                    font-size: 1.8rem;
                }
            }
        }
    }

    // ---------- phablet screen sizes: ----------
    @media (max-width: 749px) {
        .slide {
            // ensure image doesn't get squished on small viewports:
            &__img {
                height: 100%;
                width: 900px;
            }

            &__text {
                left: 50%;
                transform: translateX(-50%);

                &--heading {
                    font-size: 4rem;
                }

                &--subheading {
                    font-size: 1.4rem;
                }
            }
        }

        .carousel {
            &__arrow {
                top: 50%;

                &--next {
                    right: 0;
                    transform: translate(16px, -50%) translateZ(0) scale(0.8);
                }

                &--prev {
                    transform: translate(-16px, -50%) translateZ(0) scale(0.8);
                    left: 0;
                }
            }
        }
    }
</style>
