const {json} = require('body-parser');
const fetch = require('node-fetch');

function getPokemon() {
    const url = `https://pokeapi.co/api/v2/pokemon/pikachu`

    fetch(url)
    .then(res => res.json())
    .then(json => {
        console.log("Nombre: " + json.name)
        console.log("Experiencia: " + json.base_experience)
        console.log("HP: " + json.stats[0].base_stat)
        console.log("Ataque: " + json.stats[1].base_stat)
        console.log("Defensa: " + json.stats[2].base_stat)
        console.log("Especial: " + json.stats[3].base_stat9)

    });

}
getPokemon()
