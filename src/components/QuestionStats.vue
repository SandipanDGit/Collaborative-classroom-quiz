<template>
    <div class="container-fluid">
        <div class="row d-flex justify-content-center" v-for="(question, index) in $store.state.questions" :key="question.qStatement">
          <div id="qlist" class="col-12">
              <div>{{ index }}</div>
              <div>{{ "Chosen option: " + question.chosenOption }}</div>
              <div>{{ "Time taken: " + question.differenceInterval/1000 + " seconds" }}</div>
          </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>