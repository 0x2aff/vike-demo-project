async function data() {
  const result = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
  const data = await result.json();

  return data;
}

export { data };
