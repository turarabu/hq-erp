import Vue from 'vue'
import App from '@vue/App.vue'
import router from '@vue/router'

Vue.config.productionTip = false

new Vue({
    router,
    render: function (h) { return h(App) }
}).$mount('#app')
