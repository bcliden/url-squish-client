<template>
  <div>
    <p>{{ sentence + " " + who }}</p>
  </div>
</template>

<script>
export default {
  name: "SmelloWorld",
  data() {
    return {
      sentence: "smell this you "
    };
  },
  props: {
    who: String
  }
  // computed: {
  //   message() {
  //     return `${this.sentence} ${this.props.who}!`.toUpperCase();
  //   }
  // }
};
</script>

<style scoped></style>
