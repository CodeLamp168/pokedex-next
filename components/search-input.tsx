import { Input } from "@/components/ui/input"

interface SearchInputProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
}

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