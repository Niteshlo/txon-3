document.addEventListener("DOMContentLoaded", function() {
    var taskInput = document.getElementById("taskInput");
    var addButton = document.getElementById("addButton");
    var pendingList = document.getElementById("pendingList");
    var completedList = document.getElementById("completedList");
  
    addButton.addEventListener("click", function() {
      var taskText = taskInput.value;
      if (taskText.trim() !== "") {
        var listItem = document.createElement("li");
        listItem.innerHTML = '<input type="checkbox"><span>' + taskText + '</span>';
        pendingList.appendChild(listItem);
        taskInput.value = "";
      }
    });
  
    pendingList.addEventListener("change", function(event) {
      var checkbox = event.target;
      var listItem = checkbox.parentNode;
      if (checkbox.checked) {
        listItem.classList.add("completed");
        completedList.appendChild(listItem);
      } else {
        listItem.classList.remove("completed");
        pendingList.appendChild(listItem);
      }
    });
  });
  