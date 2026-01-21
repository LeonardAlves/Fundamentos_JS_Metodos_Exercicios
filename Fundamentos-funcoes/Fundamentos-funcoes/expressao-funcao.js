const estudanteREprovou = function (notaFInal, faltas) {
    if (notaFInal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
}

console.log(estudanteREprovou(6, 5 ));
console.log(estudanteREprovou(10, 2 ));