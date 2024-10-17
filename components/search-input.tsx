import { Input } from "@/components/ui/input"
import { SearchInputProps } from "@/lib/utils"

export function SearchInput({ searchTerm, setSearchTerm }: SearchInputProps) {
  return (
    <Input
      type="text"
      placeholder="Search Pokémon"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="mb-4"
    />
  )
}