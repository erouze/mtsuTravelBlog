<template>
  <div style="overflow-y: auto; height: 490px;">
    <p style="text-align: left;">
      <strong>
        Need help figuring out how to use the site?
      </strong>
    </p>
    <p style="text-align: left;">
      Look through the FAQs below to see if your question is addressed
      there.
    </p>
    <p style="text-align: left; font-size: 28px;">
      <strong>
        FAQ
      </strong>
    </p>
    <p style="text-align: left;" class="borderUpDown">
      What is MT TravelBlog?
    </p>
    <p style="text-align: left;" class="borderUpDown">
      How do I become a member?
    </p>
    <p style="text-align: left;" class="borderUpDown">
      How do I become a blogger?
    </p>
    <p style="text-align: left;" class="borderUpDown">
      What if I want to blog about multiple trips?
    </p>
    <p style="text-align: left;" class="borderUpDown">
      I want to be a member, but I don't want my profile or blogs to be
      public to just anyone. Is that an option?
    </p>
    <p style="text-align: left;" class="borderUpDown">
      I've heard that blogging for MT TravelBlog counts toward service
      hours for certain MTSU scholarships and on-campus organizations.
      How does that work?
    </p>
    <p style="text-align: left;" class="borderUpDown">
      The Gilman Scholarship looks interesting, but how does it relate
      to MT TravelBlog?
    </p>
    <p style="text-align: left; ">
      <strong>
        Still need help? Send us a message:
      </strong>
    </p>
    <p style="text-align: left;">
      Message us here to report an issue with the site.
    </p>
    <div class="directions">
      <div style="display: flex; flex-direction: column; width: 100%; margin-right: 20px;">
        <p style="text-align: left;"><strong>Email</strong></p>
        <p style="text-align: left;">
          If you are a member, use the email that's linked to your account.
        </p>
        <input style="width: 100%;" type="text" name="title" value="Email">
      </div>
    </div>


  </div>
</template>
<script>

  export default {
    name: 'help',


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
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    margin-bottom: 10px;
  }

</style>
