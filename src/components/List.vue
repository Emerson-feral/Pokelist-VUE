<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      pokemons: (state) => state.pokemons
    })
  }
};

</script>

<template>
  <div>
    <h1>Pokemon List</h1>
      <router-link tag="li" class="router" :to="`/detail/${item.id}`"
      v-for="item in pokemons" :key="item.id" >
      {{item.name}}
      </router-link>
  </div>
</template>

<style scoped>
  .router{
    display: flex;
  }
</style>
