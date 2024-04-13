<template>
  <div class="row" style="padding: 20px">
    <div class="col-lg-12">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search for..." v-model="search" />
        <RouterLink to="/contact" style="padding: 0px">
          <button class="ui orange button" type="button">+Add</button>
        </RouterLink>
      </div>
    </div>
  </div>
  <br />

  <div class="ui link cards" style="padding: 20px">
    <div class="card" v-for="item in filterUsers" style="box-shadow: 8px 8px 10px 1px rgb(242 113 28 / 11%)" v-if="filterUsers.length > 0">
      <div class="image">
        <img :src="item.imageUrl" />
      </div>
      <div class="content">
        <div class="header" style="display: flex; justify-content: center; padding-top: 2px;">{{ `${item.firstname} ${item.lastname}` }}</div>
        <div class="description" style="display: flex; align-items: center; flex-direction: column;">
          <p>Mobile : {{ item.mobile }}</p>
          <p>Email : {{ item.email }}</p>
          <p>Facebook : {{ item.facebook }}</p>
          <div>
            <RouterLink :to="{
            path: 'updatecontact',
            name: 'UpdateContact',
            params: { userId: item._id },
          }">
            <button class="ui blue tertiary button">
              <i class="edit outline icon"></i>
              Edit
            </button>
          </RouterLink>
          <button class="ui red tertiary button" v-on:click="delContact(item._id)">
            <i class="eraser icon"></i>
            Delete
          </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="filterUsers.length === 0" style="padding: 20px;">
      <a>
        Contact Not Found
      </a>
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
      search: "",
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
      return this.Users.filter((user) => {
        return (
          user.firstname.match(this.search) || user.lastname.match(this.search)
        );
      });
    },
  },
  mounted() {
    axios
      .get("http://localhost:5000/contacts")
      .then((res) => {
        this.Users = res.data;
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  },
  methods: {
    delContact(_id) {
      axios
        .delete("http://localhost:5000/contacts/" + _id)
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
