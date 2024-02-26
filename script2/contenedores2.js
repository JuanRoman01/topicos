const body = document.querySelector("body")

const colors = ["silver", "gray", "maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow",
 "blue", "teal", "aqua", "beige", "brown", "chocolate", "crimson", "salmon", "gold", "greenyellow"]

for(let i = 0; i < 10; i++) {
    const div = document.createElement('div')
    div.style.height = "100px"
    let random = Math.floor(Math.random() * colors.length)
    div.style.backgroundColor = colors[random]
    colors.splice(random,1)
    body.appendChild(div)
}