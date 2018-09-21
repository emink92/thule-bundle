import Vue from 'vue'
import topbar from './topbar/topbar.vue'

const Components = {
  topbar
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components