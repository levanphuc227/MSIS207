//1 3
const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('change', updateValue);

function updateValue(e) {
  //log.textContent = e.target.value;
  console.log(document.getElementsByClassName("afterUpdateText").length)
  if (document.getElementsByClassName("afterUpdateText").length === 0) {
    var x = document.createElement("BUTTON");
    x.textContent = "submit";
    x.classList.add("afterUpdateText")
    x.addEventListener('click', submitValue);

    //document.body.appendChild(x);
    log.after(x);
  }
}

function submitValue() {
  const name = document.getElementsByName("name")[0].value;
  document.getElementById("log").textContent=name;
  console.log(name)

}

//4

console.log(4)
var btnCalculateAge = document.getElementById("btnCalculateAge")

btnCalculateAge.addEventListener('click', function (event) {
  //returnToPreviousPage();
  event.preventDefault()
  var objToday = new Date();
  var curYear = objToday.getFullYear()

  var date = document.getElementById("date");
  age = curYear - date.value.split("-")[0]
  document.getElementById("age").textContent="Your age is: "+ age.toString();
});


//5
var a = document.getElementsByClassName("bold-hover");
a[0].addEventListener("mouseover",event=>{
  a[0].setAttribute("style","font-weight:bold;");

});

//6
window.addEventListener('resize', getsize);

function getsize(event){
  width = window.innerWidth;
  height = window.innerHeight;
  //console.log(width,height)
  document.getElementById('size').textContent=width+":"+height;
}
getsize();