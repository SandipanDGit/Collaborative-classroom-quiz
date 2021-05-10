<template>
    <div id="header" class="container-fluid">
        <div id="header-row" class="row d-flex align-items-center">
            <div id="title" class="col-5 d-flex justify-content-start"><h4>{{ title }}</h4></div>
            <div id="timer" class="col-4 text-center">
                <div id="counter" v-if="needCountdown" class="row d-flex justify-content-center">
                    <div class="col-4 text-center h5">Time remaining</div>
                    <div id="countdown" class="col-4 text-center">{{ `${getMinutes} : ${getSeconds}` }}</div>
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
            seconds: 0,
            minutes: 0,
            remaining: 0,
            cred: {
                name: "Sandipan Dutta"
            }
        };
    },
    mounted(){
        if(this.needCountdown){
            console.log("mounted hook ran")
            // this.updateTime()
        }
    },
    watch: {
        $route : function(){
            if(this.$route.path == '/quiz'){
                this.updateTime()
            }
        }
    },
    computed: {
        needCountdown(){
            return this.$route.path == '/quiz'? true : false
        },
        getMinutes(){
            return this.minutes
        },
        getSeconds(){
            return this.seconds
        }
    },
    methods: {
        updateTime(){
            const startTime = Date.now()
            const endTime = startTime + 30000    //30 sec
            this.remaining = endTime - startTime
            
            const timer = setInterval(()=>{
                console.log(`remaining: ${this.remaining}`)

                if(this.remaining <= 0){
                    console.log("timout!!!!!!")
                    clearInterval(timer)
                    this.$router.push('feedback')
                    return
                }

                this.remaining = this.remaining - 1000
                this.seconds = Math.floor((this.remaining % 60000)/1000)
                this.minutes = Math.floor(this.remaining/ 60000)
                
            }, 1000)
        }
    }
    
};
</script>

<style>     /*  cant make this scoped. it breaks the UI*/
    #header{     
        min-height: 4.5rem;   
        background-color: #563D7C;
        color: white;
        box-shadow: 1px 2px 12px #555555;
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
    }
    div[class^="col"]{    /* col-* classes has default padding */
      padding: 0;
    }
    #header-row{
        width: 100%;
    }

    #counter{
        align-items: baseline;
    }
    #timer{
        border-left: 1px solid grey;
        border-right: 1px solid grey;
    }
    
</style>
