<template>
  <input
    class="load-more-button btn btn--common btn--justified"
    @click="loadMoreItems"
    type="button"
    value="Load More Extensions"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { addPageAction } from "@/store";

@Component({
  components: {}
})
export default class LoadMoreButton extends Vue {
  loadMoreItems() {
    this.$store.dispatch(addPageAction);
  }
}
</script>

<style scoped lang="scss">
.load-more-button {
  margin: 12px 0 12px 0;
}
</style>
