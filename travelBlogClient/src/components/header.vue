<template>
  <div class="colorHeader" name="infoTitle" style="display: flex; width: 100%">
    <div class="picture1">
      <div style="width: 90%; margin-left: auto; margin-right: auto; display: flex; justify-content: space-between">
        <img class="ourLogo" src="../../static/MTTravelBlogLogo.png">
        <div style="display:flex; flex-direction: row;">
          <div style="display: flex; flex-direction: column; height: 60px;">
            <a href="#">Sign In/Sign up</a>
            <a href="#">My Account</a>
          </div>
          <img class="mtsuLogo" src="../../static/MTSU_logo.gif">

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
  }

  .name {
    margin-left: auto;
    margin-right: 20px;
    font-family: Futura;
    font-size: 12px;
    color: white;
    display: inline-block;
    vertical-align: top;
  }
  .colorHeader {
    background: rgb(145,178,208);
    width: 100%;
    height: 60px;
    line-height: 80px;
    display: flex;
  }
  .fontTitle {
    color: black;
    font-size: 34px;
    font-family: Futura;
    margin-left: 50px;
    font-weight: lighter;
  }
  .icon {
    margin-left: 20px;
    margin-top: 25px;
    color: lightblue;
  }
  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: auto;
    background-color: white;
    color: darkslategray;
    text-align: center;
    border-radius: 6px;
    padding: 5px 10px;
    margin-top: 35px;
    font-size: 20px;
    /* Position the tooltip */
    position: absolute;
    z-index: 1;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
</style>
