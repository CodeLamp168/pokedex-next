'use client'

import { useState, useEffect } from 'react'
import { SearchInput } from './search-input'
import { PokemonGrid } from './pokemon-grid'
import { PokemonDetail } from './pokemon-detail'

interface Pokemon {
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

export default function Pokedex() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      const data = await response.json()
      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon: { url: string }) => {
          const res = await fetch(pokemon.url)
          return res.json()
        })
      )
      setPokemons(pokemonDetails)
      setSelectedPokemon(pokemonDetails[0])
    }
    fetchPokemons()
  }, [])

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex h-screen p-4 bg-gray-100">
      <div className="flex flex-col w-1/2 pr-4">
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <PokemonGrid pokemons={filteredPokemons} onSelectPokemon={setSelectedPokemon} />
      </div>
      <div className="w-1/2 pl-4">
        <PokemonDetail pokemon={selectedPokemon} />
      </div>
    </div>
  )
}