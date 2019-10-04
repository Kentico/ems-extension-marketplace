<template>
  <div class="marketplace-filter">
    <SearchFilter />
    <KenticoVersionsSelector />
    <CategoriesFilter />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CategoriesFilter from "./CategoriesFilter.vue";
import SearchFilter from "./SearchFilter.vue";
import KenticoVersionsSelector from "./KenticoVersionsSelector.vue";

@Component({
  components: {
    SearchFilter,
    CategoriesFilter,
    KenticoVersionsSelector
  }
})
export default class MarketplaceFilter extends Vue {
  created() {
    const queryParamsUrl: string = window.location.search;
    const params: URLSearchParams = new URLSearchParams(queryParamsUrl);
    const searchPhrase: string = params.get("s") || "";
    const categoryFilter: string = params.get("category") || "";
    const categoryFilterList: Array<string> = categoryFilter.split(";");
  }
}
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
