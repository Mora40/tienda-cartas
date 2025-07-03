let vida = 20
let vidaOponente = 20

const card1 = {
    "id": 0,
    "atributo": "fuego",
    "ataque": 10
}

const card2 = {
    "id": 1,
    "atributo": "agua",
    "ataque": 10
}

const card3 = {
    "id": 2,
    "atributo": "planta",
    "ataque": 10
}

const deck = [card1, card2, card3]

function obtenerCartaAleatoria() {
    const random = Math.floor(Math.random() * deck.length);
    cartaAleatoria = deck[random]
    return cartaAleatoria
}

function obtenerCartaElegida() {
    idCarta = prompt("Elegir una carta: \n 0: Carta Fuego \n 1: Carta Agua \n 2: Carta Planta")
    cartaElegida = deck[Number(idCarta)]
    return cartaElegida
}

function darResultados(v1,v2) {
    if (v1 > v2) {
        console.log("Ganaste!")
        const titulo = document.getElementById("title");
        titulo.textContent = "Ganaste!"
    } else if (v1 == v2) { 
        console.log("Empate...")
        const titulo = document.getElementById("title");
        titulo.textContent = "Empate..."
    }else {
        console.log("Perdiste :(")
        const titulo = document.getElementById("title");
        titulo.textContent = "Perdiste :("
    }
}

do {
    eleccionCarta = obtenerCartaElegida()
    console.log("Elegiste la carta: " + JSON.stringify(eleccionCarta))
    eleccionCartaOponente = obtenerCartaAleatoria()
    console.log("Tu oponente eligio la carta: " + JSON.stringify(eleccionCartaOponente))
    if (eleccionCarta["atributo"] == eleccionCartaOponente["atributo"]) {
        daño = eleccionCarta["ataque"]
        dañoOponente = eleccionCartaOponente["ataque"]
    } else if (eleccionCarta["atributo"] == "fuego" && eleccionCartaOponente["atributo"] == "agua") { // fuego pierde contra agua
        daño = eleccionCarta["ataque"]/2
        dañoOponente = eleccionCartaOponente["ataque"]
    } else if (eleccionCarta["atributo"] == "fuego" && eleccionCartaOponente["atributo"] == "planta") { // fuego gana contra planta
        daño = eleccionCarta["ataque"]
        dañoOponente = eleccionCartaOponente["ataque"]/2
    } else if (eleccionCarta["atributo"] == "agua" && eleccionCartaOponente["atributo"] == "fuego") { // agua gana contra fuego
        daño = eleccionCarta["ataque"]
        dañoOponente = eleccionCartaOponente["ataque"]/2
    } else if (eleccionCarta["atributo"] == "agua" && eleccionCartaOponente["atributo"] == "planta") { // agua pierde contra planta
        daño = eleccionCarta["ataque"]/2
        dañoOponente = eleccionCartaOponente["ataque"]
    } else if (eleccionCarta["atributo"] == "planta" && eleccionCartaOponente["atributo"] == "fuego") { // planta pierde contra fuego
        daño = eleccionCarta["ataque"]/2
        dañoOponente = eleccionCartaOponente["ataque"]
    } else if (eleccionCarta["atributo"] == "planta" && eleccionCartaOponente["atributo"] == "agua") { // planta gana contra agua
        daño = eleccionCarta["ataque"]
        dañoOponente = eleccionCartaOponente["ataque"]/2
    } else {
        daño = 0
        dañoOponente = 0
    }
    console.log("Atacas por: " + daño)
    vidaOponente = vidaOponente - daño
    console.log("Te atacan por: " + dañoOponente)
    vida = vida - dañoOponente
    console.log("Tu vida queda en: " + vida)
    console.log("La vida de tu oponente queda en: " + vidaOponente)
    console.log("------------------------------------------")

} while (vida > 0 && vidaOponente > 0)

darResultados(vida,vidaOponente)