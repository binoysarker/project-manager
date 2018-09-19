import Vue from 'vue'
import App from './App.vue'
// font awesome section
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome,faSyncAlt,faCommentAlt,faPlus,faUser,faTachometerAlt,faThumbtack,faCamera,faMusic,faBrush,faPlug,faWrench,faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome,faSyncAlt,faCommentAlt,faPlus,faUser,faTachometerAlt,faThumbtack,faCamera,faMusic,faBrush,faPlug,faWrench,faSearch)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
