/*
make an array var

Make a tempary variable equal to empty string - to hold numbers

add onclick function to each button
  within onClick make a var chosenButton that tells us which button is clicked on (Check what .text does)

  if chosenButton is a number (!NsNaN) or a decimal point, add it to temp string var, and display it on a screen

  else if the chosenButton value is equal to AC or CE, than clear temp and screen
    and if it is AC clear entries
  
  else if chosenButton is +,-,* or /
  
    operatorFucntion(chosenButton)
    run a function that does push the temp to the array then push the opporator to the array

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

stretch material  - display answer as operators clicked
    