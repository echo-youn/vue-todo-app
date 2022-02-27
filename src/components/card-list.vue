<template>
  <div>
    {{ type }}
    <card-item @update="onUpdated" @remove="onRemoved" v-for="card in cards"
      v-bind:key="card" :card="card" />
  </div>
</template>

<script>
import cardItem from './card.vue';

export default {
  name: 'cardList',
  components: {
    cardItem,
  },
  props: {
    cards: Array,
    type: String,
  },
  data() {
    return {
      select: '',
    };
  },
  methods: {
    onUpdated(payload) {
      if (this.type === payload.target && this.cards.find((x) => x === payload.title)) {
        alert('같은곳으로 수정 불가능');
        return;
      }
      this.$emit('update', Object.assign(payload, { base: this.type }));
    },
    onRemoved(target) {
      this.$emit('removed', {
        type: this.type,
        title: target,
      });
    },
  },
};
</script>

<style>

</style>
