//1
const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('change', updateValue);

function updateValue(e) {
  //log.textContent = e.target.value;
  console.log(document.getElementsByClassName("afterUpdateText").length)
  if(document.getElementsByClassName("afterUpdateText").length===0)
  {
    var x = document.createElement("BUTTON");
    x.textContent="submit";
    x.classList.add("afterUpdateText")
    //document.body.appendChild(x);
    log.after(x);
  }
}

//3

console.log(4)
var btnCalculateAge=document.getElementById("btnCalculateAge")

btnCalculateAge.addEventListener('click', function (event) {
    //returnToPreviousPage();
    event.preventDefault()
    var objToday = new Date();
    var curYear = objToday.getFullYear()

    var date = document.getElementById("date");

    console.log("Your age is: ",curYear-date.value.split("-")[0])
});

