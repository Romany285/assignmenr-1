// 1-Write a program that allow to user enter number then print it 
  /* var num = +window.prompt('enter a number to print')
  console.log(num)
 */
// 2-Write program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no 
  /* var num = +window.prompt('enter a number')
  if(num % 3 == 0 || num % 4 == 0){
    console.log(true)
  }
  else{
    console.log(false)
  } */
// 3-Write a progan that allow the user to insert 2 integer then print the max 
  /* var num1 = +window.prompt('enter number 1')
  var num2 = +window.prompt('enter number 2')
  if(num1 > num2){
    console.log(num1)
  }
  else {
    console.log(num2)
  } */
// 4-Write a program that allow the user to insert an integer then print negative print negative if it is negative number otherwise print positive 
 /*  var num = window.prompt('enter a number')
  if(num < 0){
    console.log('nagative')
  }
  else{
    console.log('positive')
  } */
 // 6-Write a program that allow the user to insert integer number then check if number is even or odd 
  /* var num = window.prompt('enter a number')
  if(num % 2 == 0){
    console.log('even')
  }
  else{
    console.log('odd')
  } */
// 7-Write a program that take character from user then if it is vowel chars (a,e,l,o,u) then print vowel otherwie print consonant 
  /* var char = window.prompt("enter a char")
  if (char == "a" || char == "e" ||char =="i" || char =="o" ||char =="u"){
  console.log("vowel");
  }

  else{
  console.log("consonant");
  } */
// 8-Write a program that allow user to insert integer then print all numbers between 1 to that's number 
   /* var num = window.prompt("enter a char")
   for(var i = 0 ; i<= num ; i++ ){
    console.log(i)
   } */
// 9-Write a program that allow user to insert integer then print a multiplication table up to 12. 
  /* var num = window.prompt('enter a number')
  for(var i = 1 ; i <= 12 ; i++ ){
    console.log(num + "*" + i + "=" + (num * i))
  } */
 // 11-Write a program that take tow intrgers then print the power
  /* var num1 = +window.prompt("enter num 1")
  var num2 = +window.prompt("enter num 2")
  function result (num1,num2){
    result = num1 + num2 ;
    console.log(result)
  }
  result (num1,num2) */
// 12-write a program to enter marks of five subjects and calculate total average and percentage. 
/* var num1 = +window.prompt("enter subject 1")
var num2= +window.prompt("enter subject 2")
var num3= +window.prompt("enter subject 3")
var num4 = +window.prompt("enter subject 4")
var num5 = +window.prompt("enter subject 5")
function total (num1,num2,num3,num4,num5){
  result = num1+num2+num3+num4+num5;
  console.log("total average = "+ result);
  percentage = ( result/500)*100;
  console.log("percentage = " + percentage +"%");
}
total (num1,num2,num3,num4,num5); */
// 13-write a program to input month number and print number of days in that month 
/* var month = window.prompt("enter month")
if(month == 1){
  console.log("number of days = " + 31 )
}
else if(month == 2){
  console.log("number of days = " + 29 )
}
else if(month == 3){
  console.log("number of days = " + 31 )
}
else if(month == 4){
  console.log("number of days = " + 30 )
}
else if(month == 5){
  console.log("number of days = " + 31 )
}
else if(month == 6){
  console.log("number of days = " + 30 )
}
else if(month == 7){
  console.log("number of days = " + 31 )
}
else if(month == 8){
  console.log("number of days = " + 31 )
}
else if(month == 9){
  console.log("number of days = " + 30 )
}
else if(month == 10){
  console.log("number of days = " + 31 )
}
else if(month == 11){
  console.log("number of days = " + 30 )
}
else if(month == 12){
  console.log("number of days = " + 31 )
} */
// 14-write a program to input marks of five subjects ,...,find percentage and grade
/* var num1 = +window.prompt("enter subject 1")
var num2= +window.prompt("enter subject 2")
var num3= +window.prompt("enter subject 3")
var num4 = +window.prompt("enter subject 4")
var num5 = +window.prompt("enter subject 5")
function total (num1,num2,num3,num4,num5){
  result = num1+num2+num3+num4+num5;
  console.log("total average = "+ result + " of 500");
  percentage = ( result/500)*100;
  console.log("percentage = " + percentage +"%");
}
total (num1,num2,num3,num4,num5); */
//                                     -----using switch case---- 
// 15-write a program to print total number of days in month 
/* var month = window.prompt("enter month")
switch(month){
  case "1" :
  console.log("31");
  break;
  case "2" :
  console.log("29");
  break;
  case "3" :
  console.log("31");
  break;
  case "4" :
  console.log("30");
  break;
  case "5" :
  console.log("31");
  break;
  case "6" :
  console.log("30");
  break;
  case "7" :
  console.log("31");
  break;
  case "8" :
  console.log("31");
  break;
  case "9" :
  console.log("30");
  break;
  case "10" :
  console.log("31");
  break;
  case "11" :
  console.log("30");
  break;
  case "12" :
  console.log("31");
  break;
} */
// 16-write a program to check whether an alphabet is vowel or consonant 
/* var char = window.prompt("enter a char")
switch(char){
  case "a":
  console.log("vowel")
  break;
  case "e":
  console.log("vowel")
  break;
  case "i":
  console.log("vowel")
  break;
  case "o":
  console.log("vowel")
  break;
  case "u":
  console.log("vowel")
  break;
  default:console.log("consonant")
} */ 
 // 18-write a program to check whether a number is even or odd 
/* var num = window.prompt("enter a num")
switch(num % 2){ 
  case 0:
  console.log("even")
  break;
  default:console.log("odd")
} */