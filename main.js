const button = document.createElement ("button")
const main = document.createElement ("main")
const AnImage = document.createElement ("img")
const Alink = document.createElement ("a")
let body = document.querySelector ("body")

button.append("Button")
main.append(AnImage)
main.append(Alink)
body.append(button)
document.body.appendChild(main)

AnImage.className = "image"
AnImage.src = "https://countryexclusive.com/wp-content/uploads/2017/12/Luke-Bryan-What-Makes-You-Country-730x443-672x372.jpg"

Alink.className = "link"
Alink.href = "http://www.lukebryan.com/ptbrh2"
Alink.append("Luke Bryan")

button.addEventListener("click", function(){main.remove()})
  




