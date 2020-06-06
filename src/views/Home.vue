<template>
  <div class="l-page--home">
    <div class="l-container">

      <button @click="searchUsers"
              class="c-btn"
              type="button">Mostrar usuários</button>

      <Table :prop-list="usersList"
             v-if="!usersList.length" />
    </div>
  </div>
</template>

<script>
  import Table from '../components/Table';
  import { getUsers } from '../services/users.service';

  export default {
    name: 'Home',
    data: () => {
      return {
        usersList: []
      };
    },
    components: { Table },
    methods: {
      searchUsers() {
        getUsers().then(res => this.usersList = res);
      }
    }
  };
</script>

<style lang="scss">
  @import '../assets/Css/_style';
</style>
