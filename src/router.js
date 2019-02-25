import Vue from 'vue';
import Router from 'vue-router';



Vue.use (Router);

export default new Router({
    // n.b. if using 'history' mode in production, ensure you configure your web server to handle routes:
    // see <https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations>
    mode: 'hash',

    base: process.env.BASE_URL,

    routes: [
        // home route:
        {
            path: '/',
            name: 'home'
        },

        // default route:
        {
            path: '*',
            redirect: { name: 'home' }
        }
    ]
});
