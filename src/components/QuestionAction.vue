<template>
    <div id="qaction-wrap" class="container-fluid">
        <div class="row">
            <div class="btn btn-info" @click="updateActive(-1)">Previous</div>
            <div class="btn btn-info" @click="updateActive(1)">Next</div>
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

.row{
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn{
    background-color: #563D7C;
    width: 150px;
    margin: 0 10px 0 10px;
    font-size: 1.3rem;
    /* font-weight: bold; */
    color: lightgray;
}
</style>
