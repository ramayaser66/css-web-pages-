
alert(" hello ")

var confm = confirm(" are you sure you want to continue with this page?");
//ensuring(confir);
function ensuring(confm) {

    var txt;
    if (confm) {
        alert("you pressed ok");

    } else {
        alert("You pressed Cancel!");

    }
}

if (confm) {

    var password = prompt(" please log in ");
    login(password);
    var alphabet = prompt(" what is the third letter of the alphabet? ");
    question(alphabet);
    var number = prompt("please enter a number");
    testnumber(number);
    alert("goodbey");
} else {
    alert("You pressed Cancel!");
}

function question(alphabet) {
    if (alphabet == "c") {
        alert("correct");
    }
    else { alert("incorrect"); }
}

function testnumber(number) {
    if (number < 10) {
        alert("it is less than 10 ");
    }

    else {
        alert(" it is higher than 10 ");
    }


}

//var  password = prompt (" please log in "); 
//login (password);
function login(password) {
    if (password == 1234) {
        alert("logged in successfly");
    }

    else {
        alert("incorrect password");
        alert(" goodbey")
    }
}
let input = function () {
    let user = prompt(" please choose a flower type ");
    let pic = '';
    while (user !== 'roses' && user !== "tulips" && user !== 'sunflower') {
        user = prompt('please choose between tulips, roses and sunflower');
    }

 console.log(user);
    if (user === 'roses') {
        pic = '<img src="https://i.pinimg.com/originals/04/7b/97/047b9710d0ef80784b2c24d61d64e1f6.png">';
    } else if (user === 'tulips') {
        pic = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe9mD4y6QYR4ZRajrKoFxBlYQeJ8hBbyawig&usqp=CAU">';
    } else if  (user === 'sunflower') {
        pic = '<img src="https://i.pinimg.com/originals/e6/f4/3d/e6f43d11d893d7e9708f3694b3ce163f.jpg">';
        
    }
        console.log(pic)
    return pic;


}

let amount = function (){
    let val = prompt ('how many flower do you want?');

    while (val ===''  || isNaN(val)) {
  
            val = prompt ('please enter a number');
    } 
    return val;

    } 

    let order =function() {
        let pic = input();
        let total = amount();
        let result ='';  
        
        for (let i = 0; i < total; i++) 
        {
            result = result + '<p>Model #' + i + '' + pic +'</p>';
            
        }

    return result; 

    }

        
       


