// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'

Vue.config.productionTip = false

Vue.use(VueFire)

Vue.component('GameContent', {
  props: [
    'GameName',
    'GameSummary',
    'GameDate',
    'Rating'
  ],
  template: `
  <div>
    <div class="card-content">
      <h2>{{GameName}}</h2>
      <h3>{{GameSummary}}</h3>
      <h3><strong>Release Year:</strong> {{GameDate}}</h3>
    </div>

  </div>
  `
});

Vue.component('GameImage', {
  props: [
    'GameUrl'
  ],
  template: `
  <img class="game-tag--cover" :src="GameUrl" alt=Alternative></img>
  `
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
