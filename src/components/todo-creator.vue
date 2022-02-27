<template>
  <div>
    <select v-model="selection">
      <option v-for="option in options" v-bind:key="option" :value="option">{{ option }}</option>
    </select>
    <input v-model="title" />
    <button type="button" @click="save">저장</button>
  </div>
</template>

<script>
import box from '../utils/storage';

export default {
  name: 'todoCreator',
  data() {
    return {
      options: ['todo', 'doing', 'done'],
      selection: 'todo',
      title: '',
    };
  },
  methods: {
    async save() {
      const exists = await box.getItem(this.selection) || [];
      exists.push(this.title);
      box.setItem(this.selection, exists);
      this.$emit('created');
    },
  },
};
</script>

<style>

</style>
