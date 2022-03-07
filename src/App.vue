<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoSelectbox @selectedState="selectedState"></TodoSelectbox>
    <TodoInput v-on:addList="addList"></TodoInput>
    <TodoAppList title="To do" type="todo" :list="todoItems" @removed="onRemoved"></TodoAppList>
    <TodoAppList title="Doing" type="doing" :list="doingItems" @removed="onRemoved"></TodoAppList>
    <TodoAppList title="Done" type="done" :list="doneItems" @removed="onRemoved"></TodoAppList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoSelectbox from './components/TodoSelectbox.vue';
import TodoInput from './components/TodoInput.vue';
import TodoAppList from './components/TodoAppList.vue'
import TodoFooter from './components/TodoFooter.vue';
import store from './utils/storage';

export default {
  data() {
    return {
      todoItems: [],
      doingItems: [],
      doneItems: [],
      selected: 'todo',
    }
  },
  async created() {
    let promisses = [];
    promisses.push(store.getItem('todo'));
    promisses.push(store.getItem('doing'));
    promisses.push(store.getItem('done'));
    let [todo,doing,done] = await Promise.allSettled(promisses);
    this.todoItems = todo.value;
    this.doingItems = doing.value;
    this.doneItems = done.value;
    // this.todoItems = await ;
    // this.doingItems = await ;
    // this.doneItems = await store.getItem('done');
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
    onRemoved(list, type) {
      localStorage.setItem(type, JSON.stringify(list));
    },
    selectedState(selected) {
      this.selected = selected;
    }
  },
  components: {
    TodoHeader,
    TodoSelectbox,
    TodoInput,
    TodoAppList,
    TodoFooter,
    TodoAppList,
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
