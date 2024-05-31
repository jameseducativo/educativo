var nombre = prompt("Ingrese un palindromo");
//alert(nombre);
function palindromo(str){
    //let cualquiera = str.split("").reverse().join("");
    let cualquiera = str.split("");
    document.write(cualquiera + "<br>");
    let cual = cualquiera.reverse();
    document.write(cual+ "<br>");
    cualquiera = cual.join("");
    document.write(cualquiera+ "<br>");
    if(str == cualquiera){
        alert(true)
    }
    else{
        alert(false);
    }
}
palindromo(nombre);