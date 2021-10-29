<template>
  <div id="navbar">
    <b-navbar toggleable="lg">
      <b-navbar-toggle target="nav-collapse"
        ><img class="imag" src="../assets/black.png" alt="bar"
      /></b-navbar-toggle>
      <b-navbar-brand href="#" class="navbrand">MENSCRIPT</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" class="accmenu">Account menu</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "navbar",
};
</script>

<style lang="scss">
#navbar {
  height: 70px;
  padding: 10px 0px;
}
.navbrand {
  font-family: WorkSans-SemiBold;
  font-size: 18px;
  color: #2a2a2a;
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 3px;
  margin-left: 15px;
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
  width: 120px;
}
</style>
