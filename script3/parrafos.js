const body = document.querySelector("body")

const palabras = ["Orangutang", "Orgánico", "Caja", "Nombre", "Tener", "Ataúd", "Propuesta", "Vacilante",
 "Empujar", "Tranquilo", "Salvage", "Comportarse", "Golpear", "Payasadas", "Pareja", "Be", "edad",
  "Fingido", "Valiente", "Gotita", "Extrovertido", "Raro", "Jade", "Necrótico", "Correr", "Onda",
   "de", "suelo", "Importado", "Apestoso", "Trabajador", "Ortodoxo", "Robótico", "Melodía", "Frágil",
    "Maníaco", "Jardín", "Fresco", "Sartén", "Sucio", "Decodificador", "Lejano"]
function crearTexto(){
let texto = ""
let cantidadPalabras = Math.floor(Math.random()*50)+50
for(let i = 0; i < cantidadPalabras; i++){
    texto = texto + palabras[Math.floor(Math.random()*palabras.length)]
    if (i != cantidadPalabras-1){
        texto = texto + " "
    }
    else{
        texto = texto + "."
    }
}
return texto
}
for(let i = 0; i < 5; i++) {
    const parrafo = document.createElement('p')
    let contenido = crearTexto()
    parrafo.textContent = `${contenido} Cantidad de caracteres: ${contenido.length}`
    body.appendChild(parrafo)
}