<template>
    <div id="full-page" class="container-fluid"> 
        <div id="quiz-row" class="row">
            <div id="left-body" class="col-9">
                <qarea></qarea>
                <question-action></question-action>
            </div>
            <div id="right-body" class="col-3">
                <nav-panel></nav-panel>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #full-page{
        margin: 0;
        padding: 0;
        width: 100%;
  }
  div[class^="col"]{    /* col-* classes has default padding */
    padding: 0;
  }
  #left-body{
    height: 88vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  #right-body{
      height: 100%;
  }
  #quiz-row{
      /* border: 1px solid red; */
      width: 100%;
  }
</style>