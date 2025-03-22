var alfabeto="abcdefghijklmnopqrstuvwxyz";
var pts = 0;
timedLoop(4900, function() {
  var i =randomNumber(0, 25);
  var j =randomNumber(0, 25);
  var k =randomNumber(0, 25);
  var ltr1 = alfabeto.substring(i,i+1);
  var ltr2 = alfabeto.substring(j,j+1);
  var ltr3 = alfabeto.substring(k,k+1);
  var palavra = ltr1 + ltr2 + ltr3;
  setText("paradigitar", palavra);
});
onEvent("proximo", "click", function( ) {
if (getText("digiteaqui") == getText("paradigitar")) {
  playSound("sound://category_achievements/vibrant_game_positive_sweep_bling.mp3", false);
  setProperty("proximo", "background-color", "green");
  pts = pts+1;
  setText("placar", "Pontos: "+ pts);
}
});
var x = 0;
timedLoop(1000, function() {
  x = x + 1;
  setText("button1", x);
  if (x==5) {
    x = 0;
  }
});
