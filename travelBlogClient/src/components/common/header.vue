<template>
  <div class="colorHeader" name="infoTitle" style="display: flex; width: 100%">
    <div class="picture1">
      <div style="width: 90%; margin-left: auto; margin-right: auto; display: flex; justify-content: space-between">
        <router-link to="/">
          <img class="ourLogo" src="../../../static/MTTravelBlogLogo.png">
        </router-link>
        <div style="display:flex; flex-direction: row;">
          <div style="display: flex; flex-direction: column; width: 100px;">
            <div style="margin-top: -20px; display: flex; flex-direction: column; height: 60px; margin-left: 25px;">
              <router-link to="/signIn">
                Sign In/
              </router-link>
            </div>
            <div style="margin-top: -35px; display: flex; margin-left: 25px;">
              <router-link to="/signIn">
                Sign Up
              </router-link>
            </div>

          </div>

          <img class="mtsuLogo" src="../../../static/MTSU_logo.gif">

        </div>
      </div>
    </div>



  </div>
</template>
<script>

  export default {
    name: 'appHeader',


  };
</script>

<style scoped >
  a{
    display: flex;
    position: relative;
    align-content: end;
    color: rgb(16,96,140);
  }
  .picture1{
    height: 60px;
    width: 100%;
  }

  img.ourLogo {
    /*margin-left: 0px;*/
    display: block;
    /*margin-left: 50px;*/
    width: 50%;
    max-height: 50px;
  }


  img.mtsuLogo {
    /*margin-left: 0px;*/
    display: block;
    /*margin-left: 50px;*/
    width: 100px;
    max-height: 50px;
    margin-top: 5px;
    margin-left: 10px;
  }


  .colorHeader {
    background: rgb(145,178,208);
    opacity: 0.8;
    width: 100%;
    height: 60px;
    line-height: 80px;
    display: flex;
  }

</style>
