var gender = prompt("Eres hombre o mujer?")
var gender = gender.toLowerCase()  
var age = prompt("Qué edad tienes?")

if (age>=14){
    var tipo = "adulto"
}else{
    var tipo = "niño"
}

if (gender == "hombre" && tipo == "adulto"){
    document.write("Te recomendamos vestirte de la siguiente manera: <br>")
    document.write("<img src='./Images/Male-adult.jpg' height='500'")
}else if(gender == "mujer" && tipo == "adulto"){
    document.write("Te recomendamos vestirte de la siguiente manera: <br>")
    document.write("<img src='./Images/Female-adult.jpg' height='500'")
}else if(gender == "hombre" && tipo == "niño"){
    document.write("Te recomendamos vestirte de la siguiente manera: <br>")
    document.write("<img src='./Images/Male-infant.jpg' height='500'")
}else if(gender == "mujer" && tipo == "niño"){
    document.write("Te recomendamos vestirte de la siguiente manera: <br>")
    document.write("<img src='./Images/Female-infant.jpg' height='500'")
}else{
    alert ("Valores no especificados")
};
