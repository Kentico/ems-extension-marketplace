<template>
  <div class="tags-filter">
    <a
      v-for="tag in tags"
      v-bind:key="tag.name"
      v-bind:class="{
        'tag-caption': true,
        'tag-caption--selected': isTagSelected(tag.name)
      }"
      @click="onTagClick(tag.name)"
      >{{ tag.name }} ({{ tag.count }})</a
    >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { updateSelectedTagsMutation } from "@/store";
import TagModel from "@/models/TagModel";
import { toggleSelectedTag } from "@/utils/tags";

@Component({
  components: {}
})
export default class CategoriesFilter extends Vue {
  get tags(): Array<TagModel> {
    return this.$store.getters.tags;
  }

  get selectedTags(): Array<string> {
    return this.$store.getters.selectedTags;
  }

  set selectedTags(selectedTags: Array<string>) {
    this.$store.commit(updateSelectedTagsMutation, selectedTags);
  }

  isTagSelected(tagName: string): boolean {
    return this.selectedTags.indexOf(tagName) !== -1;
  }

  onTagClick(tagName: string) {
    toggleSelectedTag(tagName);
  }
}
</script>

<style scoped lang="scss">
.tags-filter {
  margin: 4px 10px 4px 4px;
}
.tag-caption {
  display: inline-block;
  border-radius: 4px;
  background-color: #f3c9ac;
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
.tag-caption:hover {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  background-color: #c75100;
}
.tag-caption--selected {
  display: inline-block;
  border-radius: 4px;
  background-color: #42388c;
  color: #fff;
}
.tag-caption--selected:hover {
  display: inline-block;
  border-radius: 4px;
  background-color: #42388c;
  color: #fff;
}
</style>
