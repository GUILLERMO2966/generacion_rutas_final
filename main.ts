let vrandom = 25
let Rutas = [2000]
for (let Indice = 0; Indice <= 1999; Indice++) {
    vrandom = 5 * vrandom % 2053
    Rutas[Indice] = (vrandom + 1000) / 100
    basic.showNumber(vrandom)
}
