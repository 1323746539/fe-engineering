<template>
  <div>
      <h1>Hello World</h1>
      <div>当前数字：{{ count }}</div>
      <button @click="handleClick">点击</button>
      <div class="result">数字乘以2计算结果：{{ result }}</div>
  </div>
</template>

<script setup>
import { add } from '@/utils/index';
import { ref, computed } from 'vue';

const count = ref(0);

const handleClick = () => {
  count.value++;
};

const result = computed(() => add(count.value, 2));
</script>

<style lang="less" scoped>
.result {
  color: red;
  user-select: none;
}
</style>