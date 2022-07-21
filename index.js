const m = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12"
];

var d = new Date("2022-07-21");
var mydate = d.setMonth(d.getMonth() + 8);
var gendate = new Date(mydate);
var newdate =
  gendate.getFullYear() + "-" + m[gendate.getMonth()] + "-" + gendate.getDate();
document.getElementById("demo").innerHTML = newdate;
