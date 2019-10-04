<template>
  <div class="marketplace-filter">
    <SearchFilter />
    <KenticoVersionsSelector />
    <CategoriesFilter />
    <TagsFilter />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CategoriesFilter from "./CategoriesFilter.vue";
import SearchFilter from "./SearchFilter.vue";
import KenticoVersionsSelector from "./KenticoVersionsSelector.vue";
import TagsFilter from "./TagsFilter.vue";

@Component({
  components: {
    TagsFilter,
    SearchFilter,
    CategoriesFilter,
    KenticoVersionsSelector
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
