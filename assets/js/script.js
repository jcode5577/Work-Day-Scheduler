var saveBtn = document.querySelector(".save-btn");

var auditEvents = function () {
  var currentHour = moment().hour();
  console.log(currentHour);
  $(".row").each(function () {
    var timeBlock = parseInt($(this).attr("id"));
    console.log(timeBlock);

    // change color
    if (timeBlock < currentHour) {
      $(this).addClass("past");
    } else if (timeBlock === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
};

var loadEvents = function () {
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

  auditEvents();
};

// Save events on click
$(".save-btn").click(function () {
  var eventTime = $(this).parent().attr("id");

  var eventText = $(this).siblings(".description").val().trim();

  localStorage.setItem(eventTime, eventText);
});

loadEvents();
