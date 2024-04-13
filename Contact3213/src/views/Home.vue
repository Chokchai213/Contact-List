<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Search for..."
          v-model="search"
        />
        <RouterLink to="/contact" style="padding: 0px">
          <button class="ui orange button" type="button">+Add</button>
        </RouterLink>
      </div>
    </div>
  </div>
  <br />

  <div class="ui link cards">
    <div
      class="card"
      v-for="item in filterUsers"
      style="box-shadow: 8px 8px 10px 1px rgb(242 113 28 / 11%)"
    >
      <div class="image">
        <img :src="item.imageUrl" />
      </div>
      <div class="content">
        <div class="header">{{ `${item.firstname} ${item.lastname}` }}</div>

        <div class="description">
          <p>Mobile : {{ item.mobile }}</p>
          <p>Email : {{ item.email }}</p>
          <p>Facebook : {{ item.facebook }}</p>
          <RouterLink
            :to="{
              path: 'updatecontact',
              name: 'UpdateContact',
              params: { userId: item._id },
            }"
          >
            <button class="ui basic green button">Edit</button>
          </RouterLink>
          <button class="ui basic red button" v-on:click="delContact(item._id)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Card, CardContent, Grid, GridColumn, Image } from "vue-fomantic-ui";
import axios from "axios";
import { RouterLink } from "vue-router";

export default {
  name: "Home",
  data() {
    return {
      Users: [],
      search: "", // Define a data property for search term
    };
  },
  components: {
    Card,
    CardContent,
    Grid,
    GridColumn,
    Image,
  },
  computed: {
    filterUsers() {
      // Filter users based on search term
      return this.Users.filter((user) => {
        return (
          user.firstname.match(this.search) || user.lastname.match(this.search)
        );
      });
    },
  },
  mounted() {
    // Fetch users from API on component mount
    axios
      .get("http://127.0.0.1:5000/contact")
      .then((res) => {
        console.log(res.data);
        this.Users = res.data;
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  },
  methods: {
    delContact(_id) {
      axios
        .delete("http://127.0.0.1:5000/contact/" + _id)
        .then((res) => {
          console.log("Delete user id: " + _id);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
      window.location.reload();
    },
  },
};
</script>

<style>
.image {
  height: 60%;
}

.image img {
  width: auto;
  height: auto;

  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
}
</style>
