<template>
  <div>
    <div style="color:red;">
        <select v-model="selection">
          <option value="todo">todo</option>
          <option value="doing">doing</option>
          <option value="done">done</option>
        </select>
        {{ card }}
        <button @click="update">수정</button>
        <button @click="remove">삭제</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cardItem',
  props: {
    card: String,
  },
  data() {
    return {
      selection: 'todo',
    };
  },
  methods: {
    remove() {
      this.$emit('remove', this.card);
    },
    update() {
      this.$emit('update', {
        target: this.selection,
        title: this.card,
      });
    },
  },
};
</script>

<style>

</style>
