var text = document.getElementById("a");
var word = text.getElementsByTagName("span");

var i = 0;

function textChanger()
{
  word[i].style.display = "none";
  i = (i + 1) % word.length;
  word[i].style.display = "initial";
}
setInterval(textChanger,1500);
