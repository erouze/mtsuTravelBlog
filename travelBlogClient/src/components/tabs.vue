<template>
  <div class="tab">
    <div style="display: flex; flex-direction: row;">
      <div style="display: flex; flex-direction: column; margin: 10px; width: 25%;">

        <side-buttons style="margin-top: 5px;" v-for="item in buttonNames" :name="item" @clicked="handleClick"></side-buttons>
      </div>
      <div style="width: 50%; margin: 10px; overflow-y: auto;">
        <welcome v-if="nameOfSection === 'welcome'"></welcome>
        <about-the-gilman v-if="nameOfSection === 'About the Gilman'"/>
        <code-of-conduct v-if="nameOfSection === 'Code of Conduct'"/>
        <search-blogs v-if="nameOfSection === 'Search Blogs'"/>
        <find-people v-if="nameOfSection === 'Find People'"/>
        <become-a-blogger v-if="nameOfSection === 'Become A Blogger'"/>
        <other-funding v-if="nameOfSection === 'Other Funding'"/>
        <help v-if="nameOfSection === 'Help'"/>
      </div>
      <calendar-section style="width: 25%; height: 495px; margin: 10px; margin-left: 0px;"></calendar-section>
    </div>



  </div>
</template>

<script>

  import SideButtons from "./sideButtons";
  import calendarSection from './calendarSection'
  import welcome from './sideSections/welcome'
  import aboutTheGilman from './sideSections/aboutTheGilman'
  import codeOfConduct from './sideSections/codeOfConduct'
  import searchBlogs from './sideSections/searchBlogs'
  import findPeople from './sideSections/findPeople'
  import becomeABlogger from './sideSections/becomeABlogger'
  import otherFunding from './sideSections/otherFunding'
  import help from './sideSections/help'

  export default {
    name: 'tabs',
    data() {
      return {
        buttonNames: ['Search Blogs', 'Find People',
        'Become A Blogger', 'About the Gilman',
        'Other Funding', 'Code of Conduct', 'Help'],
        nameOfSection: 'welcome'
      }
    },
    methods:{
      handleClick(value){
        this.nameOfSection = value
      }
    },
    components: {
      SideButtons,
      'calendar-section': calendarSection,
      'welcome': welcome,
      'about-the-gilman': aboutTheGilman,
      'code-of-conduct': codeOfConduct,
      'search-blogs': searchBlogs,
      'find-people': findPeople,
      'become-a-blogger': becomeABlogger,
      'other-funding': otherFunding,
      'help': help
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
