// i.Get element of id “main-content” and assign them in a variable.
// ii.Display all child elements of “main-content” element.
// iii.Get all elements of class “render” and show their innerHTML
// in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.

var a= document.getElementById('main-content');
console.log(a);
var b = a.getElementsByTagName('p');
console.log(b[0]);
console.log(b[1])
console.log(b[2])
console.log(b[3])
console.log(b[4])




var c = document.getElementsByClassName('render')
console.log(c[0].innerHTML);
console.log(c[1].innerHTML)
console.log(c[2].innerHTML)
console.log(c[3].innerHTML)
console.log(c[4].innerHTML)

var firstName = document.getElementById('first-name')
firstName.value ='alex'
var lastName = document.getElementById('last-name')
lastName.value ='bank'

var email =document.getElementById('email')
email.value ='alexbank@example.com'

// 2. use HTML code of question 1 and show the result on browser.

// What is node type of element having id “form-content”.
var a = document.getElementById('form-content')
console.log(a.nodeType);

// Show node type of element having id “lastName” and its child node.

var aname = document.getElementById('lastName')
console.log(aname.nodeType);
console.log(aname.firstChild.nodeType);

// Update child node of element having id “lastName”.

var aname = document.getElementById('lastName')
aname.innerHTML="Last Name: syed"




// Get First and last child of id “main-content”.
var a = document.getElementById('main-content')
var b =a.firstChild
console.log(b);
var c =a.lastChild;
console.log(c);
// Get next and previous siblings of id “lastName”.
var aname = document.getElementById('lastName')
var b =aname.previousSibling
console.log(b);

var c =aname.nextSibling
console.log(c);


// Get parent node and node type of element having id “email”
var email =document.getElementById('email');
var b =email.parentNode
console.log(b);
console.log(b.nodeType)