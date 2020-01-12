<template>
  <v-content>
    <v-container fluid class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="12" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="indigo" dark>
              <v-toolbar-title>Detail</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              Looking to smush some URLs? You've come to the right place.
              {{ this.$route.params.id }}
              {{ JSON.stringify(this.details) }}
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" to="new">Shorten</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import ky from "ky";
import { baseURL } from "../consts/consts";

export default {
  data() {
    return {
      details: null
    };
  },
  async created() {
    try {
      const response = await ky
        .get(`${baseURL}/link/${this.$route.params.id}`)
        .json();
      this.details = response;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style lang="scss" scoped></style>
