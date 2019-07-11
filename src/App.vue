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
.btn {
  text-decoration: none;
  color: #262524;
  background-color: #d6d6d6;
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  transition: all 0.15s ease-in-out;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 3px;
  padding: 6px 10px;
  width: 60%;
}
.btn:hover {
  background-color: #42388c;
  color: #fff;
}
</style>
