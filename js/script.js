/*****************************************************************************/
/*                     JavaScript de index.html                              */
/*                     Autor: Sergio Gamez Ortega                            */
/*                     Version: 1.0                                          */
/*                     Fecha: Octubre de 2023                                */
/*                     Comentario: Proyecto de Lenguaje de Marcas            */
/*****************************************************************************/

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}