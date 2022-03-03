<template>
  <div>
    <h1>To do List</h1>
    <sub-title></sub-title>
  </div>
</template>

<script>
import subTitle from './subTitle.vue';

export default {
  name: 'myTitle',
  components: {
    subTitle,
  },
};
</script>

<style>
  div {
    text-align: center;
  }
</style>
