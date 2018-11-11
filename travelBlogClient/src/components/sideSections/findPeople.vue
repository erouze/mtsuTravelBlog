<template>
  <div style="overflow-y: auto; height: 490px;">
    <p style="text-align: left;">
      <strong>
        Find People
      </strong>
    </p>
    <p style="text-align: left;">
      Search for an MT TravelBlog members by entering a name in the
      search box or by scrolling through the list of names below.
    </p>
    <div class="directions">
      <div style="display: flex; flex-direction: column; width: 98%;">
        <div>Enter a Name</div>
        <input style="width: 100%;" type="text" name="title" value="Search">
      </div>
    </div>
    <table>

      <tr>
        <td>Rookery Baruch</td>
        <td><a href="#">View blogs</a></td>
        <td><a href="#">View profile</a></td>
        <td><a href="#">Send message</a></td>
      </tr>
    </table>

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
    width: 98%;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 98%;
    margin-left: auto;
    margin-right: auto;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
  a{
    color: rgb(16,96,140);
  }
</style>
