// Page date and time
var currentDay = moment().format("dddd LL LT");
$("#currentDay").append(currentDay);

///////////////////////////////////////////////////////////////

// below is an example of how to create the grid through jquery
// this option was less understandable to me

// for (var i = 0; i < 9; i++) {
//     $('.container').append(
//         $(`<div id="row-0${i+1}"class="row time-block">

//             <div id="time-0${i+1}"
//             class="col-2 hour">
//             </div>

//             <textarea id="text-0${i+1}"
//             class="col-8">
//             </textarea>

//             <button class="col-2 saveBtn">Add</button>
        
//         </div>`))
// }
///////////////////////////////////////////////////////////////

// Empty array for times
var timesList = [];

// Variable for each hour element
var hours = $(".hour");

// Variable for current hour
var currentHour = moment().format("HH");

// Add hours from planner to a list using loop
for (var i=0; i<hours.length; i++) {
    var hourText = $(hours[i]).text();
    timesList.push(hourText);
}

// Variable for each time block element
var timeBlock = $(".time-block");

// Empty array for textarea ids
// Used to assign class based on index
var timeBlockList = [];

// Add textarea id's to empty array, also applying timeblock style from css
for (var i=0; i<timeBlock.length; i++) {
    var timeBlockText = timeBlock[i].id;
    timeBlockList.push(timeBlockText);
}


// A for loop to compare the array of times to the current time
// Change the class of the given id based on the time condition
for (var i=0; i<timesList.length; i++) {
    var militaryTime = moment(timesList[i], "h A").format("HH");
    if (militaryTime < currentHour) {
        $("#" + timeBlockList[i]).addClass("past");
    } else if (militaryTime === currentHour) {
        $("#" + timeBlockList[i]).addClass("present");
    } else {
        $("#" + timeBlockList[i]).addClass("future");
    }
}


// Storing local data

// Select the save buttons
var saveBtn = $(".saveBtn");

var inputStorageObject = {};

// var inputText = $(this).parent().children("textarea").val();
// var inputIdText = $(this).parent().children("textarea").attr("id");

// Add event listener for save button
// Store the text in a key:value pair >> key = id of textarea element  & value = text input
saveBtn.on("click", function(event) {
    event.preventDefault();
    var inputText = $(this).parent().children("textarea").val();
    var inputIdText = $(this).parent().children("textarea").attr("id");
    inputStorageObject[inputIdText] = inputText;
    localStorage.setItem("task", JSON.stringify(inputStorageObject));
});

function storeMySchedule() {
    var storedData = JSON.parse(localStorage.getItem("task"));

    if (storedData !== null) {
        inputStorageObject = storedData;

        var storedObject = Object.entries(inputStorageObject);

        for (var i=0; i<storedObject.length; i++) {
            var idInsert = storedObject[i][0];
            var textInsert = storedObject[i][1];
            $("#"+idInsert).text(textInsert);
        }
    }
}

storeMySchedule();