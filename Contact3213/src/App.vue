<script setup></script>

<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light"
    style="
      box-shadow: 5px 5px 10px rgb(18 169 142 / 22%);
      border: 1px solid rgb(18 169 142 / 22%);
    "
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="/home">
        <img
          src="./assets/vue.svg"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
      </a>

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home"
            >Contact List</a
          >
        </li>
      </ul>

      <a
        class="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="user icon" style="visibility: visible"></i>
      </a>
      <ul
        class="dropdown-menu"
        aria-labelledby="navbarDropdown"
        style="right: 0; left: auto"
      >
        <li><a class="dropdown-item" href="/signin">Logout</a></li>
      </ul>
    </div>
  </nav>
  <br />
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1980px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
