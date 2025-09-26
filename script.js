
var _Array = [];

class Display {
  constructor (num,msg) {
    this.pos = num;
    this.msg = msg;
  }
  createDisplay() {
    return `<div class="display">
    <p class="step">Step ${this.pos}</p>
    <div class="msg">
    <p>${this.msg}<br><br></p>
    <img alt="" height="600px" src="imgs/${this.pos}.jpg"/>
    </div>
    </div>`;
  }
}

var content = [
  "Open the app and you will see a page like this image below",
  "Tap on the plus (+) icon at bottom of the page.<br><br>Shown by the orange arrow",
  "You can now give a name to your app e.g MyNew App <br><br>Don't worry about the advanced settings. I will guide you later. Just name your app and save it",
  "You will be redirected (since you are a java learner i will use \'<b>intent</b>\': <i>Meaning redirect</i>)<b> Below image should be same with yours right now.</b>",
  "At the top left part there is a rectangular box with \'Linear(V)\' writing: (<i>V means vertical</i>)<br>Shown by the Image below.<br>Longpress it and move your finger inside the white space. (I will be using drag instead to mean this) <br>",
  "For now your image should be similar to the image below by now.<br><br>We move on. At the bottom right of the page (shown on the image) tap on \'see all\' button.",
  "Tap on the \'gravity\' button as shown below.",
  "Choose center_vertical and center_horizontal.Let the arrows guide you. The two properties makes the content of a page to be centered.",
  "You should see this by now. (if you can't then you didn't select)",
  "Go back by taping the arrow at the top \'←\'",
  "At the bottom of the page you can see some different buttons. Tap on width button(scroll to the left if you can't see).<br> ",
  "Choose \"match_parent\" (It means to inherit the width of the page) <br> Don't forget to select as shown in the second arrow.",
  "Drag this textView as shown (long press and move you finger to the middle of the page).",
  "The textview widget has move to the middle. Tap on the buttons as shown below. <br>For example: <ul><li>Text = Welcome to My App</li><li>textStyle = Choose bold</li><li>TextColor = choose color of your choice(orange for me)</li><li>textSize = 30dp </li></ul>",
  "Next Drag another textview widget and do the same as the previous step but with different color and smaller size.",
  "Tap any where on the space. Shown bellow",
  "Scroll the bottom till you find a button with \"background color\". Choose you background of the page",
  "At the top as shown tap on \"Event\".",
  "Tap on onCreate.",
  "Tap the icon at the bottom of the page",
  "Tap on Component.(Shown below)",
  "Drag The toast block and move it the top near onCreate block inside white space given.",
  "Release you finger when you see a black block as shown below. ↓",
  "Tap on the blank white block.<br>Input your message and save it. e.g Created by your name",
  "Now go back using the arrow at the top",
  "At the bottom tap on Run button",
  "Wait for some seconds the app is being compiled no need to ask yourself what's going on.<br>The app is being created. You can answer those questions being show as it is being created by taping (X) for No and (O) for yes.",
  "Now install your app and open it. (If your phone says \'App needs scanning or just any warning just tap on install anyway\')<br>Such warnings are just protecting your phone from malicious activites or spam from some unknown apps (not signed by playstore).<br>Just for your benefit avoid installing unknown apps that you never created or untrusted sites."
  ]
 
let i = 1;
for (let v of content) {
  if (i > content.length) i = 1;
  let m = new Display(i++, v);
  _Array.push(m.createDisplay());
}
_Array.push("<footer id='footer'>By KRD | All Rights Reserved | &copy;2025 <br><a href='https://wa.me/254793399037'>Whatsapp Me</a></footer>");


window.onload = function () {
  document.getElementById("bodyView").innerHTML = _Array.join('');
}