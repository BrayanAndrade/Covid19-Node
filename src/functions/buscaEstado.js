const fetch = require('node-fetch')

async function buscaEstado(estado) {
    const response = await fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${estado}`)
    const json = await response.json()
    return json
}


async function buscaPais(pais) {
    const response = await fetch(`https://covid19-brazil-api.now.sh/api/report/v1/${pais}`)
    const json = await response.json()
    return json
}

module.exports = { buscaEstado, buscaPais }