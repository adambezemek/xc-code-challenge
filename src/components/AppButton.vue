<template>
    <button :class="cssClassesForButton" @click="handleButtonClick" type="button"><slot /></button>
</template>


<script>
    export default {
        name: 'AppButton',

        props: {
            shape: {
                type: String,
                required: true,
                validator(value) {
                    return ['rounded', 'default'].indexOf(value) !== -1;
                }
            },
            color: {
                type: String,
                required: true,
                validator(value) {
                    return ['white', 'blue', 'black'].indexOf(value) !== -1;
                }
            }
        },

        methods: {
            /**
             * Button click handler: simply emits the `event` to parent.
             * Using `$emit` prevents us from having to use the `.native` modifier on component instances.
             *
             * @param event
             */
            handleButtonClick(event) {
                this.$emit('click', event)
            }
        },

        computed: {
            /**
             * Computes CSS classes for button, given the props passed to the component.
             *
             * @returns {Object}
             */
            cssClassesForButton() {
                return {
                    'app-button':           true,
                    'app-button--rounded':  this.shape === 'rounded',
                    'app-button--default':  this.shape === 'default',
                    'app-button--white':    this.color === 'white',
                    'app-button--blue':     this.color === 'blue',
                    'app-button--black':    this.color === 'black'
                }
            }
        }
    }
</script>


<style scoped lang="scss">
    @import "../styles/base/constants";


    .app-button {
        color: white;
        font-family: $font-family-default;
        line-height: 1;
        cursor: pointer;
        border: 0;
        display: inline-block;
        padding: 8px 4px;
        margin: 0;
        vertical-align: bottom;
        text-align: center;
        min-width: 70px;
        white-space: nowrap;
        transition: 250ms color ease-in-out, 250ms border-color ease-in-out;

        // Removes extra browser-specific styles from buttons:
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;

        // ---------- modifiers: ----------
        &--default {
            padding: 12px 16px;
            border-radius: 5px;
            border-width: 1px;
            border-style: solid;
        }

        &--rounded {
            border-width: 2px;
            border-radius: 28px;
            padding-left: 12px;
            padding-right: 12px;
            border-style: solid;
            background-color: transparent;
        }

        &--white {
            background-color: transparent;
            border-color: $font-color-default;
            color: $font-color-default;

            &:hover {
                border-color: darken($font-color-default, 18%);
                color: darken($font-color-default, 18%);
            }
        }

        &--blue {
            background-color: transparent;
            border-color: $font-color-blue;
            color: $font-color-blue;

            &:hover {
                border-color: darken($font-color-blue, 18%);
                color: darken($font-color-blue, 18%);
            }
        }

        &--black {
            background-color: $dark-color;
            border-color: $dark-color;
            color: $font-color-default;

            &:hover {
                color: darken($font-color-default, 18%);
            }
        }
    }
</style>
