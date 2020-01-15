<template>
  <div class="submit-new-item-section">
    <h4 class="submit-new-item-section__heading">Submit a New Item!</h4>
    <p>
      Submit a new extension without any certification to share it with the
      Kentico community
    </p>
    <a
      href="https://github.com/Kentico/devnet.kentico.com#submit-a-new-kentico-ems-extension-to-devnet"
      class="btn"
      >Submit a new item!</a
    >
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
@import "../styles/variables.scss";

.submit-new-item-section {
  min-height: 165px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0 20px;
  background-color: $bg-primary-color;
  color: #696663;
}

.submit-new-item-section__heading {
  margin-top: 1em;
  font-size: 16px;
  margin-bottom: 8px;
  line-height: 1.5;
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  display: inline-block;
  width: 100%;
}
</style>
