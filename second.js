//DOM - document object model
document.write("Hii Hello");

console.log("Hello my first javascript code")

// alert("Hii...Welcome to Red & white!!")

document.getElementById("demo").innerHTML = "My Name is <b>Rinkal</b>"
//1)Nothing
//  a = 10
//  b=25
//  c=45.56
//  ch='R'
//  MyName="Rinkal"
//  document.write("<br> A = ",a);
//  document.write("<br> B = "+b);
//  document.write("<br> C = "+c);

//  document.write("<br> Ch = "+ch);
//  document.write("<br> My name is : "+MyName);

 //2)Var keyword - reinitialization/redeclare, reas  sign value
var a= 45
  document.write("<br> A = ",a);

var a=56
  document.write("<br> A = ",a);
/*
  3)Let keyword - No reinitialization/redeclare, value Reassign 
 */
let b= 67
document.write("<br> B = ",b);

b=56565
document.write("<br> B = ",b);

//Const keyword - no redeclare,no reassign value
const pi = 3.14
document.write("<br> Pi = ",pi);
