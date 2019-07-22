<template>
  <div class="categories-filter">
    <a
      v-for="category in categories"
      v-bind:key="category.name"
      v-bind:class="{
        'category-caption': true,
        'category-caption--selected': isCategorySelected(category.name)
      }"
      @click="onCategoryClick(category.name)"
      >{{ category.name }} ({{ category.count }})</a
    >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { updateSelectedCategoriesMutation } from "@/store";
import { toggleCategoryInSelectedCategories } from "@/utils/categories";
import CategoryModel from "../models/CategoryModel";
import performItemsFiltering from "@/utils/filter";

@Component({
  components: {}
})
export default class CategoriesFilter extends Vue {
  get categories(): Array<CategoryModel> {
    return this.$store.getters.categories;
  }

  get selectedCategories(): Array<string> {
    return this.$store.getters.selectedCategories;
  }

  set selectedCategories(selectedCategories: Array<string>) {
    this.$store.commit(updateSelectedCategoriesMutation, selectedCategories);
  }

  isCategorySelected(categoryName: string): boolean {
    return this.selectedCategories.indexOf(categoryName) !== -1;
  }

  onCategoryClick(categoryName: string) {
    performItemsFiltering();
    toggleCategoryInSelectedCategories(categoryName);
  }
}
</script>

<style scoped lang="scss">
.categories-filter {
  padding: 0 0 0 12px;
}
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
