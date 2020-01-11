<template>
  <v-content>
    <v-container fluid class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="indigo" dark>
              <v-toolbar-title>New Link</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  v-model="url"
                  label="URL"
                  name="url"
                  prepend-icon="mdi-link"
                  type="url"
                  required
                  :rules="urlRules"
                />
                <v-text-field
                  v-model="title"
                  label="Name"
                  name="name"
                  prepend-icon="mdi-text"
                  type="text"
                  required
                  :rules="nameRules"
                />
                <v-checkbox
                  v-model="publicBool"
                  label="Public?"
                  name="public"
                  type="checkbox"
                ></v-checkbox>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                :disabled="!valid"
                @click.prevent="submit()"
                >Submit</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { urlRegex, whitespaceRegex, baseURL } from "@/consts/consts.js";

export default {
  data() {
    return {
      valid: false,
      publicBool: false,
      url: "",
      title: "",
      urlRules: [
        v => !!v || "URL is required",
        v => urlRegex.test(v) || "URL is malformed"
      ],
      nameRules: [
        v => !!v || "Title is required",
        v => whitespaceRegex.test(v) || "Please enter text"
      ]
    };
  },
  methods: {
    submit() {
      console.log(
        `url: ${this.url}`,
        `title: ${this.title}`,
        `public?: ${this.publicBool}`,
        baseURL
      );
    }
  }
};
</script>

<style lang="scss" scoped></style>
