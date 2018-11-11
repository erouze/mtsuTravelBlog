<template>
  <div class="button" :id="name" @click="handleClickButton">
    <div style="display: inline-block; margin-top: 22px;">{{name}}</div>
  </div>
</template>

<script>

  export default {
    name: 'sideButtons',

    props:[
      'name'
    ],
    methods:{
      handleClickButton(){
        this.$emit('clicked', this.name)
        var buttons = document.getElementsByClassName('button')
        for(var i = 0; i < buttons.length; i++){
          buttons[i].style.boxShadow = '5px 0px 5px 0px rgb(16,96,140)'
        }

        document.getElementById(this.name).style.boxShadow = '10px 5px rgb(16,96,140)'
      }
    }
  };
</script>

<style scoped >

  .button{
    display: block;
    text-align: center;
    width: 100%;
    height: 65px;
    background-color: rgb(145,178,208);
    color: black;
    opacity: 0.8;
    box-shadow: 5px 0px 5px 0px rgb(16,96,140);
  }
  .button:hover{
    box-shadow: 10px 5px rgb(16,96,140);
  }


</style>
