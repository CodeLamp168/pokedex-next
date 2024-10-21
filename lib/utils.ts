import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface SearchInputProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
}


export interface Pokemon {
  id: number
  name: string
  sprites: {
    front_default: string
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  types: Array<{
    type: {
      name: string
    }
  }>
  height: number
  weight: number
}

export const pokemontype = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};

export const pokemonNotes: { [key: number]: string } = {
  // Add your custom notes here
  1:"Bulbasaur is known for its loyalty.",
  25:"Pikachu is the mascot of the Pokémon franchise.",
  134:"You are not cultured bro, you need to stop",
  157:"Once a beloved member of the community, now a menace to society.",
  224:"It had nothing to begin with, you expect it to come back after this?"
  // Add more notes for other Pokémon IDs as needed
}



