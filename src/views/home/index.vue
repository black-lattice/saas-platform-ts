<template>
  <div>{{ hello }}</div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const hello = ref('this is home')
    return { hello }
  }
})
</script>

<style lang="scss"></style>
