var matriz = [];
var escalar = prompt("Digite o número que seja multiplicar a matriz: ");
var nl = prompt("Número de linhas: ");

for (i = 0; i < nl; i++) {
   matriz.push([0,0,0]);
    for (x = 0; x < matriz[i].length; x++) {
        matriz[i][x] = prompt("Digite a linha: " + i + "Colunas" + x)
}
}

document.write("<b>" + escalar + "</b>");
document.write("<b> X </b>");

document.write("<b> Matriz digitada: </b>");

document.write("<table border= 3>");

for (i = 0; i < matriz.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < matriz[i].length; x++) {
        linha = linha + "<td>" + matriz[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

document.write("</br>");

document.write("<b> Matriz já multiplicada: </b>");

document.write( "<table border= 3>");
for (i = 0; i < matriz.length; i++) {
var linha = '<tr>';
for (x = 0; x < matriz[i].length; x++) {
    var multi = escalar*matriz[i][x];
linha = linha + "<td>" + multi + "</td>";
}
linha=linha+"</tr>"
document.write(linha);
}
document.write( "</table>");


