<template>
  <div id="app" style="margin: 0px;">
    <app-header></app-header>
    <router-view/>
    <tabs></tabs>
    <app-footer></app-footer>
  </div>
</template>

<script>

  import appHeader from './components/header.vue'
  import appFooter from './components/footer.vue'
  import tabs from './components/tabs.vue'

  export default {
    name: 'App',
    components:{
      'app-header': appHeader,
      'app-footer': appFooter,
      'tabs': tabs
    },


  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
