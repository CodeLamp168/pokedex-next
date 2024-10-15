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
    <ScrollArea className="flex-grow">
      <div className="grid grid-cols-2 gap-4">
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
              <p className="mt-2 text-center capitalize">{pokemon.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  )
}