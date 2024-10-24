async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch (url)
    const dados = await res.json()
    const quantidadeUsuarios = Object.values(dados)

    const data = [
        {
            X: nomeDasRedes,
            y: quantidadeUsuarios,
            type: 'bar'
        }
    ]
    const grafico = document.createElement('div')
    grafico.className ='grafico'
    document.getElementById('graficos-contaniner').appendChild(grafico)
    Plotly.newplot(grafico, data)
    
}
quantidadeUsuarios()