<template>
  <div class="kentico-versions-selector" v-click-outside="hide">
    <div class="selected" @click="toggle">
      <span class="selected--title">{{ selectedKenticoVersion }}</span>
      <span class="dropdown-icon">▼</span>
    </div>
    <div class="options" v-show="isOpen">
      <div
        class="option"
        v-bind:key="kenticoVersion"
        v-for="kenticoVersion in kenticoVersions"
        @click="onKenticoVersionClick(kenticoVersion)"
      >
        {{ kenticoVersion }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import store, {
  updateSelectedCategoriesMutation,
  updateFilterSearchPhraseMutation,
  updateSelectedKenticoVersionMutation
} from "@/store";
import { KENTICO_VERSION_ALL_VERSIONS } from "@/utils/kenticoVersions";
import performItemsFiltering from "@/utils/filter";

@Component({})
export default class KenticoVersionsSelector extends Vue {
  private isOpen = false;

  get kenticoVersions() {
    return [KENTICO_VERSION_ALL_VERSIONS, ...store.getters.kenticoVersions];
  }

  get selectedKenticoVersion() {
    return store.getters.selectedKenticoVersion;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  show() {
    this.isOpen = true;
  }

  hide() {
    this.isOpen = false;
  }

  onKenticoVersionClick(kenticoVersion: string) {
    this.$store.commit(updateSelectedKenticoVersionMutation, kenticoVersion);
    this.hide();
    performItemsFiltering();
  }
}

Vue.directive("click-outside", {
  bind: function(el: any, binding, vnode) {
    el.clickOutsideEvent = function(event: any) {
      if (!(el == event.target || el.contains(event.target))) {
        const vnodeContext = vnode.context as any;
        vnodeContext![binding.expression](event);
      }
    };
    document
      .getElementsByTagName("extension-marketplace")[0]
      .shadowRoot!.addEventListener("click", el.clickOutsideEvent);
  },
  unbind: function(el: any) {
    document
      .getElementsByTagName("extension-marketplace")[0]
      .shadowRoot!.removeEventListener("click", el.clickOutsideEvent);
  }
});
</script>

<style scoped lang="scss">
.kentico-versions-selector {
  transform: translate(0, 0);
  width: 190px;
  margin: 4px 10px 4px 0;
  cursor: pointer;
}

.selected {
  position: relative;
  display: flex;
  height: 40px;
  background-color: white;
  font-size: 14px;
}
.dropdown-icon {
  display: inline-block;
  font-size: 10px;
  margin: 12px 6px 0 0;
}
.selected--title {
  line-height: 40px;
  width: 95%;
}
.options {
  position: absolute;
  left: 0;
  width: 100%;
  background: #fff;
  border-radius: 2px;
  font-size: 14px;
}
.option {
  padding: 6px 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.25);
}
.option:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
