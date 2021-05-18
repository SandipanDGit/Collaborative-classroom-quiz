<template>
    <div id="qaction-wrap" class="container-fluid">
        <div class="row">
            <!-- <div class="btn btn-info" @click="updateActive(-1)">Previous</div> -->
            <div class="btn btn-info" @click="updateActive(1)">Save and Next</div>
        </div>
    </div>
</template>

<script>
export default {
   data: function(){
       return {
           
       }
   },
   methods: {
       updateActive(offset){
           this.$store.commit('updateActive', offset)
           return true
       },
   }
}
</script>


<style scoped>
#qaction-wrap{
    padding-top: 3px;
}

.row{
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn{
    background-color: #563D7C;
    min-width: 150px;
    margin: 0 10px 0 10px;
    font-size: 1.3rem;
    /* font-weight: bold; */
    color: white;
}
</style>
