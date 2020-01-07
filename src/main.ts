import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import MarketplaceListingPage from "./components/MarketplaceListingPage.vue";

const routes = [{ path: "/", component: MarketplaceListingPage }];

const router = new VueRouter({
  mode: "history",
  routes
});

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
