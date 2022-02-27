<template>
  <div id="app">
    <todo-creator v-on:created="init"></todo-creator>
    <card-list :cards="todo" type="todo" v-on:removed="remove" v-on:update="update"></card-list>
    <card-list :cards="doing" type="doing" v-on:removed="remove" v-on:update="update"></card-list>
    <card-list :cards="done" type="done" v-on:removed="remove" v-on:update="update"></card-list>
  </div>
</template>

<script>
import box from './utils/storage';
import todoCreator from './components/todo-creator.vue';
import CardList from './components/card-list.vue';

export default {
  name: 'App',
  components: {
    todoCreator,
    CardList,
  },
  methods: {
    async init() {
      const promises = [];
      promises.push(box.getItem('todo'));
      promises.push(box.getItem('doing'));
      promises.push(box.getItem('done'));

      const promiseResults = await Promise.allSettled(promises);

      [this.todo, this.doing, this.done] = promiseResults.map((x) => {
        if (x.value) {
          return x.value;
        }
        return [];
      });
    },
    remove(payload) {
      box.setItem(payload.type, this.$data[payload.type].filter((x) => x !== payload.title));
      this.init();
    },
    update(payload) {
      this.$data[payload.base] = this.$data[payload.base].filter((x) => x !== payload.baseTitle);
      box.setItem(payload.base, this.$data[payload.base]);
      this.$data[payload.target].push(payload.title);
      box.setItem(payload.target, this[payload.target]);
    },
  },
  data() {
    return {
      todo: [],
      doing: [],
      done: [],
    };
  },
  computed: {},
  beforeCreate() {},
  created() {
    this.init();
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
};
</script>

<style lang="scss">
</style>
