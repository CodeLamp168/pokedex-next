'use client'

import { useState, useEffect } from 'react'
import { SearchInput } from './search-input'
import { PokemonGrid } from './pokemon-grid'
import { PokemonDetail } from './pokemon-detail'
import { Pokemon } from '@/lib/utils'
import LoadingScreen from './loadingscreen'

export default function Pokedex() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=320')
      const data = await response.json()
      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon: { url: string }) => {
          const res = await fetch(pokemon.url)
          return res.json()
        })
      )
      setPokemons(pokemonDetails)
      setSelectedPokemon(pokemonDetails[0])
      
      // Ensure the loading screen shows for at least 8 seconds
      setTimeout(() => {
        setIsLoading(false)
      }, 8000)
    }
    fetchPokemons()
  }, [])

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-b from-[#ff2a04] from-70% to-[#fcfcfc] to-30% p-4">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row-reverse">
        <div className="lg:w-1/2 lg:pl-4 mb-4 lg:mb-0">
          <PokemonDetail pokemon={selectedPokemon} />
        </div>
        <div className="lg:w-1/2 lg:pr-4 mt-4 lg:mt-0">
          <div className="mb-2">
            <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          <div className="h-[calc(100vh-13rem)] lg:h-[calc(100vh-8rem)]">
            <PokemonGrid pokemons={filteredPokemons} onSelectPokemon={setSelectedPokemon} />
          </div>
        </div>
      </div>
    </div>
  )
}