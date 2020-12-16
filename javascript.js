
alert (" hello ")
//

var confm = confirm (" are you sure you want to continue with this page?");
//ensuring(confir);
function ensuring (confm){
   
    var txt;
    if ( confm ){  
        alert ("you pressed ok");

    } else {  alert ("You pressed Cancel!");
    

    }
}

 if ( confm ){  
     

   //

   
  var  password = prompt (" please log in "); 
login (password);
        var alphabet = prompt (" what is the third letter of the alphabet? ");
    question (alphabet);
    var number = prompt ("please enter a number");
    testnumber(number);
    // a nwe var 
    // calling it's function 
    


    alert ("goodbey"); 
    } else {  alert ("You pressed Cancel!"); 
    } 






function question (alphabet) {
    if (alphabet == "c"){
         alert ("correct"); }
         else { alert ("incorrect"); }
} 

 function testnumber (number) {
    if( number <  10){ 
        alert ("it is less than 10 "); }

        else { 
            alert (" it is higher than 10 ");
        }
    

}

//var  password = prompt (" please log in "); 
//login (password);
function login (password)
{
    if (password == 1234){
         alert ("logged in successfly"); }

    else { alert ("incorrect password");
    alert (" goodbey")
 }
}



 



