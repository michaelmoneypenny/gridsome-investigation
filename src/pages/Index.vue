<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
      excepturi labore tempore expedita, et iste tenetur suscipit explicabo!
      Dolores, aperiam non officia eos quod asperiores
    </p>
    <p>{{ test }}</p>

    <h2>prods</h2>
    <div v-for="prod in data" :key="prod.id">
      <h2>{{ prod.name }}</h2>
    </div>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener"
        >Gridsome Docs</a
      >
      <a
        href="https://github.com/gridsome/gridsome"
        target="_blank"
        rel="noopener"
        >GitHub</a
      >
    </p>
  </Layout>
</template>

<script>
const axios = require("axios");
export default {
  metaInfo: {
    title: "Hello, world!",
  },
  data: function() {
    return {
      test: "testy",
      data: [],
    };
  },
  async mounted() {
    try {
      const results = await axios.get("/api/products");
      this.data = results.data;
    } catch (error) {}
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
