<template>
  <div class="button">
      {{name}}
  </div>
</template>

<script>

  export default {
    name: 'sideButtons',

    props:[
      'name'
    ]
  };
</script>

<style scoped >

  .button{
    width: 150px;
    height: 71px;
    background-color: rgb(145,178,208);
    opacity: 0.8;
  }


</style>
