<template>
  <div class=" footer" name="infoTitle" style="display: flex; flex-direction: column; width: 100%">
    <div style="margin: 10px;">
      <div class="fontTitle">Copyright 2016.</div>
      <div class="fontTitle">Created by Rookery Baruch.</div>
      <div class="fontTitle">Last updated 10 November 2018.</div>

    </div>

  </div>
</template>

<script>

  export default {
    name: 'appHeader',


  };
</script>

<style scoped >
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: rgb(16,96,140);

  }

  .fontTitle {
    color: white;
    font-size: 10px;
    font-family: Futura;
    font-weight: lighter;
    width: 100%;
    text-align: center;
  }

</style>
