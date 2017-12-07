// add a new item to the list, when the add button is clicked.
function addList() {
  var li  = document.createElement("li");
  var input1 = document.getElementById("input").value;
  var input2 = document.getElementById("dInput").value;
  var t = document.createTextNode(input1);
  var t2 = document.createTextNode(input1 + ",  Deadline: " + input2);
  if (input2 == ''){
	  li.appendChild(t);
  } else{
	  li.appendChild(t2);
  }
  
  if (input1 == '') {
    alert("Task input is empty.");
  } else {
    document.getElementById("list").appendChild(li);
	document.getElementById("dInput").value = "";
  }
    document.getElementById("input").value = "";
	

  var span = document.createElement("SPAN");
  var cross = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(cross);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Create a "delete" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a delete button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);




