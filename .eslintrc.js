
module.exports = {

    root: true,

    env: {
        node: true
    },

    extends: [
        'plugin:vue/strongly-recommended'
    ],

    globals: {},

    parserOptions: {
        ecmaVersion: 2017,
        parser: 'babel-eslint',
        sourceType: 'module'
    },

    rules: {
        'vue/html-closing-bracket-newline': 'off',
        'vue/html-closing-bracket-spacing': 'off',
        'vue/html-indent': [
            'off', 4
        ],
        'vue/max-attributes-per-line': 'off',
        'vue/mustache-interpolation-spacing': 'warn',
        'vue/order-in-components': ['warn', {
            'order': [
                'name',
                'beforeCreate',
                'beforeDestroy',
                'beforeMount',
                'beforeUpdate',
                'comments',
                'components',
                'computed',
                'created',
                'data',
                'delimiters',
                'destroyed',
                'directives',
                'el',
                'extends',
                'filters',
                'functional',
                'inheritAttrs',
                'LIFECYCLE_HOOKS',
                'methods',
                'mixins',
                'model',
                'mounted',
                'parent',
                'props',
                'propsData',
                'render',
                'renderError',
                'template',
                'updated',
                'watch'
            ]
        }],

        'vue/html-self-closing': 'off'
    }
};
