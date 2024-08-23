let button = document.querySelectorAll(".num");
let input = document.querySelector(".input");
let string = "";

button.forEach(function(element){
    element.addEventListener("click",()=>{
        let num = element.innerHTML;
        if(num == "="){
            string = String(eval(string));
            input.innerHTML = string;
        }
        else if(num == "AC"){
            string = "";
            input.innerHTML = string;
        }
        else if(num == "Del"){
            string = string.substring(0,string.length-1);
            input.innerHTML = string;
        }
        else if(num == "+/-"){
            string = String(-eval(string));
            input.innerHTML = string;
        }
        else{
            string += num;
            input.innerHTML = string;
        }
        
    });
});


