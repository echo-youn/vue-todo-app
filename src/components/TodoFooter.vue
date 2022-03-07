<template>
  <div class="button-container">
    <div class="clear-all-container">
      <span class="clear-all-btn" @click="clearTodo">Clear All</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      const isAllRemover = confirm('are you sure you want to delete all?');
      if (isAllRemover) {
        this.$emit('removeAllOfChild');
      }
    },
  },
};
</script>

<style>
.clear-all-container,
.order-reverse-container {
  width: 10rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.button-container {
  margin: 0 auto;
  cursor: pointer;
}

.clear-all-btn {
  color: #e20303;
  display: block;
}
</style>
