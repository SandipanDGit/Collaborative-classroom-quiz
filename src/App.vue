<!-- main structure of the page goes here -->
<template>
    
    <page-header></page-header>

    <router-view></router-view>
        
</template>
     
<script>


export default {
  data() {
    return {
    }
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
  
</style>

