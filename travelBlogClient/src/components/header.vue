<template>
  <div class="colorHeader" name="infoTitle" style="display: flex; width: 100%">
    <div class="fontTitle">MT Travel Blog</div>
    <div class="alignIcon">
      <!--<router-link to="/ctac/" >-->
        <i class="fa fa-home fa-2x fa-fw icon tooltip">
          <span class="tooltiptext">Home</span>
        </i>
      <!--</router-link>-->
    </div>


  </div>
</template>

<script>

  export default {
    name: 'appHeader',


  };
</script>

<style scoped >

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
