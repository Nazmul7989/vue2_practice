import Vue from 'vue'
import App from './App.vue'

import comFooter from './components/partial/footer'
Vue.component('comFooter',comFooter)

Vue.config.productionTip = false


//custom directive
Vue.directive('customDirective',{
  bind(el,binding){
    // el.innerHTML = 'Hello global custom directive'
    el.innerHTML = binding.value
  }
})

//Global mixin
export const demoMixin = Vue.mixin({
  data(){
    return{
      name: 'This is user name',
      cars: ['prado','bmw','lamvorgini','pazero']
    }
  }
})


new Vue({
  render: h => h(App),
}).$mount('#app')
