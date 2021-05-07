<!-- main structure of the page goes here -->
<template>
      <!-- FULL PAGE -->
      <div id="full-page" class="container-fluid">
          <div class="row">   <!-- HEADER COMPONENT -->
              <page-header></page-header>
          </div>
          <div class="row">
              <div id="left-body" class="col-9">
                  <!-- QUESTION STATEMENT COMPONENT -->
                  <!--  v-if="$store.getters.isFetched" -->
                  <qarea></qarea>

                  <!-- QUESTION ACTION COMPONENT -->
                  <question-action></question-action>
              </div>
              <div id="right-body" class="col-3">
                  <!-- QUESTION NAVIGATION PANEL COMPONENT -->
                  <nav-panel></nav-panel>
              </div>
          </div>
      </div>
    
</template>

              
              
<script>
export default {
  data() {
    return {
    }
  },
  computed: {
  },

  created(){
    console.log("calling getServerData")
    this.$store.commit('getServerData')
  }
}

</script>

<style scoped>
  .container-fluid{
    padding: 0;
  }
  #full-page{
    margin: 0;
    padding: 0;
  }
  div[class^="col"]{    /* col-* classes has default padding */
    padding: 0;
  }
  #left-body{
    height: 92vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  #right-body{
      height: 92vh;
  }
</style>

