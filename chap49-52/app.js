// 1. Create a signup form and display form data in your web
// page on submission.

function sub(){
var name =document.getElementById('name');
var b =name.value;
console.log("name :"+' '+b);
name.value ='';
var fname = document.getElementById('fname');
var c =fname.value;
console.log("father name :"+''+c);
fname.value="";

var age = document.getElementById('age');
var d = age.value;
console.log("age :"+" "+d);
age.value="";
}


// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

function readMore(){
    var  a= 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis similique amet aliquid officiis exercitationem quis debitis eius commodi! Reiciendis soluta officia autem tenetur placeat consectetur est vitae. Quasi, doloremque quae.'
    var b =document.getElementById('para');
    var c = b.innerHTML;
    b.innerHTML =a;
    

}




// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.
// // for 1st student
function delle(){
     
    var a= document.getElementsByTagName('input');
    a[0].value="";
    a[1].value="";
    


  
    }
    function save(){
     var a= document.getElementsByTagName('input');
     console.log(a[0].value)
     console.log(a[1].value)
     document.getElementById('inpu1').disabled=true
     document.getElementById('inpu_1').disabled=true
     document.getElementById('myBtn1').disabled=true
    }
    function edit(){
        document.getElementById('myBtn1').disabled=false
        document.getElementById('inpu1').disabled=false
        document.getElementById('inpu_1').disabled=false
    }
    // for 2nd student
function delle1(){
    var a= document.getElementsByTagName('input');
    a[2].value=""
    a[3].value='';
 
}

function save1(){
    var a= document.getElementsByTagName('input');
    console.log(a[2].value)
    console.log(a[3].value)
    document.getElementById('inpu2').disabled=true
    document.getElementById('inpu_2').disabled=true
    document.getElementById('myBtn2').disabled=true
   }

   function edit1(){
    document.getElementById('myBtn2').disabled=false
    document.getElementById('inpu2').disabled=false
    document.getElementById('inpu_2').disabled=false
}
//for 3rd student

function delle2(){
    var a= document.getElementsByTagName('input');
    a[4].value=""
    a[5].value='';
 
}
function save2(){
    var a= document.getElementsByTagName('input');
    console.log(a[4].value)
    console.log(a[5].value)
    document.getElementById('inpu3').disabled=true
    document.getElementById('inpu_3').disabled=true
    document.getElementById('myBtn3').disabled=true
   }

   function edit2(){
    document.getElementById('myBtn3').disabled=false
    document.getElementById('inpu3').disabled=false
    document.getElementById('inpu_3').disabled=false
}

//for 4th student
function delle3(){
    var a= document.getElementsByTagName('input');
    a[6].value=""
    a[7].value='';
 
}
function save3(){
    var a= document.getElementsByTagName('input');
    console.log(a[6].value)
    console.log(a[7].value)
    document.getElementById('inpu4').disabled=true
    document.getElementById('inpu_4').disabled=true
    document.getElementById('myBtn4').disabled=true
   }


function edit3(){
    document.getElementById('myBtn4').disabled=false
    document.getElementById('inpu4').disabled=false
    document.getElementById('inpu_4').disabled=false
}
//for 5th student
function delle4(){
    var a= document.getElementsByTagName('p');
    a[8].value=""
    a[9].value='';
 
}

function save4(){
    var a= document.getElementsByTagName('input');
    console.log(a[8].value)
    console.log(a[9].value)
    document.getElementById('inpu5').disabled=true
    document.getElementById('inpu_5').disabled=true
    document.getElementById('myBtn5').disabled=true
   }


function edit4(){
    document.getElementById('myBtn5').disabled=false
    document.getElementById('inpu5').disabled=false
    document.getElementById('inpu_5').disabled=false
}
//for 6th student

function delle5(){
    var a= document.getElementsByTagName('p');
    a[10].value=""
    a[11].value='';
 
}

function save5(){
    var a= document.getElementsByTagName('input');
    console.log(a[10].value)
    console.log(a[11].value)
    document.getElementById('inpu6').disabled=true
    document.getElementById('inpu_6').disabled=true
    document.getElementById('myBtn6').disabled=true
   }


function edit5(){
    document.getElementById('myBtn6').disabled=false
    document.getElementById('inpu6').disabled=false
    document.getElementById('inpu_6').disabled=false
}
//for 7th student
function delle6(){
    var a= document.getElementsByTagName('p');
    a[12].value=""
    a[13].value='';
 
}

function save6(){
    var a= document.getElementsByTagName('input');
    console.log(a[12].value)
    console.log(a[13].value)
    document.getElementById('inpu7').disabled=true
    document.getElementById('inpu_7').disabled=true
    document.getElementById('myBtn7').disabled=true
   }


function edit6(){
    document.getElementById('myBtn7').disabled=false
    document.getElementById('inpu7').disabled=false
    document.getElementById('inpu_7').disabled=false
}
//for 8th student
function delle7(){
    var a= document.getElementsByTagName('p');
    a[14].value=""
    a[15].value='';
 
}



function save7(){
    var a= document.getElementsByTagName('input');
    console.log(a[14].value)
    console.log(a[15].value)
    document.getElementById('inpu8').disabled=true
    document.getElementById('inpu_8').disabled=true
    document.getElementById('myBtn8').disabled=true
   }


function edit7(){
    document.getElementById('myBtn8').disabled=false
    document.getElementById('inpu8').disabled=false
    document.getElementById('inpu_').disabled=false
}

//for 9th student
function delle8(){
    var a= document.getElementsByTagName('p');
    a[16].value=""
    a[17].value='';
 
}


function save8(){
    var a= document.getElementsByTagName('input');
    console.log(a[16].value)
    console.log(a[17].value)
    document.getElementById('inpu9').disabled=true
    document.getElementById('inpu_9').disabled=true
    document.getElementById('myBtn9').disabled=true
   }


function edit8(){
    document.getElementById('myBtn9').disabled=false
    document.getElementById('inpu9').disabled=false
    document.getElementById('inpu_9').disabled=false
}



//for 10th student
function delle9(){
    var a= document.getElementsByTagName('p');
    a[18].value=""
    a[19].value='';
 
}


function save9(){
    var a= document.getElementsByTagName('input');
    console.log(a[18].value)
    console.log(a[19].value)
    document.getElementById('inpu10').disabled=true
    document.getElementById('inpu_10').disabled=true
    document.getElementById('myBtn10').disabled=true
   }


function edit9(){
    document.getElementById('myBtn10').disabled=false
    document.getElementById('inpu10').disabled=false
    document.getElementById('inpu_10').disabled=false
}
