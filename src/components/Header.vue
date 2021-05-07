<template>
    <div id="header" class="container-fluid">
            <div class="row align-items-center">
                    <div id="title" class="col-5 d-flex justify-content-start"><h4>{{ title }}</h4></div>
                    <div id="timer" class="col-4 text-center">
                        <div id="counter" class="row d-flex justify-content-center">
                            <div class="col-4 text-center h5">Time remaining</div>
                            <div id="countdown" class="col-4 text-center">{{ countdown }}</div>
                        </div>
                    </div>
                    <div id="cred" class="col-3 text-center">{{ cred.name }}</div>
            </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            title: "Collaborative classroom quiz",
            countdown: "1:10:30",
            cred: {
                name: "Sandipan Dutta"
            }
        };
    }
};
</script>

<style>     /*  cant make this scoped. it breaks the UI*/
    #header{     
        height: 3rem;   
        background-color: #563D7C;
        color: lightgray;
    }
    #countdown{
        color: white;
        font-size: 1.6rem;
        font-weight: bold;
    }
    #title{
        padding-left: 20px
    }
    .row{
        margin: 0;  /* to prevent page overflow in X axis */
        min-height: 3em;
    }
    div[class^="col"]{    /* col-* classes has default padding */
      padding: 0;
    }
    
    #counter{
        align-items: baseline;
    }
    #timer{
        border-left: 1px solid grey;
        border-right: 1px solid grey;
    }
    
</style>
