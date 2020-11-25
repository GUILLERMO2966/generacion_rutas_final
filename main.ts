input.onButtonPressed(Button.A, function () {
    suma = 0
    for (let index = 0; index <= 1999; index++) {
        suma += Rutas[index]
    }
    basic.showNumber(suma)
})
input.onButtonPressed(Button.B, function () {
    let Iruta = 0
    basic.showString("La mejor ruta es:")
    basic.showNumber(Iruta)
    basic.showString("El tiempo en esta ruta es:")
    basic.showNumber(Rutas[Iruta])
})
let suma = 0
let Rutas: number[] = []
let vrandom = 25
Rutas = [2000]
for (let Indice = 0; Indice <= 1999; Indice++) {
    vrandom = 5 * vrandom % 2053
    Rutas[Indice] = (vrandom + 1000) / 100
}
