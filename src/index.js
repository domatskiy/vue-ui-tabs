import UiTabs from './Components/Tabs.vue'
import UiTab from './Components/Tab.vue'

const UiTabsPlugin = {
  install (Vue, options = {}) {
    Vue.component(UiTabs.name, UiTabs)
    Vue.component(UiTab.name, UiTab)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(UiTabsPlugin)
}

export default UiTabsPlugin
