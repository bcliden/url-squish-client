<template>
  <v-content>
    <v-container fluid>
      <v-data-table
        :headers="headers"
        :items="rows"
        :items-per-page="size"
        class="elevation-1"
      >
        <template v-slot:item.url="{ item }">
          <a :href="item.url">{{ item.url }}</a>
        </template>
      </v-data-table>
    </v-container>
  </v-content>
</template>

<script>
import ky from "ky";
import { baseURL } from "../consts/consts";

export default {
  data() {
    return {
      rows: [],
      headers: [],
      size: 10
    };
  },
  computed() {},
  async created() {
    try {
      let rows = await ky.get(`${baseURL}/link/`).json();
      rows = rows.map(v => {
        const { id, ...rest } = v; // we strip off the id field
        return {
          ...rest,
          created: new Date(v.created).toLocaleDateString()
        };
      });
      this.rows = rows;
      this.headers = Object.keys(rows[0]).map(v => ({ text: v, value: v }));
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style scoped></style>
