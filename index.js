/*
bugs to fix = decimal point with rtl writing lol
if you click an operator and then equals its bad


  else (meaning it should be euqal to '=')
    push the temp number to the array
    make new var called total which we need to make a intiger from the first number from the entries array
      for loop- make i = 1. less than the array. and go up by two
      make var Symbol = entries[i]
      make var nextNum which is equal to intiger of entries i + 1

      if symbol = +; add nextNum to total
      => for all operators
    if total < 0
      make positive and add '-' string

    display the answer!

stretch material  - display answer as operators clicked */


var entries = [];
var screen = document.getElementById('screen')
var tempNum = "";   

var buttonArray = document.getElementsByTagName('button')

for(var i = 0; i < buttonArray.length; i++){
    buttonArray[i].onclick = whichButton
}

function whichButton(event){
    var buttonClicked = event.target.innerHTML

    // if entering number
    if (!isNaN(parseInt(buttonClicked)) || buttonClicked === '.') {
        tempNum += buttonClicked
        screen.innerHTML = tempNum.substring(0,10)
    }
    // if clearing screen
    else if (buttonClicked === 'AC' || buttonClicked === 'CE') {
        if (buttonClicked === 'AC') {
            entries = [];
        }
        tempNum = "";
        screen.innerHTML = ""
    }

    // if entering operator
    else if (buttonClicked === '+' || buttonClicked === '-' || buttonClicked === 'x' || buttonClicked === '÷') {
        entries.push(tempNum)
        entries.push(buttonClicked)
        tempNum = ""
        
    }

    // if clicks '='
    else {
        entries.push(tempNum)
        var total = parseFloat(entries[0])
        for (var i = 1; i < entries.length; i += 2) {
            var symbol = entries[i]
            var nextNum = parseFloat(entries[i+1])
            if (symbol === '+') {total += nextNum}
            else if (symbol === '-') {total -= nextNum}
            else if (symbol === 'x') {total *= nextNum}
            else if (symbol === '÷') {total /= nextNum}
        }
        if (total < 0) {
            total = Math.abs(total) + '-'
        }
        screen.innerHTML = total
        entries = []
        tempNum = ""
    }
}


