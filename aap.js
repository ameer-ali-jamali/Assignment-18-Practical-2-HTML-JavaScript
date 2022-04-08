
 var num1 = parseInt(prompt("Type number")) 
 var num2 = parseInt(prompt("Type number")) 
 var num3 = parseInt(prompt("Type number")) 
   
 if (num1>num2 && num1<num3){
         alert(num2 + num3)
     }
    else if (num3>num1 && num3<num2){
         alert(num2+ num1)
     }
    else if (num1>num3 && num1<num2){
         alert(num2+ num3)
     }

    else if (num1>num2 && num2>num3){
         alert(num1+ num3)
     }
    else if (num2>num1 && num2<num3){
         alert(num1+ num3)
     }
     else if (num1>num2 && num3<num1){
         alert(num1+ num2)
     }
 else{
     alert("Please try again")
 }

 var num2 = parseInt(prompt("enter"))
    
  if(num2<20){
  alert("Cold")
  }
  else if(num2>20 && num2<30){
      alert("Normal")
      }
 else if(num2>30){
          alert("Hot")
          }

 var num1 = parseInt(prompt(`Convert tempreture 
 1 Convert Fehrenheit to Celcius 
 2 Convert Celcius To Fehrenheit`))

 if(num1>0 && num1<2){
  var c = parseInt(prompt("Enter Celcius"));
  if(c){
 alert(c*1.8+32)   
 }

 }
 if(num1>1 && num1<3){
  var f = parseInt(prompt("Enter Fehrenheit"));
  if(f){
 alert((f-32)/1.8)   
 }

 }

 var num1 = parseInt(prompt("Guess The Number Between 1 to 10 "))
 
  if (num1==3){
 alert("You Won!")
  }
  else if (num1>3 && num1<=10) {
 alert(`You lost! Better
 luck next time`)
  }
  else if(num1<3){
 alert(`You lost! Better
 luck next time`)
  }
  else if(num1<0){
 alert(`You lost! Better
 luck next time`)
  }
  else{
      alert("Please Input Any Number")
  }

 var pass = parseInt(prompt("Enter Password"))
     var num1 = 10
     var num2 = 5
     if (pass==123){
     document.write(" Subtraction   ="+ num1+num2)
     document.write("<hr>")
     document.write(num1-num2+"  Addition")
     document.write("<hr>")
     document.write("Multiplication   ="+num1*num2)
     document.write("<hr>")
     document.write("Division    ="+num1/num2)
     document.write("<hr>")
     }
     else {
      document.write("Wrong Password")   
     }