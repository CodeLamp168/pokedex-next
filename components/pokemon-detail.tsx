import { Card, CardContent } from "@/components/ui/card"

interface Pokemon {
  id: number
  name: string
  sprites: {
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

interface PokemonDetailProps {
  pokemon: Pokemon | null
}

export function PokemonDetail({ pokemon }: PokemonDetailProps) {
  if (!pokemon) return null

  return (
    <Card className="h-full">
    <CardContent className="p-4 sm:p-6 flex flex-col  items-center h-full justify-center">
      <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
        className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 object-contain"
      />
      <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
        <h2 className="text-2xl font-bold capitalize">{pokemon.name}</h2>
        <p className="text-gray-600">#{pokemon.id.toString().padStart(3, '0')}</p>
        <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-2">
          {pokemon.types.map((type) => (
            <span
              key={type.type.name}
              className="px-2 py-1 bg-gray-200 rounded-full text-sm"
            >
              {type.type.name}
            </span>
          ))}
        </div>
        <div className="mt-2">
          <p>Height: {pokemon.height / 10} m</p>
          <p>Weight: {pokemon.weight / 10} kg</p>
        </div>
      </div>
    </CardContent>
  </Card>
  )
}