<template>
  <div class="marketplace-filter">
    <SearchFilter />
    <!-- <CategoriesFilter /> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CategoriesFilter from "./CategoriesFilter.vue";
import SearchFilter from "./SearchFilter.vue";

@Component({
  components: {
    SearchFilter,
    CategoriesFilter
  }
})
export default class MarketplaceFilter extends Vue {}
</script>

<style scoped lang="scss">
.marketplace-filter {
  padding: 30px 0 30px 0;
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
  width: 100%;
}
</style>
