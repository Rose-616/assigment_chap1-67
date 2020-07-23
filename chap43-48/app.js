// 1. Show an alert box on click on a link.
// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

function phones(){
    alert('Thanks for purchasing a phone from us');
}

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

function delle(){
     
    var a= document.getElementsByTagName('p');
    a[0].innerHTML="";
    a[1].innerHTML="";

  
    }
function delle1(){
    var a= document.getElementsByTagName('p');
    a[2].innerHTML=""
    a[3].innerHTML='';
 
}


function delle2(){
    var a= document.getElementsByTagName('p');
    a[4].innerHTML=""
    a[5].innerHTML='';
 
}
function delle3(){
    var a= document.getElementsByTagName('p');
    a[6].innerHTML=""
    a[7].innerHTML='';
 
}

function delle4(){
    var a= document.getElementsByTagName('p');
    a[8].innerHTML=""
    a[9].innerHTML='';
 
}

function delle5(){
    var a= document.getElementsByTagName('p');
    a[10].innerHTML=""
    a[11].innerHTML='';
 
}

function delle6(){
    var a= document.getElementsByTagName('p');
    a[12].innerHTML=""
    a[13].innerHTML='';
 
}

function delle7(){
    var a= document.getElementsByTagName('p');
    a[14].innerHTML=""
    a[15].innerHTML='';
 
}
function delle8(){
    var a= document.getElementsByTagName('p');
    a[16].innerHTML=""
    a[17].innerHTML='';
 
}
function delle9(){
    var a= document.getElementsByTagName('p');
    a[18].innerHTML=""
    a[19].innerHTML='';
 
}

// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.


function outPic(){
    var a =document.getElementById('overr')
    a.src = 'img3.jpeg';
    

}
function overPic(){
    var  a=document.getElementById('overr')
    a.src ='img4.jpeg'
}




// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.
function counter(){
    var a =document.getElementById('myBtn');
    a.innerHTML++ 
   
}
function subt(){
    var a=document.getElementById('myBtn');
    a.innerHTML--;
}