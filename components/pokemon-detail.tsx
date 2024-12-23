
import { Card, CardContent } from "@/components/ui/card"
import { Pokemon } from "@/lib/utils"
import { pokemontype } from "@/lib/utils"
import { pokemonNotes } from "@/lib/utils"
import Image from 'next/image'

interface PokemonDetailProps {
  pokemon: Pokemon | null
}

export function PokemonDetail({ pokemon }: PokemonDetailProps) {
  if (!pokemon) return null

  const note = pokemonNotes[pokemon.id]
  const mainType = pokemon.types[0].type.name
  const typeColor = pokemontype[mainType as keyof typeof pokemontype] || '#777'

  return (
    <Card className="h-full">
      <CardContent className="p-4 sm:p-6 flex flex-col justify-center items-center h-full relative overflow-hidden">
        <div className="absolute top-2 right-2 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: typeColor }}>
          <Image
            src={`/types/${mainType}.svg`}
            alt={`${mainType} type`}
            width={24}
            height={24}
          />
        </div>
        <div className="absolute w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full  bg-opacity-20 z-0 -bottom-20 -left-20" style={{backgroundColor : typeColor , opacity: 0.3 }}></div>
        <div className="relative w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64">
          <Image
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
          <h2 className="text-2xl font-bold capitalize">{pokemon.name}</h2>
          <p className="text-gray-600">#{pokemon.id.toString().padStart(3, '0')}</p>
          <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-2">
            {pokemon.types.map((type) => {
              const typeColor = pokemontype[type.type.name as keyof typeof pokemontype] || '#777';
              return (
                <span
                  key={type.type.name}
                  className="px-2 py-1 rounded-full text-sm text-white"
                  style={{ backgroundColor: typeColor }}
                >
                  {type.type.name}
                </span>
              );
            })}
          </div>
          <div className="mt-2">
            <p>Height: {pokemon.height / 10} m</p>
            <p>Weight: {pokemon.weight / 10} kg</p>
          </div>
        </div>
        {note && (
          <div className="relative -bottom-2 left-0 right-0 p-2 text-center text-sm">
            {note}
          </div>
        )}
      </CardContent>
    </Card>
  )
}