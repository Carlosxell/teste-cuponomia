<template>
  <div class="l-page--home">
    <div class="l-container">

      <button @click="searchUsers"
              :disabled="blockBtn"
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
        usersList: [],
        blockBtn: false
      };
    },
    components: { Table },
    methods: {
      async searchUsers() {
        await getUsers().then(res => this.usersList = res);

        if(this.usersList.length) { this.blockBtn = true; }
      }
    }
  };
</script>

<style lang="scss">
  @import '../assets/Css/_style';
</style>
