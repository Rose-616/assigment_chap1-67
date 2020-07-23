// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

function power(a,b){
    var result = 1;
    for (var  i=0; i<b;i++){
    result *=a
    }
    return result
}
console.log(power(4,2));

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.

function leapYear(a){
  for (var i=2000 ; i<2050;i +=4){
      if (a === i){
          console.log('lear year')
          break
      }
     
  }


}
leapYear(+prompt('enter year'));



// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions
function sol(){

    var a = +prompt('enter num')
    var b = +prompt('enter num')
    var c = +prompt('enter num')
    var s = (a+b+c)/2
    console.log('s is' +' ' +s)
    function num(){
        var ar = s*(s-a)*(s-b)*(s-c)
      console.log('area is '+' '+ar)
    }
    return num()
     
}
sol();



// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.
function final(a,b,c){

    function average(){
        var avg = (a+b+c)/3;
        console.log('average is'+ ' '+ avg)

    }
    
    function percent(){
        var per = ((a+b+c)/300)*100;
        console.log('percentage is '+' '+  per)
    }
    return average(),percent()
        
  
}

final(90,75,60);


// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.




var a = prompt('enter text');
var c = prompt('enter char for search')
var b = a.split("");

for (var i =0;i<b.length;i++){
    if (b[i]===c){
        console.log("index is " +" "+i);
    }
}


// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

var a = "something is better than nothing";
var b =a.split('');
var c = ['a','e','i','o','u']
for (var i =0;i< b.length;i++){
  for (var vol =0;vol<5;vol++){
      if ( b[i] === c[vol]){
          b[i] ="";
          var d = b.join("");
      }

  }
    }


console.log(d)

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence



var a = 'Pleases read this application and give me gratuity'
var b = a.split("");
let count=0;
var c = ['ea','ui','io','ae','oi']
console.log(b);
for (var i=0;i<a.length;i++){
    for (var n=0;n<c.length;n++)

    if (a[i]+a[i+1] === c[n] ){
        count++;
        
    }


}
console.log(count)



// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.
function dist(a){
    function met(){
        var b = a*1000;
        console.log(b+'meters')

    }
    
    function feet(){
        var ft= a*3280.8;
        
        console.log(Math.round(ft)+'feets')
        return ft;

    }
    function inch(){
        var inc = a*39370.1;
        console.log(inc+'inches')

    }
    function centi(){
    var cen =a*100000;
    console.log(cen+'centimeters')
    }
    return met(),feet(),inch(),centi()
}


dist(+prompt('enter distance in km'));


// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

function overTime(a){
var b =a*12;

console.log(b)
}
overTime(40);


