import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import dotenv from 'dotenv'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMoment from 'vue-moment'


dotenv.config();

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueMoment);

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

Vue.use(VueAxios, axios);

Vue.component('home', require('./components/Home.vue').default);
Vue.component('weather', require('./components/WeatherWoeid.vue').default);

const router = new VueRouter({routes});

Vue.router = router;
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');
