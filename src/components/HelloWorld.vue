<script>

export default {
  data() {
    return {
      names: [
        { id: 0, name: 'Emerson' },
        { id: 1, name: 'Sphirot' },
        { id: 2, name: 'Max' }
      ]
    };
  }
};

</script>

<template>
  <div>
    <h1>Pokemon List</h1>
    <ul>
      <li
      v-for="item in names" :key="item.id">
        {{item.name}}
      </li>
    </ul>
     <RouterLink to="/second">second</RouterLink>
  </div>
</template>

<style scoped>

</style>
