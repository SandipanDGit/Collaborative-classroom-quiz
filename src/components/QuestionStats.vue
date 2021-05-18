<template>
    <div id="question-stat-wrap" class="container">
        <div id="title" class="row h3 d-flex justify-content-center">Question wise stats</div>
        <div id="qlist" class="row d-flex justify-content-center" v-for="(question, index) in $store.state.questions" :key="question.qStatement">
          <div id="qInfoItem" class="col-12 d-flex justify-content-center">
              <div>{{ "Q. " + (index + 1) }}</div>
              <div>{{ "Chosen option: " + question.chosenOption }}</div>
              <div>{{ "Correct option: " + (question.correctPosition + 1) }}</div>
              <div>{{ "Time taken: " + question.differenceInterval/1000 + " seconds" }}</div>
          </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #question-stat-wrap{
        border: 2px solid lightgrey;
        margin-top: 20px;
        padding: 10px;
        border-radius: 5px;
    }
    #qlist{
        border: 1px solid lightgray;
        border-radius: 5px;
    }
    #qInfoItem>*{
        min-width: 200px;

    }

</style>