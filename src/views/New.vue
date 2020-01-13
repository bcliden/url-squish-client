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
                  label="Title"
                  name="title"
                  prepend-icon="mdi-text"
                  type="text"
                  required
                  :rules="titleRules"
                />
                <v-checkbox
                  v-model="isPublic"
                  label="Public?"
                  name="isPublic"
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
import ky from "ky";

export default {
  data() {
    return {
      valid: false,
      isPublic: false,
      url: "",
      title: "",
      urlRules: [
        v => !!v || "URL is required",
        v => urlRegex.test(v) || "URL is malformed"
      ],
      titleRules: [
        v => !!v || "Title is required",
        v => whitespaceRegex.test(v) || "Please enter text"
      ]
    };
  },
  methods: {
    async submit() {
      const { url, title, isPublic } = this;
      if (!url.includes("http://") && !url.includes("https://")) {
        url = "http://" + url;
      }
      const linkDTO = {
        url,
        title,
        isPublic
      };
      try {
        const response = await ky
          .post(`${baseURL}/link/`, { json: linkDTO })
          .json();
        this.$router.push({
          name: "detail",
          params: { id: response.publicId }
        });
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
