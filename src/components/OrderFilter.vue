<template>
  <div class="order-filter">
    <div class="selected" @click="toggle">
      <span class="selected--title">{{ selectedOrdering }}</span>
      <span class="dropdown-icon">▼</span>
    </div>
    <div class="options" v-show="isOpen">
      <div
        class="option"
        v-bind:key="orderingFilter"
        v-for="orderingFilter in orderingFilters"
        @click="onOrderingFilterClick(orderingFilter)"
      >
        {{ orderingFilter }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import performItemsFiltering from "./../utils/filter";
import store, { updateSelectedOrderingMutation } from "@/store";

@Component({})
export default class OrderFilter extends Vue {

  private isOpen = false;

  get orderingFilters() {
    return store.getters.orderingFilters;
  }

  get selectedOrdering() {
    return store.getters.selectedOrdering;
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

  onOrderingFilterClick(orderingFilter: string) {
    this.$store.commit(updateSelectedOrderingMutation, orderingFilter);
    this.hide();
    performItemsFiltering();
  }
}
</script>

<style scoped lang="scss">
.order-filter {
  transform: translate(0, 0);
  width: 150px;
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


