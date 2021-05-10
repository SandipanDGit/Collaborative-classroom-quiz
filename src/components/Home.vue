<template>
  <div class="container-fluid">
        <div id="instructions" class="container">
            <div id="instruction-header" class="h2 text-center">Instructions</div>
            <div id="instruction-body" class="h5">
                <ul>
                    <li>The quiz starts as soon as you press the 'Launch' button.</li>
                    <li>Currently the timer value is hardcoded to 30 seconds</li>
                    <li>Random set of questions are fetched from <a href="https://opentdb.com">opentdb.com</a></li>
                    <li>Responses are auto saved as soon as you chose an option</li>
                </ul>
            </div>
        </div>
        <!-- <div id="form" class="container form-group d-flex justify-content-center align-items-center">
            <label for="end-time" class="h5">Set finishing time</label>
            <input type="time" name="end-time" id="end-time">
            <button id="confirm-button" class="btn btn-secondary">Save</button>
        </div> -->
        <router-link to="/quiz">
            <button id="launch-button" class="btn btn-secondary">LAUNCH</button>
        </router-link>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .container-fluid{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #instructions, #form, #picked-time{
        color: #555;
        border: 1px solid gray;
        border-radius: 5px;
        margin: 10px;
        padding: 15px;
    }
    #form>*{
        margin: 0 10px 0 10px;
    }
    #instructions>*{
        padding: 5px;
    }
    #end-time{
        min-width: 100px;
        border: 1px solid gray;
        border-radius: 5px;
        padding: 5px 10px 5px 10px;
        color: #555;
        font-size: 1.1rem;
    }
    #confirm-button{
        font-size: 1.1rem;
    }
    #launch-button{
        font-size: 1.2rem;
        margin: 10px;
    }
</style>