const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  }, 
];

interface Pokemon {
  name : string;
  imgSrc?: string;

}

export default PokemonCard;