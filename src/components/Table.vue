<template>
  <table class="c-table">
    <thead class="c-table_head">
      <tr class="c-table_head_tr">
        <th>Id</th>
        <th>Nome</th>
        <th>Usuário</th>
        <th>Website</th>
      </tr>
    </thead>

    <tbody class="c-table_body">
      <tr class="c-table_body_tr"
          :key="ind"
          v-for="(item, ind) in propList">
        <td>{{ JSON.stringify(item) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: 'Table',
    props: {
      propList: {
        type: Array,
        default: () => { return []; }
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/Css/_utilities/_extends';

  .c-table {
    &_head {
      &_tr {}
    }

    &_body {
      &_tr {}
    }
  }
</style>
