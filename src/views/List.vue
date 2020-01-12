<template>
  <v-content>
    <v-container fluid class="fill-height">
      <v-row>
        <v-col cols="12" sm="12" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="indigo" dark>
              <v-toolbar-title>Detail</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              Looking to smush some URLs? You've come to the right place.
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" to="/new">Shorten</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {};
</script>

<style scoped></style>
