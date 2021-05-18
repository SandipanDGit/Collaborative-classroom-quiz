import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue';
import Header from './components/Header.vue';
import QuestionArea from './components/QuestionArea.vue';
import NavPanel from './components/NavPanel.vue';
import QuestionAction from './components/QuestionAction.vue'
import Home from './components/Home.vue'
import Quiz from './components/Quiz.vue'
import Feedback from './components/Feedback.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/quiz',
            component: Quiz
        },
        {
            path: '/feedback',
            component: Feedback
        }
    ]
})


const store = createStore({
    /*  all the data lives here
        available to all components templates with: $store.state.variable
        available to all component scripts with: this.$store.state.variable
    */
    state: function(){
        return {
            questions: [],
            dataFetched: false,
            activeQ: null
        }
    },
    /*  all the functions on data goes here, like member functions of a class
        callable from script section of components with syntax: state.$store.commit('muation-name')
    */
    mutations: {

        getServerData(state){   //explicitly need to pass state
            console.log("getServerData called")
            const axios = require('axios')
            //FETCH LIST OF QUESTIONS FROM SERVER
            axios.get('https://opentdb.com/api.php?amount=20&difficulty=easy&type=multiple')
            .then(response =>{
                response.data.results.forEach(element => {
                    
                    let q = {
                        qStatement: "",
                        answers: [],
                        correctPosition: 0,
                        answered: false,
                        chosenOption: -1,
                        locked: false,
                        renderTime: null,
                        responseTime: null,
                        differenceInterval: null
                    }

                    //INJECTING THE CORRECT ANSWER IN RANDOM POSITION IN ARRAY
                    let i = Math.floor(Math.random() * 3)
                    q.answers[i] = element.correct_answer

                    //SAVE THE CORRECT ANSWER POSITION
                    q.correctPosition = i

                    //FILLING OTHER PLACES WITH WRONG ANSWERS IN THE ARRAY
                    for(let j=0,k=0; j<4; j++){
                        if(j !=i){
                            q.answers[j] = element.incorrect_answers[k++]
                        }
                    }
                    
                    //COPY THE QUESTION STATEMENT
                    q.qStatement = element.question
                    
                    state.questions.push(q)
                })

                console.log("data fetched")
                state.dataFetched = true
                // state.questions.forEach(q =>{
                //     console.log(q)
                // })
            })
            .catch(err =>{
                console.log(err)
            })
        },//end of function 
        
        setInitialActive(state){
            state.activeQ = 0
        },
        updateActive(state, offset){
            //only take care when going previous from 0th Q
            if(state.activeQ == 0 && offset == -1){
                state.activeQ = state.questions.length - 1
            }
            else{
                state.activeQ = (state.activeQ + offset) % state.questions.length
            }
        }, 
        updateChosenOption(state, option){
            console.log("updating chosen option as", option)
            state.questions[state.activeQ].answered = true
            state.questions[state.activeQ].chosenOption = option
        },
        setRenderTime(state, qnumber){
            if(state.questions[qnumber].renderTime === null){
                state.questions[qnumber].renderTime = Date.now()
                console.log(`render time set for ${qnumber} as `, state.questions[qnumber].renderTime)
            }
        },
        setResponseTime(state, qnumber){
            if(state.questions[qnumber].responseTime === null){
                state.questions[qnumber].responseTime = Date.now()
                console.log(`response time set for ${qnumber} as`, state.questions[qnumber].responseTime)
            }
            //if renderTime and responseTime both exixts, calculate differenceInterval
            if(state.questions[qnumber].renderTime !== null && state.questions[qnumber].responseTime){
                state.questions[qnumber].differenceInterval = state.questions[qnumber].responseTime - state.questions[qnumber].renderTime
            }
        },
        lockQuestion(state, qnumber){
            if(qnumber !== null){
                state.questions[qnumber].locked = true
                console.log("locked", qnumber)
            }
        }
    },
    getters: {
        isFetched(state){
            return state.dataFetched
        },
        getQuestionCount(state){
            console.log(state.questions.length, "number of Q")
            return state.questions.length
        },
        getQuestion(state){
            console.log("getQuestion getter called")
            return state.questions[state.activeQ].qStatement
        },
        getAnswers(state){
            console.log("getAnswers called")
            return state.questions[state.activeQ].answers
        },
        getCorrectPosition(state){
            console.log("getCorrectPosition called")
            return state.questions[state.activeQ].correctPosition
        },
        getActive(state){
            return state.activeQ
        },
        getChosenOption(state){
            if(state.dataFetched && state.questions[state.activeQ].answered){
                return state.questions[state.activeQ].chosenOption
            }
            else{
                return -1
            }
        },
        isLocked(state){
            return state.questions[state.activeQ].locked
        }
    }
});
 
const app = createApp(App)
app.use(store)

app.use(router)

app.component('page-header', Header)
app.component('qarea', QuestionArea)
app.component('nav-panel', NavPanel)
app.component('question-action', QuestionAction)

app.mount('#app')
