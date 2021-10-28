"use strict";

fetch('./teste.json')
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        document.getElementById("teste1").innerHTML = data.data;
        document.getElementById("teste2").innerHTML = data.titulo;
        document.getElementById("teste3").innerHTML = data.corpo;
    });