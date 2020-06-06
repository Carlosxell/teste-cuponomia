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
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.username }}</td>
        <td>
          <a :href="`httpss://${item.website}`"
             rel="noopener"
             target="_blank">{{ item.website }}</a>
        </td>
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
    margin: pxToRem(48) auto;

    &_head {
      background-color: $color-grey;
      color: $color-white;

      &_tr {
        th {
          padding: pxToRem(12);
        }
      }
    }

    &_body {
      &_tr {
        td {
          border: pxToRem(1) solid $color-grey;
          padding: pxToRem(8) pxToRem(20);
        }
      }
    }
  }
</style>
