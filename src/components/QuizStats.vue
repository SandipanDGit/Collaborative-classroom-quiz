<template>
  <div id="quiz-stat_wrap" class="container">
      <div id="title" class="h3 text-center">Quiz stats</div>
      <div class="row d-flex justify-content-center">
            <div id="total" class="stat-item col-2 text-center">
                <div class="key">Total questions</div>
                <div class="val">{{ getTotalQuestions }}</div>
            </div>
            <div id="attempted" class="stat-item col-2 text-center">
                <div class="key">Attempted</div>
                <div class="val">{{ getAttempts }}</div>
            </div>
            <div id="missed" class="stat-item col-2 text-center">
                <div class="key">Missed</div>
                <div class="val">{{ getMissed }}</div>
            </div>
            <div id="correct" class="stat-item col-2 text-center">
                <div class="key">Correct</div>
                <div class="val">{{ getCorrectAttempts }}</div>
            </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'getTotalQuestions',
            'getAttempts',
            'getMissed',
            'getCorrectAttempts'
        ])
    }
}
</script>

<style>
    #quiz-stat_wrap{
        border: 2px solid lightgrey;
        margin-top: 20px;
        padding: 10px;
        border-radius: 5px;
    }
    #qlist{
        border: 1px solid grey;
        margin: 15px 15px 15px 15px;
        padding: 15px;
    }
    .stat-item{
        border: 1px solid inherit;
        border-radius: 5px;
        margin: 10px;
        padding: 10px;
        font-size: 1.1rem;
        font-weight: 600;
        color: #555;
    }
    .val{
        font-size: 1.3rem;
        font-weight: bold;
    }
    #total{
        background-color: skyblue;
    }
    #attempted{
        background-color: yellow;
    }
    #missed{
        background-color: lightsalmon;
    }
    #correct{
        background-color: lightgreen;
    }
    #title{
        color: #555;
    }
</style>