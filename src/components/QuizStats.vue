<template>
  <div id="quiz-stat_wrap" class="container-fluid">
      <div class="row d-flex justify-content-center">
            <div class="stat-item col-3 text-center">
                <div class="key">Total questions</div>
                <div class="val">20</div>
            </div>
            <div class="stat-item col-3 text-center">
                <div class="key">Attempted</div>
                <div class="val">16</div>
            </div>
            <div class="stat-item col-3 text-center">
                <div class="key">Missed</div>
                <div class="val">3</div>
            </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    #qlist{
        border: 1px solid grey;
        margin: 15px 15px 15px 15px;
        padding: 15px;
    }
    #quiz-stat_wrap{
        padding: 10px;
    }
    .stat-item{
        border: 1px solid grey;
        border-radius: 5px;
        margin: 10px;
        padding: 10px;
        font-size: 1.2rem;
        font-weight: 600;
        color: #555;
    }
</style>