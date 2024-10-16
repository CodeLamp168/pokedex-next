'use client'

import { useState, useEffect } from 'react'
import { SearchInput } from './search-input'
import { PokemonGrid } from './pokemon-grid'
import { PokemonDetail } from './pokemon-detail'
import { Pokemon } from '@/lib/utils'



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

  const handleSelectPokemon = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon)
  }

  return (
    <div className="flex flex-col lg:flex-row-reverse h-screen p-4 bg-gray-100">
      <div className="lg:w-1/2 lg:pl-4">
      <PokemonDetail pokemon={selectedPokemon} />
    </div>
    <div className="lg:w-1/2 lg:pr-4 lg:mb-0 mt-4 lg:mt-2 ">
      <div className="mb-2">
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="h-[calc(100vh-13rem)] lg:h-[calc(100vh-8rem)]">
        <PokemonGrid pokemons={filteredPokemons} onSelectPokemon={setSelectedPokemon} />
      </div>
    </div>
   
  </div>
  )
}