import Vue from 'vue'
import App from './App.vue'
// importing less file
import lessStyle from './less/style.less'
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
