var gender = prompt("Eres hombre o mujer?")
var gender = gender.toLowerCase()  
var age = prompt("Qué edad tienes?")
var clima = prompt("Hace frío o calor?")
var clima = clima.toLowerCase()
if (clima == "frio"){
    var clima = "frío"
}
if (age>=14){
    var tipo = "adulto"
}else{
    var tipo = "niño"
}

document.write("Te recomendamos vestirte de la siguiente manera: <br>")

if (gender == "hombre" && tipo == "adulto" && clima == "calor"){
    document.write("<img src='./Images/Male-adult-hot.jpg' height='500'")
}else if(gender == "mujer" && tipo == "adulto" && clima == "calor"){
    document.write("<img src='./Images/Female-adult-hot.jpg' height='500'")
}else if(gender == "hombre" && tipo == "niño"  && clima == "calor"){
    document.write("<img src='./Images/Male-infant-hot.jpg' height='500'")
}else if(gender == "mujer" && tipo == "niño"  && clima == "calor"){
    document.write("<img src='./Images/Female-infant-hot.jpg' height='500'")
}else if(gender == "hombre" && tipo == "adulto" && clima == "frío"){
    document.write("<img src='./Images/Male-adult-cold.jpg' height='500'")
}else if(gender == "mujer" && tipo == "adulto" && clima == "frío"){
    document.write("<img src='./Images/Female-adult-cold.jpg' height='500'")
}else if(gender == "hombre" && tipo == "niño"  && clima == "frío"){
    document.write("<img src='./Images/Male-infant-cold.jpg' height='500'")
}else if(gender == "mujer" && tipo == "niño"  && clima == "frío"){
    document.write("<img src='./Images/Female-infant-cold.jpg' height='500'")
}else{
    alert ("Valores no especificados")
};
