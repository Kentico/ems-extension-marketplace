<template>
  <div class="categories-filter">
    <a
      v-for="(category, key) in Array.from(categories)"
      v-bind:key="key"
      v-bind:class="{
        'category-caption': true,
        'category-caption--selected': Math.random() >= 0.5
      }"
      @click="onCategoryClick(category[0])"
      >{{ category[0] }} ({{ category[1] }})</a
    >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { updateSelectedCategoriesMutation } from "@/store";
import { toggleCategoryInSelectedCategories } from "@/utils/categories";

@Component({
  components: {}
})
export default class CategoriesFilter extends Vue {
  get categories() {
    return this.$store.getters.categoriesCount;
  }

  get selectedCategories(): Set<string> {
    return this.$store.getters.selectedCategories;
  }

  set selectedCategories(selectedCategories: Set<string>) {
    this.$store.commit(updateSelectedCategoriesMutation, selectedCategories);
  }

  onCategoryClick(categoryName: string) {
    toggleCategoryInSelectedCategories(categoryName);
  }
}
</script>

<style scoped lang="scss">
.category-caption {
  display: inline-block;
  border-radius: 4px;
  background-color: #d6d6d6;
  color: #282828;
  padding: 6px 10px;
  font-size: 16px;
  text-align: center;
  margin: 4px 6px 2px 0;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  vertical-align: baseline;
  text-decoration: none;
  text-transform: lowercase;
  cursor: pointer;
}
.category-caption:hover {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  background-color: #bdbdbd;
}
.category-caption--selected {
  display: inline-block;
  border-radius: 4px;
  background-color: #42388c;
  color: #fff;
}
.category-caption--selected:hover {
  display: inline-block;
  border-radius: 4px;
  background-color: #42388c;
  color: #fff;
}
</style>
