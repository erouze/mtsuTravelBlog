<template>
  <div style="overflow-y: auto; height: 490px;">
    <p style="text-align: left;">
      <strong>
        Other Funding
      </strong>
    </p>
    <p style="text-align: left;" class="borderUpDown">
      MTSU Funding
    </p>
    <p style="text-align: left;" class="borderUpDown">
      Program-Specific Funding
    </p>
    <p style="text-align: left;" class="borderUpDown">
      Study Abroad Location-Specific Funding
    </p>

  </div>
</template>
<script>

  export default {
    name: 'searchBlogs',


  };
</script>

<style scoped >
  .borderUpDown{
    padding-top: 20px;
    padding-bottom: 5px;
    border-top: solid;
    border-color: rgb(39,113, 164);
  }
  .directions{
    display: flex;
    flex-direction: row;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    margin-bottom: 10px;
  }

</style>
