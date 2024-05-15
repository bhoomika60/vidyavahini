function validateage(){
    var name = document.getElementById("name").value;
    var age= document.getElementById("age").value;
    var result=document.querySelector("p");
     
    if(age > 18){
        result.innerHTML = "you are eligible to vote";
    }else{
        result.innerHTML = "you are child🤣";
    
}

}



