<template>
  <div class="container">
    <div class="center-content">
      <form>
        <div class="field field-in">
          <div class="form-group">
            <h5>Contact</h5>
            <label class="required">Contact ID</label>
            <input
              type="number"
              v-model.number="cid"
              class="form-control"
              style="box-shadow: 5px 5px 10px rgb(0 0 23 / 18%)"
            />
          </div>
          <div class="form-group">
            <label class="required">Firstname</label>
            <input
              type="text"
              v-model="firstname"
              class="form-control"
              style="box-shadow: 5px 5px 10px rgb(0 0 23 / 18%)"
            />
          </div>
          <div class="form-group">
            <label class="required">Lastname</label>
            <input
              type="text"
              v-model="lastname"
              class="form-control"
              style="box-shadow: 5px 5px 10px rgb(0 0 23 / 18%)"
            />
          </div>
          <div class="form-group">
            <label class="required">Mobile</label>
            <input
              type="tel"
              v-model="mobile"
              class="form-control"
              style="box-shadow: 5px 5px 10px rgb(0 0 23 / 18%)"
            />
          </div>
          <div class="form-group">
            <label>Facebook</label>
            <input
              type="text"
              v-model="facebook"
              class="form-control"
              style="box-shadow: 5px 5px 10px rgb(0 0 23 / 18%)"
            />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input
              type="email"
              v-model="email"
              class="form-control"
              style="box-shadow: 5px 5px 10px rgb(0 0 23 / 18%)"
            />
          </div>
          <div class="form-group">
            <label>Image URL</label>
            <input
              type="text"
              v-model="imageUrl"
              class="form-control"
              style="box-shadow: 5px 5px 10px rgb(0 0 23 / 18%)"
            />
          </div>
          <button
            type="submit"
            class="ui green button"
            style="margin-top: 10px; background-color: #35d35b"
            @click.prevent="addContact"
          >
            Submit
          </button>
          <button
            type="button"
            class="ui basic red button"
            @click.prevent="cancelContact"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Contact",
  props: {},
  data() {
    return {
      cid: "",
      firstname: "",
      lastname: "",
      mobile: "",
      facebook: "",
      email: "",
      imageUrl: "",
    };
  },
  methods: {
    async addContact() {
      try {
        const response = await axios.post("http://127.0.0.1:5000/contact", {
          cid: this.cid,
          firstname: this.firstname,
          lastname: this.lastname,
          mobile: this.mobile,
          facebook: this.facebook,
          email: this.email,
          imageUrl: this.imageUrl,
        });
        console.log(response.data);
        alert(response.data.message);
        this.$router.replace("/home");
      } catch (error) {
        alert(error.response.data.message);
      }
    },

    async cancelContact() {
      this.$router.replace("/home");
    },
  },
};
</script>

<style>
.container {
  height: auto;
  display: flex;
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
}

.center-content {
  margin: 0 auto; /* Auto horizontal margin to center the content */
  min-width: 400px;
}
.field-in {
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
}

.required:after {
  content: " *";
  color: red;
}
</style>
