<template>
    <div class="container mx-auto sm:px-4">
      <h1 class="text-center b"> TIKET </h1>
      <table class="table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2"> Code </th>
            <th class="px-4 py-2"> Name</th>
            <th class="px-4 py-2"> City </th>
            <th class="px-4 py-2"> City Name </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tikets in getTiket" :key="tikets.code">
            <td class="border px-4 py-2">{{ tikets.code }}</td>
            <td class="border px-4 py-2">{{ tikets.name }}</td>
            <td class="border px-4 py-2">{{ tikets.city }}</td>
            <td class="border px-4 py-2">{{ tikets.cityname }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters('tiket', ['getTiket']),
    },
    methods: {
      ...mapActions('tiket', ['fetchTiket']),
    },
    created() {
      this.fetchTiket();
    },
  }
  </script>