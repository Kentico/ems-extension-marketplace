<template>
  <div id="app">
    <div class="marketplace">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

Component.registerHooks(["beforeRouteEnter"]);

import { initItemsStateAction } from "./store";
import MarketplaceItemModel from "./models/MarketplaceItemModel";
import store from "./store";
import MarketplaceListingPage from "./components/MarketplaceListingPage.vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import MarketplaceItemDetailPage from "./components/MarketplaceItemDetailPage.vue";
import { MARKETPLACE_ROOT_PATH_SEGMENT } from "./constants/routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: MARKETPLACE_ROOT_PATH_SEGMENT,
      component: MarketplaceListingPage
    },
    {
      path: `${MARKETPLACE_ROOT_PATH_SEGMENT}/:itemName`,
      component: MarketplaceItemDetailPage
    }
  ]
});

@Component({
  store,
  router
})
export default class App extends Vue {}
</script>

<style scoped lang="scss">
.marketplace {
  background-color: #f4f4f4;
}
</style>

<style lang="scss">
@import "./styles/variables.scss";

h2 {
  font-size: 30px;
  line-height: 1.3;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.btn {
  display: inline-block;
  padding: 9px 20px 8px;
  margin-bottom: 0;
  font-size: 16px;
  line-height: 1.5;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
  user-select: none;
  text-decoration: none;
  color: $text-primary-color;
  background-color: $bg-secondary-color;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  transition: all 0.15s ease-in-out;
  width: 100%;
  box-shadow: 0 3px 0 0 $bg-secondary-color;
}
.btn:hover {
  background-color: $btn-bg-color--active;
  color: white;
}
.btn--active {
  background-color: #42388c;
  color: white;
  width: 100%;
  box-shadow: 0 3px 0 0 #39317a;
}
.btn--active:hover {
  background-color: $btn-bg-color--active;
}
</style>
