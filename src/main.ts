import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import App from "./App.vue";
import MarketplaceListingPage from "./components/MarketplaceListingPage.vue";
import MarketplaceItemDetailPage from "./components/MarketplaceItemDetailPage.vue";
import MarketplaceItemModel from "./models/marketplaceItemModel";
import { initStore } from "./store";

fetch(
  "https://raw.githubusercontent.com/Kentico/devnet.kentico.com/master/marketplace/extensions.json" +
    "?t=" +
    new Date().valueOf()
).then(response => {
  return response.json().then(json => {
    const allItems = json as MarketplaceItemModel[];
    allItems.sort((a: MarketplaceItemModel, b: MarketplaceItemModel) =>
      a.name.localeCompare(b.name)
    );
    initStore(allItems);
    initializeVue();
  });
});

function initializeVue() {
  const routes = [
    {
      path: "/",
      component: MarketplaceListingPage
    },
    {
      path: "/:itemName",
      component: MarketplaceItemDetailPage
    }
  ];

  const router = new VueRouter({
    mode: "history",
    routes
  });

  Vue.config.productionTip = false;

  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
}
