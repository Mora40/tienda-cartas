let vida = 20
let vidaOponente = 20

let card1 = {
    "id": 0,
    "atributo": "fuego",
    "ataque": 10
}

let card2 = {
    "id": 1,
    "atributo": "agua",
    "ataque": 10
}

let card3 = {
    "id": 2,
    "atributo": "planta",
    "ataque": 10
}

let deck = [card1, card2, card3]

do {
    const random = Math.floor(Math.random() * deck.length);
    eleccionCarta = prompt("Elegir una carta: \n 0: Carta Fuego \n 1: Carta Agua \n 2: Carta Planta")
    eleccionCarta = deck[Number(eleccionCarta)]
    console.log("Elegiste la carta: " + JSON.stringify(eleccionCarta))
    eleccionCartaOponente = deck[random]
    console.log("Tu oponente eligio la carta: " + JSON.stringify(eleccionCartaOponente))
    if (eleccionCarta["atributo"] == eleccionCartaOponente["atributo"]) {
        danio = eleccionCarta["ataque"]
        danioOponente = eleccionCartaOponente["ataque"]
    } else if (eleccionCarta["atributo"] == "fuego" && eleccionCartaOponente["atributo"] == "agua") { // fuego pierde contra agua
        danio = eleccionCarta["ataque"]/2
        danioOponente = eleccionCartaOponente["ataque"]
    } else if (eleccionCarta["atributo"] == "fuego" && eleccionCartaOponente["atributo"] == "planta") { // fuego gana contra planta
        danio = eleccionCarta["ataque"]
        danioOponente = eleccionCartaOponente["ataque"]/2
    } else if (eleccionCarta["atributo"] == "agua" && eleccionCartaOponente["atributo"] == "fuego") { // agua gana contra fuego
        danio = eleccionCarta["ataque"]
        danioOponente = eleccionCartaOponente["ataque"]/2
    } else if (eleccionCarta["atributo"] == "agua" && eleccionCartaOponente["atributo"] == "planta") { // agua pierde contra planta
        danio = eleccionCarta["ataque"]/2
        danioOponente = eleccionCartaOponente["ataque"]
    } else if (eleccionCarta["atributo"] == "planta" && eleccionCartaOponente["atributo"] == "fuego") { // planta pierde contra fuego
        danio = eleccionCarta["ataque"]/2
        danioOponente = eleccionCartaOponente["ataque"]
    } else if (eleccionCarta["atributo"] == "planta" && eleccionCartaOponente["atributo"] == "agua") { // planta gana contra agua
        danio = eleccionCarta["ataque"]
        danioOponente = eleccionCartaOponente["ataque"]/2
    } else {
        danio = 0
        danioOponente = 0
    }
    console.log("Atacas por: " + danio)
    vidaOponente = vidaOponente - danio
    console.log("Te atacan por: " + danioOponente)
    vida = vida - danioOponente
    console.log("Tu vida queda en: " + vida)
    console.log("La vida de tu oponente queda en: " + vidaOponente)
    console.log("------------------------------------------")

} while (vida > 0 && vidaOponente > 0)

if (vida > vidaOponente) {
    console.log("Ganaste!")
    const titulo = document.getElementById("title");
    titulo.textContent = "Ganaste!"
} else if (vida == vidaOponente) { 
    console.log("Empate...")
    const titulo = document.getElementById("title");
    titulo.textContent = "Empate..."
}else {
    console.log("Perdiste :(")
    const titulo = document.getElementById("title");
    titulo.textContent = "Perdiste :("
}