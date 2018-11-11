<template>
  <div class="tab">
    <div style="display: flex; flex-direction: row;">
      <div style="display: flex; flex-direction: column; margin: 10px; width: 25%;">

        <side-buttons style="margin-top: 5px;" v-for="item in buttonNames" :name="item"></side-buttons>
      </div>
      <div style="padding-top: 20px; width: 50%; margin: 10px; overflow-y: auto;">
        <h3>Welcome to MT TravelBlog!</h3>
        <p>
          This site was created to give students preparing to study, work,
          or intern abroad a place to ask questions about their upcoming
          trips or read about trips others have taken.  As a guest, feel
          free to browse blogs created by MTSU travel abroad returnees;
          as a member, comment on blogs and send direct messages to other
          travelers; or as a blogger, share your own experience abroad with
          other students.
        </p>
        <h3>Need service hours?</h3>
        <p>
          Some MTSU campus organizations and scholarships accept blogging
          for MT TravelBlog as a form of service.  Click
          <a href="#" >here</a>
          to see if yours is on the list!
        </p>
      </div>
      <calendar-section style="width: 25%; height: 495px; margin: 10px;"></calendar-section>
    </div>



  </div>
</template>

<script>

  import SideButtons from "./sideButtons";
  import calendarSection from './calendarSection'
  export default {
    name: 'tabs',
    data() {
      return {
        buttonNames: ['Search Blogs', 'Find People',
        'Become A Blogger', 'About the Gilman',
        'Other Funding', 'Code of Conduct', 'Help']
      }
    },
    components: {
      SideButtons,
      'calendar-section': calendarSection
    },
  };
</script>

<style scoped >
  p {
    text-align: left;
  }
  .tab{
    width: 90%;
    height: 515px;
    background-color: white;
    opacity: 0.8;
    margin-left: auto;
    margin-right: auto;
  }

</style>
