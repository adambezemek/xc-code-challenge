<template>

    <figure class="app-card" aria-label="card">
        <picture class="app-card__picture">
            <slot name="image" />
        </picture>
        <figcaption class="app-card__text">
            <h3 class="app-card__title"><slot name="title" /></h3>
            <div class="app-card__description">
                <slot name="description" />
            </div>
        </figcaption>
    </figure>

</template>


<script>
    export default {
        name: 'AppCard'
    }
</script>


<style scoped lang="scss">
    @import "../styles/base/constants";


    .app-card {
        color: $font-color-blue;
        max-width: $card-width;
        padding: 12px;

        picture {
            position: relative;

            // removes extra space after element:
            display: flex;
            align-items: flex-start;
        }

        img {
            max-width: 100%;
        }

        &__text {
            padding-top: 10px;
        }

        &__title {
            font-weight: bold;
        }
    }

    // ---------- utilities: ----------
    // outline style used on hovered swap image:
    .outline {
        outline: 4px dashed #4695f0;

        &::after {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) translateZ(0);
            pointer-events: none;
            color: darken($font-color-blue, 10%);
            font-family: $font-family-sans-serif;
            font-weight: bold;
            font-size: 20px;
            content: 'SWAP IMAGE';
            text-align: center;
        }

        img {
            opacity: 0.2;
        }
    }
</style>
