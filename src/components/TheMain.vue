<template>
    <main class="main">

        <!-- ---------- card: ---------- -->
        <app-card class="main__card">
            <template #image>
                <img src="../assets/images/cards/man_computer.png"
                     alt="man using computer"
                     draggable="true"
                     @dragstart="handleImgDragStart"
                     @dragenter.prevent="handleImgDragEnter"
                     @dragover.prevent="handleImgDragOver"
                     @dragleave="handleImgDragLeave"
                     @drop.prevent="handleImgDrop"
                     @dragend="handleImgDragEnd"
                     ref="imgOne"
                >
            </template>

            <template #title>
                Introduction to Habitat
            </template>

            <template #description>
                <p>
                    Sitecore Habitat is a range of sites demonstrating the capabilities of the Sitecore Experience Platform.
                </p>
                <p>
                    The solution is built on the Sitecore Helix guidelines, which focuses on increasing productivity and quality in Sitecore projects.
                </p>
                <app-button color="blue" shape="rounded">Read more</app-button>
            </template>
        </app-card>


        <!-- ---------- card: ---------- -->
        <app-card class="main__card">
            <template #image>
                <img src="../assets/images/cards/woman_listening_music.png"
                     alt="woman listening to music"
                     draggable="true"
                     @dragstart="handleImgDragStart"
                     @dragenter.prevent="handleImgDragEnter"
                     @dragover.prevent="handleImgDragOver"
                     @dragleave="handleImgDragLeave"
                     @drop.prevent="handleImgDrop"
                     @dragend="handleImgDragEnd"
                     ref="imgTwo"
                >
            </template>

            <template #title>
                Modules
            </template>

            <template #description>
                <p>
                    The Habitat example implementation has a range of modules which covers the basics of a Sitecore website.
                </p>
                <app-button color="blue" shape="rounded">Read more</app-button>
            </template>
        </app-card>


        <!-- ---------- card: ---------- -->
        <app-card class="main__card">
            <template #image>
                <img src="../assets/images/cards/woman_purchase_credit.png"
                     alt="woman purchasing with credit card"
                     draggable="true"
                     @dragstart="handleImgDragStart"
                     @dragenter.prevent="handleImgDragEnter"
                     @dragover.prevent="handleImgDragOver"
                     @dragleave="handleImgDragLeave"
                     @drop.prevent="handleImgDrop"
                     @dragend="handleImgDragEnd"
                     ref="imgThree"
                >
            </template>

            <template #title>
                Getting Started
            </template>

            <template #description>
                <p>
                    Sitecore Helix a defined methodology with conventions and practices - Habitat is an example implementation available for your understanding.
                </p>
                <app-button color="blue" shape="rounded">Read more</app-button>
            </template>
        </app-card>

    </main>
</template>


<script>
    import AppCard from './AppCard.vue';
    import AppButton from './AppButton.vue';


    export default {
        name: 'TheMain',

        components: {
            AppButton,
            AppCard
        },

        data() {
            return {
                draggableStartImg: null
            };
        },

        methods: {
            /**
             * Ondrop handler: swaps target and source/start images.
             *
             * @param event
             */
            handleImgDrop(event) {
                this.draggableStartImg.src = event.target.src;
                this.draggableStartImg.alt = event.target.alt;

                event.target.src = event.dataTransfer.getData("text/uri-list");
                event.target.alt = event.dataTransfer.getData("text/plain");
            },

            /**
             * Ondragover handler: the `dropEffect` needs to be set to "move" in order to swap images.
             *
             * @param event
             */
            handleImgDragOver(event) {
                event.dropEffect = "move";
            },

            /**
             * Ondragenter handler: adds outline to target's <picture> element.
             *
             * @param event
             */
            handleImgDragEnter(event) {
                // we don't want to apply a border the the start/source image; so filter it out:
                if (event.target.src !== this.draggableStartImg.src) {
                    event.target.parentNode.classList.add('outline');
                }
            },

            /**
             * Ondragleave handler: removes outline from the drop zone when dragged image leaves it.
             *
             * N.b. this differs from `dragend` event since `dragleave` doesn't end the drag operations
             * and we still want outline applied to drop zones that we hover over.
             *
             * @param event
             */
            handleImgDragLeave(event) {
                event.target.parentNode.classList.remove('outline');
            },

            /**
             * Ondragend handler: removes outlines on all <picture> elements when drag operation ends.
             *
             * @param event
             */
            handleImgDragEnd(event) {
                this.$refs.imgOne.parentNode.classList.remove('outline');
                this.$refs.imgTwo.parentNode.classList.remove('outline');
                this.$refs.imgThree.parentNode.classList.remove('outline');
            },

            /**
             * Ondragstart handler: begins drag operation and gets target's `src` and `alt` attributes.
             *
             * @param event
             */
            handleImgDragStart(event) {
                const imgSrc = event.target.src;
                const imgAlt = event.target.alt;
                const dt = event.dataTransfer;
                this.draggableStartImg = event.target;

                dt.dropEffect = "move";
                dt.setData("text/uri-list", imgSrc);
                dt.setData("text/plain", imgAlt);
            }
        }
    }
</script>


<style scoped lang="scss">
    @import "../styles/base/constants";


    .main {
        padding: 32px 0;
        justify-content: center;

        display: grid;
        grid-template-columns: repeat(3, $card-width);
        grid-gap: 0;

        &__card {
            grid-column: span 1;
            grid-row: span 1;

            // card images should indicate that they can be swapped:
            img {
                cursor: move;
            }
        }

        // ---------- tablet screen sizes: ----------
        @media (min-width: 500px) and (max-width: 1100px) {
            grid-template-columns: repeat(3, 1fr);
            padding-left: 12px;
            padding-right: 12px;
        }

        // ---------- mobile screen sizes: ----------
        @media (max-width: 499px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-left: 12px;
            padding-right: 12px;

            &__card {
                padding-top: 24px;
                padding-bottom: 24px;
            }
        }
    }
</style>
