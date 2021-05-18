<template>
    <div id="header" class="container-fluid">
        <div id="header-row" class="row d-flex align-items-center">
            <div id="title" class="col-4 d-flex justify-content-start"><h4>{{ title }}</h4></div>
            <div id="timer" class="col-3 text-center">
                <div id="counter" v-if="needCountdown" class="row d-flex justify-content-center">
                    <div class="col-4 text-center h5">Time left</div>
                    <div id="countdown" class="col-4 text-center">{{ `${getMinutes} : ${getSeconds}` }}</div>
                </div>
            </div>
            <div id="submit-button" class="col-2 text-center">
                <button v-if="needSubmit" type="submit" class="btn btn-primary" @click.prevent="submit">Submit</button>
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
            },
            timer: null
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
        needSubmit(){
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
            const endTime = startTime + (this.$store.getters.getQuestionCount * 60 * 1000)     //timer set as 1 minute time for each question
            this.remaining = endTime - startTime
            
            this.timer = setInterval(()=>{
                console.log(`remaining: ${this.remaining}`)

                if(this.remaining <= 0){
                    console.log("timout!!!!!!")
                    clearInterval(this.timer)
                    this.$router.push('feedback')
                    return
                }

                this.remaining = this.remaining - 1000
                this.seconds = Math.floor((this.remaining % 60000)/1000)
                this.minutes = Math.floor(this.remaining/ 60000)
                
            }, 1000)
        },
        submit(){
            clearInterval(this.timer)
            this.$router.push('feedback')
        }
    }
    
};
</script>

<style>     /*  cant make this scoped. it breaks the UI*/
    #header{   
        display: flex;
        align-items: center;  
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
    #submit-button{
        border-right: 1px solid grey;
    }
    #submit-button>button{
        width: 6rem;
        font-size: 1.3rem;
        background-color: white;
        color: #563D7C;
        font-weight: 600;
    }
    
</style>
