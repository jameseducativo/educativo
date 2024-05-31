let valor: string | null = prompt("Ingrese un palíndromo");
let val2: string = "";
if (valor !== null) {
    for (let i: number = 0; i < valor.length; i++) {
        document.write(i + valor[i] + "<br>");
    }
    //document.write(i);
    let i: number = valor.length - 1;
    while (i >= 0) {
        document.write(i + valor[i] + "<br>");
        val2 = val2 + valor[i];
        i--;
    }
    document.write(val2);
    if (valor == val2) {
        document.write("Correcto");
    } else {
        document.write("Falso");
    }
} else {
    document.write("No se ingresó ningún valor.");
}
