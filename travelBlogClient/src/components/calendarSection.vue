<template>
  <div class="date">
    <iframe src="https://calendar.google.com/calendar/embed?title=Important%20Dates&showPrint=0&showTabs=0&showCalendars=0&mode=AGENDA&height=500&wkst=1&bgcolor=%23FFFFFF&src=en.usa%23holiday%40group.v.calendar.google.com&color=%2342104A&src=r59gd53u7kmkd9aca5l5soin9s%40group.calendar.google.com&color=%231B887A&ctz=America%2FChicago"
      style="width: 100%; height: 490px; border-width: 0px; background-color: rgb(145,178,208);"
    >

    </iframe>
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

  .date{
    background-color:  rgb(145,178,208);
  }



</style>
