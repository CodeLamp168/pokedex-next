import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface Pokemon {
  id: number
  name: string
  sprites: {
    front_default: string
  }
  types: Array<{
    type: {
      name: string
    }
  }>
  height: number
  weight: number
}

interface PokemonGridProps {
  pokemons: Pokemon[]
  onSelectPokemon: (pokemon: Pokemon) => void
}



export function PokemonGrid({ pokemons, onSelectPokemon }: PokemonGridProps) {
  return (
    <ScrollArea className="h-full w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {pokemons.map((pokemon) => (
          <Card
            key={pokemon.id}
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => onSelectPokemon(pokemon)}
          >
            <CardContent className="p-4 flex flex-col items-center">
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="w-24 h-24"
              />
              <p className="mt-2 text-center capitalize truncate w-full">{pokemon.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  )
}