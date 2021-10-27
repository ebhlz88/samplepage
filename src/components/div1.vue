<template>
  <div id="div1">
    <div class="topdiv col-md-12">
      <div class="col-md-6 d-flex justify-content-center flex-column">
        <p class="welcom">Welcome Rob</p>
        <button class="treatbtn ml-auto">
          view treatment history
          <img class="btnslide" src="../assets/slidemenu.png" alt="slidemenu" />
        </button>
      </div>
      <div class="col-md-6"></div>
    </div>
    <div class="col-md-12">
      <img class="graph" src="../assets/graph.png" alt="" />
    </div>
    <div class="row container">
      <div class="col-md-6 py-5">
        <img class="bottleimg" src="../assets/Image.png" alt="" />
      </div>
      <div class="col-md-6 hh">
        <div class="main">
          <h3>Finasteride</h3>
          <p class="disc">
            For personalised advice, you are welcome to arrange a video
            consultation with a trained consultant; or to use our live
            assistance for guidance while browsing online.
          </p>
        </div>
        <div class="col-md-6 main row">
          <button class="col-md-3 treatbtn">View treatment details</button>
          <button class="col-md-3 treatbtn">
            view treatment history
            <img
              class="btnslide"
              src="../assets/slidemenu.png"
              alt="slidemenu"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
<style lang="scss">
* {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
}
#div1 {
  margin-bottom: 80px;
}
.topdiv {
  margin-top: 60px;
  padding-left: 65px;
  margin-bottom: 30px;
}
.welcom {
  width: 194px;
  height: 34px;
  left: 25px;
  top: 282px;
  height: 30%;
  padding: 40px 0px;
  font-size: 28px;
  line-height: 34px;

  color: #2a2a2a;
}
.pdata {
  border: solid 1px black;
  font-weight: 600;
  width: 299px;
  height: 59px;
  font-size: 15px;
  text-align: left;
  padding-top: 15px;
  margin-left: 30px !important;
}
.pdata p {
  width: unset;
}

.topdiv .row {
  width: 299px;
}
.pdata img {
  width: 60px !important;
  height: 26px;
  margin-left: 50px;
}
.graph {
  height: 174px;
  width: 100%;
}
.bottleimg {
  width: 244px;
  height: 362px;
}
.main {
  // width: 540px;
  text-align: left;
  font-family: Inter;
  margin-top: 160px;
}
.disc {
  font-size: 16px;
  color: #2a2a2a;
}
.main .h3 {
  font-size: 28px;
  font-weight: 600;
}
.treatbtn {
  background: none;
  border: solid 1px #7a7a7a;
  width: 230px !important;
  font-weight: 600;
  height: 50px;
  margin: 0px 6px;
  color: #333333;
}
.btnslide {
  height: 20px;
  padding: 2px;
  text-align: left;
}
.hh .row {
  width: 100%;
}
</style>
