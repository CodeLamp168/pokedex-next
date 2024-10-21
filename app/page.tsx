import Image from "next/image";
import Pokedex from "@/components/pokedex";

export default function Home() {
  return (
   <main className="min-h-screen bg-gradient-to-b from-[#ec4127] from-70% to-[#fcfcfc] to-30%">
    <Pokedex/>
   </main>
  );
}
