<template>
  <v-content>
    <v-container fluid class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="12" md="4">
          <DetailCard :details="this.details"></DetailCard>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import ky from "ky";
import { baseURL } from "../consts/consts";
import DetailCard from "../components/DetailCard";

export default {
  components: {
    DetailCard
  },
  data() {
    return {
      details: {}
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
