import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Pokemon } from "@/lib/utils"
import { pokemontype } from "@/lib/utils"
import Image from 'next/image'

interface PokemonGridProps {
  pokemons: Pokemon[]
  onSelectPokemon: (pokemon: Pokemon) => void
}

export function PokemonGrid({ pokemons, onSelectPokemon }: PokemonGridProps) {
  return (
    <ScrollArea className="h-full w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {pokemons.map((pokemon) => {
          const mainType = pokemon.types[0].type.name;
          const typeColor = pokemontype[mainType as keyof typeof pokemontype] || '#777';
          
          return (
            <Card
              key={pokemon.id}
              className="cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out"
              style={{
                '--hover-border-color': typeColor,
              } as React.CSSProperties}
              onClick={() => onSelectPokemon(pokemon)}
            >
              <CardContent className="p-4 flex flex-col items-center relative overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out"
                  style={{
                    boxShadow: `inset 0 0 0 3px var(--hover-border-color)`,
                    borderRadius: 'inherit',
                  }}
                />
                <div className="absolute top-1 right-1 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: typeColor }}>
                  <Image
                    src={`/types/${mainType}.svg`}
                    alt={`${mainType} type`}
                    width={20}
                    height={20}
                  />
                </div>
                <div className="relative w-24 h-24">
                  <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <p className="mt-2 text-center capitalize truncate w-full">{pokemon.name}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </ScrollArea>
  )
}