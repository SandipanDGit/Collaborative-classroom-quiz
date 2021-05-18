<template>
  <div class="container-fluid">
      <quiz-stats></quiz-stats>
      <question-stats></question-stats>
  </div>
</template>

<script>
import QuizStats from './QuizStats.vue'
import QuestionStats from './QuestionStats.vue'

export default {
  components: {
    'quiz-stats': QuizStats,
    'question-stats': QuestionStats
}
}
</script>

<style scoped>
    .row{
        border: 1px solid gray;
        border-radius: 10px;
        padding: 30px;
    }
</style>