<script>
import { useRoute } from 'vue-router';

export default {
  data() {
    return {
      number: ''
    };
  },

  mounted() {
    const route = useRoute();
    /* this.number = */ console.log(route.params.id);
  }

};

</script>

<template>
  <div>
    <h1>Detail {{id}} </h1>
    <router-link to="/">Pokelist</router-link>
  </div>
</template>

<style>

</style>
