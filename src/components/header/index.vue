<template>
  <div class="header">
    <div class="left">
      <i class="el-icon-s-fold"></i>
      <span>{{ title }}</span>
    </div>
    <div class="right">
      <el-avatar :size="size" :src="circleUrl"></el-avatar>
      <div class="userName">Admin</div>
      <i class="el-icon-arrow-down"></i>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import avator from '@/assets/images/home/avatar.jpg'

export default defineComponent({
  setup() {
    const title = ref('saas-platform-ts')
    const size = ref(50)
    const circleUrl = avator
    return {
      title,
      size,
      circleUrl
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  height: 80px;
  font-size: $titleFontSize;
  font-weight: 500;
  background-color: rgb(4, 32, 75);
  padding: 0px $basePadding;
}
.right {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.userName {
  display: inline-block;
  margin: 0px $baseMargin;
}
</style>
