<template>
  <div id="app">
    <MarketplaceItemList />
    <SubmitNewItem />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MarketplaceItemList from "./components/MarketplaceItemList.vue";
import SubmitNewItem from "./components/SubmitNewItem.vue";

@Component({
  components: {
    MarketplaceItemList,
    SubmitNewItem
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
