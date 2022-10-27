///1
var objToday = new Date(),
    weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
    dayOfWeek = weekday[objToday.getDay()],
    domEnder = function () { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
    dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
    curMonth = months[objToday.getMonth()],
    curYear = objToday.getFullYear(),
    curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
    curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
    curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
    curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today = curHour + ":" + curMinute + "." + curSeconds + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;
console.log("Question 1:")
console.log("Today is :", dayOfWeek);
console.log("Current time is :", curHour + ":" + curMinute + ":" + curSeconds + ':' + curMeridiem)

//2
console.log(2)
var copyCodeHello=document.getElementById("copyCodeHello")

copyCodeHello.addEventListener('click', function (event) {
    var txtCode = document.getElementById("codeHello");

    var successful = navigator.clipboard.writeText(txtCode.textContent);;
    // try {
    //     var successful = navigator.clipboard.writeText(txtCode.textContent);;
    //     var msg = successful ? 'successful' : 'unsuccessful';
    //     console.log('Copying text command was ' + msg);
    // } catch (err) {
    //     console.log('Oops, unable to copy');
    // }
});

//3
const parseCookie = str =>
  str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
console.log(3)
console.log(parseCookie('foo=bar; equation=E%3Dmc%5E2'));

//4
const JsonIsvalid='{"result":true, "count":42}';

console.log(4)
try {
    Json=JSON.parse(JsonIsvalid)
    console.log(Json)
} catch (error) {
    console.log(error);
    console.log("invaild");
}
//5
console.log(5)
console.warn("Chưa có làm")
 
var jsonData = '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';
 
var txtJsonData=JSON.stringify(jsonData)
var f = "sometextfile.json";


