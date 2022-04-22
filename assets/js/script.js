for (let i = 9; i < 18; i++) {
  //var timeBlockEl =document.querySelector("#hour9")
  var timeBlockEl = $("#hour" + i);
  var buttonEl = timeBlockEl.children("button");
  console.log(buttonEl);
  //buttonEl.addEventListener("click", saveText)
  buttonEl.on("click", function () {
    var textArea = $("#text" + i);
    console.log(textArea.val());
    var text = textArea.val();
    localStorage.setItem("data-" + i, text);
  });

  // for loading
  var textArea = $("#text" + i);
  var text = localStorage.getItem("data-" + i);
  console.log(text);
  textArea.val(text);
}
