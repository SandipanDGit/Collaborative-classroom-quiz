<template>
    <div id="nav-panel-wrap" class="container-fluid">
        <div id="nav-header" class="row text-center">NAVIGATION PANEL</div>
        <div id="nav-body" class="row d-flex justify-content-center">
            <div id="nav-item1" class="col-3 answered">1</div>
            <div id="nav-item2" class="col-3 answered">2</div>
            <div id="nav-item3" class="col-3 skipped">3</div>
            <div id="nav-item4" class="col-3 answered">4</div>
            <div id="nav-item5" class="col-3 skipped">5</div>
            <div id="nav-item6" class="col-3 answered">6</div>
            <div id="nav-item7" class="col-3 answered">7</div>
            <div id="nav-item8" class="col-3 answered">8</div>
            <div id="nav-item9" class="col-3 answered">9</div>
            <div id="nav-item10" class="col-3 answered">10</div>
            <div id="nav-item11" class="col-3 answered">11</div>
            <div id="nav-item12" class="col-3">12</div>
            <div id="nav-item13" class="col-3">13</div>
            <div id="nav-item14" class="col-3">14</div>
            <div id="nav-item15" class="col-3">15</div>
            <div id="nav-item16" class="col-3">16</div>
            <div id="nav-item17" class="col-3">17</div>
            <div id="nav-item18" class="col-3">18</div>
            <div id="nav-item19" class="col-3">19</div>
            <div id="nav-item20" class="col-3">20</div>     
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {

            }
        }
    }
</script>

<style scoped>
    /* #nav-panel-container{
        border: 1px solid red;
    } */
    #nav-panel-wrap{
        /* border: 1px solid red; */
        border-left: 1px solid lightgrey;
    }
    #nav-header{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        font-weight: bold;
        color: #555;
    }
    #nav-body{
        padding: 0;
        height: 31rem !important;
        overflow-y: scroll;
        
    }
    div[id^="nav-item"]     /* select div whose id starts with "nav-item" */
    { 
        border: 1px solid grey;
        border-radius: 5px;
        margin: .3rem;
        min-width: 1rem;
        min-height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        font-weight: 600;
        color: #444;
    }

    .answered{
        background-color: lightgreen;
    }
    .unanswered{
        background-color: white;
    }
    .skipped{
        background-color: lightsalmon;
    }
    div[class^="col"]{    /* col-* classes has default padding */
      padding: 0;
    }
    .container-fluid{
        padding: 0;
    }
</style>
