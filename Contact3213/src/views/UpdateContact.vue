<template>
  <div class="container" style="padding: 15px;">
    <div class="center-content">
      <form>
        <div class="field field-in">
          <div class="form-group">
            <h5>Contact</h5>
            <label class="required">Contact ID</label>
            <input
              type="number"
              v-model.number="Contact.cid"
              class="form-control"
              style="box-shadow: 5px 5px 10px rgb(0 0 23 / 18%)"
            />
          </div>
          <div class="form-group">
            <label class="required">Firstname</label>
            <input
              type="text"
              v-model="Contact.firstname"
              class="form-control"
              style="box-shadow: 5px 5px 10px rgb(0 0 23 / 18%)"
            />
          </div>
          <div class="form-group">
            <label class="required">Lastname</label>
            <input
              type="text"
              v-model="Contact.lastname"
              class="form-control"
              style="box-shadow: 5px 5px 10px rgb(0 0 23 / 18%)"
            />
          </div>
          <div class="form-group">
            <label class="required">Mobile</label>
            <input
              type="tel"
              v-model="Contact.mobile"
              class="form-control"
              style="box-shadow: 5px 5px 10px rgb(0 0 23 / 18%)"
            />
          </div>
          <div class="form-group">
            <label>Facebook</label>
            <input
              type="text"
              v-model="Contact.facebook"
              class="form-control"
              style="box-shadow: 5px 5px 10px rgb(0 0 23 / 18%)"
            />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input
              type="email"
              v-model="Contact.email"
              class="form-control"
              style="box-shadow: 5px 5px 10px rgb(0 0 23 / 18%)"
            />
          </div>
          <div class="form-group">
            <label>Image URL</label>
            <input
              type="text"
              v-model="Contact.imageUrl"
              class="form-control"
              style="box-shadow: 5px 5px 10px rgb(0 0 23 / 18%)"
            />
          </div>
          <button
            type="submit"
            class="ui green button"
            style="margin-top: 10px; background-color: #35d35b"
            @click.prevent="updateContact"
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
  name: "UpdateContact",
  props: {},
  data() {
    return {
      Contact: {
        cid: "",
        firstname: "",
        lastname: "",
        mobile: "",
        facebook: "",
        email: "",
        imageUrl: "",
      },
    };
  },
  mounted() {
    axios
      .get(
        "http://localhost:5000/contacts/" + this.$route.params.userId,
        this.Contact
      )
      .then((res) => {
        console.log(res);
        this.Contact = res.data;
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  },
  methods: {
    async updateContact() {
      try {
        const response = await axios.post(
          "http://localhost:5000/contacts/" + this.$route.params.userId,
          {
            cid: this.Contact.cid,
            firstname: this.Contact.firstname,
            lastname: this.Contact.lastname,
            mobile: this.Contact.mobile,
            facebook: this.Contact.facebook,
            email: this.Contact.email,
            imageUrl: this.Contact.imageUrl,
          }
        );
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
