<template>
    <div id="qarea-wrap" class="container-fluid">
        <div id="qnumber" class="row">{{ getActive +1 }}</div>
        <div id="qbody" class="row">{{ getQuestion }}</div>
        <div id="options" class="row">
            <div class="col-7">
                <div id="option1" class="row d-flex align-items-center">
                    <input class="col-1" type="radio" name="option-radio" v-bind:checked="computedInput[0]" @input="updateChosenOption(1)">
                    <div class="option col-11">{{ getAnswers[0] }}</div>
                </div>
                <div id="option2" class="row d-flex align-items-center">
                    <input class="col-1" type="radio" name="option-radio" v-bind:checked="computedInput[1]" @input="updateChosenOption(2)">
                    <div class="option col-11">{{ getAnswers[1] }}</div>
                </div>
                <div id="option3" class="row d-flex align-items-center">
                    <input class="col-1" type="radio" name="option-radio" v-bind:checked="computedInput[2]" @input="updateChosenOption(3)">
                    <div class="option col-11">{{ getAnswers[2] }}</div>
                </div>
                <div id="option4" class="row d-flex align-items-center">
                    <input class="col-1" type="radio" name="option-radio" v-bind:checked="computedInput[3]" @input="updateChosenOption(4)">
                    <div class="option col-11">{{ getAnswers[3] }}</div>
                </div>
                <br><br>
                <div class="display">user's response: {{ optionSetter == -1 ? "NIL" : optionSetter }}</div>
                <div class="display">correct answer: {{ getCorrectPosition + 1 }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                userInput: -1
            }
        },
        methods: {
            updateChosenOption: function(option){
                console.log(option, "chosen")
                this.$store.commit('updateChosenOption', option)
                return true
            },
        },
        computed: {
            computedInput: function(){
                //chosen option vector
                console.log("computed input running")
                let opt = [false, false, false, false]
                let chosen = this.$store.getters.getChosenOption
                if(chosen != -1){
                    opt[chosen-1] = true
                    console.log(opt)
                    return opt
                }
                else{
                    console.log(opt)
                    return opt
                }                
            },
            optionSetter: function(){
                console.log("got option", this.$store.getters.getChosenOption)
                return this.$store.getters.getChosenOption
            },
            getActive: function(){
                return this.$store.getters.getActive
            },
            getQuestion: function(){
                //check if data is available, if not return empty string
                //it will update when dependencies change i.e. data becomes available

                if(this.$store.getters.isFetched){
                    //following two lines decode the escape characters
                    let textArea = document.createElement('textarea')
                    textArea.innerHTML = this.$store.getters.getQuestion
                    return textArea.value
                }
                else{
                    let emptyQ = ''
                    return emptyQ
                }
            },
            getAnswers: function(){
                //check if data is available, if not return empty string
                //it will update when dependencies change i.e. data becomes available

                if(this.$store.getters.isFetched){
                    return this.$store.getters.getAnswers
                }
                else{
                    let emptyAnswers = ['','','','']
                    return emptyAnswers
                }
            },

            getCorrectPosition: function(){
                //check if data is available, if not return empty string
                //it will update when dependencies change i.e. data becomes available

                if(this.$store.getters.isFetched){
                    return this.$store.getters.getCorrectPosition
                }
                else{
                    return 0
                }
            },
        },
    }
</script>

<style scoped>
    #qarea-wrap{
        border-bottom: 1px solid lightgrey;
        display: flex;
        padding-left: 20px;
        padding-top: 20px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;        
        overflow-y: scroll;
    }
    
    #qnumber{
        font-size: 1.2rem;
        font-weight: bold;
        color: #555;
    }
    #qbody{
        font-size: 1rem;
        font-weight: 500;
        color: #333;
    }
    #options{       /* the whole option group row */
        padding-top: 2.5rem;
        align-items: center;
    }
    .option{    /* the option texts for every radio button */
        font-size: 1rem;
        font-weight: 500;
        color: #333;
    }
    div[class^="col"]{    /* col-* classes has default padding */
      padding: 0;
    }
    .row{
        width: 100%;
        margin: 0;
    }
    
</style>
