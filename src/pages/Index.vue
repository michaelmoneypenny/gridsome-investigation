<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/mp.png" width="335" />

    <h1>Moneypenny Rebuild</h1>

    <p>
      A prototype of vue-driven static site generation and azure static web apps
    </p>

    <h2>Services (this comes from an integrated azure function)</h2>
    <div v-for="prod in data" :key="prod.id">
      <p>{{ prod.name }}</p>

      <span
        ><em>{{ prod.description }}</em></span
      >
      <hr />
    </div>

    <h2>Perks (this comes from local json + graphql layer)</h2>
    <div v-for="edge in $page.perks.edges" :key="edge.node.id">
      <p>{{ edge.node.perk }}</p>
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
<page-query>
query {
  perks: allPerks {
    edges {
      node {
        id
        perk
      }
    }
  }
}
</page-query>
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
      perks: [],
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
p {
  font-weight: bold;
}
</style>
