//displays current date and time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

// uses a for loop to prevent using repeating code for localStorage    
for (let i = 9; i < 18; i++) {
  
  var timeBlockEl = $("#hour" + i);
  var buttonEl = timeBlockEl.children("button");
  console.log(buttonEl);
  
  buttonEl.on("click", function () {
    var textArea = $("#text" + i);
    console.log(textArea.val());
    var text = textArea.val();
    localStorage.setItem("data-" + i, text);
    });

  // for loading local storage 
  var textArea = $("#text" + i);
  var text = localStorage.getItem("data-" + i);
  console.log(text);
  textArea.val(text);
    }
