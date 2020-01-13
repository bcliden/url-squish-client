<template>
  <v-card class="mx-auto" max-width="400">
    <v-toolbar color="indigo" dark>
      <v-toolbar-title>Detail</v-toolbar-title>
    </v-toolbar>
    <v-card-title>
      <v-icon large left>
        mdi-link
      </v-icon>
      <span class="title font-weight-light">{{ details.title }}</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      {{ details.url }}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-content>
          <v-list-item-title>The public</v-list-item-title>
        </v-list-item-content>

        <v-row align="center" justify="end">
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">mdi-share-variant</v-icon>
          <span class="subheading">45</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "DetailCard",
  props: {
    details: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
