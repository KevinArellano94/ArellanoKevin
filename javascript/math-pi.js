function math_pi() {
  return Math.PI;
}

var message = "return Math.PI;",
colors = [ "gold ", "purple", "red" ],
i = 0, len = colors.length;

message = message.replace(/\b(\w+)\b/g, function (match, word) {
  return '<span style="color: ' + colors[(i++ % len)] + ';">' + word + '</span>';
});

document.getElementById("math-pi").innerHTML = "<h3>" + message + " - " + math_pi() + "</h3>";

function date_now() {
  return Date();
}
document.getElementById("date-now").innerHTML = date_now();