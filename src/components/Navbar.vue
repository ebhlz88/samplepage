<template>
  <div id="navbar">
    <nav id="navv" class="navbar navbar-expand-lg navbar-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img class="imag" src="../assets/black.png" alt="bar" />
      </button>
      <router-link class="navbar-brand" to="/"
        ><p class="my-2">MENSCRIPT</p></router-link
      >
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link accmenu astext" href="#">Account menu</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "navbar",
};
</script>

<style lang="scss">
.navbar {
  display: flex;
  padding: 0px !important;
  width: 100%;
}
#navv .nav-item {
  margin-right: 40px;
}
.mlauto {
  margin-left: auto;
}
.navbar-brand {
  p {
    font-family: WorkSans-SemiBold;
    font-size: 18px;
    color: #2a2a2a;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 3px;
    margin-left: 30px;
    margin-top: 6%;
  }
}
.imag {
  height: 8px;
  margin-left: 1.5%;
  border: none;
}
.accmenu {
  padding-top: 4px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: #2a2a2a;
  margin-left: 1.5%;
}

.astext {
  background: none;
  border: none;
  margin: 0;
  cursor: pointer;
}
img {
  height: 30px;
  border: none;
}
.nav-item a{
  font-weight: bold;
  color: black !important;
}
.navbar-toggler{
  border-color: none !important;
}
</style>
