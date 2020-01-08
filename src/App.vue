<template>
  <div id="app">
    <div class="marketplace">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { initItemsStateAction, initStore } from "./store";
import MarketplaceItemModel from "./models/marketplaceItemModel";
import store from "./store";

@Component({
  store
})
export default class App extends Vue {}
</script>

<style scoped lang="scss">
.marketplace {
  background-color: #f4f4f4;
}
</style>

<style lang="scss">
@import './styles/variables.css';

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
  color: #262524;
  background-color: var(--background-secondary-color);
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  transition: all 0.15s ease-in-out;
  width: 71%;
}
.btn:hover {
  background-color: #42388c;
  color: #fff;
}
.btn:focus {
  outline: none;
}
.btn--justified {
  width: 100%;
}
.btn--common {
  color: #262524;
  background-color: var(--background-primary-color);
  border-color: var(--background-primary-color);
  box-shadow: 0 3px 0 0 var(--background-secondary-color);
}
</style>
