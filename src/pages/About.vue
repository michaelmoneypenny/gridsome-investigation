<template>
  <Layout>
    <div>
      <h1>Form integration</h1>
      <p>
        Use a third party serverless form integration + zapier
      </p>
      <hr />

      <div class="flex-container">
        <form
          class="flex-item"
          v-on:submit.prevent="onSubmit"
          action="https://usebasin.com/f/56c24a78093b"
          method="POST"
          id="my-contact-form"
        >
          <label for="name">Name</label><br />
          <input type="text" id="name" name="name" required /><br />
          <label for="email-address">Email Address</label><br />
          <input type="email" id="email" name="email" required /><br />
          <input type="text" name="channel" value="online" hidden />
          <input type="text" name="source" value="test form" hidden />
          <input type="text" name="family" value="test family" hidden />
          <button type="submit">Submit</button>
        </form>
        <div id="form-message" class="flex-item">{{ formMessage }}</div>
      </div>
    </div>
  </Layout>
</template>

<script>
const axios = require("axios");
export default {
  metaInfo: {
    title: "About us",
  },
  data: function() {
    return {
      formMessage: "",
    };
  },

  methods: {
    onSubmit: function() {
      var form = document.getElementById("my-contact-form");
      var formData = new FormData(form);

      axios.post(form.action, formData).then(
        (resp) => {
          this.formMessage = "Success";
        },
        (resp) => alert("error")
      );
    },
  },
};
</script>
<style>
.flex-container {
  display: flex;
  align-content: space-between;
}
.flex-item {
  flex-grow: 1;
}
</style>
