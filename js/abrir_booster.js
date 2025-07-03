const MAX_CREDITOS = 20;
const MIN_CREDITOS = 1;

function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

// 3 cartas de tipo planta

bulbasaur = {
    "id": "1",
    "nombre": "Bulbasaur"
}

ivysaur = {
    "id": "2",
    "nombre": "Ivysaur"
}

venusaur = {
    "id": "3",
    "nombre": "Venusaur"
}

// 3 cartas de tipo fuego

charmander = {
    "id": "4",
    "nombre": "Charmander"
}

charmeleon = {
    "id": "5",
    "nombre": "Charmeleon"
}

charizard = {
    "id": "6",
    "nombre": "Charizard"
}

// 3 cartas de tipo agua

squirtle = {
    "id": "7",
    "nombre": "Squirtle"
}

wartortle = {
    "id": "8",
    "nombre": "Wartortle"
}

blastoise = {
    "id": "9",
    "nombre": "Blastoise"
}

// 3 cartas de tipo legendarios

articuno = {
    "id": "144",
    "nombre": "Articuno"
}

zapdos = {
    "id": "145",
    "nombre": "Zapdos"
}

moltres = {
    "id": "146",
    "nombre": "Moltres"
}

const todasCartas = [squirtle,wartortle,blastoise,bulbasaur,ivysaur,venusaur,charmander,charmeleon,charizard,articuno,zapdos,moltres]

let packAgua = {"id": 1,
                "nombre": "Pack de Agua",
                "precio": 1,
                "cartas":[squirtle,wartortle,blastoise]}
let packPlanta = {"id": 2,
                "nombre": "Pack de Planta",
                "precio": 1,
                "cartas":[bulbasaur,ivysaur,venusaur]}
let packFuego = {"id": 3,
                "nombre": "Pack de Fuego",
                "precio": 1,
                "cartas":[charmander,charmeleon,charizard]}
let packMega = {"id": 4,
                "nombre": "Pack Mega",
                "precio": 5,
                "cartas": getRandomSubarray(todasCartas, 3)}
let packLegendarios = {"id": 5,
                "nombre": "Pack Legendario",
                "precio": 10,
                "cartas":[articuno,zapdos,moltres]}

let packs = [packAgua,packFuego,packPlanta,packMega,packLegendarios]

function validarCreditos(c) {
    if (c > MAX_CREDITOS){
        alert("No pueden ingresar mas de " + MAX_CREDITOS + " creditos!")
        creditosValidos = false
    } else if (c < MIN_CREDITOS){
        alert("No pueden ingresar menos de " + MIN_CREDITOS + " creditos!")
        creditosValidos = false
    } else {
        creditosValidos = true
    }
    return creditosValidos
}

function obtenerCreditos() {
    return parseInt(prompt("Ingrese cuantos creditos tiene para comprar packs:"))
}

function elegirPack(){
    eleccionPack = parseInt(prompt(`Ingrese que pack quiere comprar:\n
            ${packAgua["id"]}: ${packAgua["nombre"]} ${packAgua["precio"]} credito\n
            ${packPlanta["id"]}: ${packPlanta["nombre"]} ${packPlanta["precio"]} credito\n
            ${packFuego["id"]}: ${packFuego["nombre"]} ${packFuego["precio"]} credito\n
            ${packMega["id"]}: ${packMega["nombre"]} ${packMega["precio"]} creditos\n
            ${packLegendarios["id"]}: ${packLegendarios["nombre"]} ${packLegendarios["precio"]} creditos`))
    const packElegido = packs.find(item => item.id === eleccionPack);
    return packElegido
}


do {
    creditos = obtenerCreditos()
    creditosValidos = validarCreditos(creditos)
} while (creditosValidos == false)

creditosDisponibles = creditos

let titulo = document.getElementById("title");
titulo.textContent = `Tenés ${creditosDisponibles} creditos!`

let quiereContinuar = true
let packsComprados = []

do {
    pack = elegirPack()

    creditosRestantes = creditosDisponibles - pack["precio"]

    if (creditosRestantes < 0) {
        alert("No podés hacer la compra.")
        let continua = prompt("Continuar? S o N")
        if (continua == "S") {
            continue
        } else {
            break
        }
    } else {
        console.log("Compraste el Pack:")
        console.log(pack)
        packsComprados.push(pack)
        creditosDisponibles = creditosRestantes
        console.log("Te quedan " + creditosDisponibles + " creditos disponibles")
        titulo = document.getElementById("title");
        titulo.textContent = `Tenés ${creditosDisponibles} creditos!`
        let body = document.getElementById("body");
        body.textContent = `Compraste los packs: ${JSON.stringify(packsComprados)}`
    }
} while (creditosDisponibles > 0 || quiereContinuar == false)


