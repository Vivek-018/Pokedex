// Use the compiled JS output from Prisma Client (ESM) via dynamic import
const { PrismaClient } = require("@prisma/client");
require("dotenv/config");
const { PrismaPg } = require("@prisma/adapter-pg");

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const pokemonData = [
    {
      name: "Bulbasaur",
      types: ["grass", "poison"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
      name: "Ivysaur",
      types: ["grass", "poison"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    },
    {
      name: "Venusaur",
      types: ["grass", "poison"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    },
    {
      name: "Charmander",
      types: ["fire"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      name: "Charmeleon",
      types: ["fire"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    },
    {
      name: "Charizard",
      types: ["fire", "flying"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    },
    {
      name: "Squirtle",
      types: ["water"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      name: "Wartortle",
      types: ["water"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    },
    {
      name: "Blastoise",
      types: ["water"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    },
    {
      name: "Pikachu",
      types: ["electric"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    },
    {
      name: "Raichu",
      types: ["electric"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    },
    {
      name: "Caterpie",
      types: ["bug"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    },
    {
      name: "Metapod",
      types: ["bug"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    },
    {
      name: "Butterfree",
      types: ["bug", "flying"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    },
    {
      name: "Weedle",
      types: ["bug", "poison"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    },
    {
      name: "Kakuna",
      types: ["bug", "poison"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    },
    {
      name: "Beedrill",
      types: ["bug", "poison"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    },
    {
      name: "Pidgey",
      types: ["normal", "flying"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    },
    {
      name: "Pidgeotto",
      types: ["normal", "flying"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    },
    {
      name: "Pidgeot",
      types: ["normal", "flying"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    },
    {
      name: "Rattata",
      types: ["normal"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    },
    {
      name: "Raticate",
      types: ["normal"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    },
    {
      name: "Spearow",
      types: ["normal", "flying"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    },
    {
      name: "Fearow",
      types: ["normal", "flying"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    },
    {
      name: "Ekans",
      types: ["poison"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    },
    {
      name: "Arbok",
      types: ["poison"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    },
    {
      name: "Sandshrew",
      types: ["ground"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    },
    {
      name: "Sandslash",
      types: ["ground"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    },
    {
      name: "Nidoran♀",
      types: ["poison"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    },
    {
      name: "Nidorina",
      types: ["poison"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    },
    {
      name: "Nidoqueen",
      types: ["poison", "ground"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    },
    {
      name: "Nidoran♂",
      types: ["poison"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    },
    {
      name: "Nidorino",
      types: ["poison"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    },
    {
      name: "Nidoking",
      types: ["poison", "ground"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    },
    {
      name: "Clefairy",
      types: ["fairy"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    },
    {
      name: "Clefable",
      types: ["fairy"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    },
    {
      name: "Vulpix",
      types: ["fire"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    },
    {
      name: "Ninetales",
      types: ["fire"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    },
    {
      name: "Jigglypuff",
      types: ["normal", "fairy"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    },
    {
      name: "Wigglytuff",
      types: ["normal", "fairy"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    },
    {
      name: "Zubat",
      types: ["poison", "flying"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    },
    {
      name: "Golbat",
      types: ["poison", "flying"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    },
    {
      name: "Oddish",
      types: ["grass", "poison"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    },
    {
      name: "Gloom",
      types: ["grass", "poison"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    },
    {
      name: "Vileplume",
      types: ["grass", "poison"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    },
    {
      name: "Paras",
      types: ["bug", "grass"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    },
    {
      name: "Parasect",
      types: ["bug", "grass"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    },
    {
      name: "Venonat",
      types: ["bug", "poison"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    },
    {
      name: "Venomoth",
      types: ["bug", "poison"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    },
    {
      name: "Diglett",
      types: ["ground"],
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    },
  ];

  for (const pokemon of pokemonData) {
    await prisma.pokemon.upsert({
      where: { name: pokemon.name },
      update: pokemon,
      create: pokemon,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

