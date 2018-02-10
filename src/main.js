// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import router from './router/index.js';

import 'common/stylus/index.styl';

Vue.use(VueResource);
// Vue.config.productionTip = false;

// 一般使用new实例化要赋给某个变量,这里new一个vue实例不需要赋值给任何,跳过规则校验
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});