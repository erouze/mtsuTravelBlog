<template>
  <div style="overflow-y: auto; height: 490px;">
    <p style="text-align: left;">
      <strong>
        Search Blogs
      </strong>
    </p>
    <p style="text-align: left;">
      Search for blogs by entering information about a particular blog,
      location or program, or by scrolling through the list of blogs
      below.
    </p>
    <div class="directions">
      <div style="display: flex; flex-direction: column; width: 50%; margin-right: 20px;">
        <div>Blog Title</div>
        <input style="width: 100%;" type="text" name="title" value="Blog title">
      </div>
      <div style="display: flex; width: 50%; flex-direction: column;">
        <div>Blogger Name</div>
        <input type="text" name="name" value="Blogger name">
      </div>
    </div>
    <div class="directions">
      <div style="display: flex; flex-direction: column; width: 50%; margin-right: 20px;">
        <div>Length of Stay</div>
        <select style="width: 100%;">
          <option value="volvo">Less than a month</option>
          <option value="saab">One to two months</option>
          <option value="mercedes">Semester</option>
          <option value="audi">Year</option>
          <option value="audi">Other</option>
        </select>
      </div>
      <div style="display: flex; width: 50%; flex-direction: column;">
        <div>Country</div>
        <select style="width: 100%;">
          <option v-for="item in usList">{{item}}</option>

        </select>
      </div>
    </div>
    <div class="directions">
      <div style="display: flex; flex-direction: column; width: 100%;">
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
    <table>
      <tr style="height: 50px;">
        <th>Blog Name</th>
        <th>Country</th>
        <th>Program Type</th>
        <th>Length</th>
        <th>Blogger Name</th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>France; United Kingdom</td>
        <td>Faculty-Led</td>
        <td>One to two months</td>
        <td>Rookery Baruch</td>
      </tr>
    </table>



  </div>
</template>
<script>
  import usList from '../../../static/usList.json'

  export default {
    name: 'searchBlogs',
    data(){
      return{
        usList: usList
      }
    }


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

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

</style>
