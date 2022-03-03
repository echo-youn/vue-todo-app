<template>
  <div class="selectBox shadow">
    <select v-model="selected" @change="selectedState()">
      <option value="todo">To Do</option>
      <option value="doing">Doing</option>
      <option value="done">Done</option>
    </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: 'todo',
    }
  },
  methods: {
    selectedState () {
      this.$emit('selectedState', this.selected);
    },
  },
}
</script>

<style scope>
  .selectBox {
    line-height: 50px;
    background: white;
    width: 5rem;
    margin: 0.5rem auto;
    border-radius: 5px;
  }
  select {
    border-style: none;
    font-size: 0.9rem;
  }
</style>