const galeria = document.querySelector("#galeria")
const carregando = document.querySelector("#carregando")

async function galeriaCachorros() {
  try {
    carregando.style.display = "block"

    const response = await fetch("https://dog.ceo/api/breeds/image/random/10")
    if (!response.ok) {
      throw new Error("Erro ao buscar dados da API")
    }

    const data = await response.json()
    imagemCachorro(data.message)
  } catch (error) {
    console.error("Erro:", error)
    galeria.innerHTML = `<p>Não foi possível carregar as imagens. Tente novamente mais tarde.</p>`
  } finally {
    carregando.style.display = "none"
  }
}
function imagemCachorro(imagem) {
  galeria.innerHTML = ""
  imagem.forEach((imagemURL) => {
    const img = document.createElement("img")
    img.src = imagemURL
    img.alt = "Raça de Cachorro"
    img.className = "imagem_dog"
    galeria.appendChild(img)
  })
}
galeriaCachorros()