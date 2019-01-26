import Vue from "vue";

import Router from "./router";
import Store from "./store";

var apps = document.querySelectorAll(".xc");

apps.forEach(initApp);

function initApp(appNode) {
    new Vue({
        el: appNode,

        router: Router,
        store: Store
    });
}
