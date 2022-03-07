<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList
      v-bind:propsData="todoItems"
      @removeTodo="removeTodo"
      @editTodo="editTodo"
    ></TodoList>
    <TodoFooter v-on:removeAllOfChild="removeAllOfParents"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      todoItems: [],
    };
  },
  created() {
    if (localStorage.getItem('vue-todo')) {
      this.todoItems = JSON.parse(localStorage.getItem('vue-todo'));
      this.todoItems.sort((a, b) => (a.key < b.key ? -1 : a.key > b.key ? 1 : 0));
    }
  },
  methods: {
    addTodo(key, value, date) {
      this.todoItems.push({
        key,
        value,
        createdDate: date,
        modifiedDate: date,
      });
      localStorage.setItem('vue-todo', JSON.stringify(this.todoItems));
    },
    removeAllOfParents() {
      this.todoItems = [];
      localStorage.setItem('vue-todo', JSON.stringify(this.todoItems));
    },
    removeTodo(keyOfTodoItem, index) {
      this.todoItems.splice(index, 1);
      localStorage.setItem('vue-todo', JSON.stringify(this.todoItems));
    },
    editTodo(keyOfTodoItem, index, editText, modifiedDate) {
      const item = this.todoItems[index];
      this.todoItems.splice(index, 1, {
        key: keyOfTodoItem,
        value: editText,
        createdDate: item.createdDate,
        modifiedDate,
      });
      localStorage.setItem('vue-todo', JSON.stringify(this.todoItems));
    },
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f8;
}
input {
  border-style: none;
  width: 200px;
  height: 30px;
  margin: 10px 0;
}
input:focus {
  outline: none;
}
button {
  border-style: none;
  color: #fff;
  background: linear-gradient(to right, #6478fb, #8763fb);
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  line-height: 30px;
  margin-right: 10px;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
