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
    this.todoItems = JSON.parse(localStorage.getItem('todo')); 
    this.doingItems = JSON.parse(localStorage.getItem('doing'));
    this.doneItems = JSON.parse(localStorage.getItem('done'));  
  },
  methods: {
    addList(value) {
      let target = this.selected
      switch (target) {
        case 'todo':
          this.todoItems.push(value);
          localStorage.setItem(target, JSON.stringify(this.todoItems)); 
          break
        case 'doing':
          this.doingItems.push(value);
          localStorage.setItem(target, JSON.stringify(this.doingItems)); 
          break
        case 'done':
          this.doneItems.push(value);
          localStorage.setItem(target, JSON.stringify(this.doneItems)); 
        break
      }
    },
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
      this.doingItems = [];
      this.doneItems = [];
    },
    removeTodo(index) {
      this.todoItems.splice(index, 1);
      localStorage.setItem('todo', JSON.stringify(this.todoItems));
    },
    removeDoing(index) {
      this.doingItems.splice(index, 1);
      localStorage.setItem('doing', JSON.stringify(this.doingItems));
    },
    removeDone(index) {
      this.doneItems.splice(index, 1);
      localStorage.setItem('done', JSON.stringify(this.doneItems));
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
