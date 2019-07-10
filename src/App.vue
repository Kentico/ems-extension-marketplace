<template>
  <div id="app">
    <WidgetList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WidgetList from "./components/WidgetList.vue";

@Component({
  components: {
    WidgetList
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
