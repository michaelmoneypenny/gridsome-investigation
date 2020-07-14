<template>
  <Layout>
    <h1>Form integration</h1>
    <p>
      Use a third party serverless form integration + zapier
    </p>
    <hr />
    <form
      v-on:submit.prevent="onSubmit"
      action="https://usebasin.com/f/56c24a78093b"
      method="POST"
      id="my-contact-form"
    >
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required />
      <label for="email-address">Email Address</label>
      <input type="email" id="email" name="email" required />
      <button type="submit">Submit</button>
      <div id="form-message"></div>
    </form>
  </Layout>
</template>

<script>
const axios = require("axios");
export default {
  metaInfo: {
    title: "About us",
  },

  methods: {
    onSubmit: function() {
      var form = document.getElementById("my-contact-form");
      var formData = new FormData(form);

      axios.post(form.action, formData).then(
        (resp) => {
          console.log(resp);
        },
        (resp) => alert("error")
      );
    },
  },
};
</script>
