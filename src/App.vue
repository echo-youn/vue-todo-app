<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoSelectbox @selectedState="selectedState"></TodoSelectbox>
    <TodoInput v-on:addList="addList"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <DoingList v-bind:propsdata="doingItems" @removeDoing="removeDoing"></DoingList>
    <DoneList v-bind:propsdata="doneItems" @removeDone="removeDone"></DoneList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoSelectbox from './components/TodoSelectbox.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import DoingList from './components/DoingList.vue';
import DoneList from './components/DoneList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  data() {
    return {
      todoItems: [],
      doingItems: [],
      doneItems: [],
      selected: 'todo',
    }
  },
  created() {
    if (localStorage.length > 0) {
      if (selected === 'todo') {
        for (var i = 0; i < localStorage.length; i++) {
          this.todoItems.push(localStorage.key(i));
        }
      } else if (selected === 'doing') {
        for (var i = 0; i < localStorage.length; i++) {
          this.doingItems.push(localStorage.key(i));
        }
      } else if (selected === 'done') {
        for (var i = 0; i < localStorage.length; i++) {
          this.doneItems.push(localStorage.key(i));
        }
      }
    }
  },
  methods: {
    addList(todoItem) {
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
      this.doingItems = [];
      this.doneItems = [];
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    removeDoing(doingItem, index) {
      localStorage.removeItem(doingItem);
      this.doingItem.splice(index, 1);
    },
    removeDone(doneItem, index) {
      localStorage.removeItem(doneItem);
      this.doneItem.splice(index, 1);
    },
    selectedState(selected) {
      this.selected = selected;
    }
  },
  components: {
    TodoHeader,
    TodoSelectbox,
    TodoInput,
    TodoList,
    DoingList,
    DoneList,
    TodoFooter,
  },
};
</script>

<style>
  body {
    text-align: center;
    background: #f6f6f8;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
  }
</style>
