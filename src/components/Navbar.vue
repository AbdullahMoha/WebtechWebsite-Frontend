<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">MSGI</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Favorites">Favorites</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Mehr
            </a>
            <ul class="dropdown-menu">
              <router-link to="/Filme">Filme</router-link>
              <li><hr class="dropdown-divider"></li>
              <router-link to="/Serien">Serien</router-link>
              <li><hr class="dropdown-divider"></li>
              <router-link to="/Spiele">Spiele</router-link>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Hier Suchen..." aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Start</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar'
}
</script>
j
<style scoped>

</style>
