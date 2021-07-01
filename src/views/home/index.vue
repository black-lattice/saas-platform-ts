<template>
  <commonHeader></commonHeader>
</template>

<script>
import { ref } from 'vue'
import commonHeader from '@/components/header/index.vue'

export default {
  components: {
    commonHeader
  },
  setup() {
    const title = ref('saas-platform')
    return { title }
  }
}
</script>

<style lang="scss"></style>
