// page date and time
var currentDay = moment().format("dddd LL LT");
$("#currentDay").append(currentDay);

// possible grid container
for (var i = 0; i < 9; i++) {
    $('.container').append(
        $(`<div id="row-0${i+1}"class="row time-block">

            <div id="time-0${i+1}"
            class="col-2 hour">
            </div>

            <textarea id="text-0${i+1}"
            class="col-8">
            </textarea>

            <button class="col-2 saveBtn">Add</button>
        
        </div>`))
}