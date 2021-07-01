<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
html,
body {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  color: $primaryColor;
}
</style>
