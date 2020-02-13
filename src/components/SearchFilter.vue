<template>
  <div class="search-filter">
    <input
      type="text"
      class="search-filter__input"
      v-model="searchPhrase"
      v-on:input="debounceSearch"
    />
    <button class="search-filter__search-button" disabled>
      <font-awesome-icon class="magnifying-glass" icon="search" />
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import store, {
  updateSelectedCategoriesMutation,
  updateFilterSearchPhraseMutation
} from "./../store";
import filterItems from "../utils/filter";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSearch);

@Component({
  components: {
    FontAwesomeIcon
  }
})
export default class SearchFilter extends Vue {
  private searchDebounceTimeout: number | undefined = undefined;

  get searchPhrase() {
    return store.getters.filterSearchphrase;
  }

  set searchPhrase(newSearchPhrase: string) {
    this.$store.commit(updateFilterSearchPhraseMutation, newSearchPhrase);
  }

  debounceSearch() {
    if (this.searchDebounceTimeout) clearTimeout(this.searchDebounceTimeout);
    this.searchDebounceTimeout = setTimeout(() => {
      filterItems();
    }, 200);
  }
}
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";

.search-filter {
  height: 40px;
  display: block;
  background-color: #fff;
  width: 286px;
  margin: 4px 10px 4px 0;
}

.search-filter__input {
  float: left;
  border: none;
  border-radius: 4px 4px 4px 4px;
  outline: 0;
  line-height: 1.2;
  font-size: 14px;
  width: 246px;
  height: 40px;
  color: $text-primary-color;
  vertical-align: middle;
  background-color: #fff;
  padding: 7px 10px;
  box-sizing: border-box;
}
.search-filter__input:focus {
  border-color: #7382bf;
  outline: 0;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(115, 130, 191, 0.6);
}
.search-filter__search-button {
  width: 40px;
  height: 40px;
  float: right;
  background: 0 0;
  border-radius: 0 4px 4px 0;
  position: relative;
  padding: 1px 6px;
  border: none;
  box-shadow: none;
}
.magnifying-glass {
  margin: 6px;
}
</style>
