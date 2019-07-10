<template>
  <div class="submit-new-item-section">
    <p>Submit!</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class SubmitNewItem extends Vue {}
</script>

<style scoped lang="scss">
.marketplace-item-list {
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
}
.marketplace-item-detail-container {
  max-width: 310px;
  min-width: 280px;
  margin: 0 10px 18px 10px;
}
</style>
