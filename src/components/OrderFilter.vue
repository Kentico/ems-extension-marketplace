<template>
  <div class="order-filter">
    <div class="selected" @click="toggle">
      <span class="selected--title">{{ selectedOrder }}</span>
      <span class="dropdown-icon">▼</span>
    </div>
    <div class="options" v-show="isOpen">
      <div
      class="option"
      v-bind:key="orderFilter"
      v-for="orderFilter in orderFilters"
      @click="onOrderFilterClick(orderFilter)"
      >
        {{ orderFilter }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import performItemsFiltering from "./../utils/filter";
import store, { updateSelectedOrderMutation } from "@/store";

@Component({})
export default class OrderFilter extends Vue {

  private isOpen = false;

  get orderFilters() {
    return store.getters.orderFilters;
  }

  get selectedOrder() {
    return store.getters.selectedOrder;
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

  onOrderFilterClick(orderFilter: string) {
    this.$store.commit(updateSelectedOrderMutation, orderFilter);
    this.hide();
    performItemsFiltering();
  }
}
</script>

