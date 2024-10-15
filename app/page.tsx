import Image from "next/image";
import Pokedex from "@/components/pokedex";

export default function Home() {
  return (
   <main className='min-h-screen bg-gray-100'>
    <Pokedex/>
   </main>
  );
}
