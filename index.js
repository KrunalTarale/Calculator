var count_btn = document.querySelectorAll(".buttons").length;
var string = "";
console.log(count_btn)

for (let i = 0; i < count_btn; i++){
    document.querySelectorAll(".buttons")[i].addEventListener("click" ,function() {
        var buttoninnerhtml = this.innerHTML;
        console.log(buttoninnerhtml)
    
        if ( buttoninnerhtml === "="){
            string = eval(string);
            document.querySelector("input").value = string;
        }
        else if (buttoninnerhtml === "AC"){
            string = "";
            document.querySelector("input").value = string;
        }
        else{
        string = string + buttoninnerhtml;
        document.querySelector("input").value = string;
        }
    })
}
