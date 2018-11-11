<template>
  <div style="overflow-y: auto; height: 490px;">
    <p style="text-align: left;">
      <strong>
        Become a Blogger
      </strong>
    </p>
    <p style="text-align: left;">
      Fill in the information below to submit a request to become a
      blogger. Note that only current TravelBlog members who have been on
      or are actively participating in a study abroad trip will be
      granted a blogging account.
    </p>
    <div class="directions">
      <div style="display: flex; flex-direction: column; width: 50%; margin-right: 20px;">
        <div>First Name</div>
        <input style="width: 100%;" type="text" name="title" value="First Name">
      </div>
      <div style="display: flex; width: 50%; flex-direction: column;">
        <div>Last Name</div>
        <input type="text" name="name" value="Last Name">
      </div>
    </div>
    <div class="directions">
      <div style="display: flex; flex-direction: column; width: 50%; margin-right: 20px;">
        <div>M Number</div>
        <input style="width: 100%;" type="text" name="title" value="M Number">
      </div>
      <div style="display: flex; width: 50%; flex-direction: column;">
        <div>Location(s) Visited</div>
        <input type="text" name="name" value="Locations">
      </div>
    </div>
    <div class="directions">
      <div style="display: flex; flex-direction: column; width: 50%; margin-right: 20px;">
        <div>Program Name</div>
        <input style="width: 100%;" type="text" name="title" value="Program Name">
      </div>
      <div style="display: flex; width: 50%; flex-direction: column;">
        <div>Program Dates</div>
        <input type="text" name="name" value="Last Name">
      </div>
    </div>
    <div class="directions">
      <div style="display: flex; flex-direction: column; width: 98%;">
        <div>Program Type</div>
        <select style="width: 100%;">
          <option value="volvo">Faculty-Led</option>
          <option value="saab">Consortia (CCSA, KIIS)</option>
          <option value="mercedes">Third Party (CIEE, ISA, LAC, USAC)</option>
          <option value="audi">Exchange (MTSU, ISEP)</option>
          <option value="audi">COST (Consortium for Overseas Student Teaching)</option>
          <option value="audi">ISEP-Direct</option>
          <option value="audi">Internships/Service Learning</option>
          <option value="audi">Non-MTSU Affiliated/Independent Study/Research</option>
        </select>
      </div>
    </div>



  </div>
</template>
<script>

  export default {
    name: 'searchBlogs',


  };
</script>

<style scoped >
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
